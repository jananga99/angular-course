(function () {
  "use strict";

  angular
    .module("LunchCheck", [])

    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.checkLunch = function () {
      if (!$scope.lunchMenu) {
        $scope.message = "Please enter data first.";
      } else {
        var items = $scope.lunchMenu
          .split(",")
          .filter((item) => item.trim() !== "");
        if (items.length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    };
  }
})();
