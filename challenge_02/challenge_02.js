function miniCompiler (message) {
    let chars_to_print = '';
    let result = 0;
    if (message.length < 1) {
        return 'No message...';
    }

    [...message].forEach(char => {
        switch (char) {
            case '#':
                result++;
            break;

            case '@':
                result--;
            break;

            case '*':
                result *= result;
            break;

            default:
                chars_to_print += result.toString();
            break;
        };
    });

    return chars_to_print;
};


const message_midu = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
const result_challenge_02 = miniCompiler(message_midu);
console.log('Challenge 02:');
console.log(result_challenge_02);