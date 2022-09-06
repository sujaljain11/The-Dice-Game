let x=Math.floor((Math.random() * 6))+1;
let y=Math.floor((Math.random() * 6))+1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + x  + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + y  + ".png");

if (x > y) document.querySelector("h1").textContent = ("🚩 Player 1 Wins!");
if (x < y) document.querySelector("h1").textContent = ("🚩 Player 2 Wins!");
if (x === y) document.querySelector("h1").textContent = ("😝 Nobody Wins!");
