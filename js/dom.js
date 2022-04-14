const game = new Game();
game.start();

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      game.movePlayer('up');
      break;
    case "ArrowDown":
      game.movePlayer('down');
      break;
    case "ArrowRight":
      game.movePlayer('right');
      break;
    case "ArrowLeft":
      game.movePlayer('left');
      break;
  }
});