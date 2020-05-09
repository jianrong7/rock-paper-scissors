function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function computerPlay() {
    let plays = Array('Rock', 'Paper', 'Scissors')
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play
}
function playRound(playerSelection, computerSelection) {
    let yourChoice = document.getElementById("yourChoice");
    let computerChoice = document.getElementById("computerChoice");
    switch (playerSelection) {
        case "rock":
            yourChoice.innerText = "Rock";
            yourChoice.style.color = "#7d3131"
          switch (computerSelection) {
              case "Rock":
                computerChoice.innerText = "Rock";
                computerChoice.style.color = "#7d3131"
                return "tie";
              case "Scissors":
                computerChoice.innerText = "Scissors";
                computerChoice.style.color = "#31777d"
                return "win";
              case "Paper":
                computerChoice.innerText = "Paper";
                computerChoice.style.color = "#5b276b"
                return "lose";
          }
        case "scissors":
            yourChoice.innerText = "Scissors";
            yourChoice.style.color = "#31777d"
          switch (computerSelection) {
              case "Rock":
                computerChoice.innerText = "Rock";
                computerChoice.style.color = "#7d3131"
                return "lose";
              case "Scissors":
                computerChoice.innerText = "Scissors";
                computerChoice.style.color = "#31777d"
                return "tie";
              case "Paper":
                computerChoice.innerText = "Paper";
                computerChoice.style.color = "#5b276b"
                return "win";
          }
        case "paper":
            yourChoice.innerText = "Paper";
            yourChoice.style.color = "#5b276b"
          switch (computerSelection) {
              case "Rock":
                computerChoice.innerText = "Rock";
                computerChoice.style.color = "#7d3131"
                return "win";
              case "Scissors":
                computerChoice.innerText = "Scissors";
                computerChoice.style.color = "#31777d"
                return "lose";
              case "Paper":
                computerChoice.innerText = "Paper";
                computerChoice.style.color = "#5b276b"
                return "tie";
          }
  }
}
function game(e) {
    user_in = e.target.id;
    let computerSelection = computerPlay();
    let result = playRound(user_in, computerSelection);
    let results = document.getElementById("results");
    if (result == "lose") {
      let message = `You lose! ${computerSelection} beats ${capitalizeFirstLetter(user_in)}`
      results.innerHTML = message + "<br>";
      computerScore++;
    }
    else if (result == "win") {
      let message = `You win! ${capitalizeFirstLetter(user_in)} beats ${computerSelection}`
      results.innerHTML = message + "<br>";
      yourScore++;
    }
    else {
      let message = `No one wins. You both chose ${computerSelection}`
      results.innerHTML = message + "<br>";
    }
    determineWinner();
}
function determineWinner() {
  const yourScoreCounter = document.getElementById("yourScore");
  yourScoreCounter.innerHTML = yourScore
  const computerScoreCounter = document.getElementById("computerScore");
  computerScoreCounter.innerHTML = computerScore
  const winner = document.querySelector("#winner");
  if (yourScore == 5) {
    let message = "congrats winner"
    winner.innerHTML += message + "<br>";
    yourScore = 0;
    computerScore = 0;
  }
  else if (computerScore == 5) {
    let message = "try again loser"
    winner.innerHTML += message + "<br>";
    yourScore = 0;
    computerScore = 0;
  }
  else {
    return true;
  }
}

const btns = document.querySelectorAll(".choice");
const btn = document.querySelector(".choice");
let yourScore = 0;
let computerScore = 0;
btns.forEach(btn => btn.addEventListener('click', game));