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
    roundResult.textContent = `Computer won this round!`;
    roundWeapons.textContent = `${capitalizedFirstLetter(
      result.computerWeapon
    )} beats ${capitalizedFirstLetter(result.playerWeapon)}.`;
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
};

const updateHealth = (loser, loserHealth = 0) => {
  const healthBar = document.querySelector(`.${loser.toLowerCase()}_health`);

  healthBar.style.width = `${MAX_HEALTH - loserHealth}%`;
};

const getGameWinner = (score) => {
  return Object.keys(score).find((key) => score[key] == 5);
};

const isGameOver = (score) => {
  return score.player == 5 || score.computer == 5;
};

weapons.forEach((weapon) =>
  weapon.addEventListener("click", (event) => {
    if (isGameOver(score)) {
      const gameWinner = getGameWinner(score);
      console.log(gameWinner);
    }

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
        updateHealth(result.loser, loserHealth);
      }
    }, 300);
    console.log(loserHealth);
  })
);
