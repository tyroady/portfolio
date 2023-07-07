//All demediğim için sadece ilk butonu seçti (All desem bunlar bir arrey olurdu)
//even=duyarlı listener=dinleyici (ilk paramerte duyar, ikinci parametre neyi dinleyeceğidir{fonksiyon})
//neden fonksiyonu "()" olmadan çağırdık? Çünkü öyle yapsaydık bu hemen tetiklenirdi hemen çağırılırdı.
//Ama biz bunu istemiyoruz tıkladığımızda çağırılmasını istiyoruz. Binevi "click" o parantezin yerine geçiyor.
/* document.querySelector("button").addEventListener("click",handleClick)
function handleClick() {
    alert("I got clicked!");
}
*/
//Doğada üsttekinin anonim fonksiyon versiyonunu daha çok görürmüşüz:
var anArrey = document.querySelectorAll(".drum");
for (var i=0; i<anArrey.length ; i++){
    anArrey[i].addEventListener("click", function(){ 
        //this dediğimiz şey tıkladığımız şeyin kimliği aslında. Böylece direkt olarak tıkladığım şeye erişiyorum
        //ve onun rengini değiştiriyorum. For döngüsünün içinde olmasının tek sebebi bunu herkese uygulamış olmam. 
        this.style.color = "red";

        //switchin şartel gibi bir anlamı var bu yüzden if else ile benzerlik gösteriyor.
        var tıkladığımYolunİçindeki = this.innerHTML; 
        buttonAnimation(tıkladığımYolunİçindeki)

        switch (tıkladığımYolunİçindeki) {
            case "w": //eğer 'click' atılan hmtl'in içindeki 'w' harfi ise aşağıdaki blok otomatik olarak aktif olucak
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
                break;
            case "a" :
                //Audio(a büyük yani bir obje)
                //.play ise Audio objesinin bir fonksiyonu. Daha fazla bilgi için fundamentals.js dosyasına git. 
                //ÖNEMLİ EventReferance from MDN. (check)
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            case "s":
                var snare = new Audio("./sounds/snare.mp3"); 
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            default:
                break;
        }
        document.addEventListener("keydown", function(even){
            var bastığımTuş = even.key //bu bize bir obje atadı(even), bastığımız harfin her şeyini söyleyen.
                     //Bize sadece key özelliği lazımdı yani hangi tuşa bastığımız. O yüzden .key ile objeden veriyi aldık. 
        //hala basma fonksiyonunun içindeyim (her bir buttona uygulanan)
        makeSound(bastığımTuş) 
        buttonAnimation(bastığımTuş)            
        })
    })
}



function makeSound(key){
    switch (key) {
        case "w": //eğer 'keydown'  'w' harfi ise aşağıdaki blok otomatik olarak aktif olucak.
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
            break;
        case "a" :
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3"); 
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}


function buttonAnimation(currentKey){
    var pressedKey = document.querySelector("."+currentKey);
    pressedKey.classList.add("pressed");
    
    //setTimeout(çalıştırılacak{execute} fonksiyon , kaç Ms sonra çalıştırılacağı , optional infinitive parametres {ı don't know what they doıng if you wnat to learn just check})
    setTimeout(function(){
        pressedKey.classList.remove("pressed");
    },100)

}

