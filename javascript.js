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

let playerSelection = prompt("rock, paper or scissors?", "").toLowerCase();
let computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie!";
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