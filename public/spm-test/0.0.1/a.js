define("#spm-test/0.0.1/lib/cmp/core/mask",["#jquery/1.8.1/jquery"],function(e,t,n){var r=e("#jquery/1.8.1/jquery"),i=function(){console.log("mask constructor")};i.prototype={constructor:i,render:function(){console.log("mask rendered")}},n.exports=i}),define("#spm-test/0.0.1/lib/util/core/position",["#jquery/1.8.1/jquery"],function(e,t,n){var r=e("#jquery/1.8.1/jquery");return{center:function(){console.log("position center")}}}),define("#spm-test/0.0.1/lib/cmp/core/win",["./mask","../../util/core/position","#jquery/1.8.1/jquery"],function(e,t,n){var r=e("#jquery/1.8.1/jquery"),i=e("./mask"),s=e("../../util/core/position"),o=function(){console.log("win constructor")};o.prototype={constructor:o,render:function(){(new i).render(),s.center(),console.log("win rendered")}},n.exports=o}),define("#spm-test/0.0.1/a",["./lib/cmp/core/mask","./lib/util/core/position","./lib/cmp/core/win","#jquery/1.8.1/jquery"],function(e,t,n){var r=e("#jquery/1.8.1/jquery"),i=e("./lib/cmp/core/win");r(function(){(new i).render()})});