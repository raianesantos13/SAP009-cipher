window.cipher = {

  encode: encode,
  decode: decode
};

function encode(key, encodeWord) {

  let encodedResult = "";
  let i;
  let encodeFormula;

  for (i = 0; i < encodeWord.length; i++) {
    let indexLetter = encodeWord.charCodeAt(i);

    if (indexLetter >= 65 && indexLetter <= 90) {
      encodeFormula = ((indexLetter - 65 + key) % 26) + 65;
      let newLetter = String.fromCharCode(encodeFormula)


      encodedResult += newLetter;
    } else if (indexLetter >= 97 && indexLetter <= 122) {
      encodeFormula = ((indexLetter - 97 + key) % 26) + 97;
      let newLetter = String.fromCharCode(encodeFormula);
      encodedResult += newLetter;
    } else {

      encodedResult += encodeWord[i];

    }
  }
  return encodedResult;
}

function decode(key, decodeWord) {
  let decodedResult = "";
  let i;
  let decodeFormula;

  for (i = 0; i < decodeWord.length; i++) {
    let indexLetter2 = decodeWord.charCodeAt(i);

    if (indexLetter2 >= 65 && indexLetter2 <= 90) {
      decodeFormula = ((indexLetter2 - 90 - key) % 26 + 90);
      let newLetter2 = String.fromCharCode(decodeFormula);
      decodedResult += newLetter2;
    } else if (indexLetter2 >= 97 && indexLetter2 <= 122) {
      decodeFormula = ((indexLetter2 - 122 - key) % 26 + 122);
      let newLetter2 = String.fromCharCode(decodeFormula);
      decodedResult += newLetter2;
    } else {
      decodedResult += decodeWord[i];
    }
  }
  return decodedResult;
}

