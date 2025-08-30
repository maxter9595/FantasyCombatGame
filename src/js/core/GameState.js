import themes from '../utils/themes';
import PositionedCharacter from '../models/PositionedCharacter';

import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Undead from '../characters/Undead';
import Zombie from '../characters/Zombie';

export default class GameState {
    /**
     * Initializes the GameState instance with the provided game controller.
     * @param {GameController} gameController - The game controller managing
     * the game flow and logic.
     */
    constructor(gameController) {
        if (!gameController) {
            throw new Error(
                'GameController instance is required',
            );
        }
        this.gameController = gameController;
    }

    /**
     * Converts an array of character data into an array of positioned characters.
     * Each character is instantiated based on the character type and its stats.
     * @param {Array} characters - An array of character data objects with properties
     * like type, health, attack, and defence.
     */
    /* eslint-disable class-methods-use-this */
    getPositionedCharacters(characters) {
        const classList = {
            Bowman,
            Daemon,
            Magician,
            Swordsman,
            Undead,
            Zombie,
        };

        return characters.map((item) => {
            const character = new classList[item.character.type](
                item.character.level,
            );

            character.health = item.character.health;
            character.defence = item.character.defence;
            character.attack = item.character.attack;

            return new PositionedCharacter(character, item
                .position);
        });
    }

    /**
     * Restores the game state from the provided state object.
     * @param {Object} state - The state object containing the saved game data.
     */
    from(state) {
        if (!state) {
            throw new Error('Got wrong state');
        }

        try {
            this.gameController.gamePlay.level = state.level;
            this.gameController.activeCharacter = undefined;
            this.gameController.gamePlay.boardSize = state.boardSize;
            this.gameController.gamePlay.score = state.score;

            const theme = Object.values(themes)[(state.level - 1) % 4];
            this.gameController.gamePlay.drawUi(theme);

            this.gameController.userPositionedCharacters = this
                .getPositionedCharacters(state.userPositionedCharacters);
            this.gameController.enemyPositionedCharacters = this
                .getPositionedCharacters(state.enemyPositionedCharacters);

            this.gameController.gamePlay.deselectAllCells();
            this.gameController.gamePlay.redrawPositions([
                ...this.gameController.userPositionedCharacters,
                ...this.gameController.enemyPositionedCharacters,
            ]);
        } catch (e) {
            throw new Error('Got wrong state data');
        }
    }
}
