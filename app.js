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
