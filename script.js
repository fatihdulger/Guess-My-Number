'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// this was intro to DOM now we need to add event listener

// we need add event listener to input button check

/*const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; // dom result equal to number we just calculated and captured in variable called number;

document.querySelector('.check').addEventListener('click', function () {
  // function is event handler here! remember a function is a value and we need to pass it
  //console.log(document.querySelector('.guess').value); lets pass this to a variable and call the function
  const guess = Number(document.querySelector('.guess').value); // we need to convert to number as we will later on compare this to randomly generated number to guess

  console.log(guess, typeof guess);
  if (!guess) {
    // ! makes guess false in boolean it is 0
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
  }
}); */

// STEPS of Sub-Problems
//1 we didnt call the function becuase it willl be called when event takes place so click in our case
//2 above we need to define secret number to variable. we shoud define secret number outside the event button handler . secret number should be defined once. if inside each click will generate new secret number

//3 after if else statements and scenarios we need to go and make score side better
//4 so think how we can do this? each wrong guess should decrease it by 1 we can take the 20 refrence and decrease it after each wrong answer but better way is
//5 we have to add score to wrong scenarios
//6 reaching 0 by wrong answers. when score decreased with wrong answers we need  to display you lost when it comes down to 0;
//7 we need another if statement inside the wrong numbers if statements. to show you lost as score number infitnitely keeps going down and we need score show 0 as game is lost
let secretNumber = Math.trunc(Math.random() * 20) + 1; // we need to change to let because we need to use this below for .again event handler function

let score = 20; // we cant use const because it is immuteable. it hasto be let // this data is also called state data as it is directly related to main code and function. instead of relyin on DOM taking content and reading and writing on the screen.

let highScore = 0; // as 3rd step of the game we need to assing and capture highscore under correct guess section with if statement
//document.querySelector('.number').textContent = secretNumber; // but we dont want this here as it shows our secret number so we need move it to when guess correct below then it hasto show. dom result equal to number we just calculated and captured in variable called number;

// step -9,10 Refactoring= now we can even more simplify with recurring code of document.querySelector('.message').textContent = we need to create function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // we need to convert to number as we will later on compare this to randomly generated number to guess and highscore always start with 0 as game starts with 20

  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    // ! makes guess false in boolean it is 0
    //document.querySelector('.message').textContent = '⛔ No Number!'; to show our new function displayMessage works
    displayMessage('⛔ No Number!'); // this functin basiccaly covers whole code of "document.querySelector('.message').textContent" so that we can replace this bit of code wherever it happens to be with this new functin called displayMessage

    // When player's guess is right
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!'); //document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber; // to show when guess is correct!
    document.querySelector('body').style.backgroundColor = 'limegreen'; // manupulate style with JS
    document.querySelector('.number').style.width = '30rem'; // to make number div wider
    document.querySelector('h1').textContent = 'You Guessed it Right 🥳';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is higher than
  /*} else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0; // to make score 0 as it shows you lost but score says still 1
    }

    // when guess is lower than secret number ( normally we are checking if guess is different from random number)
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0; // to make score 0 as it shows you lost but score says still 1
    }
  }*/

  // we can DRY above code when they share same set of code with minor changes so below we will make it shorter and simpler as the big chunk is the same really.
  // when guess is wrong - this is new line of code to comment out above 2 wrong scenarios
  // when guess is different from secretNumber - using new else if for wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = remember we will use function called displayMessage
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*// we can DRY above code when they share same set of code with minor changes so below we will make it shorter and simpler as the big chunk is the same really.
// when guess is wrong - this is new line of code to comment out above 2 wrong scenarios
// when guess is different from secretNumber - using new else if for wrong

else if (guess !== secretNumber) {
  if(score > 1) {
    document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' :  '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
  }

} */

//Highscore implementation
// 1 - now we need another variable to store highscore
// 2 - then put this under correct guess bit of the main code with if statement now define a variable with let and name highScore
document.querySelector('.again').addEventListener('click', function () {
  // function is anonymous handler function because no name assigned.
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // reassinging the formula to secretNumber again we converted this into let secretNumber then used again. we pasted here as again clicked it will initiate new secretnumber

  //document.querySelector('.message').textContent = 'Start guessing :)';
  displayMessage('Start guessing :)');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('h1').textContent = 'Guess My Number!';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
