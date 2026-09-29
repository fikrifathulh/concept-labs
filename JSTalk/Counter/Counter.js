class Counter {
  #count = new Number(0);

  increment() {
      return this.#count += new Number(1);
  }

  incrementByTwo() {
    this.increment();
    this.increment();
  }

  decrement() {
      return this.#count -= new Number(1);
  }

  showCurrentState() {
    return this.#count;
  }
}

module.exports = Counter;
