// dice 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var dice1ImgSrc = "images/dice" + randomNum1 + ".png";
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", dice1ImgSrc);
//dice 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var dice2ImgSrc = "images/dice" + randomNum2 + ".png";
var dice2 = document.querySelectorAll("img")[1].setAttribute("src", dice2ImgSrc);

if (randomNum1 === randomNum2) {
    document.querySelectorAll("h1")[0].innerHTML = "Draw!!";
} else if (randomNum1 > randomNum2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 wins!!";
} else {
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins!!"
}

