function getComputerChoice () {
    let rand = Math.random();
    if (rand <= 0.33) {
        return "rock";
    } else if (rand > 0.33 && rand <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerSelection;
let computerSelection = getComputerChoice();
let hscore = 0;
let cscore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win!";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win!";
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win!"
    } else {
        return "You lose!"
    }
}

function playGame () {
    computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === "You win!") {
        hscore = ++hscore;
        if (hscore === 5) {
            wlt.textContent = `MATCH WON!`;
            yourChoice.textContent = `You chose: ${playerSelection}!`;
            cpuChoice.textContent = `cpu chose: ${computerSelection}!`;
            score.textContent = `score: ${hscore}-${cscore}`;
            hscore = 0;
            cscore = 0;
        } else {
            wlt.textContent = `You won the round!`;
            yourChoice.textContent = `You chose: ${playerSelection}!`;
            cpuChoice.textContent = `cpu chose: ${computerSelection}!`;
            score.textContent = `score: ${hscore}-${cscore}`;
        }
    } else if (result === "You lose!") {
        cscore = ++cscore;
        if (cscore === 5) {
            wlt.textContent = `MATCH LOST!`;
            yourChoice.textContent = `You chose: ${playerSelection}!`;
            cpuChoice.textContent = `cpu chose: ${computerSelection}!`;
            score.textContent = `score: ${hscore}-${cscore}`;
            hscore = 0;
            cscore = 0;
        } else {
            wlt.textContent = `You lost the round!`;
            yourChoice.textContent = `You chose: ${playerSelection}!`;
            cpuChoice.textContent = `cpu chose: ${computerSelection}!`;
            score.textContent = `score: ${hscore}-${cscore}`;
        }
    } else {
        wlt.textContent = `Round tie!`;
        yourChoice.textContent = `You chose: ${playerSelection}!`;
        cpuChoice.textContent = `cpu chose: ${computerSelection}!`;
        score.textContent = `score: ${hscore}-${cscore}`;
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let wlt = document.querySelector('.result div');
let yourChoice = document.querySelector('#player');
let cpuChoice = document.querySelector('#cpu');
let score = document.querySelector('.score div');

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playGame();
})
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playGame();
})
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playGame();
})