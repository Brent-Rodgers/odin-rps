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