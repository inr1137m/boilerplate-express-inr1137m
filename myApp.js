var express = require('express');
var app = express();

app.use('/public', express.static(`${__dirname}/public`));

app.use('/json', (req,res,next) => {
	console.log(req.method+" "+req.path+" - "+req.ip);
	next();
});

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

app.get('/:word/echo', (req,res) => {
	res.json({echo:req.params.word});
});

app.post('/name',(req,res) => {
	res.json({name:`${req.query.first} ${req.query.last}`});
});

































 module.exports = app;
