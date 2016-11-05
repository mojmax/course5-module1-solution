(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.testo = "";

  $scope.countWorld = function () {

   var  totWorld = $scope.testo.split("," ) ;


    if ( $scope.testo == "") {
      return $scope.result = "Please enter data first";
    }
    else if ( totWorld.length < 4 )
        {return $scope.result =  "Enjoy!";}
    else  {
        return $scope.result = "Too much!";
    }
  };



}

})();
