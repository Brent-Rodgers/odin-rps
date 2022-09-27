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


function playMatch(){
    let playerWins = 0;
    let computerWins = 0;
    
    for (let i = 0; i < 3; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
    
        switch(result){
            case "win":
                playerWins++;
                console.log("Won the round!");
                break;
            case "lose":
                computerWins++;
                console.log("Lost the round...");
                break;
            case "draw":
                console.log("Draw");
                break;
            default:
                break;
        }
     }
    
     console.log(`Player Wins: ${playerWins}`);
     console.log(`Computer Wins: ${computerWins}`);

}
