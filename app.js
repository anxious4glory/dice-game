//First Dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImage = "images/" + "dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImage);
// OR
// document.querySelector(".class, .img1").setAttribute('src', randomImage);

//Second Dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "images/" + "dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImage2);
// OR
// document.querySelector(".class, .img2").setAttribute('src', randomImage2);

if (randomImage > randomImage2) {
    document.querySelector('h1').innerHTML = '🚩 Play 1 Wins!';
}
else if (randomImage < randomImage2) {
    document.querySelector('h1').innerHTML = '🚩 Play 2 Wins!';
} else {
    document.querySelector('h1').innerHTML = 'Draw!';
}
