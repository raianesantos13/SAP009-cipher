import cipher from './cipher.js';


function encode() {
  const textoCifrar = document.querySelector("#textoParaCriptografar").value.trim();
  const offset = document.querySelector("#deslocaCifra").value;
  const resultado = cipher.encode(textoCifrar, parseInt(offset));
  document.querySelector("#textoCriptografado").innerText = resultado;
}


}
