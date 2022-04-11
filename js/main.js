class Game {
    constructor() {
        this.player = null;

    }

    start() {
        this.player = new Player();
        // this.player.getPlayer();

        this.player.squarePlayer = this.player.displayPlayer();

        this.player.interactPlayer();
        this.movePlayer();
    }

    movePlayer(direction) {
        if (direction === 'up') {
            this.player.moveUp();
        } else if (direction === 'down') {
            this.player.moveDown();
        } else if (direction === 'right') {
            this.player.moveRight();
        } else if (direction === 'left') {
            this.player.moveLeft();
        }
        this.player.interactPlayer();       // after every move we check where the player is
    }
}

class Player {
  constructor() {
    this.positionX = 45;
    this.positionY = 45;
    this.squarePlayer = null; // like the DOM elem
  }

  moveUp() {
    if (this.positionY < 90) {
      this.positionY += 2;
    }
  }

  moveDown() {
    if (this.positionY > 1) {
      this.positionY -= 2;
    }
  }

  moveRight() {
    if (this.positionX < 90) {
      this.positionX += 2;
    }
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= 2;
    }
  }

  displayPlayer() {
    let board = document.getElementById("board");
    let myself = document.createElement("div");
    myself.className = "myself";
    board.appendChild(myself);
    return myself;
  }

  interactPlayer() {
    this.squarePlayer.style.left = this.positionX + "vw";
    this.squarePlayer.style.bottom = this.positionY + "vh";
  }
}

class Deadline {
    constructor() {

    }
}