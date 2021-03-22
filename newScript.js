function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function computerPlay() {
    let number = getRandomInt(0, 2)
    if (number == 0) {
        console.log("rock")
        return "rock"
    } else if (number == 1) {
        console.log("paper")
        return "paper"
    } else {
        console.log("scissors")
        return "scissors"
    }
};
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("tie")
        } else if (computerSelection == "paper") {
            console.log("computer wins")
        } else {
            console.log("player wins")
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("player wins")
        } else if (computerSelection == "paper") {
            console.log("tie")
        } else {
            console.log("computer wins")
        }
    } else { // player selects scissors
        if (computerSelection == "rock") {
            console.log("computer wins")
        } else if (computerSelection == "paper") {
            console.log("player wins")
        } else {
            console.log("tie")
        }
    }
    return
}
function game() {
    
}