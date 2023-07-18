const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playerSelection() {
  return prompt("Your choice:").toLowerCase();
}

function playRound(computerChoice, playerChoice) {
  if (!isValidChoice(playerChoice)) {
    return "Invalid choice! Your choices are rock, paper, and scissor.";
  }

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

function isValidChoice(choice) {
  return choices.includes(choice);
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), playerSelection()));
  }
}
