// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

let diceOut = document.getElementById("diceOutput");
let diceOne = document.getElementById("diceOne");
let diceTwo = document.getElementById("diceTwo");
let diceThree = document.getElementById("diceThree");
let diceFour = document.getElementById("diceFour");
let diceFive = document.getElementById("diceFive");
let diceSix = document.getElementById("diceSix");
let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

document.getElementById("diceBtn").addEventListener("click", diceBtnClicked);

function diceBtnClicked() {
  let randNum2 = Math.ceil(Math.random() * 6);

  if (randNum2 == 1) {
    diceOut.innerHTML = "<img src='img/1.png'>";
    numOne = numOne + 1;
    diceOne.innerHTML = numOne;
  } else if (randNum2 == 2) {
    diceOut.innerHTML = "<img src='img/2.png'>";
    numTwo = numTwo + 1;
    diceTwo.innerHTML = numTwo;
  } else if (randNum2 == 3) {
    diceOut.innerHTML = "<img src='img/3.png'>";
    numThree = numThree + 1;
    diceThree.innerHTML = numThree;
  } else if (randNum2 == 4) {
    diceOut.innerHTML = "<img src='img/4.png'>";
    numFour = numFour + 1;
    diceFour.innerHTML = numFour;
  } else if (randNum2 == 5) {
    diceOut.innerHTML = "<img src='img/5.png'>";
    numFive = numFive + 1;
    diceFive.innerHTML = numFive;
  } else if (randNum2 == 6) {
    diceOut.innerHTML = "<img src='img/6.png'>";
    numSix = numSix + 1;
    diceSix.innerHTML = numSix;
  }
}
