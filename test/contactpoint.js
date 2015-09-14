var assert = require('assert');

var ContactPoint = require('../lib/contactpoint.js');

var data = {
        email       : 'anna@sedokova.com',
        telephone   : 17079687439,
        faxNumber   : 17079687439
    };

describe('ContactPoint', function() {
    var contactpoint;

    it('should exist', function() {
        assert.ok(ContactPoint);
    });

    it('should serialize correctly', function(){
         contactpoint = new ContactPoint(data);

         assert.deepEqual(contactpoint.serialize(), data);
    });
});
