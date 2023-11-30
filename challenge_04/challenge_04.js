const fs = require('fs');

function checkChecksum (file) {
    const [ filename, checksum ] = file.split('-');
    const array_filename = filename.trim().split('');
    const set_filename = [...new Set(array_filename)];
    let repeated = [];
    set_filename.forEach(char => {
        if (array_filename.filter(c => c === char).length > 1) {
            repeated.push(char);
        }
    });

    const real_checksum = set_filename.filter(c => !repeated.includes(c)).join('');
    return { valid: checksum === real_checksum, checksum: checksum };
}

async function checkFiles (file, cb) {
    let valid_files = [];
    let not_valid_files = [];
    fs.readFile(file, (err, data) => {
        if (err) {
            return cb(err);
        }
    
        data.toString().split(/\r?\n/).forEach(line =>  {
            const result = checkChecksum(line);
            if (result.valid) {
                valid_files.push(result.checksum);
            } else {
                not_valid_files.push(result.checksum);
            }
        });
        
        return cb(null, { valid_files, not_valid_files });
    });
}

checkFiles('./challenge_04/files_quarantine.txt', (err, result_challenge_04) => {
    if (err) {
        console.log(err);
        return;
    }
    
    console.log('Challenge 04:');
    console.log(result_challenge_04.valid_files[32]);
    return;
});