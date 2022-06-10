function randomNumber1(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
};

var rndInt = randomNumber1(1, 6);

var randomDiceImage = "dice" + rndInt + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);




function randomNumber2(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
};

var rndInt2 = randomNumber2(1, 6);

var randomDiceImage2 = "dice" + rndInt2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (rndInt > rndInt2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
}
else if (rndInt2 > rndInt) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins"
}
else {
  document.querySelector("h1").innerHTML = "🚩Draw!"
}
