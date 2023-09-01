import Character from './character';

export default class Team {
  constructor() {
    this.teams = [];
  }

  addCharacter(personal) {
    this.teams.push(personal);
  }

  * [Symbol.iterator]() {
    for (const item of this.teams) {
      yield new Character(item);
    }
  }
}
