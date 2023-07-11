function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber].toLowerCase();
}

function playerSelection() {
  return prompt("Your choice:").toLowerCase();
}

function playRound(computerChoice, playerChoice) {
  if (
    (computerChoice == "rock" && playerChoice == "scissor") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissor" && playerChoice == "paper")
  ) {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }

  if (computerChoice == playerChoice) return "Tie!";

  return `You win! ${playerChoice} beats ${computerChoice}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), playerSelection()));
  }
}
