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

    return(playerChoice);
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
    const lossMessage = "lose";
    const winMessage = "win";
    const drawMessage = "draw"

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

const buttons = document.querySelectorAll("button")
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', () => {
    let playerChoice = button.getAttribute('data-choice');
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    if (result === "win") {
        playerScore += 1;
    } else if (result === "lose") {
        computerScore += 1;
    }

    document.querySelector("#player-choice").textContent = playerChoice;
    document.querySelector("#computer-choice").textContent = computerChoice;
    document.querySelector("#result").textContent = result;
    displayScores(playerScore, computerScore);

    if(playerScore >=5) {
        alert("You Won!  \n\n ...resetting scores...");
        playerScore = 0;
        computerScore = 0;
        displayScores(playerScore, computerScore);
    } else if(computerScore >=5) {
        alert("Computer Won!  \n\n ...resetting scores...");
        playerScore = 0;
        computerScore = 0;
        displayScores(playerScore, computerScore);
    }
}
))

function displayScores(playerScore, computerScore){
    document.querySelector("#player-score").textContent = playerScore;
    document.querySelector("#computer-score").textContent = computerScore;
}