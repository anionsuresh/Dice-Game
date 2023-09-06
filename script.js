var random1 = (Math.floor(Math.random() * 6) +1 ); // produces random number between 1 and 6 

var randomDiceImg = "images/" + "dice" + random1 + ".png"; // concatenates random number to img 1 to img 6 

var Img1 = document.querySelectorAll("img")[0]; // Selects the first image tag 

Img1.setAttribute("src", randomDiceImg);


var random2 = (Math.floor(Math.random() * 6) +1 ); // produces random number for the second image between 1 and 6 
var randomDiceImg2 = "images/" + "dice" + random2 + ".png";

var Img2 = document.querySelectorAll("img")[1]; // Selects the second image tag 

Img2.setAttribute("src", randomDiceImg2);

if (random1 > random2){
    document.querySelector('h1').innerHTML="PLAYER 1 WINS!!";
}
else if( random2 > random1){
    document.querySelector('h1').innerHTML =" PLAYER 2 WINS!!"
}
else{
    document.querySelector('h1').innerHTML ="DRAW !"
}




