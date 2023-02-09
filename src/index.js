import cipher from "./cipher"

document.getElementById("encodebutton").addEventListener ("click", function() {
  const encodeWord = document.getElementById("encodetext").value;
  const key = parseInt(document.getElementById("cipherkey").value);
  document.getElementById("etext").innerHTML = cipher.encode(key, encodeWord);
});

document.getElementById("decodebutton").addEventListener ("click", function() {
  const decodeWord = document.getElementById("decodetext").value;
  const key = parseInt(document.getElementById("cipherkey").value);
  
  document.getElementById("dtext").innerHTML = cipher.decode(key, decodeWord);
    
});
