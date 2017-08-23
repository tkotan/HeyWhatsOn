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

}]);
