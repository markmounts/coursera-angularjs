(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchitems = "";
    $scope.msgaboutlunch = "";

    $scope.CountLunchItems = function () {
      var seplunchitems;
      if ($scope.lunchitems == "") {
        seplunchitems = 0;
      } else {
        seplunchitems = $scope.lunchitems.split(",").length;
      }
      console.log($scope.lunchitems);
      console.log(seplunchitems);
      if (seplunchitems == 0) {
        $scope.msgaboutlunch = "Please enter data first";
      } else if (seplunchitems <= 3) {
        $scope.msgaboutlunch = "Enjoy!"
      } else if (seplunchitems > 3) {
        $scope.msgaboutlunch = "Too much!";
      }
      return $scope.msgaboutlunch;
    }

  }

})();
