Agenda.controller("notasController", function($scope, notasModel){
	//get every notes
	$scope.notas = notasModel.getNotas();
})