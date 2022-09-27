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
        playerChoice = prompt("Please pick Rock, Paper, or Scissors!  Watch your spelling!").toLowerCase();
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

}