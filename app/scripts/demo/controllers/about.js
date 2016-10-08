'use strict';

/**
 * @ngdoc function
 * @name mainAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mainAngularApp
 */
angular.module('mainAngularApp')
    .controller('AboutCtrl', function(myService, _) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //this.reto = myService.getTemp();
        var descriptionList = [{
            description: 'object1',
            id: 1
        }, {
            description: 'object2',
            id: 2
        }, {
            description: 'object3',
            id: 3
        }, {
            description: 'object4',
            id: 4
        }];
        this.reto = _.find(descriptionList, function(obj) {
            if (obj.id === 2) {
                return obj;
            }
        });
    });