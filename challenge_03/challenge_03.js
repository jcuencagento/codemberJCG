const fs = require('fs');

function checkPassword (password) {
    const [rule, pass ] = password.split(':');
    const [ numbers, letter ] = rule.split(' ');
    const [ min, max ] = numbers.split('-');
    const occurrences = pass.trim().split('').filter(c => c === letter).length;
    return { valid: occurrences >= min && occurrences <=max , password: pass.trim() };
}

async function spyCypher (file, cb) {
    let valid_passwords = [];
    let not_valid_passwords = [];
    fs.readFile(file, (err, data) => {
        if (err) {
            return cb(err);
        }
    
        data.toString().split(/\r?\n/).forEach(line =>  {
            const result = checkPassword(line);
            if (result.valid) {
                valid_passwords.push(result.password);
            } else {
                not_valid_passwords.push(result.password);
            }
        });
        
        return cb(null, { valid_passwords, not_valid_passwords });
    });
}

spyCypher('./challenge_03/encryption_polices.txt', (err, result_challenge_03) => {
    if (err) {
        console.log(err);
        return;
    }
    
    console.log('Challenge 03:');
    console.log(result_challenge_03.not_valid_passwords[41]);
    console.log('Secret third week:');
    console.log(result_challenge_03.not_valid_passwords[12]);
    return;
});