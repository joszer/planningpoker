// co to wszystko robi?
var express = require("express");

var app = express();
app.set('views', __dirname);
// nie korzystam z żadnego silnika może później jade?
app.set('view engine', 'jade');

// nie trzeba całej ścieżki podawać includując pliki w widokach
app.use(express.static(__dirname + '/public'));

// routingiem w aplikacji zajmie się framework angular.js więc w konfiguracji zostawiono '*'
app.get('*', function(request, response) {
   // każdy adres zwraca index routingiem zajmie się angular
   response.render('index');
});

// port na jakim nasłuchuje aplikacja
// zamiast portu ręcznie, ustawimi zmienne środowiskowe Could9
app.listen(process.env.PORT, process.env.IP);