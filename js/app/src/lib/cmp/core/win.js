/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:18 PM
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    var mask = require('./mask');
    var postion = require('../../util/core/position');

    var win = function() {
        console.log('win constructor');
    };
    win.prototype = {
        constructor: win,
        render: function() {
            (new mask()).render();
            postion.center();
            console.log('win rendered');
        }
    };

    module.exports = win;
});