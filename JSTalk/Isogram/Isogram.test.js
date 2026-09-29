const Isogram = require('./Isogram');

describe('Isogram Class', () => {
  test('should inherit from Isogram', () => {
    const check = new Isogram();
    expect(check).toBeInstanceOf(Isogram);
  });

  test('should return true', () => {
    const check = new Isogram();
    expect(check.isIsogram(String('pharo'))
).toBe(Boolean(true));
  });

  test('should return false', () => {
    const check = new Isogram();
    expect(check.isIsogram(String('phaoro'))
).toBe(Boolean(false));
  });
});
