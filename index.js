const http = require('http');
const fs = require('fs');
const path = require('path'); //imports

const server = http.createServer((req, res) => { //creates a server
    let filePath = '.' + req.url //stores the file path as a variable to know where to go

    if (filePath === './') filePath = './index.html'; //if statements checking the url and setting the filepath to that file in the system (fs)
    else if (filePath === './about') filePath = './about.html';
    else if (filePath === './contact-me') filePath = './contact-me.html';

    fs.readFile(filePath, (err, data) => { //reads filePath
        if (err) { //if error
            fs.readFile('./404.html', (err, data) => { //read the 404 html page
                res.writeHead(404, { 'Content-Type': 'text/html'}) //define statuscode & type
                res.end(data); // returns the data from the file in hex code and converts it, displaying on page
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data)
        }
    })
})

server.listen(8080); //makes it possible to visit http://localhost:8080/