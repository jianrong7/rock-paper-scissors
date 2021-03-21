function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function computerPlay() {
    let number = getRandomInt(0, 2)
    if (number == 0) {
        console.log("rock")
        return
    } else if (number == 1) {
        console.log("paper")
        return
    } else {
        console.log("scissors")
        return
    }
};
function playRound(playerSelection, computerSelection) {
    
}