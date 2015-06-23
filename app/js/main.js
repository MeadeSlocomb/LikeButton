;(function (){

  'use strict';

  angular.module('LikeButtonModule', [])

  .controller('LikeButtonController', ['$scope',
    function ($scope) {

    $scope.likes = 0;

    $scope.addLike = function () {

      $scope.likes = $scope.likes+1;


    };
    }
  ]);

}());
