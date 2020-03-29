(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.testo = "";

  $scope.countWorld = function () {

   $scope.totWorld = $scope.testo.split("," ) ;


    if ( $scope.testo == "") {
      $scope.response = "error";
       $scope.result = "Please enter data first";
    }
    else if ( $scope.totWorld.length < 4 )

        {  $scope.response = "ok";
           $scope.result =  "Enjoy!";}
    else  {
        $scope.response = "error";

         $scope.result = "Too much!";
    }

  };



}

})();
