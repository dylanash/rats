var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname)))

app.get('/', function(req,res) {
  res.render('index.html')
})

app.listen(3000, function(){console.log('app is listening on port 3000')});