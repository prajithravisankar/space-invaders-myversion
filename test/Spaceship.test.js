import Spaceship from '../js/Spaceship.js';

describe('Spaceship', () => {
    let spaceship;

    beforeEach(() => {
        spaceship = new Spaceship(0, 0, 5);
    });

    test('constructor sets initial properties correctly', () => {
        expect(spaceship.x).toBe(0);
        expect(spaceship.y).toBe(0);
        expect(spaceship.velocityX).toBe(5);
    });

    test('moveLeft subtracts velocityX from x', () => {
        spaceship.moveLeft();
        expect(spaceship.x).toBe(-5);
    })

    test('moveLeft adds velocityX to x', () => {
        spaceship.moveRight();
        expect(spaceship.x).toBe(5);
    })
});