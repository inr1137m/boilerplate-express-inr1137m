var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/public', express.static(`${__dirname}/public`));

app.use('/json', (req,res,next) => {
	console.log(req.method+" "+req.path+" - "+req.ip);
	next();
});

app.get('/now', (req,res,next) => {
	req.time = new Date().toString();
	next();	
}, (req,res) => {
	res.send({time:req.time});
});

app.use('/', bodyParser.urlencoded({extended:false}));

console.log('Hello World');

app.get('/', (req,res) => {
	res.sendFile(`${__dirname}/views/index.html`);
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

app.route('/name').get((req,res) => {
	res.json({name:`${req.query.first} ${req.query.last}`});
});
































 module.exports = app;
