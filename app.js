//Generating Random number for two dices.

var first = Math.floor((Math.random()*6)+1);
var second = Math.floor((Math.random()*6)+1);

//image sources for two dices

var firstSource = "images/dice"+first+".png";
var secondSource = "images/dice"+second+".png";

//selecting both images

var firstImage = document.querySelectorAll("img")[0];
var secondImage = document.querySelectorAll("img")[1];

//setting attributes 

firstImage.setAttribute("src",firstSource);
secondImage.setAttribute("src",secondSource);

//Deciding victory
if(first>second){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(second>first){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw.!";
}
