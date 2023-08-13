function game() {
    
    function getComputerChoice() {
        let number = Math.floor(Math.random()* 3);
        let outcome = "";
        if (number == 0) {
            outcome = "rock"; 
        } else if (number == 1) {
            outcome = "scissors";
        } else if (number == 2) {
            outcome = "paper";
        } return outcome;
    }

    function playRound(playerSelection, computerSelection) {
        let playerSelectionLowerCase = playerSelection.toLowerCase();

        if (playerSelectionLowerCase == "rock") {
            if (computerSelection == "scissors") {
                console.log("You win!");
            } else if (computerSelection == "paper") {
                console.log("You lose!");
            } else {
                console.log("Tie!");
            }
        } else if (playerSelectionLowerCase == "scissors") {
            if (computerSelection == "paper") {
                console.log("You win!");
            } else if (computerSelection == "rock") {
                console.log("You lose!");
            } else {
                console.log("Tie!");
            }
        } else if (playerSelectionLowerCase == "paper") {
            if (computerSelection == "rock") {
                console.log("You win!");
            } else if (computerSelection == "scissors") {
                console.log("You lose!");
            } else {
                console.log("Tie!");
            }
        }
    }

    for (let i = 0; i < 5; i++) { 
        console.log(i);
        let playerSelection = prompt("Rock, scissors, or paper?");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();