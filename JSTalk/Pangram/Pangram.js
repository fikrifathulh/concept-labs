class Pangram {
  #str = String('');

  isPangram(args) {
    this.#str += args.toLowerCase();
    const asSet = new Set();

    for(let i = Number(0); i < this.#str.length; i++) {
      const char = this.#str[i];
      if (char >= 'a' && char <= 'z') {
        asSet.add(char);
        if (asSet.size === Number(26)) return Boolean(true);
      }
    }
    return Boolean(false);
  }
 }

module.exports = Pangram;
