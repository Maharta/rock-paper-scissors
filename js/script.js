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

  const returnMessage = `you choose ${playerInput} and the computer choose ${computerInput}`;

  if (win[playerInput] === computerInput) {
    return `${returnMessage}, you win!`;
  } else if (win[computerInput] === playerInput) {
    return `${returnMessage}, you lose!`;
  } else {
    return `${returnMessage}, draw!`;
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
