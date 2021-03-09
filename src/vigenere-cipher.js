const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse'
  }

  encrypt(message, key) {
    this.validate(message, key);

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        result.push(String.fromCharCode((message[i].charCodeAt() + (key[j % key.length]).charCodeAt()) % 26 + 65));
        j++;
      } else {
        result.push(message[i]);
      }
    }
    return this.reverseResult(result);
  }


  decrypt(message, key) 
  {this.validate(message, key);

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        result.push(String.fromCharCode((message[i].charCodeAt() - (key[j % key.length]).charCodeAt() + 26) % 26 + 65));
        j++;
      } else {
        result.push(message[i]);
      }
    }
  
    return this.reverseResult(result);
  }

  validate(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Undefined parameter");
    }
  }

  reverseResult(result) {
    return this.type === 'reverse'? result.reverse().join(''): result.join('');
  }
}

module.exports = VigenereCipheringMachine;
