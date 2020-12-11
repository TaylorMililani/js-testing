const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  test('isPalindrome() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a palindrome with only lower case', () => {
    // Arrange
    const text = 'racecar';
    // Act
    const result = isPalindrome(text);
    // Assert
    expect(result).toBeTruthy();
  });

  test('returns false if string is not a palidrome', () => {
     const text = 'pasta is good';

     const result = isPalindrome(text);

     expect(result).toBeFalsy();
  });

  test('returns true for empty string', () => {
    const empty = '';

    const result = isPalindrome(empty);

    expect(result).toBeTruthy();
  });

  test('returns true for string with 1 character', () => {
    const text = 'j';

    const result = isPalindrome(text);

    expect(result).toBeTruthy();
  });
});