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

    const first = document.createElement('button');
    const second = document.createElement('button');
    const third = document.createElement('button');

    document.body.append(first, second, third);

    const buttons = document.querySelectorAll('button');

    buttons[0].id = 'rock';
    buttons[1].id = 'scissors';
    buttons[2].id = 'paper';

    const fourth = document.createElement('div');

    document.body.append(fourth);
    
    let yourScore = 0;
    let computerScore = 0;

    for (const btn of buttons) {
        btn.addEventListener('click', playRound = () => {
            if (btn.id == 'rock') {
                if (getComputerChoice() == "scissors") {
                    yourScore ++;
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
                } else if (getComputerChoice() == "paper") {
                    computerScore ++;
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
                } else {
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
                }
            } else if (btn.id == 'scissors') {
                if (getComputerChoice() == "paper") {
                    yourScore ++;
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
                } else if (getComputerChoice() == "rock") {
                    computerScore ++;
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
                } else {
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;                }
            } else if (btn.id == 'paper') {
                if (getComputerChoice() == "rock") {
                    yourScore ++;
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
                } else if (getComputerChoice() == "scissors") {
                    computerScore ++;
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;
                } else {
                    fourth.textContent = `Your Score: ${yourScore} Computer Score: ${computerScore}`;                }
            }

            if (yourScore == 5) {
                alert('You are the winner!');
            } else if (computerScore == 5) {
                alert('You are the loser!');
            }
        });
    } 
}

game();