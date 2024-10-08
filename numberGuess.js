// Program that asks the user to guess a number between 1 and 10.

// Select a random number between 1-10.
const correctNumber = Math.floor(Math.random() * 10) + 1; 

// Prompt the user for a guess function.
function guessNumber() {
  let userGuess;
  while (userGuess !== correctNumber) {
    userGuess = parseInt(prompt("Guess a number between 1-10:"));
    
    // To check if the user guess is lower, higher, or correct.
    if (userGuess < correctNumber) {
         alert(userGuess + " is too low!");
        } else if (userGuess > correctNumber) {
            alert(userGuess + " is too high!");
        } else if (userGuess === correctNumber) {
            alert(userGuess + " is correct!");
        } else {
            alert("Please enter a valid number.");
        }
    }
}
guessNumber();