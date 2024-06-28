function getComputerChoice() {
    let random_number = Math.random();

    if (random_number <= 0.33)
        return "rock"
    else if (random_number >= 0.66)
        return "scissors"
    else
        return "paper"
}

let humanSelection;
let computerSelection;

let humanScore = 0;
let computerScore = 0;

const whoWonDiv = document.querySelector("#whoWon")

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        whoWonDiv.textContent = "YOU LOSE! Paper beats Rock.";
        return computerScore++;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        whoWonDiv.textContent = "YOU WIN! Rock beats Scissors.";
        return humanScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        whoWonDiv.textContent = "YOU LOSE! Rock beats Scissors.";
        return computerScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        whoWonDiv.textContent = "YOU WIN! Scissors beats Paper.";
        return humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        whoWonDiv.textContent = "YOU WIN! Paper beats Rock.";
        return humanScore++;
    }
    if (humanChoice === "paper" && computerChoice == "scissors") {
        whoWonDiv.textContent = "YOU LOSE! Scissors beats Paper";
        return computerScore++;
    }
}

const choices = document.querySelector("#choices");

choices.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.value) {
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            console.log("paper");
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice());
            break;
    };
});
