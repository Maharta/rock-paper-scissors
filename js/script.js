let playerScore = 0;
let computerScore = 0;
const playerNode = document.querySelector(".playerScore");
const computerNode = document.querySelector(".computerScore");
const playButtons = document.querySelectorAll(".playButton");
const result = document.querySelector(".result");

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function play(playerInput, computerInput) {
  const win = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (win[playerInput] === computerInput) {
    playerScore++;
    return `${playerInput} beats ${computerInput}!`;
  } else if (win[computerInput] === playerInput) {
    computerScore++;
    return `${computerInput} beats ${playerInput}!`;
  } else {
    return `Draw! no one get a score.`;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playButtons.forEach((button) => {
    button.removeAttribute("disabled");
  });
  this.remove();
  result.textContent = "Result";
  playerNode.textContent = "0";
  computerNode.textContent = "0";
}

function updateText() {
  result.textContent = play(this.dataset.key, computerPlay());
  playerNode.textContent = playerScore;
  computerNode.textContent = computerScore;
  if (playerScore >= 5 || computerScore >= 5) {
    result.textContent = playerScore > computerScore ? "You win" : "You lose";
    playButtons.forEach((button) => {
      button.setAttribute("disabled", "disabled");
    });
    const restartButton = document.createElement("button");
    restartButton.classList.add(".restartButton");
    restartButton.textContent = "Restart the game";
    restartButton.addEventListener("click", resetGame);
    document.querySelector(".result__container").appendChild(restartButton);
  }
}

playButtons.forEach((btn) => {
  btn.addEventListener("click", updateText);
});
