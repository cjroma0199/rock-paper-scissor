# Rock Paper Scissors

## Introduction

This game was created as an assignment for The Odin Project. It's a simple and fun game where you compete against the computer by choosing one of three options: rock, paper, or scissors. The winner of each round is determined based on the rules of the classic game:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

The game continues until one player reaches a score of 5, at which point the game will be over, and the winner will be announced.

## Getting Started

To play the "Rock Paper Scissors" game, you'll need a modern web browser with JavaScript enabled. The game is designed to run in the browser environment.

## How to Play

1. Open the "index.html" file in your web browser. This will load the game interface.

2. The game window will display the following elements:

   - Player's weapon image on the left side.
   - Computer's weapon image on the right side.
   - Round count showing the current round number.
   - Player's health bar displaying the remaining health.
   - Computer's health bar displaying the remaining health.
   - Game outcome text indicating the result of the current round.
   - "Play Again" button (displayed in a modal at the end of the game).

3. To make your choice, click on one of the three weapon icons displayed on the screen: Rock, Paper, or Scissors.

4. After you make your selection, the computer will also make its choice randomly.

5. The game will then determine the winner of the round based on the choices made by you and the computer.

6. The health bars will be updated based on the winner of the round. If the player wins the round, the computer's health will decrease, and vice versa.

7. The game continues until one player's health reaches zero. The player who reaches a score of 5 first will be declared the overall winner of the game.

## Game Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

### Functions:

- `getPlayerWeapon(weapon)`: Returns the weapon (Rock, Paper, or Scissors) selected by the player.
- `getComputerWeapon()`: Returns a random weapon choice for the computer.
- `randomNumber(range)`: Returns a random number within a specified range.
- `getWinner(playerChoice, computerChoice)`: Determines the winner and loser of a round based on the weapon choices of the player and the computer.
- `capitalizedFirstLetter(string)`: Capitalizes the first letter of a given string.
- `updateDisplay(result)`: Updates the game interface to display the outcome of each round.
- `updateRoundCount(round)`: Updates the current round number displayed on the interface.
- `hideImageHolder()`: Hides the weapon images during the battle phase.
- `updateBattleWindow(result)`: Updates the player and computer weapon images during the battle phase.
- `getHeathBar(player)`: Returns the DOM element representing the health bar of the specified player.
- `updateHealthBar(loser, loserHealth = 0)`: Updates the health bar of the loser after each round.
- `getGameWinner(score)`: Returns the winner of the game based on the scores.
- `isGameOver()`: Checks if the game is over by determining if any player's score reaches 5.
- `resetHealthBar()`: Resets the health bars of both players to the maximum value.
- `resetGame()`: Resets the game to its initial state.

## Conclusion

Congratulations! You now have a clear understanding of the "Rock Paper Scissors" game and how to play it. Have fun competing against the computer, and may the best player win! If you have any questions or suggestions for improvement, feel free to reach out. Enjoy the game!
