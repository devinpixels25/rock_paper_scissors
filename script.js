function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return 'rock';
    if (randomNum === 1) return 'paper';
    if (randomNum === 2) return 'scissors';
}

function getHumanChoice() {
    let choice = prompt('rock, paper, or scissors?').toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        console.log(`Human choice is ${choice}`);
        return choice;
    } else {
        alert('Invalid choice. Please try again.');
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        console.log('Human wins this round!');
    } else {
        computerScore += 1;
        console.log('Computer wins this round!');
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('Human wins the game!');
    } else if (computerScore > humanScore) {
        console.log('Computer wins the game!');
    } else {
        console.log('The game is a tie!');
    }
}

playGame();
