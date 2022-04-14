class Game {
  constructor() {
    this.player = null;
    this.deadlines = [];
    this.time = 0;
    this.board = document.getElementById("board");
    this.gameOver = document.getElementById("game-over-page");
    this.youWon = document.getElementById("win-page");
    this.intro = document.getElementById("instructions");
    this.beginBtn = document.getElementById("beginBtn");
  }

  instructions() {
   
    this.intro.style.display = 'block';
    this.board.style.display = "none";
    this.gameOver.style.display = "none";
    this.youWon.style.display = "none";

    /*this.beginBtn = document.createElement("button");
    beginBtn.innerText = "Begin 🏃"; */

    beginBtn.addEventListener('click', () => {this.start()
    //this.intro.remove()});
    //this.intro.appendChild(beginBtn);
  })
}

  start() {
    this.player = new Player();
    this.player.squarePlayer = this.player.displayPlayer();
    this.player.interactPlayer();
    this.movePlayer();

    this.board.style.display = "block";
    this.gameOver.style.display = "none";
    this.youWon.style.display = "none";
    this.intro.style.display = "none";

    let audio = new Audio('../benny-hill-theme.mp3');
    audio.play();

    setInterval(()=>{

      this.deadlines.forEach( (element) => {
      element.moveDeadline();
      element.interactDeadline();

      this.deadlineCollision(element);
      this.removeDeadline(element);
      });

      if (this.time % 11 === 0) {
        const newDeadline = new Deadline;
        newDeadline.squareDeadline = newDeadline.displayDeadline();
        this.deadlines.push(newDeadline);
      }
      this.time++;
    }, 150);
    
  }
/*
  // not working bc not an array
  removeDeadline(deadline) {
    if (deadline.positionY < 0) {
    this.deadlines.shift();
    deadline.squareDeadline.remove();
    
    console.log(deadline);
    }
  }*/
  
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

  removeDeadline(element) {
    if (element.positionX > 90) {
      element.squareDeadline.remove();
      this.deadlines.shift();
    }
  }

  deadlineCollision(element) {
    if (this.player.positionX < element.positionX + element.width &&
      this.player.positionX + this.player.width > element.positionX &&
      this.player.positionY < element.positionY + element.height &&
      this.player.height + this.player.positionY > element.positionY) {
        //alert('collision detected');
        this.board.style.display = "none"
        this.youWon.style.display = "none"
        this.gameOver.style.display = "block"
      } else if (this.player.positionY > 80 && this.player.positionY < 95) {
        this.board.style.display = "none"
        this.youWon.style.display = "block"
        this.gameOver.style.display = "none"
      }
  }
}


class Player {
  constructor() {
    this.positionX = 5;
    this.positionY = 0;
    this.height = 12;
    this.width = 5;
    this.squarePlayer = null; //  the DOM elem
  }

  moveUp() {
    if (this.positionY < 90) {
      this.positionY += 5;
    }
  }

  moveDown() {
    if (this.positionY > 1) {
      this.positionY -= 5;
    }
  }

  moveRight() {
    if (this.positionX < 90) {
      this.positionX += 5;
    }
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= 5;
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
    this.squarePlayer.style.width = this.width + "vw"
    this.squarePlayer.style.height = this.height + "vh"
    this.squarePlayer.style.left = this.positionX + "vw";
    this.squarePlayer.style.bottom = this.positionY + "vh";
  }
}

class Deadline {
    constructor() {
      //this.positionX = Math.random() * (50 - 0);
      //this.positionY = 50;
      this.linePositions = [15, 35, 55, 75]
      this.lineRandomIndex = Math.floor(Math.random()*(this.linePositions.length))
      this.squareDeadline = null;
      this.width = 10;
      this.height = 10;
      //this.positionY = Math.floor(Math.random() * (100 - this.width + 1));
      this.positionY = this.linePositions[this.lineRandomIndex];
      this.positionX = 0 - this.width;
      //this.speed = random number between 1 and 3 maybe
    }

    moveDeadline() {
      this.positionX++;


    /*
      if (this.positionX >= 95) {
        let board = document.getElementById("board");
        const deadlineToRemove = document.querySelector(".deadline");
        board.removeChild(deadlineToRemove)
        //deadlineToRemove.remove();

        //removes all of them
      }*/
    }

    displayDeadline() {
      let board = document.getElementById("board");
      let deadline = document.createElement("div");
      deadline.className = "deadline";
      board.appendChild(deadline);
      return deadline;
    }

    interactDeadline() {
      this.squareDeadline.style.width = this.width + "vw"
      this.squareDeadline.style.height = this.height + "vh"
      this.squareDeadline.style.left = this.positionX + "vw";
      this.squareDeadline.style.bottom = this.positionY + "vh";
    }
    
}

