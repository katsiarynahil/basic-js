class VigenereCipheringMachine {

  defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(direct) {
    this.direct = direct || typeof direct === "undefined";
  }

  encrypt(message, key) {
    if(typeof message === "undefined" || typeof key === "undefined"){
      throw new Error();
    }

    message = message.toUpperCase();

    let gamma = this.makeRepeatingKey(key, message.length);
    let encryptedMessage = '';
    let q = this.defaultAlphabet.length;
    let skippedChars = 0;

    for(let i = 0; i < message.length; i++){
      let letterIndex = this.defaultAlphabet.indexOf(message[i]);
      let codeIndex = this.defaultAlphabet.indexOf(gamma[i - skippedChars]);

      if(letterIndex < 0){
        encryptedMessage += message[i];
        skippedChars += 1;
      } else {
        let index = (q + letterIndex + codeIndex)% q;
        encryptedMessage += this.defaultAlphabet.charAt(index);
      }
    }
    return this.direct? encryptedMessage : encryptedMessage.split("").reverse().join("");
  }    

  decrypt(encryptedMessage, key) {
    if(typeof encryptedMessage === "undefined" || typeof key === "undefined"){
      throw new Error();
    }

    let gamma = this.makeRepeatingKey(key, encryptedMessage.length);
    let decryptedMessage = '';
    let q = this.defaultAlphabet.length;
    let skippedChars = 0;

    for(let i = 0; i < encryptedMessage.length; i++){
      let letterIndex = this.defaultAlphabet.indexOf(encryptedMessage[i]);
      let codeIndex = this.defaultAlphabet.indexOf(gamma[i - skippedChars]);

      if(letterIndex < 0){
        decryptedMessage += encryptedMessage[i];
        skippedChars += 1;
      } else {
        let index = (q + letterIndex - codeIndex)% q;
        decryptedMessage += this.defaultAlphabet.charAt(index);
      }
    }
    return this.direct? decryptedMessage : decryptedMessage.split("").reverse().join("");
    
  }

  makeRepeatingKey(key, messageLength){
    let upperCaseKey  = key.toUpperCase();
    let repeatingKey = upperCaseKey;
    while(repeatingKey.length < messageLength){
      repeatingKey += upperCaseKey;
    }
    return repeatingKey.substring(0, messageLength);
  }
}

module.exports = VigenereCipheringMachine;
