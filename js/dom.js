const player = new Player();

const deadline = new Deadline();

const game = new Game();
game.start();

/*
function createDomElement(className) {
  const board = document.getElementById('board');

  const newElm = document.createElement('div');
  newElm.className = className;

  board.appendChild(newElm);

  return newElm;
}*/
/*
function drawDomElem(instance) {
 
  instance.domElem.style.width = instance.width + "vw";
  instance.domElem.style.height = instance.height + "vh";

  instance.domElem.style.backgroundColor = "red";

  instance.domElem.style.left = instance.positionX + "vw";
  instance.domElem.style.bottom = instance.positionY + "vh";

}*/


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
  console.log(player);
});