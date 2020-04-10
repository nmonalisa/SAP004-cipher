 import cipher from './cipher.js';

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

 const StartDecoding = () => cipher.decode(GetOffsetUser(), GetWordUser());

 //Intercambiar palavra entre caixas de texto
 const ExchangeBox = () => {
     document.getElementById("encode_box").value = document.getElementById("decode_box").value;
     document.getElementById("decode_box").value = ""
 };

 //Reset
 const EraseBox = () => {
     document.getElementById("encode_box").value = "";
     document.getElementById("decode_box").value = "";
     document.getElementById("offset").value = "";
 }

 //Mostrar mensagem de ajuda
 const ShowHelpMessage = () => document.querySelector("#help_balloon").style.opacity = 1;

 //Fechar mensagem de ajuda
 const CloseHelpMessage = () => document.querySelector("#help_balloon").style.opacity = 0;

 //Definir escutadores de evento
 document.getElementById("code").addEventListener("click", StartCoding)
 document.getElementById("decode").addEventListener("click", StartDecoding)
 document.getElementById("exchange").addEventListener("click", ExchangeBox)
 document.getElementById("erase").addEventListener("click", EraseBox)
 document.getElementById("help_btn").addEventListener("click", ShowHelpMessage)
 document.getElementById("close_popUp").addEventListener("click", CloseHelpMessage)