const fs = require('fs');

function checkCSV (user) {
    const [ id, username, email, age, location ] = user.split(',');
    const alphanumeric = /^[a-zA-Z0-9]+$/;
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numeric = /^\d+$/;

    if (
        (!id || !id.match(alphanumeric)) ||
        (!username || !username.match(alphanumeric)) ||
        (!email || !email.match(mail)) ||
        (age && !age.match(numeric)) ||
        (location && !typeof location === 'string')
    ) {
        return { valid: false, username: username };
    }

    return { valid: true, username: username };
}

async function checkUsers (file, cb) {
    let valid_users = [];
    let not_valid_users = [];
    fs.readFile(file, (err, data) => {
        if (err) {
            return cb(err);
        }
    
        data.toString().split(/\r?\n/).forEach(line =>  {
            const result = checkCSV(line);
            if (result.valid) {
                valid_users.push(result.username);
            } else {
                not_valid_users.push(result.username);
            }
        });
        
        return cb(null, { valid_users, not_valid_users });
    });
}

checkUsers('./challenge_05/database_attacked.txt', (err, result_challenge_05) => {
    if (err) {
        console.log(err);
        return;
    }
    
    let message = [];
    result_challenge_05.not_valid_users.forEach(user => message.push(user.charAt(0)));
    console.log('Challenge 05:');
    console.log(message.join(''));
    return;
});