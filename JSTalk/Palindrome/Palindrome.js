class Palindrome {
  #str = String('');

  isPalindrome(args) {
    this.#str += args;
    const reversedStr = Array(...this.#str).reverse().join('');
    if (this.#str === reversedStr) {
      return Boolean(true);
    }
    return Boolean(false);
  }
}

module.exports = Palindrome;
