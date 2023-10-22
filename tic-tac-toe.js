document.addEventListener('DOMContentLoaded', function () {
    // Select all square elements in the game board
    const squares = document.querySelectorAll('#board > div');
  
    // Loop through the squares and add the 'square' class to each
    squares.forEach(function (square) {
      square.classList.add('square');
    });
  });