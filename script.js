let score = JSON.parse(localStorage.getItem('score')) || {
   wins: 0,
   losses: 0,
   ties: 0,
};

updateScoreElement();
function updateScoreElement() {
   document.querySelector(
      '.js-score'
   ).innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

function playGame(playerMove) {
   const computerMove = pickComputerMove();
   let result = '';

   if (playerMove === 'Rock') {
      result =
         computerMove === 'Rock'
            ? 'Tie'
            : computerMove === 'Paper'
            ? 'You lose!'
            : 'You win!';
   } else if (playerMove === 'Paper') {
      result =
         computerMove === 'Rock'
            ? 'You win!'
            : computerMove === 'Paper'
            ? 'Tie'
            : 'You lose!';
   } else if (playerMove === 'Scissors') {
      result =
         computerMove === 'Rock'
            ? 'You lose!'
            : computerMove === 'Paper'
            ? 'You win!'
            : 'Tie';
   }

   if (result === 'You win!') score.wins++;
   else if (result === 'You lose!') score.losses++;
   else score.ties++;

   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML = `Result: ${result}`;
   document.querySelector('.js-moves').innerHTML = `Your move: ${getEmoji(
      playerMove
   )} ${playerMove} | Computer move: ${getEmoji(computerMove)} ${computerMove}`;
}

function pickComputerMove() {
   const moves = ['Rock', 'Paper', 'Scissors'];
   return moves[Math.floor(Math.random() * moves.length)];
}

function getEmoji(move) {
   return move === 'Rock' ? '✊' : move === 'Paper' ? '🖐️' : '✌️';
}
