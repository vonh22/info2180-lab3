document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('#board > div');
  squares.forEach(function (square) {
    square.classList.add('square');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('#board > div');
  const status = document.getElementById('status');
  let currentPlayer = 'X';
  const gameState = ["", "", "", "", "", "", "", "", ""];

  function checkWinner(player) {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]            
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (gameState[a] === player && gameState[b] === player && gameState[c] === player) {
        return true;
      }
    }
    return false;
  }

  squares.forEach(function (square, index) {
    square.addEventListener('mouseenter', function () {
      if (!square.classList.contains('X') && !square.classList.contains('O')) {
        square.classList.add('hover');
      }
    });

    square.addEventListener('mouseleave', function () {
      square.classList.remove('hover');
    });

    square.addEventListener('click', function () {
      if (!square.classList.contains('X') && !square.classList.contains('O')) {
        square.classList.add(currentPlayer);
        square.textContent = currentPlayer;
        gameState[index] = currentPlayer;

        if (checkWinner(currentPlayer)) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          status.classList.add('you-won');
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });

  const newGameButton = document.querySelector('.btn'); 
  newGameButton.addEventListener('click', function () {
    squares.forEach(function (square) {
      square.textContent = '';
      square.classList.remove('X', 'O', 'hover');
    });
    gameState.fill('');
    status.classList.remove('you-won');
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    currentPlayer = 'X'; 
  });
});
