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
      $scope.response = "error";
      return $scope.result = "Please enter data first";
    }
    else if ( totWorld.length < 4 )

        {  $scope.response = "ok";
          return $scope.result =  "Enjoy!";}
    else  {
        $scope.response = "error";

        return $scope.result = "Too much!";
    }

  };



}

})();
