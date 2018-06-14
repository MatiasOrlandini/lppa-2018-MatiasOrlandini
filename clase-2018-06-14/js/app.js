console.log("sdfsdfs");

var play = function(){
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}

var init = function(){
  Board.createCells();
  var cells = Board.getCells();
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = Cell.toggle;
  }
  // var btnPlay = Board.getPlayButton();
  // btnPlay.onclick = play;
}


window.onload = init;
