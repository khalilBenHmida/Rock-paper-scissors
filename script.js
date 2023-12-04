function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
  
    const result = determineWinner(userChoice, computerChoice);
  
    displayResult(userChoice, computerChoice, result);
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
  
  function displayResult(userChoice, computerChoice, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>You chose <strong>${userChoice}</strong>.</p>
      <p>The computer chose <strong>${computerChoice}</strong>.</p>
      <p>${result}</p>
    `;
  }
  