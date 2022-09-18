let playerScore = 0;
let computerScore = 0;

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

function updateText() {
  const result = document.querySelector(".result");
  const playerNode = document.querySelector(".playerScore");
  const computerNode = document.querySelector(".computerScore");
  result.textContent = play(this.dataset.key, computerPlay());
  playerNode.textContent = playerScore;
  computerNode.textContent = computerScore;
  if (playerScore >= 5 || computerScore >= 5) {
    result.textContent = playerScore > computerScore ? "You win" : "You lose";
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.setAttribute("disabled", true);
    });
    return;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", updateText);
});
