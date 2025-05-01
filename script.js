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
    choice = choice.toLowerCase()
    if (!(choice === "rock" || choice === "paper" || choice === "scissors")){
        console.log(choice + " is not a valid option. Please try again!")
        return getHumanChoice();
    }
    else{
        console.log(choice[0].toUpperCase() + choice.slice(1) + " has been selected!")
        return choice;
    }
}



function playGame(){
   function playRound(){
    const humanChoice = getHumanChoice()
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
    for (i = 0; i<5; i++){
        playRound()
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame()