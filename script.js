// console.log('this works')

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3)
   // console.log(randomNum)
    if (randomNum === 0) {
        return 'rock'}
    else if (randomNum === 1) {
        return 'paper' }
    else if (randomNum === 2) {
        return 'scissors'
    }
}

function getHumanChoice (choice) {
    choice = prompt('rock,paper, or scissors?').toLowerCase()
    if (choice == 'rock') {
        return choice;
    } else if (choice == 'paper') {
        return choice;
    } else if (choice == 'scissors') {
        return choice;
    } else {
        alert('abort')
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('TIE');
        }

        if (computerChoice === 'paper') {
            computerScore += 1;
            console.log('computer wins this round');
        }

        if (computerChoice === 'scissors') {
            humanScore += 1;
            console.log('player wins this round')
        }
    }


    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanChoice += 1;
            console.log('player wins this round');
        }

        if (computerChoice === 'paper') {
            console.log('TIE');
        }

        if (computerChoice === 'scissors') {
            computerScore += 1;
            console.log('computer wins this round.');
        }
    }


    if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore += 1;
            console.log('computer wins this round')
        }

        if (computerChoice === 'paper') {
            humanScore += 1;
            console.log('player wins this round')
        }

        if (computerChoice === 'scissors') {
            console.log('TIE');
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();