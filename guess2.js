function numberGuess(){
    let secretNum = Math.floor(Math.random() * 10) + 1;
    let guess = 0;
    while (guess < 10){
        let guessNum = parseInt(prompt("Guess a number between 1 and 10:"));
    
        if (secretNum === guessNum){
            alert("You guess the correct number!");
            break;
        } else if (secretNum < guessNum){
            alert("Too high!");
            guess++;
        } else{
            alert("Too low");
            guess++;
        }
        if (guess === 10){
            alert("Attemp reach the limit");
        }
    }
    }