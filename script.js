
let won = 0;
let lost = 0;
let draw = 0;

const choices = ["rock", "paper", "scissor"];

// DOM Element Selectors
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const wonScore = document.getElementById("wonScore");
const lostScore = document.getElementById("lostScore");
const drawScore = document.getElementById("drawScore");

const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const retryBtn = document.getElementById("retry");
const exitBtn = document.getElementById("exit");

const finalWon = document.getElementById("finalWon");
const finalLost = document.getElementById("finalLost");
const finalDraw = document.getElementById("finalDraw");



function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(event) {
    // Get player's choice from button ID
    const playerChoice = event.currentTarget.id;
    
    // Get computer's random choice
    const computerChoice = getComputerChoice();
    
    let result = "";

    // Compare choices
    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
        draw++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "You Won!";
        won++;
    } else {
        result = "You Lost!";
        lost++;
    }

   
    wonScore.textContent = won;
    lostScore.textContent = lost;
    drawScore.textContent = draw;

   
    playerChoiceText.textContent = "You chose: " + playerChoice;
    computerChoiceText.textContent = "Computer chose: " + computerChoice;
    resultText.textContent = result;

    // Switch Screens (Hide Screen 1, Show Screen 2)
    screen1.style.display = "none";
    screen2.style.display = "flex";
}



document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissor").addEventListener("click", playRound);



function handleRetry() {
    screen2.style.display = "none";
    screen1.style.display = "block";
}


function handleExit() {
    // Set screen 3 text using current scores
    finalWon.textContent = won;
    finalLost.textContent = lost;
    finalDraw.textContent = draw;

    // Switch Screens (Hide Screen 2, Show Screen 3)
    screen2.style.display = "none";
    screen3.style.display = "block";
}



retryBtn.addEventListener("click", handleRetry);
exitBtn.addEventListener("click", handleExit);