function appCtrl($scope, $http){
	console.log("Hello world from controller"); 

	var refresh = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("I got the data");
    $scope.contactlist = response;
  });
};

  refresh();

  $scope.addContact = function() {
     console.log($scope.contact);
     $http.post('/contactlist', $scope.contact).success(function(response) {
     console.log(response);
     refresh();
     });
  };

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response) {
			refresh();
		});
	};

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/contactlist/' + id).success(function(response) {
			$scope.contact = response;
			refresh();
		});
	};

	$scope.update = function(id) {
		console.log($scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
			$scope.contact = response;
			refresh();
		});
	};
} 