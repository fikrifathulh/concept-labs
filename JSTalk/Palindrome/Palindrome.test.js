const Palindrome = require('./Palindrome');

describe('Palindrome Class', () => {
  test('should inherit from Palindrome', () => {
    const check = new Palindrome();
    expect(check).toBeInstanceOf(Palindrome);
  });

  test('should return true', () => {
    const check = new Palindrome();
    expect(check.isPalindrome(String('eye'))).toBe(Boolean(true));
  });

  test('should return false', () => {
    const check = new Palindrome();
    expect(check.isPalindrome(String('ear'))).toBe(Boolean(false));
  });
});
