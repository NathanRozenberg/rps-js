function getComputerChoice(){
    let rng = Math.random
    let choice
    if (rng < 0.32){
        choice = "rock";
    }
    else if (rng >= 0.66){
        choice = "scissors";
    }
    else {
        choice = "paper";
    }
    return choice
}

function getHumanChoice(){
    let choice = prompt("Please enter your choice of rock, paper or scissors:");
    if (choice != "rock" || choice != "paper" || choice != "scissors"){
        return getHumanChoice();
    }
    else{
        return choice;
    }
}

function playRound(){
    const humanChoice = getHumanChoice().toLowerCase()
    const computerChoice = getComputerChoice()

    if (humanChoice === computerChoice){
        console.log("It's a tie! You both picked " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
    }

    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("You lose! Paper covers Rock.");
            computerScore++;
        }
        else{
            console.log("You win! Rock smashes Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("You win! Paper covers Rock.");
            humanScore++;
        }
        else {
            console.log("You lose! Scissors cuts Paper.");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            console.log("You lose! Rock smashes Scissors.");
            computerScore++;
        }
        else {
            console.log("You win! Scissors cuts Paper.")
            humanScore++;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

playRound()