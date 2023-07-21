const choices = ["rock", "paper", "scissor"];
const weapons = document.querySelectorAll(".choice");
const roundCount = document.querySelector(".count");
const imageHolder = document.querySelectorAll(".image_holder");
const playerWindow = document.querySelector(".player_window");
const computerWindow = document.querySelector(".computer_window");
const roundResult = document.querySelector(".outcome_winner");
const roundWeapons = document.querySelector(".outcome_text");
const playerWeaponImage = document.createElement("img");
const computerWeaponImage = document.createElement("img");
const isBattleWindowActive = Boolean(document.querySelector(".choices"));
const span = document.querySelector(".close");
const modal = document.querySelector("#myModal");
const modalContent = document.querySelector(".game_winner");
const playAgainButton = document.querySelector("#play_again");
const MAX_HEALTH = 100;

let rounds = 0;
let score = { player: 0, computer: 0 };

function getPlayerWeapon(weapon) {
  return weapon.getAttribute("id");
}

const getComputerWeapon = () => {
  return choices[randomNumber(3)];
};

const randomNumber = (range) => {
  return Math.floor(Math.random() * range);
};

const getWinner = (playerChoice, computerChoice) => {
  let result = {
    playerWeapon: playerChoice,
    computerWeapon: computerChoice,
    winner: "",
    loser: "",
  };

  if (computerChoice === playerChoice) return result;
  if (
    (computerChoice == "rock" && playerChoice == "scissor") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissor" && playerChoice == "paper")
  ) {
    result.winner = "Computer";
    result.loser = "Player";
  } else {
    result.winner = "Player";
    result.loser = "Computer";
  }

  return result;
};

const capitalizedFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const updateDisplay = (result) => {
  if (!result.winner) {
    roundResult.textContent = `Both players chose ${capitalizedFirstLetter(
      result.playerWeapon
    )}.`;
    roundWeapons.textContent = `It's a tie!`;
    return;
  }

  if (result.winner === "Player") {
    roundResult.textContent = `You won this round!`;
    roundWeapons.textContent = `${capitalizedFirstLetter(
      result.playerWeapon
    )} beats ${capitalizedFirstLetter(result.computerWeapon)}.`;
    return;
  } else {
    roundResult.textContent = `You lost this round!`;
    roundWeapons.textContent = `${capitalizedFirstLetter(
      result.playerWeapon
    )} was beaten by ${capitalizedFirstLetter(result.computerWeapon)}.`;
  }
};

const updateRoundCount = (round) => {
  roundCount.textContent = round;
};

const hideImageHolder = () => {
  imageHolder.forEach((image) => {
    image.classList.add("hide");
  });
  setTimeout(() => {
    imageHolder[0].style.display = "none";
    imageHolder[1].style.display = "none";
  }, 200);
};
const updateBattleWindow = (result) => {
  playerWeaponImage.src = `./img/compressed/${result.playerWeapon}_left.png`;
  computerWeaponImage.src = `./img/compressed/${result.computerWeapon}_right.png`;
  if (!isBattleWindowActive) {
    playerWeaponImage.setAttribute("class", "choices");
    computerWeaponImage.setAttribute("class", "choices");
    playerWindow.appendChild(playerWeaponImage);
    computerWindow.appendChild(computerWeaponImage);
  }
  computerWeaponImage.style.display = "block";
  playerWeaponImage.style.display = "block";
};

const getHeathBar = (player) => {
  return document.querySelector(`.${player.toLowerCase()}_health`);
};

const updateHealthBar = (loser, loserHealth = 0) => {
  getHeathBar(loser).style.width = `${MAX_HEALTH - loserHealth}%`;
};

const getGameWinner = (score) => {
  return Object.keys(score).find((key) => score[key] == 5);
};

const isGameOver = () => {
  return Object.values(score).includes(5);
};

const resetHealthBar = () => {
  getHeathBar("computer").style.width = `${MAX_HEALTH}%`;
  getHeathBar("player").style.width = `${MAX_HEALTH}%`;
};

const resetGame = () => {
  resetHealthBar();

  computerWeaponImage.style.display = "none";
  playerWeaponImage.style.display = "none";
  updateRoundCount((rounds = 0));
  imageHolder.forEach((image) => {
    image.style.display = "block";
    image.classList.remove("hide");
  });

  score.computer = 0;
  score.player = 0;

  roundResult.textContent = "Let's beat the computer!";
  roundWeapons.textContent = "Good luck!";
};

weapons.forEach((weapon) =>
  weapon.addEventListener("click", (event) => {
    if (isGameOver()) {
      modal.style.display = "block";
      return;
    }
    if (!isGameOver()) {
      let result = getWinner(getPlayerWeapon(weapon), getComputerWeapon());
      let loserHealth = 0;

      if (result.winner == "Player") {
        ++score.player;
        loserHealth = score.player * 20;
      } else if (result.winner == "Computer") {
        ++score.computer;
        loserHealth = score.computer * 20;
      }
      hideImageHolder();

      setTimeout(() => {
        updateBattleWindow(result);
        updateDisplay(result);
        updateRoundCount(++rounds);

        if (!result.loser == "") {
          updateHealthBar(result.loser, loserHealth);
        }
      }, 300);

      if (isGameOver()) {
        setTimeout(() => {
          const gameWinner = getGameWinner(score);

          if (gameWinner == "player") {
            modalContent.textContent =
              "Victory is Yours! You've mastered Rock Paper Scissors!";
          } else {
            modalContent.textContent =
              "Don't Give Up! You'll beat the Computer next time!";
          }
          modal.style.display = "block";
        }, 800);
        return;
      }
    }
  })
);

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

playAgainButton.onclick = () => {
  resetGame();
  modal.style.display = "none";
};
