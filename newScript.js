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
            return "tie"
        } else if (computerSelection == "paper") {
            return "computer wins"
        } else {
            return "player wins"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "player wins"
        } else if (computerSelection == "paper") {
            return "tie"
        } else {
            return "computer wins"
        }
    } else { // player selects scissors
        if (computerSelection == "rock") {
            return "computer wins"
        } else if (computerSelection == "paper") {
            return "player wins"
        } else {
            return "tie"
        }
    }
}
function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "you win"
    } else if (computerScore > playerScore) {
        return "you lose"
    } else {
        return "tie"
    }
}
function getPlayerSelection() {
    playerSelection = prompt("What's you choice?", "rock")
    playerSelection = playerSelection.toLowerCase()
    return playerSelection
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0
    while (rounds < 5) {
        let result = playRound(getPlayerSelection(), computerPlay())
        
        if (result == "player wins") {
            playerScore++
            rounds++
        } else if (result == "computer wins") {
            computerScore++
            rounds++
        } else {
            rounds++
        }
        console.log(playerScore, computerScore)
    }
    
    return determineWinner(playerScore, computerScore)
}