'use strict';
//var _ = require('lodash');
/**
 * @ngdoc service
 * @name mainAngularApp.myService
 * @description
 * # myService
 * Service in the mainAngularApp.
 */
angular.module('mainAngularApp')
    .service('myService', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
   

        this.getTemp = function() {
            /*var result = _.find(descriptionList, function(obj) {
                if (obj.id === 2) {
                    return obj;
                }
            });*/
            return 'result';
        };

    });