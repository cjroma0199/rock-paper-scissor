function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
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

  if (computerChoice == playerChoice)
    return `It's ${computerChoice} vs ${playerChoice}! It's a Tie!`;

  return `You win! ${playerChoice} beats ${computerChoice}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), playerSelection()));
  }
}
