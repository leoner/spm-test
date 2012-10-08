/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:33 PM
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    return {
        get: function(url, callback) {
            console.log('ajax get:' + url);
            callback && callback();
        }
    };
});