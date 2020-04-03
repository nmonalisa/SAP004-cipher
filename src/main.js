//ajustar tamanho da tela quando a janela for redimensionada pelo usuário
resizeScreen = () => window.resizeTo(window.innerWidth, window.innerHeight)

//variáveis globais
const alphabet_length = 26
const codeASC_first_letter = 65

//Codificação:
function EncodeWord() {
    let encrypted_word = new Array();

    //recuperando a palavra digitada
    let word_user = document.getElementById("encode_box").value.toUpperCase()
    let offset = parseInt(document.getElementById("offset").value)

    //teste de validação do campo 'deslocamento'
    if (isNaN(offset) === true) {
        return;
    }
    //codificando cada caracter da palavra
    for (let i = 0; i < word_user.length; i++) {
        let codeASC_original = word_user.charCodeAt(i); //recupere o código ASC
        let regular_code = codeASC_original - codeASC_first_letter; //calcule o código no alfabeto 'regular' (A-Z)
        let encrypted_letter_regular_code = (regular_code + offset) % alphabet_length //descubra a posição da letra codificada
        let encrypted_letter_codeASC = encrypted_letter_regular_code + codeASC_first_letter; //retorne para o código ASC
        let encrypted_letter = String.fromCharCode(encrypted_letter_codeASC); //recupere qual caracter possui esse código ASC
        encrypted_word.push(encrypted_letter); //guarde esse caracter
    }
    //output
    document.getElementById("decode_box").value = (encrypted_word.join("")).toLowerCase();
}

//Decodificação:
function DecodeWord() {
    let decrypted_word = new Array();

    //recuperando a palavra digitada
    let word_user = document.getElementById("encode_box").value.toUpperCase()
    let offset = parseInt(document.getElementById("offset").value)

    //teste de validação do campo 'deslocamento'
    if (isNaN(offset) === true) {
        return;
    }
    //decodificando cada caracter da palavra
    for (let i = 0; i < word_user.length; i++) {
        let codeASC_original = word_user.charCodeAt(i); //recupere o código ASC
        let regular_code = codeASC_original - codeASC_first_letter; //calcule o código no alfabeto 'regular' (A-Z)
        let decrypted_letter_regular_code = (regular_code - offset) % alphabet_length //descuba a posição da letra codificada

        //tratando posições com valores negativos)
        if (decrypted_letter_regular_code < 0) {
            decrypted_letter_regular_code = parseInt(alphabet_length + decrypted_letter_regular_code)
        }


        let decrypted_letter_codeASC = decrypted_letter_regular_code + codeASC_first_letter; //retorne para o código ASC
        let decrypted_letter = String.fromCharCode(decrypted_letter_codeASC); //recupere qual caracter possui esse código ASC
        decrypted_word.push(decrypted_letter); //guarde esse caracter
    }
    //output
    document.getElementById("decode_box").value = (decrypted_word.join("")).toLowerCase();
}