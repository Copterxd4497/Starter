const fs = require('fs');
const http = require('http');
const url = require('url');

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//File 🍕🍔🍟

//blocking, synchronous way
//const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
//console.log(textIn);

//const textOut = `This is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', textOut);
//console.log('File written!');

//Non-blocking, asynchronous way
//fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//    if (err) return console.log('ERROR! 💀💀💀')
//    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//        console.log(data2);
//        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//            console.log(data3);
//
//            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                console.log('Your file has been written 😍');
//            })
//        });
//    });
//});
//console.log('Will read file!');


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//server 🍕🍔🍟
const server = http.createServer((req, res) => {
    const patName = req.url;
    if (patName === '/' || patName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (patName === '/product') {
        res.end('This is the product');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>This page can not be found!!!☠️☠️☠️</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});