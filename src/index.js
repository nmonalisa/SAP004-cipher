 import cipher from './cipher.js';

 //  console.log(cipher);


 //tamanho dinâmico da janela do usuário
 window.resizeTo(window.innerWidth, window.innerHeight);

 //Recuperar e validar inputs do usuário
 const GetWordUser = () => {
     let string = document.getElementById("encode_box").value.toUpperCase();
     if (string !== "") {
         return string;
     } else {
         alert("Insira um texto para ser codificado.");
         throw "String is not defined"
     }
 };

 const GetOffsetUser = () => {
     let offset = parseInt(document.getElementById("offset").value);
     if (isNaN(offset) !== true) {
         return offset;
     } else {
         alert("O campo 'deslocamento' está vazio.");
         throw "Offset is not defined"
     }
 };
 //Definir manipuladores de evento
 const StartCoding = () => cipher.encode(GetOffsetUser(), GetWordUser());

 const StartDecoding = () =>
     cipher.decode(GetOffsetUser(), GetWordUser());

 //Definir escutadores de evento
 document.getElementById("code").addEventListener("click", StartCoding)
 document.getElementById("decode").addEventListener("click", StartDecoding)