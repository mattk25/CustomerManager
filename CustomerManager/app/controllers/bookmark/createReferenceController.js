/**
 * Created by matt on 11/3/13.
 */

(function () {

    var referenceController = function ($rootScope, $scope, $location, $routeParams, $timeout, config, referenceService, modalService) {

    $scope.title = "Create a";
    $scope.buttonText = "Add";
    $scope.reference;

    $scope.saveReference = function () {
        console.log("Saving Reference")
        if ($scope.refForm.$valid) {
            if (!$scope.reference.id) {
                referenceService.addReference($scope.reference);
            }
        }
    };
};

    customersManager.customersApp.controller('ReferenceController',
        ['$rootScope', '$scope', '$location', '$routeParams', '$timeout', 'config', 'referenceService', 'modalService', referenceController]);

}());