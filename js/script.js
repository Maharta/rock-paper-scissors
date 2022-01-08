function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function play(playerInput, computerInput) {
  switch (true) {
    case playerInput === computerInput:
      return "Draw!";
      break;
    case playerInput === "rock" && computerInput === "paper":
      return "You lose, the computer choose paper!";
      break;

    case playerInput === "rock" && computerInput === "scissors":
      return "You win!, The computer choose scissors";
      break;

    case playerInput === "scissors" && computerInput === "rock":
      return "You lose, the computer choose rock!";
      break;

    case playerInput === "scissors" && computerInput === "paper":
      return "You win!, the computer choose paper";
      break;

    case playerInput === "paper" && computerInput === "scissors":
      return "You lose, the computer choose scissors";
      break;

    case playerInput === "paper" && computerInput === "rock":
      return "You win!, the computer choose rock";
      break;

    default:
      return "Something went horribly wrong";
  }
}

function getInput() {
  let temporary = prompt("Please choose between rock, paper, and scissors");
  if (temporary !== null) temporary.toLowerCase;
  return temporary;
}

let playerInput;
let count = 0;
while (count < 5) {
  playerInput = getInput();

  if (playerInput === null) {
    console.log("Game Canceled..");
    break;
  }

  if (
    playerInput === "rock" ||
    playerInput === "paper" ||
    playerInput === "scissors"
  ) {
    console.log(play(playerInput, computerPlay()));
    count++;
  }
}
