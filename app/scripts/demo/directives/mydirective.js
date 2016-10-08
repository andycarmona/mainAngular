'use strict';

/**
 * @ngdoc directive
 * @name mainAngularApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('mainAngularApp')
    .directive('myDirective', function() {
        return {
            scope: {
                mapping: '='
            },
            template: '<div>{{dir.temp}} <b>{{dir.temp2}}{{color}}</b></div>',
            restrict: 'A',
            controllerAs: 'dir',
            controller: ['$attrs', '$scope', 'myService', function($attrs, $scope, myService) {
                var self = this;
                self.temp = myService.getTemp();
                self.temp2 = $attrs.dummytext;
                console.log($scope.mapping[0]);
            }]
        };
    });