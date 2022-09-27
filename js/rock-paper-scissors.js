function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random()*3)+1;
    let computerChoice;

    if (choiceIndex === 1) {
        computerChoice = "rock";
    } else if (choiceIndex === 2) {
        computerChoice = "paper";
    } else if (choiceIndex === 3) {
        computerChoice = "scissors";
    }

    return(computerChoice);
}

function getPlayerChoice(){
    let playerChoice = ""
    playerChoice = prompt("Please pick Rock, Paper, or Scissors!").toLowerCase();

    while(!valid(playerChoice)) {
        playerChoice = prompt("Please pick Rock, Paper, or Scissors! Watch your spelling!").toLowerCase();
    }
}

function valid(move){
    console.log(move)
    if (move == "rock" | move == "paper" | move == "scissors")
        return(true);
    else {
        return(false);
    }    
}

function playRound(playerSelection, computerSelection) {
    const lossMessage = "YOU LOSE...";
    const winMessage = "YOU WIN!!!";
    const drawMessage = "It's a draw."

    if (playerSelection === computerSelection) {
        return(drawMessage)
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return(lossMessage);
        } else {
            return(winMessage);
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "scissors") {
            return(lossMessage);
        } else {
            return(winMessage);
        }
    } else if (playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return(lossMessage);
        } else {
            return(winMessage);
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));