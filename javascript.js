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
        console.log(`You win! You chose ${playerSelection} and your opponent chose ${computerSelection}! The score is ${hscore}-${cscore}`);
    } else if (result === "You lose!") {
        cscore = ++cscore;
        console.log(`Your lose! You chose ${playerSelection} and your opponent chose ${computerSelection}! The score is ${hscore}-${cscore}`);
    } else {
        console.log(`Tie! You chose ${playerSelection} and your opponent chose ${computerSelection}! The score is ${hscore}-${cscore}`);
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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