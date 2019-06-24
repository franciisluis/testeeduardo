let app = require('express')();

app.get('/', function(req, res){
  res.sendFile("apresentacao.html");
});

app.use('/', router);
app.listen(process.env.port || 3000);

