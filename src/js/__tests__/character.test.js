import Character from '../character';

describe('this class creates a new character', () => {
  test('create a new character with a name that is not a string', () => {
    expect(() => new Character(1111111, 'Bowman')).toThrowError(
      new Error('type of name must be a string'),
    );
  });

  test('create a new character with a way too short name', () => {
    expect(() => new Character('a', 'Bowman')).toThrowError(
      new Error('name must be longer than 2 characters'),
    );
  });

  test('create a new character with a way too long name', () => {
    expect(
      () => new Character('This name is way too long', 'Bowman'),
    ).toThrowError(new Error('name must be shorter than 10 characters'));
  });

  test('create a new character with a type that is not a string', () => {
    expect(() => new Character('Test', 111111)).toThrowError(
      new Error('type of type must be a string'),
    );
  });

  test('create a new character with a wrong type', () => {
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    expect(() => new Character('Test', 'Test')).toThrowError(
      new Error(`type must be one of those 6: ${types}`),
    );
  });

  test('create a new character with a correct name', () => {
    const character = new Character('Test', 'Bowman');
    expect(character.name).toBe('Test');
  });

  test('create a new character with a correct type', () => {
    const character = new Character('Test', 'Bowman');
    expect(character.type).toBe('Bowman');
  });

  test('create a new character', () => {
    const character = new Character('Test', 'Bowman');
    const result = {
      name: 'Test',
      type: 'Bowman',
      health: 100,
      level: 1,
    };
    expect(character).toMatchObject(result);
  });
});
