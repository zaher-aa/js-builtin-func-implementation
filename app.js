// ! String Methods

// * charAt
String.prototype.CCharAt = function (idx) {
  let neededChar = '';

  for (let i = 0; i < this.length; i++) {
    if (i === idx) {
      neededChar = this[i];
      break;
    }
  }

  return neededChar ? neededChar : new Error('No Such idx');
};

// * concat

String.prototype.CConcat = function (other) {
  let word = this;

  for (let i = 0; i < other.length; i++) {
    word += other[i];
  }

  return word;
};

// * includes

String.prototype.CIncludes = function (slice) {
  if (typeof slice !== 'string') throw new TypeError('Must be a string');

  for (let i = 0; i < this.length; i++) {
    if (slice === this.substring(i, i + slice.length)) return true;
  }

  return false;
};

console.log('zaher'.CIncludes(''));
