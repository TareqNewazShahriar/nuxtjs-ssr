(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{170:function(t,e,n){var content=n(187);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("5db11919",content,!0,{sourceMap:!1})},174:function(t,e,n){"use strict";function r(t,e,n,r,o,l,c){try{var f=t[l](c),d=f.value}catch(t){return void n(t)}f.done?e(d):Promise.resolve(d).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,l){var c=t.apply(e,n);function f(t){r(c,o,l,f,d,"next",t)}function d(t){r(c,o,l,f,d,"throw",t)}f(void 0)}))}}n.d(e,"a",(function(){return o}))},186:function(t,e,n){"use strict";n(170)},187:function(t,e,n){var r=n(64)(!1);r.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=r},188:function(t,e,n){"use strict";n(186);var r=n(28),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueToNuxtLogo"},[n("div",{staticClass:"Triangle Triangle--two"}),t._v(" "),n("div",{staticClass:"Triangle Triangle--one"}),t._v(" "),n("div",{staticClass:"Triangle Triangle--three"}),t._v(" "),n("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.a=component.exports},203:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("6759f5ab",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n(203)},229:function(t,e,n){var r=n(64)(!1);r.push([t.i,'.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=r},231:function(t,e,n){"use strict";n.r(e);var r=n(174),o=(n(189),n(190),n(196),n(201),{components:{AppLogo:n(188).a},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=fetch("https://pokeapi.co/api/v2/location?offset=20&limit=10"),t.abrupt("return",new Promise((function(t,n){Promise.all([e]).then((function(e){Promise.all([e[0].json()]).then((function(data){t({pokemon:data[0].results})}))})).catch((function(t){return n(t)}))})));case 2:case"end":return t.stop()}}),t)})))()}}),l=(n(228),n(28)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("app-logo"),t._v(" "),n("ul",t._l(t.pokemon,(function(e){return n("li",{key:e.name},[t._v(t._s(e.name))])})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);