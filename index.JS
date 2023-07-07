var randomNumber = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
var newImage1 = "./images/dice" + randomNumber + ".png"; 
var newImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".player1image").setAttribute("src",newImage1);
document.querySelector(".player2image").setAttribute("src",newImage2);
document.queryocumSelector(".winner1").style.display = "None"

if (randomNumber > randomNumber2){
    document.queryocumSelector(".winner2").style.display = "None"

}
else if(randomNumber < randomNumber2){
    document.queryocumSelector(".winner1").style.display = "None"
}




