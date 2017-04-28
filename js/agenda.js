var configAgenda = function($routeProvider){
	$routeProvider.when("/home", {
		controller: "notasController",
		templateUrl: "views/home.html"
	});
}

// create module, and set config
var Agenda = angular.module("Agenda", ["ngRoute"]).config(configAgenda);