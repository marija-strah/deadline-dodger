class Game {
    constructor() {
        this.player = null;

    }

    start() {
        this.player = new Player();
        //this.player.displayPlayer();
    
    }

    movePlayer(direction) {
        if (direction === 'up') {
            player.moveUp();
        } else if (direction === 'down') {
            player.moveDown();
        } else if (direction === 'right') {
            player.moveRight();
        } else if (direction === 'left') {
            player.moveLeft();
        }
    }
}

class Player {
    constructor() {
        this.positionX = 70;
        this.positionY = 70;
        this.domElement = 0;
    }

    moveUp() {
        if (this.positionY < 100) {
        this.positionY++; 
        }
    }

    moveDown() {
        if (this.positionY > 0) {
            this.positionY--;
        }
    }

    moveRight() {
        if (this.positionX < 100) {
        this.positionX++;
        }
    }

    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--;
        };
    }

    displayPlayer() {
        let board = document.getElementById('board');
        let myself = document.createElement('div');
        myself.className = "myself";
        board.appendChild(myself);
        return myself;
    }
}

class Deadline {
    constructor() {

    }
}

