angular.module('app', ['ngResource']);

angular.module('app').controller('testController', function($scope, $resource) {
    // przenieść fake'i do innego pliku pomimo tego, że nie korzystam z mongo
    //$resource('/api/users').query();
    $scope.test = "working!";
    $scope.users = [
        {
          name: 'Steve',
          status: 1
        },
        {
          name: 'Bob Javovsky',
          status: 1
        },
        {
          name: 'Kate Seesharp',
          status: 1
        },
        {
          name: 'Kevin to test something',
          status: 1
        },
        {
          name: 'Marta',
          status: 1
        },
        {
          name: 'Steward',
          status: 1
        },
        {
          name: 'John',
          status: 1
        },
        {
          name: 'Edward Long',
          status: 1
        },
        {
          name: 'Joulie',
          status: 1
        },
        {
          name: 'Adam',
          status: 1
        },
        {
          name: 'Anna',
          status: 1
        },
        {
          name: 'Jerry',
          status: 1
        }
    ];
});