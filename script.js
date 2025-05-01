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