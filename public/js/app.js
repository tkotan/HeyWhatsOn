const app = angular.module('HeyWhatsOn', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider

  .when("/", {
    templateUrl: "home.html",
    controller : 'mainController'
  })
  .when("/playlist", {
    templateUrl: "playlist.html",
    controller : 'playlistController'
  })
  .when("/ytcreators", {
      templateUrl: "ytcreators.html",
      controller : 'ytcreatorsController'
  })

});

app.controller('mainController', ['$http', function($http){
  const base = 'http://localhost:3000';
  this.login = function(){
    // $http({
    //   method:'GET',
    //   url:'/api/login'
    // }).then(
    //   function(response){
    //     console.log(response); --or--
    $http.get(base + '/api/login', function(response){
      console.log(response);
    })
  }
}]);
