
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


  $scope.registerUser = function() {
    const userData = {
      email: $scope.email, // Assuming you have input fields with ng-model="email"
 name: $scope.name, // Assuming you have an input field with ng-model="name"
      password: $scope.password // Assuming you have input fields with ng-model="password"
    };

    $http.post('/register', userData) // Send data to the /register route on your server
      .then(function(response) {
        console.log('Registration successful:', response.data);
      })
      .catch(function(error) {
        console.error('Registration failed:', error);
      });
  };