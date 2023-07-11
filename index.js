function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber].toLocaleLowerCase();
}

function playerSelection() {
  return prompt("Your choice:").toLocaleLowerCase();
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == "rock" && playerChoice == "scissor") {
    return "You lose! Rock beats Scissor";
  }
  if (computerChoice == "paper" && playerChoice == "rock") {
    return "You lose! Paper beats Rock";
  }
  if (computerChoice == "scissor" && playerChoice == "paper") {
    return "You lose! Scissor beats Paper";
  }
  if (computerChoice == playerChoice) return "Tie!";

  return `You win! ${playerChoice} beats ${computerChoice}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getComputerChoice(), playerSelection()));
  }
}
