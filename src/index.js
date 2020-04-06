 import cipher from './cipher.js';

 //  console.log(cipher);


 //tamanho dinâmico da janela do usuário
 //  let resizeScreen = () => window.resizeTo(window.innerWidth, window.innerHeight);

 //Recuperar inputs do usuário
 const GetWordUser = () => document.getElementById("encode_box").value.toUpperCase();

 const GetOffsetUser = () => parseInt(document.getElementById("offset").value);

 //Definir manipuladores de evento
 const StartCoding = () => cipher.encode(GetOffsetUser(), GetWordUser());

 const StartDecoding = () =>
     cipher.decode(GetOffsetUser(), GetWordUser());

 //Definir escutadores de evento
 document.getElementById("code").addEventListener("click", StartCoding)
 document.getElementById("decode").addEventListener("click", StartDecoding)