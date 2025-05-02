let buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", function(clickEvent){ 
        let choice = clickEvent.target.id
        playRound(choice)
    }) 
});

let outputLog = document.querySelector("#resultLog")

function getComputerChoice(){
    let rng = Math.random()
    let choice
    console.log(rng)
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

function playRound(humanChoice){
    const computerChoice = getComputerChoice()

    if (humanChoice === computerChoice){
        outputLog.textContent = ("It's a tie! You both picked " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
    }

    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            outputLog.textContent = ("You lose! Paper covers Rock.");
            computerScore++;
        }
        else{
            outputLog.textContent = ("You win! Rock smashes Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            outputLog.textContent = ("You win! Paper covers Rock.");
            humanScore++;
        }
        else {
            outputLog.textContent = ("You lose! Scissors cuts Paper.");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            outputLog.textContent = ("You lose! Rock smashes Scissors.");
            computerScore++;
        }
        else {
            outputLog.textContent = ("You win! Scissors cuts Paper.")
            humanScore++;
        }
    }
    document.querySelector("#hScoreValue").textContent = humanScore
    document.querySelector("#cScoreValue").textContent = computerScore
    if (humanScore >= 5 || computerScore >= 5){
        if(humanScore > computerScore){
            outputLog.textContent = "Congratulations! You win!"
        }
        else{
            outputLog.textContent = "AI has won again."
        }
    }
} 



let humanScore = 0;
let computerScore = 0;

