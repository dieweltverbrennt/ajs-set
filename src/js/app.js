export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(character)) {
        throw new Error('Error! The character has already been added!');
      }
    });
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
    return this;
  }

  toArray() {
    return Array.from(this.members);
  }
}
