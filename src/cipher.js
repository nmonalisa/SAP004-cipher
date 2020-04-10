//variáveis de configuração
const alphabet_length = 26;
const codeASC_first_letter = 65;
const codeAsc_space = 32;

const cipher = {
    encode: function(offset, string) {
        let encrypted_word = new Array();

        for (let i = 0; i < string.length; i++) {
            let codeASC_original = string.charCodeAt(i); //recupere o código ASC

            if (codeASC_original !== codeAsc_space) {
                let regular_code = codeASC_original - codeASC_first_letter; //calcule o código no alfabeto 'regular' (A-Z)
                let encrypted_letter_regular_code = (regular_code + offset) % alphabet_length //descubra a posição da letra codificada
                let encrypted_letter_codeASC = encrypted_letter_regular_code + codeASC_first_letter; //retorne para o código ASC
                let encrypted_letter = String.fromCharCode(encrypted_letter_codeASC).toUpperCase(); //recupere qual caracter possui esse código ASC
                encrypted_word.push(encrypted_letter).toUpperCase; //guarde esse caracter
            } else {
                encrypted_word.push(String.fromCharCode(codeASC_original));
            }
        }
        //output
        document.getElementById("decode_box").value = (encrypted_word.join("")).toLowerCase();
    },

    decode: function(offset, string) {
        let decrypted_word = new Array();

        for (let i = 0; i < string.length; i++) {
            let codeASC_original = string.charCodeAt(i);

            if (codeASC_original !== codeAsc_space) {
                let regular_code = codeASC_original - codeASC_first_letter;
                let decrypted_letter_regular_code = (regular_code - offset) % alphabet_length

                //tratamento de posições com valores negativos)
                if (decrypted_letter_regular_code < 0) {
                    decrypted_letter_regular_code = parseInt(alphabet_length + decrypted_letter_regular_code)
                }

                let decrypted_letter_codeASC = decrypted_letter_regular_code + codeASC_first_letter;
                let decrypted_letter = (String.fromCharCode(decrypted_letter_codeASC)).toLowerCase();
                decrypted_word.push(decrypted_letter);
            } else {
                decrypted_word.push(String.fromCharCode(codeASC_original));
            }
        }
        document.getElementById("decode_box").value = (decrypted_word.join("")).toLowerCase();
    }
}
export default cipher;