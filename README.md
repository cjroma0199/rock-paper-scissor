# Rock Paper Scissors Game

This is a simple JavaScript implementation of the classic game Rock Paper Scissors. The game allows you to play against the computer for a total of 5 rounds. This project is an assignment for The Odin Project.

## How to Play

1. Clone the repository or download the code files.
2. Open the `index.html` file in your web browser.
3. Open the browser console.
4. In the console, type `game()` and press Enter to start the game.
5. The game will prompt you to enter your choice (rock, paper, or scissor).
6. The computer will randomly select its choice.
7. The round result will be displayed in the console.
8. Repeat steps 5-7 for a total of 5 rounds.

## Code Explanation

The code consists of the following functions:

### `getComputerChoice()`

This function randomly selects a choice for the computer from an array of options: "rock", "paper", or "scissor". It uses `Math.random()` to generate a random number and `Math.floor()` to round it down to the nearest integer.

### `playerSelection()`

This function prompts the player to enter their choice and converts it to lowercase. The player's input is obtained using the `prompt()` function.

### `playRound(computerChoice, playerChoice)`

This function takes the computer's choice and the player's choice as parameters and determines the winner of a single round. It compares the choices and returns a string indicating the result: whether the player wins, loses, or if it's a tie.

### `game()`

This function runs the game for a total of 5 rounds. It calls the `playRound()` function inside a `for` loop and logs the result to the console.

## How to Run the Game

To play the game, follow the steps mentioned in the "How to Play" section above. Ensure that you have a modern web browser that supports JavaScript.

This project is an assignment for The Odin Project. You can find more information about this project and other assignments on The Odin Project's website.

Feel free to modify the code or add additional features to enhance the game. Enjoy playing Rock Paper Scissors!
