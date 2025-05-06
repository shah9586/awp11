angular.module('myApp', [])
  .controller('myController', function($scope, $http) {
    $scope.message = "Hello from Angular.js!";

    $http.get('/api/data')
      .then(function(response) {
        $scope.subjects = response.data;
      })
      .catch(function(error) {
        console.error('Error fetching subjects:', error);
      });
  });