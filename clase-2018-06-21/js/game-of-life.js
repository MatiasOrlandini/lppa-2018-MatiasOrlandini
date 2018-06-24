var GameOfLife = {
  getBoardFromHTML: function(cells, cols) {
    var board = [];
    var row = [];
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var isAlive = cell.className === 'alive'; //Devuelve Verdadero o falso este tipo de comparacion
      row.push(isAlive);
      if (i % 5 === 4) { // Reviso que el modulo de i sobre 5 sea equivalente a 4, entonces, cuando el modulo es 4, ya las 5 primeras celdas se agregaron al array row. Tengoque hacer push a ese array y vaciarlo para cargar las siguientes 5.
        board.push(row);
        row = [];
      }
    }
    return board;
  }
};
