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
    playerSelection = prompt("rock, paper or scissors?", "").toLowerCase(); 
    computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === "You win!") {
        hscore = ++hscore;
        console.log(`You win! The score is ${hscore}-${cscore}`);
    } else if (result === "You lose!") {
        cscore = ++cscore;
        console.log(`Your lose! The score is ${hscore}-${cscore}`);
    } else {
        console.log(`Tie! The score is ${hscore}-${cscore}`);
    }


