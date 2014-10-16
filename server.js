var express = require('express');
var http = require('http');
var app = express();
var port = 8989;
var name = {first: "Fernanda", last: "Silva"};
var location = {address: "351 State Highway", city: "Lewisville", state: "TX", country: "USA"};
var hobbies = [{outdoor: "cycling"}, {indoor: "lift weights"}];
var occupation = [{Abitron: "Research Associate"}, {BeyondId: "Executive Assistant"}, {PriorityPass: "Trilingual CS"}];
var mentions = ['https://www.facebook.com/fernanda.silva.58958', 'https://github.com/FernandaS'];
var references = ['Juliana'];
var skills = [ 
{
	id: 1,
	name: 'Javascript',
	experience: 'Intermediate'

},
{
	id: 2,
	name: 'Angular',
	experience: 'Intermediate'
}, 
{
	id: 3,
	name: 'CSS3',
	experience: 'Intermediate'
}
]


var cors = require('cors');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(bodyParser());

app.get('/name', function (req, res){
	res.status(200).send(name)
});

app.get('/location', function (req, res){
	res.status(200).send(location)
});

app.get('/hobbies', function (req, res){
	if (req.query.order === "asc"){
		res.status(200).send(hobbies.sort().reverse());
	} else{
		res.status(200).send(hobbies.sort());
	}	
});

app.get('/occupation', function (req, res){
	if (req.query.order === "asc"){
		res.status(200).send(occupation.sort().reverse());
	} else{
		res.status(200).send(occupation.sort());
	}	
})


app.get('/occupation/latest', function (req, res){
	res.status(200).send(occupation[occupation.length -1]);
		
});


app.post('/location', function (req, res){
	res.type('application/JSON');
	location.city = req.body.city || location.city
	location.state = req.body.state || location.state
	location.address = req.body.address || location.address
	location.country = req.body.country || location.country
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send('location updated');
})





app.route('/mentions')
	.get(function (req, res ){
	res.status(200).send(mentions);
})
	.post(function (req, res){
		console.log(req.body);
	mentions.push(req.body.mentions);
	console.log(req.body);
	res.send(JSON.stringify(req.body.mentions + " posted"));
	
})

app.get('/references', function (req, res){
	res.status(200).send(references);
})

app.post('/references', function (req, res){
	references.push(req.body);
	res.send(JSON.stringify(req.body) + " success");
	console.log(req.body);
})

app.get('/skills', function (req, res){
	res.status(200).send(skills);
})

app.post('/skills', function (req, res){
	skills.push(req.body);
	res.send(JSON.stringify(req.body) + " got skills");
	console.log(req.body);
})




app.listen(port, function(){
	console.log('This is my port ' + port);
})