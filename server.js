/*******************************************
Dependencies
*******************************************/
const express        = require('express'),
      bodyParser     = require('body-parser'),
      mongoose       = require('mongoose'),
      port           = process.env.PORT|| 3000 ,
      app            = express();

/*******************************************
Database
*******************************************/
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/heywhatson';
mongoose.connect(mongoUri);

/*******************************************
Middleware
*******************************************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

/*******************************************
Controllers
*******************************************/
// var heywhatsonController = require('./controllers/heywhatsonController');

// app.use('/heywhatson', heywhatsonController);
// app.get('/', function(req,res){
//   res.send({'message':'hello world'})
// })

// app.get(‘/login’, function(res, req){ res.send(“logging”) }
app.get('/api', function(req,res){
  res.json({"message":"hello world"})
})

app.get('/api/login', function(req,res){
  res.json({"message":"hi there"})
})

/*******************************************
Listener
*******************************************/
app.listen(port, () => {
    console.log('=======================');
    console.log('You are now on port ' + port);
    console.log('=======================');
});
