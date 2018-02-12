
myApp.controller('animationCtrl', ['$scope',function($scope) {
  console.log($scope.ageRange);
 $scope.childImage = {
    "background-color" : "coral",
    "height":"100px"
  }

$scope.$watch("ageRange", function(){
   let size = $scope.ageRange * 3;
   //console.log(size);
   $scope.childImage = {
        "height":""+size+"%"
  }

});


}]);