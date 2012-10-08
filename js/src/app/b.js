/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:38 PM
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    var win = require('../lib/cmp/core/win');
    var ajax = require('../lib/util/core/ajax');

    $(function() {
        ajax.get('/data/you/want', function() {
            console.log('callback');
            (new win()).render();
        });
    });
});