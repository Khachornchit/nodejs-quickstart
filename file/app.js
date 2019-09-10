const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

const dir = fs.readdir('./', function (err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log('fs.readdir() ...');
        console.log(files);
    }
})