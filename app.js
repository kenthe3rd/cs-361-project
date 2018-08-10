var express     = require("express"), 
    app         = express(),
    handlebars  = require("express-handlebars").create({defaultLayout:'main'}),
    bodyParser  = require("body-parser");

//var mysql       = require('./dbcon.js')

const apiKey = 'AIzaSyBg3NBblmeFyPMZVY1ZMCVcN4pv6Nbtf2A';    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//app.set('mysql', mysql);

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/', function(req, res) {
   res.render("index");
});

//handling errors
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

//use this section to test on cloud9
//app.listen(process.env.PORT, process.env.IP, function() {
//   console.log("Server is up"); 
//});

//use this section to test on localhost
app.listen(app.get('port'), function(){
  console.log('Express started on port ' + app.get('port') + '; press Ctrl-C to terminate.');
});
