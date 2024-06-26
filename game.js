// CREATE function getComputerChoice
function getComputerChoice() {
// GET a random number with Math.random
let random_number = Math.random();
// IF random number is inferior to .33
if (random_number <= 0.33)
// return string Rock
    return console.log("Rock")
// ELSEIF random number superior to .66
else if (random_number >= 0.66)
// return string Scissors 
    return console.log("Scissors")
// ELSE return string paper
else
    return console.log("Paper")
}


// CREATE function getHumanChoice
function getHumanChoice() {
    // GET an input from the user
    let choice = prompt("What choice do you want to make ?").toLowerCase();
    // IF choice equals one of rock, paper or scissors
    if (choice === "rock" || choice === "paper" || choice === "scissors")
        // return user's choice
        return console.log(choice)
    // ELSE return error: this choice does not work, try R, P or S.
    else
        return console.log("WRONG! Yout choice must be rock,paperor scissors")
}


    // CREATE aVARIABLE humanScore & INITIALISE it to 0
    let humanScore = 0;
    // CREATE a VARIABLE computerScore & INITIALISE it to 0
    let computerScore = 0;
}

// CREATE function playRound with two parameters
function playRound(humanChoice, computerChoice) {

}

getComputerChoice()
getHumanChoice()