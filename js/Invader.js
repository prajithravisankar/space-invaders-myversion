class Invader {
    /**
     * creates a new Invader instance
     * @param {number} x 
     * @param {number} y 
     * @param {number} velocityX 
     * @param {number} velocityY 
     */
    constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX
        this.velocityY = velocityY
    }

    /**
     * given current x position of the spaceship, and velocityX, moves left by subtracting both
     * @returns {void}
     */
    moveLeft() {
        // stub
    }

    /**
     * given current x position of the spaceship, and velocityX, moves left by adding both 
     * @returns {void}
     */
    moveRight() {
        // stub
    }

    /**
     * given current y position of the spaceship, and velocityX, moves down by adding 
     * @returns {void}
     */
    moveDown() {
        // stub
    }

    /**
     * drops bomb 
     * @returns {void}
     */
    dropBomb() {
        // stub
    }
}