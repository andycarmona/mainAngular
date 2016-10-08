'use strict';

describe('Service: myService', function() {

    // load the service's module
    beforeEach(module('mainAngularApp'));

    // instantiate service
    var myService;
    var mockSchedule = {
        getTemp: function() {
            return 'tontuelo';
        }
    };
    beforeEach(inject(function(_myService_) {
        myService = _myService_;
    }));

    it('should do something', function() {
        expect(!!myService).toBe(true);
    });

    it('should return data', function() {
        expect(mockSchedule.getTemp()).toBe('tontuelo');
    });

});