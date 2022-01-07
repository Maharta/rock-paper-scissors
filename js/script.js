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
  return temporary.toLowerCase();
}

let keepGoing = true;
let playerInput;
let count = 0;
while (keepGoing) {
  playerInput = getInput();
  if (
    playerInput !== "rock" ||
    playerInput !== "paper" ||
    playerInput !== "scissors"
  ) {
    playerInput = getInput();
  } else if (count < 5) {
      console.log(play(playerInput, computerPlay()));
      count++;
  } else {
      keepGoing = false;
  }
}
