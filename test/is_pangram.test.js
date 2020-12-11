const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBeTruthy();
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBeFalsy();
  });

  test('empty sentence', () => {
    // Arrange
    const empty = '';
    // Act
    const result = isPangram(empty);
    // Assert
    expect(result).toBeFalsy();
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const underscore = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
    // Act
    const result = isPangram(underscore);
    // Assert
    expect(result).toBeTruthy();
  });

  test('pangram with numbers', () => {
    // Arrange
    const withNumbers = 'the 9 quick brown foxes jumped over the 88 lazy dogs';
    // Act
    const result = isPangram(withNumbers);
    // Assert
    expect(result).toBeTruthy();
  });

  test('will work for a pangram with capital letters', () => {
    const text = 'The Quick Brown Fox Jumps Over The Lazy Dog';

    const result = isPangram(text);

    expect(result).toBeTruthy();
  });
});
