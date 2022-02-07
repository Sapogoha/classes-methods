import Character from '../magician';

describe('this class creates a new character', () => {
  test('create a new character', () => {
    const character = new Character('Test', 'Magician');
    const result = {
      name: 'Test',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(character).toMatchObject(result);
  });
});
