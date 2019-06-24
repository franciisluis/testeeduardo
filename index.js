var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
                                
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});