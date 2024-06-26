// CREATE function getComputerChoice
function getComputerChoice() {
    // GET a random number with Math.random
    let random_number = Math.random();

    // IF random number is inferior to .33
    if (random_number <= 0.33)
    // return string Rock
        return "rock"
    // ELSEIF random number superior to .66
    else if (random_number >= 0.66)
    // return string Scissors 
        return "scissors"
    // ELSE return string paper
    else
        return "paper"
}

// CREATE function getHumanChoice
function getHumanChoice() {
    // GET an input from the user
    let choice = prompt("What choice do you want to make ?").toLowerCase();

    // IF choice equals one of rock, paper or scissors
    if (choice === "rock" || choice === "paper" || choice === "scissors")
        // return user's choice
        return choice
    // ELSE return error: this choice does not work, try R, P or S.
    else
        return alert("WRONG! Your choice must be rock, paper or scissors")
}

// CREATE function playGame
function playGame() {
    // CREATE a VARIABLE humanScore & INITIALISE it to 0
    let humanScore = 0;
    // CREATE a VARIABLE computerScore & INITIALISE it to 0
    let computerScore = 0;

    // CREATE function playRound with two parameters
    function playRound(humanChoice, computerChoice) {
            // IF iterations for every choice with console.logs
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

    // Loop 5 times the playGame to play for 5 rounds
    for (round = 0; round < 5; round++) {
        // GET each's choice
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        // IF there is a draw, don't count the round
        if (computerSelection === humanSelection) {
            console.log("THIS IS A DRAW")
            round--;
        }
        // CALL playRound function to play a round
        playRound(humanSelection, computerSelection);

        console.log(humanScore, computerScore, humanSelection, computerSelection)
    }

    // LOG in the console who the winner is
    if (humanScore > computerScore) {
        return console.log("YOU WIN THE GAME!")
    }
    else {
        return console.log("YOU LOSE THE GAME!")
    }
}

// CREATE two variables to get each choice
let humanSelection;
let computerSelection;

// CALL the function playGame to PLAY !
playGame();

// console.log(humanScore, computerScore, humanSelection, computerSelection)