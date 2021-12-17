var express = require('express');
var app = express();

console.log('Hello World');
app.get('/', (req,res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/now', (req,res,next) => {
	req.time = new Date().toString();
	next();	
}, (req,res) => {
	res.send({time:req.time});
});

app.get('/json', (req,res) => {
const mySecret = process.env['MESSAGE_STYLE'];
if(mySecret == 'uppercase'){
  res.json({"message":"HELLO JSON"});
} else {
  res.json({"message":"Hello json"});
}
});



































 module.exports = app;
