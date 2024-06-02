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
