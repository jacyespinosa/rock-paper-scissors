
// Create a list variable named ‘choices’.
// -It contains ‘Rocks’, ‘Papers’, ‘Scissors’
const choices = ['Rock', 'Paper', 'Scissors'];

// Create a function name computerPlay
// 	-This function will basically return a random string from the choices array.
function computerPlay(choices){
    let result = choices[Math.floor(Math.random()*choices.length)].toUpperCase()
    return result
  };

// Create a function that plays a single round of Rock Paper Scissors.
//The function should take two parameters - the playerSelection and computerSelection
function letsPlay(playerSelection, computerSelection){
    let winner = ''
// -Then compare the userChoice and the computerChoice by using switch statements:
// 	-Expression is computerChoice
    switch(computerSelection){
        // -Case 1 would be ‘Rock’
        // 		- If computerChoice is ‘Rock’ and userChoice is ‘Paper’:
        // 		  -Change the winner variable to 'User'
        // 		-Else if computerChoice is ‘Rock’ and userChoice is ‘Scissor’:
        // 				-Change the winner variable to 'Computer'
        // 		-Else
        // 				-Change the winner variable to 'Tie'
      case 'ROCK':
        if (playerSelection == 'PAPER'){
          winner = 'User'
          return winner;
          break;
        }else if (playerSelection == 'SCISSORS'){
          winner = 'Computer'
          return winner;
          break;
        }else{
          winner = 'Tie'
          return winner;
          break;
        }
          //-Case 2 would be ‘Paper’
          // 	- If computerChoice is ‘Paper’ and userChoice is ‘Scissor’:
          // 			-Change the winner variable to 'User'
          // 	- If computerChoice is ‘Paper’ and userChoice is ‘Rock’:
          // 			-Change the winner variable to 'Computer'
          // 	- If computerChoice is ‘Paper’ and userChoice is ‘Paper’:
          // 			-Change the winner variable to 'Tie'
      case 'PAPER':
        if (playerSelection == 'SCISSORS'){
          winner = 'User'
          return winner;
          break;
        }else if (playerSelection == 'ROCK'){
          winner = 'Computer'
          return winner;
          break;
        }else{
          winner = 'Tie'
          return winner;
          break;
        }
          //-Case 3 would be ‘Scissor’
          // 	- If computerChoice is ‘Scissor’ and userChoice is ‘Rock’:
          // 			-Change the winner variable to 'User'
          // 	- If computerChoice is ‘Scissor’ and userChoice is ‘Paper’:
          // 			-Change the winner variable to 'Computer'
          // 	- If computerChoice is ‘Scissor’ and userChoice is ‘Scissor’:
          // 			-Change the winner variable to 'Tie'
      case 'SCISSORS':
        if (playerSelection == 'ROCK'){
          winner = 'User'
          return winner;
          break;
        }else if (playerSelection == 'PAPER'){
          winner = 'Computer'
          return winner;
          break;
        }else{
          winner = 'Tie'
          return winner;
          break;
        }
    }
}
//Create a function to ask user for prompt
function userPrompt(){
  let correctChoice = true
  while (correctChoice){
    let userChoice = prompt("Rock, Paper or Scissors", "").toUpperCase();
    if ((userChoice == 'ROCK') || (userChoice == 'PAPER') || (userChoice == 'SCISSORS')){
      correctChoice = false;
      return userChoice;
    }else{
      alert('Please enter the correct word: Rock, Paper, or Scissors');
    }
  }
}

function game(){
  //Create variables userScore and computerScore to track the user and the computer's score
  let userScore = 0;
  let computerScore = 0;
  // Create a for loop. If i is > 5, then the game is over. Whoever has the highest points, win the game.
  for (let i = 1; i <= 5; i++){
  //Call userPrompt() to ask user for a choice
    let userChoice = userPrompt();
  //Create a variable named computerChoice
    let computerChoice = computerPlay(choices);

    let result = letsPlay(userChoice, computerChoice);
    switch(result){
      case 'User':
        userScore += 1;
        console.log(`You played ${userChoice} and the computer played ${computerChoice} - You won!
          Your current score: ${userScore}
          Computer's current score: ${computerScore}`);
        break;
      case 'Computer':
        computerScore += 1;
        console.log(`You played ${userChoice} and the computer played ${computerChoice} - You lost!
          Your current score: ${userScore}
          Computer's current score: ${computerScore}`);
        break;
      case "Tie":
        console.log(`You played ${userChoice} and the computer played ${computerChoice} - It's a tie!
        Your current score: ${userScore}
        Computer's current score: ${computerScore}`);
        break;
    }

    }
  // Write an if statement to compare who has the highest score.
  if (userScore > computerScore){
    return `You scored ${userScore}, while the computer scored ${computerScore}: YOU WON!!!`;
  }else if (userScore < computerScore){
    return `You scored ${userScore}, while the computer scored ${computerScore}: YOU LOST!!!`;
  }
  else{
    return `You scored ${userScore}, and the computer scored ${computerScore}: IT'S A TIE!!!`;
  }

}
