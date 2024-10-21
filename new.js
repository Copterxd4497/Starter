const fs = require('fs');

const one = fs.readFileSync('./txt/input.txt', 'utf-8');
fs.writeFileSync('./txt/two.txt', one);