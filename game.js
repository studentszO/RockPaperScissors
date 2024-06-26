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



// CREATE a VARIABLE humanScore & INITIALISE it to 0
let humanScore = 0;
// CREATE a VARIABLE computerScore & INITIALISE it to 0
let computerScore = 0;

// CREATE two variables to get each choice
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// CREATE function playGame
function playGame() {
    // CREATE a VARIABLE humanScore & INITIALISE it to 0
    let humanScore = 0;
    // CREATE a VARIABLE computerScore & INITIALISE it to 0
    let computerScore = 0;

    // CREATE function playRound with two parameters
    function playRound(humanChoice, computerChoice) {
        // IF humanChoice is the same as computerChoice
        if (humanChoice === computerChoice)
            // RETURN log: It's a draw.
            return console.log("It's a draw!")
        // IF humanChoice != computerChoice
        else 
        // IF iterations for every choice with console.logs
            if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("YOU LOSE! Paper beats Rock.")
                computerScore++;
            }
            if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("YOU WIN! Rock beats Scissors.")
                humanScore++;
            }
            if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("YOU LOSE! Rock beats Scissors.")
                computerScore++;
            }
            if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("YOU WIN! Scissors beats Paper.")
                humanScore++;
            }
            if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("YOU WIN! Paper beats Rock.")
                humanScore++;
            }
            if (humanChoice === "paper" && computerChoice == "scissors") {
                console.log("YOU LOSE! Scissors beats Paper")
                computerScore++;
            }
    }
}

console.log(humanScore, computerScore, humanSelection, computerSelection)