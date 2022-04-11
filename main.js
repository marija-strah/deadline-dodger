class Game {
    constructor() {

    }

    start() {
        this.player = new Player();
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
    }
}

class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.domElement = null;
    }

    moveUp() {
        this.positionY++; 
    }

    moveDown() {
        this.positionY--;
    }

    moveRight() {
        this.positionX++;
    }

    moveLeft() {
        this.positionX--;
    }
}

class Obstacle {
    constructor() {

    }
}


document.addEventListener