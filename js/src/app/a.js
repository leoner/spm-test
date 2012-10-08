/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:21 PM
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    var win = require('../lib/cmp/core/win');

    $(function() {
        (new win()).render();
    });
});