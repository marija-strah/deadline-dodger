class Game {
  constructor() {
    //this.player = null;
    this.deadline = null;
    this.deadlines = [];
    this.time = 0;
  }

  start() {
    this.player = new Player();
    this.player.squarePlayer = this.player.displayPlayer();
    this.player.interactPlayer();
    this.movePlayer();

    this.deadline = new Deadline();
    this.deadline.squareDeadline = this.deadline.displayDeadline();
    this.deadline.interactDeadline(deadline);
    deadline.moveDeadline();

    setInterval(()=>{
      this.deadlines.forEach( (deadline) => {
      this.deadline.moveDeadline(deadline);
      this.deadline.interactDeadline(deadline);
      // this.deadlineCollision();
      //console.log(this.deadline);
      });

      if (this.time % 30 === 0) {
        const newDeadline = new Deadline;
        newDeadline.squareDeadline = this.deadline.displayDeadline();
        this.deadlines.push(newDeadline);
      }
      this.time++;
    }, 250);
    
  }

  // not working bc not an array
  removeDeadline(deadline) {
    if (deadline.positionY < 0) {
    this.deadlines.shift();
    deadline.squareDeadline.remove();
    
    console.log(deadline);
    }
  }

  
  movePlayer(direction) {
    if (direction === "up") {
      this.player.moveUp();
    } else if (direction === "down") {
      this.player.moveDown();
    } else if (direction === "right") {
      this.player.moveRight();
    } else if (direction === "left") {
      this.player.moveLeft();
    }
    this.player.interactPlayer(); // after every move we check where the player is
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
      //this.positionX = Math.random() * (50 - 0);
      this.positionX = 0;
      this.positionY = 50;
      this.squareDeadline = null;
      this.width = 10;
      this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
    }

    moveDeadline() {
      this.positionX++;
      if (this.positionX >= 100) {

      }
    }

    displayDeadline() {
      let board = document.getElementById("board");
      let deadline = document.createElement("div");
      deadline.className = "deadline";
      board.appendChild(deadline);
      return deadline;
    }

    interactDeadline(deadline) {
      deadline.squareDeadline.style.left = this.positionX + "vw";
      deadline.squareDeadline.style.bottom = this.positionY + "vh";
    }
    
}

