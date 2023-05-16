let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const isGuessValid = (guess) => {
  return guess >= 0 && guess <= 10;
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (!isGuessValid(humanGuess)) {
    alert(
      "Your guess is out of range! Please enter a number between 0 and 10."
    );
    return false;
  }
  const humanDifference = Math.abs(humanGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);
  return humanDifference <= computerDifference;
};

const updateScore = (winner) =>
  winner === "human" ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
