/**
 * Require dependencies
 */

var State = require('ampersand-state');

/**
 * Declare
 */

var ContactPoint;


/**
 * Extend ampersand State
 */

ContactPoint = State.extend({
    props: {
        email       : 'string',
        telephone   : 'string',
        faxNumber   : 'string'
    }
});


/**
 * Expose `ContactPoint`
 */

module.exports = ContactPoint;

