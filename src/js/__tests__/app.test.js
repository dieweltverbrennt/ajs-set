import Team from '../app';

const character = {
  name: 'Character',
  type: 'Bowman',
  health: 90,
  level: 8,
  attack: 45,
  defence: 12,
};

const team = new Team();
team.add(character);

test('should not add an already existing character', () => {
  expect(() => team.add({
    name: 'Character',
    type: 'Bowman',
    health: 90,
    level: 8,
    attack: 45,
    defence: 12,
  })).toThrow('Error! The character has already been added!');
});

test('should add a different character correctly', () => {
  expect(() => {
    team.add({
      name: 'Character2',
      type: 'Bowman',
      health: 90,
      level: 8,
      attack: 45,
      defence: 12,
    });
  });
});

test('should return array without error and repeating', () => {
  const team2 = new Team();
  const character2 = {
    name: 'Character2',
    type: 'Bowman',
    health: 90,
    level: 8,
    attack: 45,
    defence: 12,
  };
  const character3 = character2;
  team2.addAll(character, character2, character3);
  expect(team2.toArray()).toEqual([character, character2]);
});

test('should return array', () => {
  const character2 = {
    name: 'Character2',
    type: 'Bowman',
    health: 90,
    level: 8,
    attack: 45,
    defence: 12,
  };
  team.add(character2);
  expect(team.toArray()).toEqual([character, character2]);
});
