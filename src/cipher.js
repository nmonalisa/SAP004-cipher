//variáveis de configuração
const alphabet_length = 26;
const codeASC_first_letter = 65;
const codeAsc_space = 32;

const cipher = {
    //início de cipher.encode()
    encode: function(offset, string) {

        //Validação dos dados
        //campos vazios
        if (isNaN(offset) == true || string == "") {
            throw new TypeError("Os campos 'deslocamento' e 'mensagem' não podem estar vazios.");
            //offset nulo
        }
        //deslocamento nulo
        if (offset == 0) {
            throw new TypeError("O argumento 'deslocamento' deve ser maior que 0.");
            //mensagem não é do tipo string
        }

        //há números como caracteres no meio da mensagem
        for (let i = 0; i < string.length; i++) {
            if (string.charAt(i) == "0" ||
                string.charAt(i) == "1" ||
                string.charAt(i) == "2" ||
                string.charAt(i) == "3" ||
                string.charAt(i) == "4" ||
                string.charAt(i) == "5" ||
                string.charAt(i) == "6" ||
                string.charAt(i) == "7" ||
                string.charAt(i) == "8" ||
                string.charAt(i) == "9") {
                throw new TypeError("A mensagem não pode conter números.");
            }
        }


        //Codificação
        let encrypted_message = "";
        for (let i = 0; i < string.length; i++) {
            let codeASC_original = string.charCodeAt(i); //recupere o código ASC

            if (codeASC_original !== codeAsc_space) {
                let regular_code = codeASC_original - codeASC_first_letter; //calcule o código no alfabeto 'regular' (A-Z)
                let encrypted_letter_regular_code = (regular_code + offset) % alphabet_length; //descubra a posição da letra codificada
                let encrypted_letter_codeASC = encrypted_letter_regular_code + codeASC_first_letter; //retorne para o código ASC
                let encrypted_letter = String.fromCharCode(encrypted_letter_codeASC); //recupere qual caracter possui esse código ASC
                encrypted_message += encrypted_letter; //guarde esse caracter
            } else {
                encrypted_message += String.fromCharCode(codeASC_original);
            }
        }
        return encrypted_message;
    },
    //fim de cipher.encode()

    //inicio de cipher.decode()
    decode: function(offset, string) {
            let decrypted_message = "";

            for (let i = 0; i < string.length; i++) {
                let codeASC_original = string.charCodeAt(i);

                if (codeASC_original !== codeAsc_space) {
                    let regular_code = codeASC_original - codeASC_first_letter;
                    let decrypted_letter_regular_code = (regular_code - offset) % alphabet_length;

                    //tratamento de posições com valores negativos)
                    if (decrypted_letter_regular_code < 0) {
                        decrypted_letter_regular_code = parseInt(alphabet_length + decrypted_letter_regular_code);
                    }

                    let decrypted_letter_codeASC = decrypted_letter_regular_code + codeASC_first_letter;
                    let decrypted_letter = (String.fromCharCode(decrypted_letter_codeASC));
                    decrypted_message += decrypted_letter;
                } else {
                    decrypted_message += String.fromCharCode(codeASC_original);
                }
            }
            return decrypted_message;
        } //fim de cipher.decode()   
}
export default cipher;