const Pangram = require('./Pangram');

describe('Pangram Class', () => {
  test('should inherit from Pangram', () => {
    const check = new Pangram();
    expect(check).toBeInstanceOf(Pangram);
  });

  test('should return true', () => {
    const check = new Pangram();
    expect(check.isPangram(String('The quick brown fox jumps over the lazy dog'))).toBe(Boolean(true));
  });

  test('should return false', () => {
    const check = new Pangram();
    expect(check.isPangram(String('The quick brown fox jumps over the dog'))).toBe(Boolean(false));
  });
});
