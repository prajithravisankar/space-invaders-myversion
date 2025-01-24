class Spaceship {
    /**
     * creates a new Spaceship instance
     * @param {number} x - the initial x coordinate of the spaceship
     * @param {number} y - the initial y coordinate of the spaceship
     * @param {number} velocityX - the horizontal speed of the spaceship
     */
    constructor(x, y, velocityX) {
        this.x = x
        this.y = y
        this.velocityX = velocityX
        // will add stuff later as we go
    }

    /**
     * moves spaceship to the left by subtracting velocityX from the spaceships's current x position
     * @param {number} velocityX 
     * @returns {void}
     */
    moveLeft(velocityX) {
        return 0; // stub
    }

    /**
     * moves spaceship to the right by adding velocityX from the spaceship's current x position
     * @param {number} velocityX 
     * @returns {void}
     */
    moveRight(velocityX) {
        return 0; // stub
    }

    /**
     * shoots bullet from the spaceship
     * @returns {void}
     */
    shootBullets() {
        // stub
    }
}