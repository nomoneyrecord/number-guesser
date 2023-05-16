let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDifference = Math.abs(humanGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);

  return humanDifference <= computerDifference; 
  }

const updateScore = (winner) => winner === 'human' ? humanScore++ : computerScore++; 


const advanceRound = () => computerScore >= humanScore || humanScore >= computerScore ? currentRoundNumber++ : 0; 