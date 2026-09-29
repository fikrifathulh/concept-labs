const Counter = require('./Counter');

describe('Counter Class', () => {
  test('should inherit from Counter', () => {
    const c1 = new Counter();
    const c2 = new Counter();
    expect(c1).toBeInstanceOf(Counter);
    expect(c2).toBeInstanceOf(Counter);
  });

  test('should increment the state', () => {
    const c1 = new Counter();
    const c2 = new Counter();
    c1.increment();
    c2.increment();
    c2.increment();
    expect(c1.showCurrentState()).toBe(Number(1));
    expect(c2.showCurrentState()).toBe(Number(2));
  });

  test('should increment the state by two', () => {
    const c1 = new Counter();
    const c2 = new Counter();
    c1.incrementByTwo();
    expect(c1.showCurrentState()).toBe(Number(2));
    c2.incrementByTwo();
    c2.incrementByTwo();
    expect(c2.showCurrentState()).toBe(Number(4));
  });

  test('should decrement the state', () => {
    const c1 = new Counter();
    const c2 = new Counter();
    c1.incrementByTwo();
    c1.decrement();
    c2.incrementByTwo();
    c2.incrementByTwo();
    c2.decrement();
    expect(c1.showCurrentState()).toBe(Number(1));
    expect(c2.showCurrentState()).toBe(Number(3));
  });
});
