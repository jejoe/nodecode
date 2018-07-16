const express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMsg: 'Unable'
    });
});

app.listen(3000);