function getComputerChoice() {
    let random_number = Math.random();

    if (random_number <= 0.33)
        return "rock"
    else if (random_number >= 0.66)
        return "scissors"
    else
        return "paper"
}

function getHumanChoice() {
    let choice = prompt("What choice do you want to make ?").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors")
        return choice
    else
        return alert("WRONG! Your choice must be rock, paper or scissors")
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("YOU LOSE! Paper beats Rock.")
            return computerScore++;
        }
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("YOU WIN! Rock beats Scissors.")
            return humanScore++;
        }
        if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("YOU LOSE! Rock beats Scissors.")
            return computerScore++;
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("YOU WIN! Scissors beats Paper.")
            return humanScore++;
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("YOU WIN! Paper beats Rock.")
            return humanScore++;
        }
        if (humanChoice === "paper" && computerChoice == "scissors") {
            console.log("YOU LOSE! Scissors beats Paper")
            return computerScore++;
        }
    }

    // Loop 5 times the playGame function
    for (round = 0; round < 5; round++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        if (computerSelection === humanSelection) {
            console.log("THIS IS A DRAW")
            round--;
        }
        else playRound(humanSelection, computerSelection);

        // console.log(humanScore, computerScore, humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        return console.log("YOU WIN THE GAME!")
    }
    else {
        return console.log("YOU LOSE THE GAME!")
    }
}

let humanSelection;
let computerSelection;

playGame();