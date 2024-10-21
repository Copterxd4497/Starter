const fs = require('fs');

const one = fs.readFileSync('./txt/fuck.txt', 'utf-8');
const two = fs.readFileSync('./txt/off.txt', 'utf-8');
fs.writeFileSync('./txt/two.txt', `This is only thing we know about this file\n${one}\n${two}`);

