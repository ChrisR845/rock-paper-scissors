let userScore = 0;
let robotScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");

const userText = document.getElementById("");
const robotText = document.getElementById("");
const result = document.getElementById("");

const userRecord = document.getElementById("");
const robotRecord = document.getElementById("");

function getComputerChoice() { 
let random = Math.floor(Math.random() * choices.length);
return choices[random];
}

function playRound(playerChoice) { 
       console.log("Playing Round" + playerChoice);
}

rockButton.addEventListener("click", function () {
     playRound("Rock"); });

paperButton.addEventListener("click", function () {
     playRound("Paper"); });
    
scissorButton.addEventListener("click", function () {
     playRound("Scissors"); });

function determineWinner(playerChoice, computerChoice) {
    
}