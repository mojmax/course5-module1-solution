(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.testo = "";
  $scope.item = "";

  $scope.countWorld = function () {

   $scope.totWorld = $scope.testo.split("," ) ;


    if ( $scope.testo == "") {
       $scope.response = "warning";
       $scope.result = "Please enter data first";
       $scope.item = "";
    } else if ( $scope.totWorld.length < 4 ) {
        $scope.response = "ok";
        $scope.result =  "Enjoy!";
        if ( ( $scope.totWorld.length == 1 )) {
          $scope.item = "item";
        }else {
          $scope.item = "items";
        }


    } else  {
        $scope.response = "error";
        $scope.result = "Too much!";
        $scope.item = "items";
    }

  };



}

})();
