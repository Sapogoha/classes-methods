import Character from '../bowman';

describe('this class creates a new character', () => {
  test('create a new character', () => {
    const character = new Character('Test', 'Bowman');
    const result = {
      name: 'Test',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(character).toMatchObject(result);
  });
});
