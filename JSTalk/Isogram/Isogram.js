class Isogram {
  #str = new String('');

  isIsogram(args) {
    this.#str += args;
    const asSet = new Set(this.#str);
    if (this.#str.length === asSet.size) {
      return Boolean(true);
    }
    return Boolean(false);
  }
}

module.exports = Isogram;
