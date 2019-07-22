/*! (c) Andrea Giammarchi - ISC */
var heresy=function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i={};try{i.WeakMap=WeakMap}catch(e){i.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var u=i.WeakMap;var c=!1,s=function(t){var n,r=(n=(e.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(n)&&!/(Chrom|Android)\/(\d+)/.test(n)),a=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(r||a){var o={},i=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)};if(a)s=i;else{var f=new u;s=function(e){return f.get(e)||function(e,t){return f.set(e,t),t}(e,i(e))}}}else c=!0;return l(t)};function l(e){return c?e:s(e)}function f(e){for(var t=arguments.length,n=[l(e)],r=1;r<t;)n.push(arguments[r++]);return n}var p=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var a=this.ownerDocument.createRange();a.setStartBefore(e?t[1]:n),a.setEndAfter(r),a.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,a=0,o=r.length;a<o;a++)t.appendChild(r[a]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),h=Array.isArray,v=p.prototype.nodeType,d=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",i=o.querySelectorAll(u)}else o.innerHTML=e,i=o.childNodes;return r(n,i),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),g={};try{g.Map=Map}catch(e){g.Map=function(){var e=0,t=[],n=[];return{delete:function(a){var o=r(a);return o&&(t.splice(e,1),n.splice(e,1)),o},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(a,o){return n[r(a)?e:t.push(a)-1]=o,this}};function r(n){return-1<(e=t.indexOf(n))}}}var y,b=g.Map,m=function(e,t,n,r,a,o){for(var i=("selectedIndex"in t),u=-1;r<a;){var c=e(n[r],1);i&&u<0&&c.selected&&(u=r),t.insertBefore(c,o),r++}i&&-1<u&&(t.selectedIndex=u)},w=function(e,t){return e==t},E=function(e){return e},N=function(e,t,n,r,a,o,i){var u=o-a;if(u<1)return-1;for(;n-t>=u;){for(var c=t,s=a;c<n&&s<o&&i(e[c],r[s]);)c++,s++;if(s===o)return t;t=c+1}return-1},x=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},A=function(e,t,n,r,a){if(a-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[a-1],-1)),o.deleteContents()}},C=function(e,t,n){for(var r=1,a=t;r<a;){var o=(r+a)/2>>>0;n<e[o]?a=o:r=o+1}return r},k=function(e,t,n,r,a,o,i,u,c,s,l,f,p){!function(e,t,n,r,a,o,i,u,c){for(var s=new b,l=e.length,f=i,p=0;p<l;)switch(e[p++]){case 0:a++,f++;break;case 1:s.set(r[a],1),m(t,n,r,a++,a,f<u?t(o[f],0):c);break;case-1:f++}for(p=0;p<l;)switch(e[p++]){case 0:i++;break;case-1:s.has(o[i])?i++:A(t,n,o,i++,i)}}(function(e,t,n,r,a,o,i){var u,c,s,l,f,p,h,v=n+o,d=[];e:for(u=0;u<=v;u++){if(u>50)return null;for(h=u-1,f=u?d[u-1]:[0,0],p=d[u]=[],c=-u;c<=u;c+=2){for(s=(l=c===-u||c!==u&&f[h+c-1]<f[h+c+1]?f[h+c+1]:f[h+c-1]+1)-c;l<o&&s<n&&i(r[a+l],e[t+s]);)l++,s++;if(l===o&&s===n)break e;p[u+c]=l}}var g=Array(u/2+v/2),y=g.length-1;for(u=d.length-1;u>=0;u--){for(;l>0&&s>0&&i(r[a+l-1],e[t+s-1]);)g[y--]=0,l--,s--;if(!u)break;h=u-1,f=u?d[u-1]:[0,0],(c=l-s)==-u||c!==u&&f[h+c-1]<f[h+c+1]?(s--,g[y--]=1):(l--,g[y--]=-1)}return g}(n,r,o,i,u,s,f)||function(e,t,n,r,a,o,i,u){var c=0,s=r<u?r:u,l=Array(s++),f=Array(s);f[0]=-1;for(var p=1;p<s;p++)f[p]=i;for(var h=new b,v=o;v<i;v++)h.set(a[v],v);for(var d=t;d<n;d++){var g=h.get(e[d]);null!=g&&-1<(c=C(f,s,g))&&(f[c]=g,l[c]={newi:d,oldi:g,prev:l[c-1]})}for(c=--s,--i;f[c]>i;)--c;s=u+r-c;var y=Array(s),m=l[c];for(--n;m;){for(var w=m,E=w.newi,N=w.oldi;n>E;)y[--s]=1,--n;for(;i>N;)y[--s]=-1,--i;y[--s]=0,--n,--i,m=m.prev}for(;n>=t;)y[--s]=1,--n;for(;i>=o;)y[--s]=-1,--i;return y}(n,r,a,o,i,u,c,s),e,t,n,r,i,u,l,p)},j=function(e,t,n,r){r||(r={});for(var a=r.compare||w,o=r.node||E,i=null==r.before?null:o(r.before,0),u=t.length,c=u,s=0,l=n.length,f=0;s<c&&f<l&&a(t[s],n[f]);)s++,f++;for(;s<c&&f<l&&a(t[c-1],n[l-1]);)c--,l--;var p=s===c,h=f===l;if(p&&h)return n;if(p&&f<l)return m(o,e,n,f,l,x(o,t,s,u,i)),n;if(h&&s<c)return A(o,e,t,s,c),n;var v=c-s,d=l-f,g=-1;if(v<d){if(-1<(g=N(n,f,l,t,s,c,a)))return m(o,e,n,f,g,o(t[s],0)),m(o,e,n,g+v,l,x(o,t,c,u,i)),n}else if(d<v&&-1<(g=N(t,s,c,n,f,l,a)))return A(o,e,t,s,g),A(o,e,t,g+d,c),n;return v<2||d<2?(m(o,e,n,f,l,o(t[s],0)),A(o,e,t,s,c),n):v===d&&function(e,t,n,r,a,o){for(;r<a&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,s,c,a)?(m(o,e,n,f,l,x(o,t,c,u,i)),n):(k(o,e,n,f,l,d,t,s,c,v,u,a,i),n)},O=function(e,t,n,r,a){var o="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(o?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,i=0;n&&i<o;i++)r.appendChild(e(a[i],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),S="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},_="-"+Math.random().toFixed(6)+"%";try{"content"in(y=e.createElement("template"))&&(y.innerHTML='<p tabindex="'+_+'"></p>',y.content.childNodes[0].getAttribute("tabindex")==_)||(_="_dt: "+_.slice(1,-1)+";",!0)}catch(e){}var T="\x3c!--"+_+"--\x3e",M=8,$=1,L=3,P=/^(?:style|textarea)$/i,R=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var D=" \\f\\n\\r\\t",Z="[^"+D+"\\/>\"'=]+",z="["+D+"]+"+Z,W="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",V="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+Z.replace("\\/","")+"))?)",F=new RegExp(W+z+V+"+)(["+D+"]*/?>)","g"),H=new RegExp(W+z+V+"*)(["+D+"]*/>)","g"),I=new RegExp("("+z+"\\s*=\\s*)(['\"]?)"+T+"\\2","gi");function G(e,t,n,r){return"<"+t+n.replace(I,B)+r}function B(e,t,n){return t+(n||'"')+_+(n||'"')}function q(e,t,n){return R.test(t)?e:"<"+t+n+"></"+t+">"}function U(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function J(t,n,r,a){for(var o=new b,i=t.attributes,u=[],c=u.slice.call(i,0),s=c.length,l=0;l<s;){var f,p=c[l++],h=p.value===_;if(h||1<(f=p.value.split(T)).length){var v=p.name;if(!o.has(v)){var d=r.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")","i"),"$1"),g=i[d]||i[d.toLowerCase()];if(o.set(v,g),h)n.push(Q(g,a,d,null));else{for(var y=f.length-2;y--;)r.shift();n.push(Q(g,a,d,f))}}u.push(p)}}for(s=u.length,l=0;l<s;){var m=u[l++];/^id$/i.test(m.name)?t.removeAttribute(m.name):t.removeAttributeNode(m)}var w=t.nodeName;if(/^script$/i.test(w)){var E=e.createElement(w);for(s=i.length,l=0;l<s;)E.setAttributeNode(i[l++].cloneNode(!0));E.textContent=t.textContent,t.parentNode.replaceChild(E,t)}}function K(e,t){return{type:"any",node:e,path:t}}function Q(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function X(e,t){return{type:"text",node:e,path:t}}var Y=new u,ee=new u;function te(e,t){var n=function(e){return e.join(T).replace(H,q).replace(F,G)}(t),r=e.transform;r&&(n=r(n));var a=d(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===S.call(r.textContent).length&&e.removeChild(r)}}(a);var o=[];!function e(t,n,r,a){for(var o=t.childNodes,i=o.length,u=0;u<i;){var c=o[u];switch(c.nodeType){case $:var s=a.concat(u);J(c,n,r,s),e(c,n,r,s);break;case M:var l=c.textContent;if(l===_)r.shift(),n.push(P.test(t.nodeName)?X(t,a):K(c,a.concat(u)));else switch(l.slice(0,2)){case"/*":if("*/"!==l.slice(-2))break;case"👻":t.removeChild(c),u--,i--}break;case L:P.test(t.nodeName)&&S.call(c.textContent)===T&&(r.shift(),n.push(X(t,a)))}u++}}(a,o,t.slice(0),[]);var i={content:a,updates:function(n){for(var r=[],a=o.length,i=0,u=0;i<a;){var c=o[i++],s=U(n,c.path);switch(c.type){case"any":r.push({fn:e.any(s,[]),sparse:!1});break;case"attr":var l=c.sparse,f=e.attribute(s,c.name,c.node);null===l?r.push({fn:f,sparse:!1}):(u+=l.length-2,r.push({fn:f,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(s),sparse:!1}),s.textContent=""}}return a+=u,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,i=1;o<e;){var u=r[o-i];if(u.sparse){var c=u.values,s=c[0],l=1,f=c.length;for(i+=f-2;l<f;)s+=arguments[o++]+c[l++];u.fn(s)}else u.fn(arguments[o++])}return n}}};return Y.set(t,i),i}function ne(t){return function(n){var r=ee.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=Y.get(n)||te(t,n),a=O.call(e,r.content,!0),o={content:a,template:n,updates:r.updates(a)};return ee.set(t,o),o}(t,n)),r.updates.apply(null,arguments),r.content}}var re=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(u){var c,s,l,f;switch(typeof u){case"object":if(u){if("object"===o){if(!a&&i!==u)for(s in i)s in u||(r[s]="")}else a?r.value="":r.cssText="";for(s in c=a?{}:r,u)l="number"!=typeof(f=u[s])||e.test(s)?f:f+"px",!a&&/^--/.test(s)?c.setProperty(s,l):c[s]=l;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=c):i=u;break}default:i!=u&&(o="string",i=u,a?r.value=u||"":r.cssText=u||"")}}}}(),ae=function(e,t){return e.nodeType===v?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},oe=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},ie=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},ue=/^(?:form|list)$/i,ce=[].slice;function se(e){return this.type=e,ne(this)}function le(e){return e(this)}se.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return oe(e,n);t="className";case"data":case"props":return ie(e,t);case"style":return re(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||ue.test(t))?ie(e,t):oe(e,n)}},any:function(e,t){var n,r={node:ae,before:e},a="ownerSVGElement"in e?"svg":"html",o=!1;return function i(u){switch(typeof u){case"string":case"number":case"boolean":o?n!==u&&(n=u,t[0].textContent=u):(o=!0,n=u,t=j(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,u)],r));break;case"function":i(u(e));break;case"object":case"undefined":if(null==u){o=!1,t=j(e.parentNode,t,[],r);break}default:if(o=!1,n=u,h(u))if(0===u.length)t.length&&(t=j(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":i(String(u));break;case"function":i(u.map(le,e));break;case"object":h(u[0])&&(u=u.concat.apply([],u));default:t=j(e.parentNode,t,u,r)}else!function(e){return"ELEMENT_NODE"in e}(u)?"text"in u?i(String(u.text)):"any"in u?i(u.any):"html"in u?t=j(e.parentNode,t,ce.call(d([].concat(u.html).join(""),a).childNodes),r):"length"in u&&i(ce.call(u)):t=j(e.parentNode,t,11===u.nodeType?ce.call(u.childNodes):[u],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(ce.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var fe=new u,pe=new u,he=null;function ve(e,t){var n=me.call(this,e,t);return pe.get(e)!==n&&(pe.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}var de=be("html"),ge=be("svg");function ye(e,t){return e.nodeType===v?e.valueOf(t):e}function be(e){var t=new u;return n.for=function(n,r){var a=t.get(n)||function(e){var n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),a[r]||function(t,n){var r=[],a=null,o=new se(e),i=function(){return o.apply(null,Ee(r,1,1))};return t[n]=function(){r=f.apply(null,arguments);var e=me(o,i);return a||(a=Ne(e))}}(a,r)},n;function n(){var t=f.apply(null,arguments);return he?new xe(e,t):new se(e).apply(null,t)}}function me(e,t){var n,r,a=he;(he=fe.get(e)||(n=e,r={i:0,length:0,stack:[],update:!1},fe.set(n,r),r)).i=0;var o,i=t.call(this);if(i instanceof xe){o=ye(we(i,0),he.update);var u=he,c=u.i,s=u.length,l=u.stack,f=u.update;c<s&&l.splice(he.length=c),f&&(he.update=!1)}else o=ye(i,!1);return he=a,o}function we(e,t){var n=he,r=n.i,a=n.length,o=n.stack,i=e.type,u=e.args,c=r<a;he.i++,c||(he.length=o.push({l:t,kind:i,tag:null,tpl:u[0],wire:null})),Ee(u,1,t+1);var s=o[r];if(c){var l=s.l,f=s.kind,p=s.tag,h=s.tpl,v=s.wire;if(l===t&&i===f&&h===u[0])return p.apply(null,u),v}var d=new se(i),g=Ne(d.apply(null,u));return s.l=t,s.kind=i,s.tag=d,s.tpl=u[0],s.wire=g,r<1&&(he.update=!0),g}function Ee(e,t,n){for(var r=e.length;t<r;t++){var a=e[t];"object"==typeof a&&a&&(a instanceof xe?e[t]=we(a,n-1):h(a)&&(e[t]=Ee(a,0,n++)))}return e}function Ne(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new p(t):e}function xe(e,t){this.type=e,this.args=t}Object.freeze(xe);var Ae={};try{Ae.Event=new Event(".").constructor}catch(t){try{Ae.Event=new CustomEvent(".").constructor}catch(t){Ae.Event=function(t,n){n||(n={});var r=e.createEvent("Event"),a=!!n.bubbles,o=!!n.cancelable;r.initEvent(t,a,o);try{r.bubbles=a,r.cancelable=o}catch(r){}return r}}}var Ce=Ae.Event,ke={};try{ke.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},ke.WeakSet=r}(WeakMap)}var je=ke.WeakSet,Oe=null;try{Oe=new function(){}}catch(e){}var Se=function(e){return function(t){function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a(this,n(o).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(o,e),o}()};if(Oe){var _e=Object.getPrototypeOf,Te=Object.setPrototypeOf,Me=("object"==("undefined"==typeof Reflect?"undefined":typeof Reflect)?Reflect:{construct:function(e,t,n){for(var r=[null],a=0;a<t.length;a++)r.push(t[a]);var o=e.bind.apply(e,r);return Te(new o,n.prototype)}}).construct;Se=function(e,t){function n(){return Me(t?_e(e):e,arguments,n)}return Te(n.prototype,e.prototype),Te(n,e)}}var $e={map:{},re:null},Le=function(e){return new RegExp("<(/)?(".concat(e.join("|"),")([^A-Za-z0-9:._-])"),"g")},Pe=null,Re=function(e,t){var n=Pe||t,r=n.map,a=n.re;return e.replace(a,function(e,t,n,a){var o=r[n],i=o.tagName,u=o.is;return o.element?t?"</".concat(u,">"):"<".concat(u).concat(a):t?"</".concat(i,">"):"<".concat(i,' is="').concat(u,'"').concat(a)})},De=function(e){var t=e.tagName,n=e.is;return e.element?n:"".concat(t,'[is="').concat(n,'"]')},Ze=function(){return Pe},ze=function(e){Pe=e},We="_🔥",Ve=Object.defineProperties,Fe=new u,He=new u,Ie=new je,Ge="attributeChangedCallback",Be="connectedCallback",qe="dis".concat(Be),Ue=function(e,t,n){if(n in e){var r=e[n];t[n]={configurable:!0,value:function(){return ot.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:ot}},Je=function(e){var t=e.prototype,n=[],r={html:{configurable:!0,get:nt},svg:{configurable:!0,get:rt}};r[We]={value:{events:n,info:null}},"handleEvent"in t||(r.handleEvent={configurable:!0,value:at}),"oninit"in t&&(n.push("init"),Ue(t,r,"render")),Ue(t,r,Ge),Ue(t,r,Be),Ue(t,r,qe),[[Ge,"onattributechanged",function(e,t,n){var r=Ke("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}],[Be,"onconnected",function(){this.dispatchEvent(Ke("connected"))}],[qe,"ondisconnected",function(){this.dispatchEvent(Ke("disconnected"))}],[Be,"render",function(){this.render()}]].forEach(function(e){var a=o(e,3),i=a[0],u=a[1],c=a[2];if(!(i in t)&&u in t)if("render"!==u&&n.push(u.slice(2)),i in r){var s=r[i].value;r[i]={configurable:!0,value:function(){return s.apply(this,arguments),c.apply(this,arguments)}}}else r[i]={configurable:!0,value:c}});var a=e.booleanAttributes||[];a.forEach(function(e){e in t||(r[e]={configurable:!0,get:function(){return this.hasAttribute(e)},set:function(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});var i=e.observedAttributes||[];i.forEach(function(e){e in t||(r[e]={configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),Ve(t,r);var u=a.concat(i);return u.length?Ve(e,{observedAttributes:{configurable:!0,get:function(){return u}}}):e},Ke=function(e){return new Ce(e)},Qe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new xe("html",t)};Qe.for=de.for;var Xe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new xe("svg",t)};Xe.for=ge.for;var Ye=function(e,t,n){var r=et(e,t,new u);return n.set(e,r),r},et=function(e,t,n){return function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var u=l(r),c=n.get(u)||function(e,t,n){var r=n.info,a=r?Re(t.join(We),r).split(We):t;return e.set(t,a),a}(n,u,e[We]);return ve(e,function(){return t.apply(void 0,[c].concat(o))})}};function tt(e){this.addEventListener(e,this)}function nt(){return Fe.get(this)||Ye(this,Qe,Fe)}function rt(){return He.get(this)||Ye(this,Xe,He)}function at(e){this["on".concat(e.type)](e)}function ot(){Ie.has(this)||(Ie.add(this),this[We].events.forEach(tt,this),this.dispatchEvent(Ke("init")))}var it=Object.create,ut=Object.defineProperty,ct=Object.defineProperties,st=Object.getOwnPropertyNames,lt=Object.getOwnPropertySymbols,ft=Object.getOwnPropertyDescriptor,pt=Object.keys,ht={element:HTMLElement},vt=new u,dt=new u,gt=function(e){var t=it(null),n=it(null),r={prototype:n,statics:t};return st(e).concat(lt(e)).forEach(function(r){var a=ft(e,r);switch(a.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"booleanAttributes":case"observedAttributes":case"style":case"tagName":t[r]=a;break;default:n[r]=a}}),r},yt=function(t,n,r){var a;if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test(t))throw"Invalid name";var o=RegExp.$1,i=RegExp.$3,u=RegExp.$4,c=i||u||n.tagName||n.extends;if(!/^[A-Za-z0-9:._-]+$/.test(c))throw"Invalid tag";var s,l=o.replace(/([A-Z])([A-Z][a-z])/g,s="$1"+(s||"-")+"$2").replace(/([a-z])([A-Z])/g,s).toLowerCase()+r+"-heresy";if(customElements.get(l))throw"Duplicated ".concat(l," definition");var f=Se("object"==typeof n?dt.get(n)||function(t,n){var r=gt(t),a=r.statics,o=r.prototype,i=Se(ht[n]||(ht[n]=e.createElement(n).constructor),!1);return ct(i.prototype,o),ct(i,a),dt.set(t,Je(i)),i}(n,c):vt.get(n)||function(e){var t=Se(e,!1);return vt.set(e,Je(t)),t}(n),!0),p="element"===c;if(ut(f,"new",{value:p?function(){return e.createElement(l)}:function(){return e.createElement(c,{is:l})}}),ut(f.prototype,"is",{value:l}),""===r){var h=function(e){for(var t=e.length,n=0,r=0;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)}(l.slice(0,-7).toUpperCase());$e.map[o]=bt(f,c,l,{id:h,i:0}),$e.re=Le(pt($e.map))}var v=[l,f];return p||v.push({extends:c}),(a=customElements).define.apply(a,v),{Class:f,is:l,name:o,tagName:c}},bt=function t(n,r,a,o){var i=n.prototype,u=function(e,t){return{tagName:e,is:t,element:"element"===e}}(r,a),c=[De(u)],s=n.includes||n.contains;if(s){var l={};pt(s).forEach(function(e){var n="-".concat(o.id,"-").concat(o.i++),r=yt(e,s[e],n),a=r.Class,i=r.is,u=r.name,f=r.tagName;c.push(De(l[u]=t(a,f,i,o)))});var f=Le(pt(l)),p={events:i[We].events,info:{map:l,re:f}};if(ut(i,We,{value:p}),"render"in i){var h=i.render,v=p.info;ut(i,"render",{value:function(){var e=Ze();ze(v);var t=h.apply(this,arguments);return ze(e),t}})}}return"style"in n&&function(t){if(t.length){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t));var r=e.head||e.querySelector("head");r.insertBefore(n,r.lastChild)}}(n.style.apply(n,c)),u};return function(e){var t=se.prototype.transform;se.prototype.transform=t?function(n){return e(t(n))}:e}(function(e){return Re(e,$e)}),t.define=function(e,t){return("string"==typeof e?yt(e,t,""):yt(e.name,e,"")).Class},t.html=Qe,t.ref=function(e,t){return e?e[t]||(e[t]={current:null}):{current:null}},t.render=function(e,t){return ve(e,"function"==typeof t?t:function(){return t})},t.svg=Xe,t}(document,{});
