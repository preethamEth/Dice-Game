var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage1 = "images/" + "dice" + randomNumber1 + ".png";
var diceImage2 = "images/" + "dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", diceImage1);
image2.setAttribute("src", diceImage2);

if(randomNumber1 > randomNumber2) {
    var Player1Wins = document.querySelector("h1");
    Player1Wins.innerHTML = "Player 1 Wins 🚩"
}
else if(randomNumber2 > randomNumber1){
    var Player2Wins = document.querySelector("h1");
    Player2Wins.innerHTML = "Player 2 Wins 🚩"
}
else{
    var Draw = document.querySelector("h1");
    Draw.innerHTML = "It's a Draw 😲";
}