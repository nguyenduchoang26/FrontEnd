(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {

  $scope.message = "";

  $scope.checkLunch = function() {
    if ($scope.dishes == null || $scope.dishes == "") {
      $scope.message = "Please enter data first";
      $scope.messageStyle = {
        "color" : "red",
        "border-color" : "red",
        "border" : "solid"
      };
    } else {
      var dishes = $scope.dishes.split(',');
      var filterDishes = dishes.filter(function(e) {
        return e != null && e.trim() != "";
      });
      if (filterDishes.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
      $scope.messageStyle = {
        "color" : "green",
        "border-color" : "green",
        "border" : "solid"
      };
    }
  };
}

})();
