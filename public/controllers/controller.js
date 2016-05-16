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

	
} 