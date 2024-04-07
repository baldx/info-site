const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url

    if (filePath === './') filePath = './index.html';
    else if (filePath === './about') filePath = './about.html';
    else if (filePath === './contact-me') filePath = './contact-me.html';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            fs.readFile('./404.html', (err, data) => {
                res.writeHead(404, { 'Content-Type': 'text/html'})
                res.end(data);
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data)
        }
    })
})

server.listen(8080);