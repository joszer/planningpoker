// co to wszystko robi?
var express = require("express");
// var mongoose = require("mongoose");
var userModel = require("./model/User");

var app = express();
app.set('views', __dirname);
// nie korzystam z żadnego silnika może później jade?
app.set('view engine', 'jade');

// nie trzeba całej ścieżki podawać includując pliki w widokach
app.use(express.static(__dirname + '/public'));

// w razie mongo
// app.get('/api/users', function(request, response) {
//     mongoose.model('User').find({}).exec(function(error, collection) {
//        response.send(collection);
//     });
// });

// routingiem w aplikacji zajmie się framework angular.js więc w konfiguracji zostawiono '*'
app.get('*', function(request, response) {
   // każdy adres zwraca index routingiem zajmie się angular
   response.render('index');
});

// baz danych
// mongoose.connect('mongodb://localhost/planningpoker');
// var conn = mongoose.connection;

// conn.once('open', function() {
//    console.log('connected to mongodb successfully');
//    // jeśli serio zdecyduje się na mongo
//    //userModel.seedUsers();
// });

// port na jakim nasłuchuje aplikacja
// zamiast portu ręcznie, ustawimi zmienne środowiskowe Could9
app.listen(process.env.PORT, process.env.IP);