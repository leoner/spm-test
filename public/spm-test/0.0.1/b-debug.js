/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:24 PM
 */
define("#spm-test/0.0.1/lib/cmp/core/mask-debug", ["#jquery/1.8.1/jquery-debug"], function(require, exports, module) {
    var $ = require('#jquery/1.8.1/jquery-debug');
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

/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:20 PM
 */
define("#spm-test/0.0.1/lib/util/core/position-debug", ["#jquery/1.8.1/jquery-debug"], function(require, exports, module) {
    var $ = require('#jquery/1.8.1/jquery-debug');
    return {
        center: function() {
            console.log('position center');
        }
    };
});

/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:18 PM
 */
define("#spm-test/0.0.1/lib/cmp/core/win-debug", ["./mask-debug", "../../util/core/position-debug", "#jquery/1.8.1/jquery-debug"], function(require, exports, module) {
    var $ = require('#jquery/1.8.1/jquery-debug');
    var mask = require('./mask-debug');
    var postion = require('../../util/core/position-debug');

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

/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:33 PM
 */
define("#spm-test/0.0.1/lib/util/core/ajax-debug", ["#jquery/1.8.1/jquery-debug"], function(require, exports, module) {
    var $ = require('#jquery/1.8.1/jquery-debug');
    return {
        get: function(url, callback) {
            console.log('ajax get:' + url);
            callback && callback();
        }
    };
});

/**
 * User: caolvchong@gmail.com
 * Date: 10/8/12
 * Time: 5:38 PM
 */
define("#spm-test/0.0.1/b-debug", ["./lib/cmp/core/mask-debug", "./lib/util/core/position-debug", "./lib/cmp/core/win-debug", "./lib/util/core/ajax-debug", "#jquery/1.8.1/jquery-debug"], function(require, exports, module) {
    var $ = require('#jquery/1.8.1/jquery-debug');
    var win = require('./lib/cmp/core/win-debug');
    var ajax = require('./lib/util/core/ajax-debug');

    $(function() {
        ajax.get('/data/you/want', function() {
            console.log('callback');
            (new win()).render();
        });
    });
});
