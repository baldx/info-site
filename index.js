const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html')); //__dirname is global variable in node.js, represents the directory name of the current module
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.use((req, res) => { //app.use() is a middleware that is executed for every incoming request
    res.status(404).sendFile(path.join(__dirname, '404.html'))//if status is 404, send to the error page
})

app.listen(port, () => {
    console.log('it works');
})

