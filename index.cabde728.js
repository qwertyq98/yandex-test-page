let e,t,n,r,o;((0,(s={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o=468,s={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||u,scrollIntoView:r.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(n))?1:0;e.scroll=e.scrollTo=function(){if(void 0!==arguments[0]){if(!0===l(arguments[0])){s.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset);return}d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset)}},e.scrollBy=function(){if(void 0!==arguments[0]){if(l(arguments[0])){s.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset))}},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===l(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw SyntaxError("Value could not be converted");s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}},r.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===l(arguments[0])){s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},r.prototype.scrollIntoView=function(){if(!0===l(arguments[0])){s.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var n=function(e){for(var n,r,o;e!==t.body&&!1===(r=c(n=e,"Y")&&p(n,"Y"),o=c(n,"X")&&p(n,"X"),r||o);)e=e.parentNode||e.host;return e}(this),r=n.getBoundingClientRect(),o=this.getBoundingClientRect();n!==t.body?(d.call(this,n,n.scrollLeft+o.left-r.left,n.scrollTop+o.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}}function u(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function p(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function d(n,r,a){var l,c,p,d,f=i();n===t.body?(l=e,c=e.scrollX||e.pageXOffset,p=e.scrollY||e.pageYOffset,d=s.scroll):(l=n,c=n.scrollLeft,p=n.scrollTop,d=u),function t(n){var r,s,a,u=(i()-n.startTime)/o;r=.5*(1-Math.cos(Math.PI*(u=u>1?1:u))),s=n.startX+(n.x-n.startX)*r,a=n.startY+(n.y-n.startY)*r,n.method.call(n.scrollable,s,a),(s!==n.x||a!==n.y)&&e.requestAnimationFrame(t.bind(e,n))}({scrollable:l,method:d,startTime:f,startX:c,startY:p,x:r,y:a})}}}).__esModule)?s.default:s).polyfill(),document.querySelectorAll("[data-section]").forEach(e=>{let t=document.querySelector(`.${e.dataset.section}`);e.addEventListener("click",e=>{e.preventDefault(),null==t||t.scrollIntoView({block:window.innerWidth<1e3?"start":"center",behavior:"smooth"})})});var s,i,a,u={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},l={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},c=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],p={CSS:{},springs:{}};function d(e,t,n){return Math.min(Math.max(e,t),n)}function f(e,t){return e.indexOf(t)>-1}function m(e,t){return e.apply(null,t)}var g={arr:function(e){return Array.isArray(e)},obj:function(e){return f(Object.prototype.toString.call(e),"Object")},pth:function(e){return g.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||g.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return g.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return g.hex(e)||g.rgb(e)||g.hsl(e)},key:function(e){return!u.hasOwnProperty(e)&&!l.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function v(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(e){return parseFloat(e)}):[]}function b(e,t){var n=v(e),r=d(g.und(n[0])?1:n[0],.1,100),o=d(g.und(n[1])?100:n[1],.1,100),s=d(g.und(n[2])?10:n[2],.1,100),i=d(g.und(n[3])?0:n[3],.1,100),a=Math.sqrt(o/r),u=s/(2*Math.sqrt(o*r)),l=u<1?a*Math.sqrt(1-u*u):0,c=u<1?(u*a+-i)/l:-i+a;function f(e){var n=t?t*e/1e3:e;return(n=u<1?Math.exp(-n*u*a)*(1*Math.cos(l*n)+c*Math.sin(l*n)):(1+c*n)*Math.exp(-n*a),0===e||1===e)?e:1-n}return t?f:function(){var t=p.springs[e];if(t)return t;for(var n=1/6,r=0,o=0;;)if(1===f(r+=n)){if(++o>=16)break}else o=0;var s=r*n*1e3;return p.springs[e]=s,s}}function h(e){return void 0===e&&(e=10),function(t){return Math.ceil(d(t,1e-6,1)*e)*(1/e)}}var y=function(){function e(e,t,n){return(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e}function t(e,t,n){return 3*(1-3*n+3*t)*e*e+2*(3*n-6*t)*e+3*t}return function(n,r,o,s){if(0<=n&&n<=1&&0<=o&&o<=1){var i=new Float32Array(11);if(n!==r||o!==s)for(var a=0;a<11;++a)i[a]=e(.1*a,n,o);return function(a){return n===r&&o===s||0===a||1===a?a:e(function(r){for(var s=0,a=1;10!==a&&i[a]<=r;++a)s+=.1;var u=s+(r-i[--a])/(i[a+1]-i[a])*.1,l=t(u,n,o);return l>=.001?function(n,r,o,s){for(var i=0;i<4;++i){var a=t(r,o,s);if(0===a)break;var u=e(r,o,s)-n;r-=u/a}return r}(r,u,n,o):0===l?u:function(t,n,r,o,s){var i,a,u=0;do(i=e(a=n+(r-n)/2,o,s)-t)>0?r=a:n=a;while(Math.abs(i)>1e-7&&++u<10)return a}(r,s,s+.1,n,o)}(a),r,s)}}}}(),_=(i={linear:function(){return function(e){return e}}},a={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Expo:function(){return function(e){return e?Math.pow(2,10*e-10):0}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=d(e,1,10),r=d(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin(2*Math.PI*(e-1-r/(2*Math.PI)*Math.asin(1/n))/r)}}},["Quad","Cubic","Quart","Quint"].forEach(function(e,t){a[e]=function(){return function(e){return Math.pow(e,t+2)}}}),Object.keys(a).forEach(function(e){var t=a[e];i["easeIn"+e]=t,i["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},i["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},i["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}}),i);function w(e,t){if(g.fnc(e))return e;var n=e.split("(")[0],r=_[n],o=v(e);switch(n){case"spring":return b(e,t);case"cubicBezier":return m(y,o);case"steps":return m(h,o);default:return m(r,o)}}function q(e){try{return document.querySelectorAll(e)}catch(e){return}}function x(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,o=[],s=0;s<n;s++)if(s in e){var i=e[s];t.call(r,i,s,e)&&o.push(i)}return o}function S(e){return e.reduce(function(e,t){return e.concat(g.arr(t)?S(t):t)},[])}function E(e){return g.arr(e)?e:(g.str(e)&&(e=q(e)||e),e instanceof NodeList||e instanceof HTMLCollection)?[].slice.call(e):[e]}function L(e,t){return e.some(function(e){return e===t})}function T(e){var t={};for(var n in e)t[n]=e[n];return t}function M(e,t){var n=T(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function A(e,t){var n=T(e);for(var r in t)n[r]=g.und(e[r])?t[r]:e[r];return n}function z(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function k(e,t){return g.fnc(e)?e(t.target,t.id,t.total):e}function R(e,t){return e.getAttribute(t)}function B(e,t,n){if(L([n,"deg","rad","turn"],z(t)))return t;var r=p.CSS[t+n];if(!g.und(r))return r;var o=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(o),o.style.position="absolute",o.style.width=100+n;var i=100/o.offsetWidth;s.removeChild(o);var a=i*parseFloat(t);return p.CSS[t+n]=a,a}function C(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?B(e,o,n):o}}function O(e,t){return g.dom(e)&&!g.inp(e)&&(!g.nil(R(e,t))||g.svg(e)&&e[t])?"attribute":g.dom(e)&&L(c,t)?"transform":g.dom(e)&&"transform"!==t&&C(e,t)?"css":null!=e[t]?"object":void 0}function I(e){if(g.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,o=new Map;t=r.exec(n);)o.set(t[1],t[2]);return o}}function H(e,t,n,r){switch(O(e,t)){case"transform":var o,s;return o=f(t,"scale")?1:0+(f(t,"translate")||"perspective"===t?"px":f(t,"rotate")||f(t,"skew")?"deg":void 0),s=I(e).get(t)||o,r&&(r.transforms.list.set(t,s),r.transforms.last=t),n?B(e,s,n):s;case"css":return C(e,t,n);case"attribute":return R(e,t);default:return e[t]||0}}function D(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=z(e)||0,o=parseFloat(t),s=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return o+s+r;case"-":return o-s+r;case"*":return o*s+r}}function F(e,t){if(g.col(e)){var n,r,o,s;return n=e,g.rgb(n)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n))?"rgba("+r[1]+",1)":n:g.hex(n)?(o=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r}),"rgba("+parseInt((s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o))[1],16)+","+parseInt(s[2],16)+","+parseInt(s[3],16)+",1)"):g.hsl(n)?function(e){var t,n,r,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),s=parseInt(o[1],10)/360,i=parseInt(o[2],10)/100,a=parseInt(o[3],10)/100,u=o[4]||1;function l(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==i)t=n=r=a;else{var c=a<.5?a*(1+i):a+i-a*i,p=2*a-c;t=l(p,c,s+1/3),n=l(p,c,s),r=l(p,c,s-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+u+")"}(n):void 0}if(/\s/g.test(e))return e;var i=z(e),a=i?e.substr(0,e.length-i.length):e;return t?a+t:a}function P(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function $(e){for(var t,n=e.points,r=0,o=0;o<n.numberOfItems;o++){var s=n.getItem(o);o>0&&(r+=P(t,s)),t=s}return r}function Y(e){var t;if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*R(e,"r");case"rect":return 2*R(e,"width")+2*R(e,"height");case"line":return P({x:R(e,"x1"),y:R(e,"y1")},{x:R(e,"x2"),y:R(e,"y2")});case"polyline":return $(e);case"polygon":return t=e.points,$(e)+P(t.getItem(t.numberOfItems-1),t.getItem(0))}}function X(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;g.svg(t)&&g.svg(t.parentNode);)t=t.parentNode;return t}(e),o=r.getBoundingClientRect(),s=R(r,"viewBox"),i=o.width,a=o.height,u=n.viewBox||(s?s.split(" "):[0,0,i,a]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:i,h:a,vW:u[2],vH:u[3]}}function N(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=F(g.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:g.str(e)||t?r.split(n):[]}}function U(e){return x(e?S(g.arr(e)?e.map(E):E(e)):[],function(e,t,n){return n.indexOf(e)===t})}function j(e){var t=U(e);return t.map(function(e,n){return{target:e,id:n,total:t.length,transforms:{list:I(e)}}})}var V={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,o){if(r.list.set(t,n),t===r.last||o){var s="";r.list.forEach(function(e,t){s+=t+"("+e+") "}),e.style.transform=s}}};function W(e,t){j(e).forEach(function(e){for(var n in t){var r=k(t[n],e),o=e.target,s=z(r),i=H(o,n,s,e),a=D(F(r,s||z(i)),i);V[O(o,n)](o,n,a,e.transforms,!0)}})}function Q(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},o={};return o.duration=n?Math.max.apply(Math,e.map(function(e){return r(e)+e.duration})):t.duration,o.delay=n?Math.min.apply(Math,e.map(function(e){return r(e)+e.delay})):t.delay,o.endDelay=n?o.duration-Math.max.apply(Math,e.map(function(e){return r(e)+e.duration-e.endDelay})):t.endDelay,o}var Z=0,G=[],J=function(){var e;function t(n){for(var r=G.length,o=0;o<r;){var s=G[o];s.paused?(G.splice(o,1),r--):(s.tick(n),o++)}e=o>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){ee.suspendWhenDocumentHidden&&(K()?e=cancelAnimationFrame(e):(G.forEach(function(e){return e._onDocumentVisibility()}),J()))}),function(){e||K()&&ee.suspendWhenDocumentHidden||!(G.length>0)||(e=requestAnimationFrame(t))}}();function K(){return!!document&&document.hidden}function ee(e){void 0===e&&(e={});var t,n,r,o,s,i,a,c,p,f=0,m=0,v=0,h=0,y=null;function _(e){var t=window.Promise&&new Promise(function(e){return y=e});return e.finished=t,t}var q=(n=M(u,t=e),o=function(e,t){var n=[],r=t.keyframes;for(var o in r&&(t=A(function(e){for(var t=x(S(e.map(function(e){return Object.keys(e)})),function(e){return g.key(e)}).reduce(function(e,t){return 0>e.indexOf(t)&&e.push(t),e},[]),n={},r=0;r<t.length;r++)!function(r){var o=t[r];n[o]=e.map(function(e){var t={};for(var n in e)g.key(n)?n==o&&(t.value=e[n]):t[n]=e[n];return t})}(r);return n}(r),t)),t)g.key(o)&&n.push({name:o,tweens:function(e,t){var n=T(t);if(/^spring/.test(n.easing)&&(n.duration=b(n.easing)),g.arr(e)){var r=e.length;2!==r||g.obj(e[0])?g.fnc(t.duration)||(n.duration=t.duration/r):e={value:e}}var o=g.arr(e)?e:[e];return o.map(function(e,n){var r=g.obj(e)&&!g.pth(e)?e:{value:e};return g.und(r.delay)&&(r.delay=n?0:t.delay),g.und(r.endDelay)&&(r.endDelay=n===o.length-1?t.endDelay:0),r}).map(function(e){return A(e,n)})}(t[o],e)});return n}(r=M(l,t),t),a=Q(i=x(S((s=j(t.targets)).map(function(e){return o.map(function(t){return function(e,t){var n=O(e.target,t.name);if(n){var r,o=t.tweens.map(function(n){var o=function(e,t){var n={};for(var r in e){var o=k(e[r],t);g.arr(o)&&1===(o=o.map(function(e){return k(e,t)})).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(n,e),s=o.value,i=g.arr(s)?s[1]:s,a=z(i),u=H(e.target,t.name,a,e),l=r?r.to.original:u,c=g.arr(s)?s[0]:l,p=z(c)||z(u),d=a||p;return g.und(i)&&(i=l),o.from=N(c,d),o.to=N(D(i,c),d),o.start=r?r.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=w(o.easing,o.duration),o.isPath=g.pth(s),o.isPathTargetInsideSVG=o.isPath&&g.svg(e.target),o.isColor=g.col(o.from.original),o.isColor&&(o.round=1),r=o,o}),s=o[o.length-1];return{type:n,property:t.name,animatable:e,tweens:o,duration:s.end,delay:o[0].delay,endDelay:s.endDelay}}}(e,t)})})),function(e){return!g.und(e)}),r),c=Z,Z++,A(n,{id:c,children:[],animatables:s,animations:i,duration:a.duration,delay:a.delay,endDelay:a.endDelay}));function E(){var e=q.direction;"alternate"!==e&&(q.direction="normal"!==e?"normal":"reverse"),q.reversed=!q.reversed,p.forEach(function(e){return e.reversed=q.reversed})}function L(e){return q.reversed?q.duration-e:e}function R(){f=0,m=L(q.currentTime)*(1/ee.speed)}function B(e,t){t&&t.seek(e-t.timelineOffset)}function C(e){for(var t=0,n=q.animations,r=n.length;t<r;){var o=n[t],s=o.animatable,i=o.tweens,a=i.length-1,u=i[a];a&&(u=x(i,function(t){return e<t.end})[0]||u);for(var l=d(e-u.start-u.delay,0,u.duration)/u.duration,c=isNaN(l)?1:u.easing(l),p=u.to.strings,f=u.round,m=[],g=u.to.numbers.length,v=void 0,b=0;b<g;b++){var h=void 0,y=u.to.numbers[b],_=u.from.numbers[b]||0;h=u.isPath?function(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var o=X(e.el,e.svg),s=r(),i=r(-1),a=r(1),u=n?1:o.w/o.vW,l=n?1:o.h/o.vH;switch(e.property){case"x":return(s.x-o.x)*u;case"y":return(s.y-o.y)*l;case"angle":return 180*Math.atan2(a.y-i.y,a.x-i.x)/Math.PI}}(u.value,c*y,u.isPathTargetInsideSVG):_+c*(y-_),f&&!(u.isColor&&b>2)&&(h=Math.round(h*f)/f),m.push(h)}var w=p.length;if(w){v=p[0];for(var S=0;S<w;S++){p[S];var E=p[S+1],L=m[S];isNaN(L)||(E?v+=L+E:v+=L+" ")}}else v=m[0];V[o.type](s.target,o.property,v,s.transforms),o.currentValue=v,t++}}function I(e){q[e]&&!q.passThrough&&q[e](q)}function F(e){var t=q.duration,n=q.delay,r=t-q.endDelay,o=L(e);q.progress=d(o/t*100,0,100),q.reversePlayback=o<q.currentTime,p&&function(e){if(q.reversePlayback)for(var t=h;t--;)B(e,p[t]);else for(var n=0;n<h;n++)B(e,p[n])}(o),!q.began&&q.currentTime>0&&(q.began=!0,I("begin")),!q.loopBegan&&q.currentTime>0&&(q.loopBegan=!0,I("loopBegin")),o<=n&&0!==q.currentTime&&C(0),(o>=r&&q.currentTime!==t||!t)&&C(t),o>n&&o<r?(q.changeBegan||(q.changeBegan=!0,q.changeCompleted=!1,I("changeBegin")),I("change"),C(o)):q.changeBegan&&(q.changeCompleted=!0,q.changeBegan=!1,I("changeComplete")),q.currentTime=d(o,0,t),q.began&&I("update"),e>=t&&(m=0,q.remaining&&!0!==q.remaining&&q.remaining--,q.remaining?(f=v,I("loopComplete"),q.loopBegan=!1,"alternate"===q.direction&&E()):(q.paused=!0,!q.completed&&(q.completed=!0,I("loopComplete"),I("complete"),!q.passThrough&&"Promise"in window&&(y(),_(q)))))}return _(q),q.reset=function(){var e=q.direction;q.passThrough=!1,q.currentTime=0,q.progress=0,q.paused=!0,q.began=!1,q.loopBegan=!1,q.changeBegan=!1,q.completed=!1,q.changeCompleted=!1,q.reversePlayback=!1,q.reversed="reverse"===e,q.remaining=q.loop,h=(p=q.children).length;for(var t=h;t--;)q.children[t].reset();(q.reversed&&!0!==q.loop||"alternate"===e&&1===q.loop)&&q.remaining++,C(q.reversed?q.duration:0)},q._onDocumentVisibility=R,q.set=function(e,t){return W(e,t),q},q.tick=function(e){v=e,f||(f=v),F((v+(m-f))*ee.speed)},q.seek=function(e){F(L(e))},q.pause=function(){q.paused=!0,R()},q.play=function(){q.paused&&(q.completed&&q.reset(),q.paused=!1,G.push(q),R(),J())},q.reverse=function(){E(),q.completed=!q.reversed,R()},q.restart=function(){q.reset(),q.play()},q.remove=function(e){en(U(e),q)},q.reset(),q.autoplay&&q.play(),q}function et(e,t){for(var n=t.length;n--;)L(e,t[n].animatable.target)&&t.splice(n,1)}function en(e,t){var n=t.animations,r=t.children;et(e,n);for(var o=r.length;o--;){var s=r[o],i=s.animations;et(e,i),i.length||s.children.length||r.splice(o,1)}n.length||r.length||t.pause()}ee.version="3.2.1",ee.speed=1,ee.suspendWhenDocumentHidden=!0,ee.running=G,ee.remove=function(e){for(var t=U(e),n=G.length;n--;)en(t,G[n])},ee.get=H,ee.set=W,ee.convertPx=B,ee.path=function(e,t){var n=g.str(e)?q(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:X(n),totalLength:Y(n)*(r/100)}}},ee.setDashoffset=function(e){var t=Y(e);return e.setAttribute("stroke-dasharray",t),t},ee.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?w(t.easing):null,o=t.grid,s=t.axis,i=t.from||0,a="first"===i,u="center"===i,l="last"===i,c=g.arr(e),p=c?parseFloat(e[0]):parseFloat(e),d=c?parseFloat(e[1]):0,f=z(c?e[1]:e)||0,m=t.start||0+(c?p:0),v=[],b=0;return function(e,t,g){if(a&&(i=0),u&&(i=(g-1)/2),l&&(i=g-1),!v.length){for(var h=0;h<g;h++){if(o){var y=u?(o[0]-1)/2:i%o[0],_=u?(o[1]-1)/2:Math.floor(i/o[0]),w=h%o[0],q=Math.floor(h/o[0]),x=y-w,S=_-q,E=Math.sqrt(x*x+S*S);"x"===s&&(E=-x),"y"===s&&(E=-S),v.push(E)}else v.push(Math.abs(i-h));b=Math.max.apply(Math,v)}r&&(v=v.map(function(e){return r(e/b)*b})),"reverse"===n&&(v=v.map(function(e){return s?e<0?-1*e:-e:Math.abs(b-e)}))}var L=c?(d-p)/b:p;return m+Math.round(100*v[t])/100*L+f}},ee.timeline=function(e){void 0===e&&(e={});var t=ee(e);return t.duration=0,t.add=function(n,r){var o=G.indexOf(t),s=t.children;function i(e){e.passThrough=!0}o>-1&&G.splice(o,1);for(var a=0;a<s.length;a++)i(s[a]);var u=A(n,M(l,e));u.targets=u.targets||e.targets;var c=t.duration;u.autoplay=!1,u.direction=t.direction,u.timelineOffset=g.und(r)?c:D(r,c),i(t),t.seek(u.timelineOffset);var p=ee(u);i(p),s.push(p);var d=Q(s,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ee.easing=w,ee.penner=_,ee.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const er=ee.timeline({easing:"easeInOutSine",duration:1900,autoplay:!1});let eo=!1;setTimeout(()=>{eo=!0},300),er.add({targets:".layer:nth-child(2)",opacity:1}).add({targets:".layer:nth-child(3)",opacity:1},"-=1100").add({targets:".layer:nth-child(4)",opacity:1},"-=1100"),window.addEventListener("load",()=>{eo?er.play():setTimeout(()=>{er.play()},300)});const es=document.querySelector("body"),ei=document.querySelectorAll(".hamburger"),ea=document.querySelectorAll(".mobile-menu__wrapper"),eu=e=>{e.target.closest(".mobile-menu")||(Array.from(ei).forEach(e=>e.classList.remove("is-active")),Array.from(ea).forEach(e=>e.classList.remove("is-active")),es.removeEventListener("click",eu))};Array.from(ei).forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("is-active"),Array.from(ea).forEach(e=>e.classList.toggle("is-active")),es.addEventListener("click",eu)}));const el=document.querySelectorAll(".questions__img"),ec=document.querySelectorAll(".questions__text");Array.from(document.querySelectorAll(".questions__wrapper")).forEach((e,t)=>e.addEventListener("click",e=>{e.target.closest(".questions__wrapper")&&(ec[t].classList.toggle("is-open"),el[t].classList.toggle("transform-button"))}));const ep=e=>{let t=document.createElement("div");return t.innerHTML=e,t.firstElementChild};var ed={};ed=new URL("question1.61bc72f8.png",import.meta.url).toString();var ef={};ef=new URL("question2.20f6aa96.png",import.meta.url).toString();var em={};em=new URL("question3.ee73158b.png",import.meta.url).toString();var eg={};eg=new URL("question4.e8dbc21f.png",import.meta.url).toString();var ev={};ev=new URL("question5.6777e6fd.png",import.meta.url).toString();var eb={};eb=new URL("question6.dee22957.png",import.meta.url).toString();const eh=[{image:new URL(ed),questionText:"Какова вероятность, что вы&nbsp;вставите в&nbsp;пульт бракованную батарейку и&nbsp;не&nbsp;включите фильм на&nbsp;большом экране?",questionAnswers:["1 из 100","6 из 100","35 из 100"],number:1,rightAnswer:"6 из 100",answerText:{right:"Да, такой шанс — 6 из 100",wrong:"Не совсем. Такой&nbsp;шанс&nbsp;—&nbsp;6&nbsp;из&nbsp;100",text:"Немного, так что ваш киновечер, скорее всего, удастся. Если, конечно, у&nbsp;соседей не&nbsp;прорвёт трубу в&nbsp;это время. Потоп&nbsp;&mdash; причина порчи имущества в&nbsp;7&nbsp;случаях из&nbsp;100. Смотреть фильмы станет спокойнее, если застраховать риски по&nbsp;ипотеке в&nbsp;Страховом Доме ВСК"}},{image:new URL(ef),questionText:"Какова вероятность, что вы&nbsp;сохраните брак и&nbsp;проживёте вместе ещё один прекрасный год?",questionAnswers:["3 к 10","8 к 10","1 к 20"],number:2,rightAnswer:"3 к 10",answerText:{right:"Верно",wrong:"Неверно",text:"По&nbsp;официальной статистике, в&nbsp;2022 году на&nbsp;10&nbsp;браков пришлось 7&nbsp;разводов. Одна из&nbsp;причин&nbsp;&mdash; бытовые проблемы: то&nbsp;соседи зальют, то&nbsp;труба лопнет, а&nbsp;бывает и&nbsp;полная порча имущества... Характеры супруги, вероятно, не&nbsp;исправят, но&nbsp;помочь себе проще решать вопросы&nbsp;&mdash; скорее всего, могут. Например, застраховать риски по&nbsp;совместной ипотечной квартире в&nbsp;Страховом доме ВСК и&nbsp;не&nbsp;выплачивать банку остаток задолженности по&nbsp;ипотеке в&nbsp;случае действительно серьёзной бытовой аварии."}},{image:new URL(em),questionText:"А&nbsp;каков шанс, что вас обворуют на&nbsp;улице?",questionAnswers:["1 из 1274","1 из 20 054","1 из 8687"],number:3,rightAnswer:"1 из 1274",answerText:{right:"Да, это верно",wrong:"Неверно",text:"Город засыпает&nbsp;&mdash; просыпаются воры. Такой шанс&nbsp;&mdash; 1&nbsp;из&nbsp;1274. Помимо риска попасться карманникам существует куда большая опасность&nbsp;&mdash; например, приобрести квартиру с&nbsp;обременением. Так можно остаться и&nbsp;без жилплощади, и&nbsp;без денег. Страхование титула от&nbsp;Страхового дома ВСК защищает собственника ипотечной квартиры и&nbsp;в&nbsp;подобных ситуациях."}},{image:new URL(eg),questionText:"Какова вероятность, что вы&nbsp;переведёте все накопления &laquo;сотруднику банка&raquo;?",questionAnswers:["1 из 580 000","1 из 20 000","1 из 1"],number:4,rightAnswer:"1 из 20 000",answerText:{right:"Верно",wrong:"Неверно. Такой&nbsp;шанс&nbsp;—&nbsp;1&nbsp;к&nbsp;20&nbsp;000",text:"Такой шанс&nbsp;&mdash; 1&nbsp;к 20&nbsp;000. Гораздо вероятнее приобрести квартиру на&nbsp;вторичном рынке у&nbsp;компании, находящейся на&nbsp;стадии банкротства&nbsp;&mdash; когда сделки с&nbsp;имуществом могут быть оспорены в&nbsp;судебном порядке. Если сделку признают недействительной, Страховой дом ВСК выплатит банку остаток задолженности по&nbsp;ипотеке."}},{image:new URL(ev),questionText:"Каков шанс, что ваша посылка не&nbsp;доедет до&nbsp;адресата, если вы&nbsp;отправите её&nbsp;через грузовую компанию?",questionAnswers:["1 из 96 000","1 из 15 000","1 из 7000"],number:5,rightAnswer:"1 из 96 000",answerText:{right:"Верно. Шанс — 1 из 96 000",wrong:"Неверно. Шанс — 1 из 96 000",text:"Если часто отправляете грузы, такое может произойти. Но&nbsp;посылки теряют реже, чем безвозвратно портится имущество в&nbsp;ипотечной квартире&nbsp;&mdash; например, при прорыве канализации. Жить спокойнее просто&nbsp;&mdash; оформите страхование имущества за&nbsp;5&nbsp;минут онлайн в&nbsp;Страховом доме ВСК."}},{image:new URL(eb),questionText:"А&nbsp;какова вероятность, что в&nbsp;вас попадёт молния?",questionAnswers:["1 из 330 000","1 из 20 000","1 из 145 000"],number:6,rightAnswer:"1 из 330 000",answerText:{right:"Да, верно. Такой&nbsp;шанс&nbsp;—&nbsp;1&nbsp;к&nbsp;330&nbsp;000",wrong:"Неверно. Такой&nbsp;шанс&nbsp;—&nbsp;1&nbsp;к&nbsp;330&nbsp;000",text:"Немного. Зато молнии&nbsp;&mdash; одна из&nbsp;причин пожаров в&nbsp;квартире, наряду с&nbsp;поджогом и&nbsp;возгоранием от&nbsp;бытовой техники. Страхование имущества убережёт вас от&nbsp;выплат денег банку, если дом сгорит при пожаре."}}];var ey={};ey=new URL("result.db9d91cf.png",import.meta.url).toString();const e_={lowResult:{subtitle:"Возможно, ваша интуиция ещё спит и вам не стоит делать ставки. Но, с другой стороны, умение предсказывать шансы падения метеорита во двор не спасёт от него.",text:"Не беспокоиться за имущество и за неизбежность выплаты<br/>ипотеки поможет Страховой Дом ВСК — <strong>до 31 декабря 2023</strong> года<br/>можно застраховать и то, и другое, если они у вас есть, <strong>со скидкой 3%</strong> на страхование имущества, жизни и здоровья, титула, оформляемое в рамках договора ипотеки, и <strong>15 % — на страхование имущества</strong>, жизни и здоровья по промокоду <strong>yandex23</strong>. Скидка не суммируется с другими акциями и доступна всем клиентам."},middleResult:{subtitle:"Хороший результат, велика вероятность, что в следующий раз вы справитесь лучше. Подмечайте интересные факты и просчитывайте шансы неблагоприятных исходов.",text:"А пока — можно застраховать не только само имущество,<br/>но и риски по ипотеке, если они у вас есть, <strong>со скидкой 3%</strong> на<br/>страхование имущества, жизни и здоровья, титула, оформляемое в<br/>рамках договора ипотеки, и <strong>15 % — на страхование имущества</strong>,<br/>жизни и здоровья по промокоду <strong>yandex23</strong>. Скидка действует<br/><strong>до 31 декабря 2023</strong> года, не суммируется с другими акциями<br/>Страхового Дома ВСК и доступна всем клиентам."},highResult:{subtitle:"Поздравляем! В этот раз интуиция вас не подвела. Но на то она и вероятность, чтобы иногда случаться.",text:"Поэтому, чтобы чувствовать себя защищённее, можно<br/>застраховать не только само имущество, но и риски по ипотеке,<br/>если она у вас есть, <strong>со скидкой 3%</strong> на страхование имущества,<br/>жизни и здоровья, титула, оформляемое в рамках договора<br/>ипотеки, и <strong>15 % — на страхование имущества</strong>, жизни и здоровья,<br/>по промокоду <strong>yandex23</strong>. Скидка действует <strong>до 31 декабря 2023</strong><br/>года, не суммируется с другими акциями Страхового Дома<br/>ВСК и доступна всем клиентам."},image:String(new URL(ey)),pomocodeText:"Промокод на&nbsp;скидку действует в&nbsp;период с&nbsp;18&nbsp;по&nbsp;30&nbsp;ноября 2023&nbsp;г.&nbsp;и&nbsp;дает право получения скидки в&nbsp;размере 3&nbsp;% на&nbsp;страхование имущества, жизни и&nbsp;здоровья, титула, оформляемое в&nbsp;рамках договора ипотеки, а&nbsp;также скидки в&nbsp;размере 15&nbsp;% на&nbsp;страхование имущества, жизни и&nbsp;здоровья, титула.Промокод можно применить только 1&nbsp;раз в&nbsp;отношении каждого вида страхования. Предложение не&nbsp;суммируется с&nbsp;другими акциями и&nbsp;предложениями. Страховые услуги предоставляются Страховым акционерным обществом &laquo;ВСК&raquo;, ИНН: 7710026574. Лицензия банка России от&nbsp;11.09.2015: СЛ &#8470;&nbsp;0621, СИ &#8470;&nbsp;0621, ОС &#8470;&nbsp;0621, ОС &#8470;&nbsp;0621&ndash;04, ОС &#8470;&nbsp;0621&ndash;05, ПС &#8470;&nbsp;0621."},ew=e=>{let t;let n=parseInt(window.getComputedStyle(e,null).getPropertyValue("top"));e.addEventListener("touchstart",n=>{n.preventDefault(),t=+n.targetTouches[0].clientY-parseInt(e.style.top)||0}),e.addEventListener("touchmove",n=>{void 0!==t&&(n.preventDefault(),e.style.top=+n.targetTouches[0].clientY-t+"rem")}),e.addEventListener("touchend",r=>{r.preventDefault();let o=parseInt(window.getComputedStyle(e,null).getPropertyValue("top"));o+50<n?e.style.top="auto":o-50>n&&(e.style.top="auto",e.classList.remove("quiz__result-promocode_active")),t=n})},eq=e=>e.map(e=>`
      <button class="quiz__answer">${e}</button>
      `).join(""),ex=(e,t)=>6===e?e_.highResult[t]:e>=4?e_.middleResult[t]:e_.lowResult[t];var eS={};eS=new URL("button_gray.082fa8a0.svg",import.meta.url).toString();var eE={};eE=new URL("button.ac2da13f.svg",import.meta.url).toString();const eL=e=>`
    <div class="quiz__wrapper">
      <img class="quiz__img" src="${e.image}">
      <div class="quiz__content">
        <div class="quiz__progress">
          <div class="quiz__progress-line"></div>
        </div>
        <h3 class="quiz__title-mobile">${e.number}/6</h3>
        <h3 class="quiz__title">\u{412}\u{43E}\u{43F}\u{440}\u{43E}\u{441} ${e.number} \u{438}\u{437} 6</h3>
        <p class="quiz__text">${e.questionText}</p>
        <div class="quiz__buttons">
          <div class="quiz__answers">
            ${eq(e.questionAnswers)}
          </div>
          <buttton class="quiz__button">
            <img class="quiz__button-img_gray" src="${new URL(eS)}" alt="">
            <img class="quiz__button-img" src="${new URL(eE)}" alt="">
          </buttton>
        </div>
      </div>
      <div class="quiz__check">\u{41F}\u{440}\u{43E}\u{432}\u{435}\u{440}\u{438}\u{442}\u{44C}
      </div>
    </div>
  `,eT=(e,t)=>`
    <div class=${t?"quiz__answer-wrapper_green":"quiz__answer-wrapper_red"}>
      <div class="quiz__answer-content">
        <h3 class="quiz__answer-title">
          ${t?e.answerText.right:e.answerText.wrong}
        </h3>
        <p class="quiz__answer-text">
          ${e.answerText.text}
        </p>
      </div>
      <button class="quiz__answer-button">${6===e.number?"Посмотреть результат":"Следующий вопрос"}</button>
    </div>
  `,eM=e=>`
  <div class="quiz__result-wrapper">
    <img class="quiz__result-img" src="${e_.image}">
    <div class="quiz__result-content">
      <div class="quiz__result-content_wrapper">
        <h3 class="quiz__result-title">\u{420}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442} \u{442}\u{435}\u{441}\u{442}\u{430}</h3>
        <p class="quiz__result-subtitle">${e} \u{432}\u{435}\u{440}\u{43D}\u{44B}\u{439} \u{43E}\u{442}\u{432}\u{435}\u{442} \u{438}\u{437} 6</p>
        <p class="quiz__result-text">${ex(e,"subtitle")}</p>
        <p class="quiz__result-description">${ex(e,"text")}<button class="quiz__result-info"></button>
        <div class="quiz__result-promocode">
          <button class="quiz__result-close">
          </button>${e_.pomocodeText}</div>
        </p>
      </div>
      <a class="quiz__result-button" 
        target="_blank"
        href="https://www.vsk.ru/klientam/ipoteka?t=about&utm_source=yandex_promo&utm_medium=ipoteka&adrclid=DYL5lh3KnJy1dqguDmBXXJn3hRfDh7y1jILg_dq_NYNJsuAkC0Td2X1QPBm2pYSObQM_VCoW_Sf2LRpKN6fiY">
        \u{418}\u{441}\u{43F}\u{43E}\u{43B}\u{44C}\u{437}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{43E}\u{43C}\u{43E}\u{43A}\u{43E}\u{434}
      </a>
      <buttton class="quiz__result-button_close"></buttton>
    </div>
  </div>
  `,eA=document.querySelector(".promo"),ez=document.querySelector(".promo-mobile__title"),ek=document.querySelector(".promo-mobile__content"),eR=document.querySelector(".promo__button"),eB=document.querySelector(".promo-mobile__button");let eC="",eO=0,eI=0;const eH=e=>e.map(e=>ep(eL(e)));let eD=eh[0];const eF=()=>{n=t,window.innerWidth<1e3?(t=!0,e=ek):(t=!1,e=eA)};eF(),n=t;const eP=()=>{var n,o,s,i;if(t){let t=document.createElement("div");t.className="promo-mobile",document.getElementsByTagName("main")[0].prepend(t),ez&&(null===(s=document.querySelector(".promo-mobile"))||void 0===s||s.append(ez)),null===(i=document.querySelector(".promo-mobile"))||void 0===i||i.append(e)}else eY(e,document.querySelector(".promo-mobile"));eO=0,eI=0,null===(o=document)||void 0===o||null===(n=o.querySelector(".quiz__wrapper"))||void 0===n||n.remove(),r=eH(eh),eD=eh[eO]},e$=()=>{let e=ep(eM(eI)),t=null==e?void 0:e.querySelector(".quiz__result-button_close"),n=null==e?void 0:e.querySelector(".quiz__result-info");null==t||t.addEventListener("click",eP),null==n||n.addEventListener("click",eV),r.push(e)},eY=(e,n)=>{let s=null==e?void 0:e.querySelectorAll(".quiz__answer"),i=n.parentElement,a=o.querySelector(".quiz__check");if(null==i||i.replaceChild(e,n),t){var u;null==a||a.addEventListener("click",()=>{eY(ep(eT(eD,eC===eD.rightAnswer)),a);let e=document.querySelector(".quiz__answer-button");null==e||e.addEventListener("click",eN),eC===eD.rightAnswer&&eI++}),null===(u=document.querySelector(".quiz__answers"))||void 0===u||u.addEventListener("click",ej)}else s.forEach(e=>e.addEventListener("click",eU));eO===r.length-1&&(eC===(null==eD?void 0:eD.rightAnswer)&&eI++,e$())},eX=e=>{let t=17*(eO+1)+"%";if(e.querySelector(".quiz__progress-line"))return e.querySelector(".quiz__progress-line").style.width=String(t)},eN=()=>{eD=eh[eO+1],o=r[eO+1],eY(r[eO+1],r[eO]),eX(r[++eO])},eU=e=>{let t=e.target.innerHTML===eD.rightAnswer,n=o.querySelector(".quiz__img"),r=eT(eD,t),s=o.querySelector(".quiz__button-img");s.addEventListener("click",eN),t?(e.target.style.background="#39A786",eI++):e.target.style.background="#FF774D",o.querySelectorAll(".quiz__answer").forEach(e=>{e.style["pointer-events"]="none"}),s.style.display="block",o.querySelector(".quiz__button-img_gray").style.display="none",eY(ep(r),n)},ej=e=>{let t=o.querySelector(".quiz__check");""!==e.target.innerHTML&&"Проверить"!==e.target.innerHTML&&(eC=e.target.innerHTML,t.style["pointer-events"]="all",t.style["background-color"]="#077BED")},eV=()=>{let e=document.querySelector(".quiz__result-promocode");null==e||e.querySelector(".quiz__result-close"),null==e||e.classList.toggle("quiz__result-promocode_active"),ew(e)};null==eR||eR.addEventListener("click",()=>{eY(o=(r=eH(eh))[0],eA)}),null==eB||eB.addEventListener("click",()=>{eY(o=(r=eH(eh))[0],ek)}),window.addEventListener("resize",()=>{eF(),n===t||document.querySelector(".promo")&&document.querySelector(".promo-mobile__content")||eP()});
//# sourceMappingURL=index.cabde728.js.map