define(function(require, exports, module) { // 这行去掉
    seajs.config({
        alias: {
            jquery: 'src/lib/ext/jquery/1.8.1/jquery'
        },
        preload: [],
        debug: 2,
        map: [],
        // base: '',
        charset: 'utf-8'
    });
}); // 这行去掉