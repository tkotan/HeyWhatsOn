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
mongoose.connect('mongodb://localhost/hey_whats_on');

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
app.get('/', function(req,res){
  res.send({'message':'hello world'})
})
/*******************************************
Listener
*******************************************/
app.listen(port, () => {
    console.log('=======================');
    console.log('You are now on port ' + port);
    console.log('=======================');
});
