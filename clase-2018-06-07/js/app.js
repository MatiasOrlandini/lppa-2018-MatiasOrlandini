console.log("gjgj");
var Play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells);

}

window.onload = function() {/* Se ejecuta luego de que se cargue todo el html */
  var btnPlay = Board.getPlayButton();
  btnPlay.onclick = Play;
}
