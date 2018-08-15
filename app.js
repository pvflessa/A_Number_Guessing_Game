
//Game Values

let min = 1,
    max=10,
    winningNum = getWinningNum(min,max),
    guessesLeft = 3;

// Variables


const game = document.querySelector('#game'),
      minNum = document.querySelector('.minNum'),
      maxNum = document.querySelector('.maxNum'),
      guessInput = document.querySelector('#guessInput'),
      guessBtn = document.querySelector('#guessBtn'),
      message = document.querySelector('.message');


//Assign min and max

minNum.textContent = min
maxNum.textContent = max


guessBtn.addEventListener('click',function(e){
  e.preventDefault()

   let guess = parseInt(guessInput.value)

   // Validate
     if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Please enter a number between ${min} and ${max}`, 'red');
     }

     // Check if won
     if(guess === winningNum){

        gameOver(true, `${winningNum} is correct, YOU WIN!`)

     } else {
       // Wrong number
   guessesLeft -= 1;

   if(guessesLeft === 0){
     // Game over - lost


       gameOver(false, `GAME OVER the winning number was ${winningNum}`)
   } else {
     // Game continues - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
     // Change border color
     guessInput.style.borderColor = 'red';

    //Clear input
    guessInput.value = ''
   }
     }

})

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

setMessage = function(msg , color){
  message.textContent = msg
  message.style.color = color
}

//Game over

function gameOver(won, msg){
  // Disable input
  guessInput.disabled = true;
  // Change border color
  let color

  if(won === true){
    color = 'green'
  }else if (won === false) {
    color = 'red'
  }
  guessInput.style.borderColor = color;
  //Set text color
  message.style.color = color
  // Set message
  setMessage(msg);

  // PLay Again?
 guessBtn.value = 'Play Again';
 guessBtn.className += 'play-again';
}
// Get Winning Number
function getWinningNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)
}
