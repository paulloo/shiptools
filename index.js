(function () {var q={};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(e);r&&($=$.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,$)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach(function(r){G(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function G(e,r,t){return(r=H(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e){var r=I(e,"string");return"symbol"===s(r)?r:String(r)}function I(e,r){if("object"!==s(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var $=t.call(e,r||"default");if("object"!==s($))return $;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}var J={};J={name:"shiptools",version:"0.0.15",description:"\u8239\u7968\u901A\u7528javascript\u901A\u7528\u51FD\u6570\u5DE5\u5177\u5305",main:"index.js",scripts:{test:"echo \"Error: no test specified\" && exit 1",start:"parcel index.html --no-source-maps",build:"parcel build main.js --out-dir ./ --out-file index.js --global shiptools --no-source-maps --experimental-scope-hoisting"},author:"paul",license:"ISC",devDependencies:{typescript:"^3.9.10"}};var i={};function C($,u){return void 0===u&&(u=12),+parseFloat($.toPrecision(u))}function g($){var u=$.toString().split(/[eE]/),t=(u[0].split(".")[1]||"").length-+(u[1]||0);return t>0?t:0}function l($){if(-1===$.toString().indexOf("e"))return Number($.toString().replace(".",""));var u=g($);return u>0?C($*Math.pow(10,u)):$}function v($){L&&($>Number.MAX_SAFE_INTEGER||$<Number.MIN_SAFE_INTEGER)&&console.warn($+" is beyond boundary when transfer to integer, the results may not be accurate")}function h($,u){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if(t.length>0)return h.apply(void 0,[h($,u),t[0]].concat(t.slice(1)));var e=l($),o=l(u),f=g($)+g(u),n=e*o;return v(n),n/Math.pow(10,f)}function w($,u){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];if(e.length>0)return w.apply(void 0,[w($,u),e[0]].concat(e.slice(1)));var f=Math.pow(10,Math.max(g($),g(u)));return(h($,f)+h(u,f))/f}function x($,u){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];if(e.length>0)return x.apply(void 0,[x($,u),e[0]].concat(e.slice(1)));var f=Math.pow(10,Math.max(g($),g(u)));return(h($,f)-h(u,f))/f}function p($,u){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];if(t.length>0)return p.apply(void 0,[p($,u),t[0]].concat(t.slice(1)));var e=l($),o=l(u);return v(e),v(o),h(e/o,C(Math.pow(10,g(u)-g($))))}function K($,u){var t=Math.pow(10,u);return p(Math.round(h($,t)),t)}i.float2Fixed=l,i.mulNum=h,i.addNum=w,i.subNum=x,i.divNum=p,i.round=K;var L=!0;function M($){return+$}i.toNumber=M;var b={},D=b&&b.__assign||function(){return(D=Object.assign||function(e){for(var $,t=1,r=arguments.length;t<r;t++)for(var n in $=arguments[t])Object.prototype.hasOwnProperty.call($,n)&&(e[n]=$[n]);return e}).apply(this,arguments)},N=function(e,$){return void 0===$&&($=2e3),y(e,$,!0)};b.debounceStart=N;var O=function(e,$){return void 0===$&&($=2e3),y(e,$,!1)};b.debounceEnd=O;var y=function(e,$,t){void 0===t&&(t=!1);var r=null,n=!0;return t?function(){clearTimeout(r),n&&(n=!1,e.call(this,arguments)),r=setTimeout(function(){return n=!0},$)}:function(){var t=this,n=arguments;r&&clearTimeout(r),r=setTimeout(function(){return e.apply(t,n)},$)}};b.debounce=y;var P=function(e,$){var t=null;return function(){var r=this,n=arguments;t||(t=setTimeout(function(){t=null,e.apply(r,n)},$))}};function Q(e,$){for(var t in $)$.hasOwnProperty(t)&&(e[t]=$[t]);return e}function R(e){return Object.keys(e)}function S(e){return Object.values(e)}function T(e){return Array.from(new Set(e))}function U(e,$){return e.reduce(function(e,t){return $(t)<$(e)?t:e},e[0])}function V(e){return JSON.parse(JSON.stringify(e))}function W(e){return e.filter(Boolean)}function X(e,$){for(var t=0;t<e.length;t++)if($(e[t]))return t;return-1}function Y(e,$){return e.reduce(function(e,t){return e.find(function(e){return $(t,e)})?e:e.concat([t])},[])}function Z(e,$){return e.filter($)}function _(e,$){return e.map($)}function aa(e,$){e.forEach($)}function ba(e,$){return e.filter(function(e){return!$(e)})}function ca(e,$){return D(D({},e),$)}function da(e,$,t,r){void 0===t&&(t=0),void 0===r&&(r=e.length);for(var n=t;n<r;n++)e[n]=$;return e}function ea(e,$){return e.filter(function(e){return!$.includes(e)})}function fa(e,$){for(var t=[],r=0;r<e.length;r+=$)t.push(e.slice(r,r+$));return t}b.throttle=P,b.assign=Q,b.keys=R,b.values=S,b.uniq=T,b.minBy=U,b.cloneDeep=V,b.compact=W,b.findIndex=X,b.uniqWith=Y,b.filter=Z,b.map=_,b.forEach=aa,b.remove=ba,b.extend=ca,b.fill=da,b.difference=ea,b.chunk=fa;var E={};var d={},j=function($){return Object.prototype.toString.call($)},ga=function($){return"[object Null]"==j($)};d.isNull=ga;var ha=function($){return void 0===$};d.isUndefined=ha;var ia=function($){return"boolean"==typeof $};d.isBoolean=ia;var ja=function($){return"number"==typeof $};d.isNumber=ja;var z=function($){return"string"==typeof $};d.isString=z;var ka=function($){return"[object Symbol]"==j($)};d.isSymbol=ka;var A=function($){return"[object Object]"==j($)};d.isObject=A;var la=function($){return"[object RegExp]"==j($)};d.isRegExp=la;var F=function($){return"[object Array]"==j($)};d.isArray=F;var ma=function($){return"[object Function]"==j($)};d.isFunction=ma;var na=function($){return j($).match(/\s([a-z]+)/i)[1].toLocaleLowerCase()};d.getType=na;var oa=function($){return null==$||(A($)?!Object.keys($).length:F($)?!$.length:z($)?!$:0==$.toString().length)};function pa($){return $!=$}function qa($,t){return JSON.stringify($)===JSON.stringify(t)}d.isEmpty=oa,d.isNaN=pa,d.isEqual=qa;var ra=function(r){if(A(r))return Object.keys(r).map(function(e){return e+"="+encodeURIComponent(JSON.stringify(r[e]))}).join("&");if(z(r)){var e={},a=r.match(/(([^&?]+)=([^&]*)?)/gi);return a&&a.forEach(function(r){var a=decodeURIComponent(r).replace(/=/,"|").split("|");try{e[a[0]]=JSON.parse(decodeURIComponent(a[1]))}catch(c){try{e[a[0]]=decodeURIComponent(a[1])}catch(c){try{e[a[0]]=JSON.parse(a[1])}catch(c){e[a[0]]=a[1]}}}}),e}};E.URLSearchParams=ra;var m={},sa=function(r,o,t,e){void 0===o&&(o=0),void 0===t&&(t=0),void 0===e&&(e="*");var n=new RegExp("^(.{"+o+"})(.{"+(t-o)+"})(."+(t>=r.length?"?":"+")+")$");return r.replace(n,function(r,o,t,n){return o+t.replace(/./g,e)+n})};function ta(r,o){void 0===r&&(r=8),void 0===o&&(o=16);var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=[],n=0;if(o=o||t.length,r)for(n=0;n<r;n++)e[n]=t[0|Math.random()*o];else{var $=void 0;for(e[8]=e[13]=e[18]=e[23]="-",e[14]="4",n=0;n<36;n++)e[n]||($=0|16*Math.random(),e[n]=t[19===n?3&$|8:$])}return e.join("")}function ua(r){console.log("enter transparam",r);var o=JSON.parse(r),t="";for(var e in o)if(o.hasOwnProperty(e)){var n=o[e];t=t+(t.length>0?"&":"?")+e+"="+n}return console.log("transParams\u8F6C\u6362\u540E\u7684\u53C2\u6570",t),t}function va(r){return""+r}m.mask=sa,m.uuid=ta,m.transParams=ua,m.toString=va;var wa=k(k(k(k(k(k({},i),E),b),m),d),{},{version:J.version});q=wa;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=q}else if(typeof define==="function"&&define.amd){define(function(){return q})}else{this["shiptools"]=q}})();