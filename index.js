let options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return (`It's a draw! both players picked ${playerSelection}`);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return (`Computer wins! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return (`Computer wins! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return (`Computer wins! ${computerSelection} beats ${playerSelection}`);
    } else {
        return (`${playerSelection} is an invalid weapon`);
    }
}

function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("YOU WIN THE GAME");
    } else if (computerScore > playerScore) {
        console.log("COMPUTER WINS THE GAME");
    } else {
        console.log("GAME IS A DRAW");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Starting a game of 5 rounds")
    for (let i = 0; i<5; i++) {
        console.log(`Score: You ${playerScore}:${computerScore} Computer`);
        playerSelection = prompt("Enter Rock, Paper or Scissors");
        let winner = playRound(playerSelection, computerPlay());
        console.log(winner);
        if (winner.startsWith("Computer wins")) {
            computerScore++;
        } else if (winner.startsWith("You win")) {
            playerScore++;
        } else {
            i--;
        }
    }
    console.log(`Score: You ${playerScore}:${computerScore} Computer`);
    winner(playerScore, computerScore);
}

let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
const winnerText = document.getElementById('header');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let winner = playRound(button.id, computerPlay());
        if (winner.startsWith("Computer wins")) {
            compScore++;
        } else if (winner.startsWith("You win")) {
            playerScore++;
        }
        winnerText.innerText = (winner + `\n Score: You: ${playerScore} - ${compScore} Computer`);
        if (playerScore == 5 || compScore == 5) {
            buttons.forEach((button) => {
                button.disabled = true;
            })
            winnerText.innerText += "\n Game Over";
        }
    })
})





