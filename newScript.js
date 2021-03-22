function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function computerPlay() {
    let image = document.querySelector(".computerChoiceImage")
    let number = getRandomInt(0, 2)
    if (number == 0) {
        image.innerHTML = '<img src="assets/rock.jpg" alt="rock" style="width: 100px;"></img>'
        return "rock"
    } else if (number == 1) {
        image.innerHTML = '<img src="assets/paper.jpg" alt="paper" style="width: 90px;"></img>'
        return "paper"
    } else {
        image.innerHTML = '<img src="assets/scissors.jpg" alt="scissors" style="width: 90px;"></img>'
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
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            return "W"
        } else {
            return "L"
        }
    }
}
function endGame(finalResult) {
    let resultText = document.querySelector(".gameResult")
    let restartButton = document.querySelector(".button")
    if (finalResult == "W") {
        resultText.innerHTML = "You won"
        restartButton.style.visibility = "visible"
    } else {
        resultText.innerHTML = "You lost"
        restartButton.style.visibility = "visible"
    }
}
function resetGame() {
    let restartButton = document.querySelector(".button")
    restartButton.addEventListener('click', () => {
        window.location.reload();
    })
}
function game() {
    let choices = document.querySelectorAll('.choice')
    let playerSelection
    let playerScore = 0
    let computerScore = 0
    let playerScoreHTML = document.querySelector('.pScore')
    let computerScoreHTML = document.querySelector('.cSore')
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            if (choice.classList.contains('rock')) {
                playerSelection = "rock"
            } else if (choice.classList.contains('paper')) {
                playerSelection = "paper"
            } else {
                playerSelection = "scissors"
            }
            
            let result = playRound(playerSelection, computerPlay())
    
            if (result == "player wins") {
                playerScore++
                playerScoreHTML.innerHTML = playerScore
                console.log(playerScore, computerScore)
            } else if (result == "computer wins") {
                computerScore++
                computerScoreHTML.innerHTML = computerScore
                console.log(playerScore, computerScore)
            } else {
                console.log(playerScore, computerScore)
            }
            
            let finalResult = determineWinner(playerScore, computerScore)
            if (finalResult == "W") {
                endGame(finalResult)
            } else if (finalResult == "L") {
                endGame(finalResult)
            }
            resetGame()
        })
    })
}
game()