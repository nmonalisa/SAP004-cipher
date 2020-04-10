 import cipher from './cipher.js';

 //tamanho dinâmico da janela do usuário
 window.resizeTo(window.innerWidth, window.innerHeight);

 //Recuperar e validar inputs do usuário
 const GetWordUser = () => document.querySelector("#encode_box").value.toUpperCase();
 const GetOffsetUser = () => parseInt(document.querySelector("#offset").value);

 //Definir manipuladores de evento
 const StartCoding = () => document.querySelector("#decode_box").value = cipher.encode(GetOffsetUser(), GetWordUser()).toLowerCase();


 const StartDecoding = () => document.querySelector("#decode_box").value = cipher.decode(GetOffsetUser(), GetWordUser()).toLowerCase();

 //Intercambiar palavra entre caixas de texto
 const ExchangeBox = () => {
     document.querySelector("#encode_box").value = document.getElementById("decode_box").value;
     document.querySelector("#decode_box").value = ""
 };

 //Reset
 const EraseBox = () => {
     document.querySelector("#encode_box").value = "";
     document.querySelector("#decode_box").value = "";
     document.querySelector("#offset").value = "";
 }

 //Mostrar mensagem de ajuda
 const ShowHelpMessage = () => document.querySelector("#help_balloon").style.opacity = 1;

 //Fechar mensagem de ajuda
 const CloseHelpMessage = () => document.querySelector("#help_balloon").style.opacity = 0;

 //Definir escutadores de evento
 document.querySelector("#code").addEventListener("click", StartCoding)
 document.querySelector("#decode").addEventListener("click", StartDecoding)
 document.querySelector("#exchange").addEventListener("click", ExchangeBox)
 document.querySelector("#erase").addEventListener("click", EraseBox)
 document.querySelector("#help_btn").addEventListener("click", ShowHelpMessage)
 document.querySelector("#close_popUp").addEventListener("click", CloseHelpMessage)