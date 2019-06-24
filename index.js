var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/terminal_WebShell.html', function(req, res){
  res.sendFile(path.join(__dirname+'/terminal_WebShell.html'));
});

// app.set('images', __dirname + '/images');
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/js', express.static('js'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});