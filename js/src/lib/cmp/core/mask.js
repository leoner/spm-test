/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:24 PM
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    var mask = function() {
        console.log('mask constructor');
    };
    mask.prototype = {
        constructor: mask,
        render: function() {
            console.log('mask rendered');
        }
    };

    module.exports = mask;
});