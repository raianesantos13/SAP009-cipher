

document.getElementById("encodebutton").addEventListener ("click", function encodeBtnFunction() {
  let encodeWord = document.getElementById("encodetext").value;
  let key = parseInt(document.getElementById("cipherkey").value);
  document.getElementById("etext").innerHTML = window.cipher.encode(key, encodeWord);
});

document.getElementById("decodebutton").addEventListener ("click", function decodeBtnFunction() {
  let decodeWord = document.getElementById("decodetext").value;
  let key = parseInt(document.getElementById("cipherkey").value);
  
  document.getElementById("dtext").innerHTML = window.cipher.decode(key, decodeWord);
    
});
