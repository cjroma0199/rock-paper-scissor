# Rock Paper Scissors Game

This is a simple implementation of the Rock Paper Scissors game in JavaScript. It allows the user to play against the computer in a series of rounds.

## Functions

### `getComputerChoice()`

This function generates a random number between 0 and 2 and uses it to select a choice from the `choices` array. The chosen choice is then returned as the computer's choice.

### `playerSelection()`

This function prompts the user for their choice and converts it to lowercase. The player's choice is then returned.

### `playRound(computerChoice, playerChoice)`

This function takes two arguments, `computerChoice` and `playerChoice`, and determines the outcome of a round based on the choices. It checks for the following conditions:

- If the player's choice is invalid (not one of "rock", "paper", or "scissor"), it returns an error message.
- If the computer wins the round, it returns a message indicating the player's loss and the winning choices.
- If it's a tie, it returns a message indicating the tie and the choices made.
- If the player wins the round, it returns a message indicating the player's win and the winning choices.

### `isValidChoice(choice)`

This function takes a `choice` as an argument and checks if it is included in the `choices` array. It returns a boolean value indicating whether the choice is valid or not.

### `game()`

This function runs a series of 5 rounds of the game. It calls the `playRound` function with the computer's choice obtained from `getComputerChoice()` and the player's choice obtained from `playerSelection()`. The result of each round is logged to the console.

## Usage

To play the game, call the `game()` function. It will run 5 rounds of the game and display the results on the console.

Note: This implementation assumes that there is a working console environment (e.g., browser console or Node.js).

Example usage:

```javascript
game();
```
