//variáveis globais
const alphabet_length = 26
const codeASC_first_letter = 65
let word_user
let offset

// //Recuperando palavra digitada pelo usuário:
// function GetUserWordToEncode() {
//     let word_user = document.getElementById("encode_box").value.toUpperCase();
//     return word_user;
// }

// //Recuperando deslocamento:
// function GetOffset() {
//     let offset = parseInt(document.getElementById("offset").value);
//     return offset;
// }


//Codificando a palavra inserida:
function EncodeWord() {
    let encrypted_word = new Array();
    let word_user = document.getElementById("encode_box").value.toUpperCase()
    let offset = parseInt(document.getElementById("offset").value)
    for (let i = 0; i < word_user.length; i++) {
        let codeASC_original = word_user.charCodeAt(i); //recupere o código ASC
        let regular_code = codeASC_original - codeASC_first_letter; //calcule o código no alfabeto 'regular' (A-Z)
        let encrypted_letter_regular_code = parseInt(regular_code + offset) % alphabet_length; //descuba a posição da letra codificada
        let encrypted_letter_codeASC = encrypted_letter_regular_code + codeASC_first_letter; //retorne para o código ASC
        let encrypted_letter = String.fromCharCode(encrypted_letter_codeASC); //recupere qual caracter possui esse código ASC
        encrypted_word.push(encrypted_letter); //guarde esse caracter
    }
    document.getElementById("decode_box").value = (encrypted_word.join("")).toLowerCase();
}
EncodeWord