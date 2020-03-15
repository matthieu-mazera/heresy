/*! (c) Andrea Giammarchi - ISC */
var heresy=function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u={};try{u.WeakMap=WeakMap}catch(e){u.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var c=u.WeakMap;var s={};try{s.Event=new Event(".").constructor}catch(t){try{s.Event=new CustomEvent(".").constructor}catch(t){s.Event=function(t,n){n||(n={});var r=e.createEvent("Event"),a=!!n.bubbles,i=!!n.cancelable;r.initEvent(t,a,i);try{r.bubbles=a,r.cancelable=i}catch(r){}return r}}}var f=s.Event,l={};try{l.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},l.WeakSet=r}(WeakMap)}var h=l.WeakSet,p=!1,v=function(t){var n,r=(n=(e.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(n)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(n)),a=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(r||a){var i={},o=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return i[t]||(i[t]=e)};if(a)v=o;else{var u=new c;v=function(e){return u.get(e)||function(e,t){return u.set(e,t),t}(e,o(e))}}}else p=!0;return d(t)};function d(e){return p?e:v(e)}var g,y="-"+Math.random().toFixed(6)+"%",b=!1;try{"content"in(g=e.createElement("template"))&&(g.innerHTML='<p tabindex="'+y+'"></p>',g.content.childNodes[0].getAttribute("tabindex")==y)||(y="_dt: "+y.slice(1,-1)+";",b=!0)}catch(e){}var m="\x3c!--"+y+"--\x3e",w=8,E=1,x=3,A=/^(?:style|textarea)$/i,N=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function k(e){return e.join(m).replace($,P).replace(T,L)}var C=" \\f\\n\\r\\t",O="[^"+C+"\\/>\"'=]+",j="["+C+"]+"+O,S="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",_="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+O.replace("\\/","")+"))?)",T=new RegExp(S+j+_+"+)(["+C+"]*/?>)","g"),$=new RegExp(S+j+_+"*)(["+C+"]*/>)","g"),M=new RegExp("("+j+"\\s*=\\s*)(['\"]?)"+m+"\\2","gi");function L(e,t,n,r){return"<"+t+n.replace(M,R)+r}function R(e,t,n){return t+(n||'"')+y+(n||'"')}function P(e,t,n){return N.test(t)?e:"<"+t+n+"></"+t+">"}var Z=Array.isArray,z=[],W=z.indexOf,H=z.slice,F=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},I=function(t,n){return 111===t.nodeType?1/n<0?n?(a=(r=t).firstChild,i=r.lastChild,(o=e.createRange()).setStartAfter(a),o.setEndAfter(i),o.deleteContents(),a):t.lastChild:n?t.valueOf():t.firstChild:t;var r,a,i,o},D=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),i=a("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;i.innerHTML="<table>"+e+"</table>",o=i.querySelectorAll(u)}else i.innerHTML=e,o=i.childNodes;return r(n,o),n};return function(e,i){return("svg"===i?function(e){var n=a(t),i=a("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,i.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),V=function(e,t,n,r,a,i){for(var o=("selectedIndex"in t),u=o;r<a;){var c=e(n[r],1);if(t.insertBefore(c,i),o&&u&&c.selected){u=!u;var s=t.selectedIndex;t.selectedIndex=s<0?r:W.call(t.querySelectorAll("option"),c)}r++}},q=function(e,t){return e==t},B=function(e){return e},G=function(e,t,n,r,a,i,o){var u=i-a;if(u<1)return-1;for(;n-t>=u;){for(var c=t,s=a;c<n&&s<i&&o(e[c],r[s]);)c++,s++;if(s===i)return t;t=c+1}return-1},U=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},J=function(e,t,n,r){for(;n<r;)X(e(t[n++],-1))},K=function(e,t,n){for(var r=1,a=t;r<a;){var i=(r+a)/2>>>0;n<e[i]?a=i:r=i+1}return r},Q=function(e,t,n,r,a,i,o,u,c,s,f,l,h){!function(e,t,n,r,a,i,o,u,c){for(var s=[],f=e.length,l=o,h=0;h<f;)switch(e[h++]){case 0:a++,l++;break;case 1:s.push(r[a]),V(t,n,r,a++,a,l<u?t(i[l],0):c);break;case-1:l++}for(h=0;h<f;)switch(e[h++]){case 0:o++;break;case-1:-1<s.indexOf(i[o])?o++:J(t,i,o++,o)}}(function(e,t,n,r,a,i,o){var u,c,s,f,l,h,p,v=n+i,d=[];e:for(u=0;u<=v;u++){if(u>50)return null;for(p=u-1,l=u?d[u-1]:[0,0],h=d[u]=[],c=-u;c<=u;c+=2){for(s=(f=c===-u||c!==u&&l[p+c-1]<l[p+c+1]?l[p+c+1]:l[p+c-1]+1)-c;f<i&&s<n&&o(r[a+f],e[t+s]);)f++,s++;if(f===i&&s===n)break e;h[u+c]=f}}var g=Array(u/2+v/2),y=g.length-1;for(u=d.length-1;u>=0;u--){for(;f>0&&s>0&&o(r[a+f-1],e[t+s-1]);)g[y--]=0,f--,s--;if(!u)break;p=u-1,l=u?d[u-1]:[0,0],(c=f-s)==-u||c!==u&&l[p+c-1]<l[p+c+1]?(s--,g[y--]=1):(f--,g[y--]=-1)}return g}(n,r,i,o,u,s,l)||function(e,t,n,r,a,i,o,u){var c=0,s=r<u?r:u,f=Array(s++),l=Array(s);l[0]=-1;for(var h=1;h<s;h++)l[h]=o;for(var p=a.slice(i,o),v=t;v<n;v++){var d=p.indexOf(e[v]);if(-1<d){var g=d+i;-1<(c=K(l,s,g))&&(l[c]=g,f[c]={newi:v,oldi:g,prev:f[c-1]})}}for(c=--s,--o;l[c]>o;)--c;s=u+r-c;var y=Array(s),b=f[c];for(--n;b;){for(var m=b,w=m.newi,E=m.oldi;n>w;)y[--s]=1,--n;for(;o>E;)y[--s]=-1,--o;y[--s]=0,--n,--o,b=b.prev}for(;n>=t;)y[--s]=1,--n;for(;o>=i;)y[--s]=-1,--o;return y}(n,r,a,i,o,u,c,s),e,t,n,r,o,u,f,h)},X=function(e){return(e.remove||function(){var e=this.parentNode;e&&e.removeChild(this)}).call(e)};var Y=function(e,t,n,r){r||(r={});for(var a=r.compare||q,i=r.node||B,o=null==r.before?null:i(r.before,0),u=t.length,c=u,s=0,f=n.length,l=0;s<c&&l<f&&a(t[s],n[l]);)s++,l++;for(;s<c&&l<f&&a(t[c-1],n[f-1]);)c--,f--;var h=s===c,p=l===f;if(h&&p)return n;if(h&&l<f)return V(i,e,n,l,f,U(i,t,s,u,o)),n;if(p&&s<c)return J(i,t,s,c),n;var v=c-s,d=f-l,g=-1;if(v<d){if(-1<(g=G(n,l,f,t,s,c,a)))return V(i,e,n,l,g,i(t[s],0)),V(i,e,n,g+v,f,U(i,t,c,u,o)),n}else if(d<v&&-1<(g=G(t,s,c,n,l,f,a)))return J(i,t,s,g),J(i,t,g+d,c),n;return v<2||d<2?(V(i,e,n,l,f,i(t[s],0)),J(i,t,s,c),n):v===d&&function(e,t,n,r,a,i){for(;r<a&&i(n[r],e[t-1]);)r++,t--;return 0===t}(n,f,t,s,c,a)?(V(i,e,n,l,f,U(i,t,c,u,o)),n):(Q(i,e,n,l,f,d,t,s,c,v,u,a,o),n)},ee=function(e,t,n,r,a){var i="importNode"in e,o=e.createDocumentFragment();return o.appendChild(e.createTextNode("g")),o.appendChild(e.createTextNode("")),(i?e.importNode(o,!0):o.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],i=a.length,o=0;n&&o<i;o++)r.appendChild(e(a[o],n));return r}:i?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),te="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},ne=b?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function re(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ae(t,n,r,a){for(var i=t.attributes,o=[],u=[],c=ne(i,r),s=c.length,f=0;f<s;){var l,h=c[f++],p=h.value===y;if(p||1<(l=h.value.split(m)).length){var v=h.name;if(o.indexOf(v)<0){o.push(v);var d=r.shift().replace(p?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),g=i[d]||i[d.toLowerCase()];if(p)n.push(oe(g,a,d,null));else{for(var w=l.length-2;w--;)r.shift();n.push(oe(g,a,d,l))}}u.push(h)}}f=0;for(var E=(0<(s=u.length)&&b&&!("ownerSVGElement"in t));f<s;){var x=u[f++];E&&(x.value=""),t.removeAttribute(x.name)}var A=t.nodeName;if(/^script$/i.test(A)){var N=e.createElement(A);for(s=i.length,f=0;f<s;)N.setAttributeNode(i[f++].cloneNode(!0));N.textContent=t.textContent,t.parentNode.replaceChild(N,t)}}function ie(e,t){return{type:"any",node:e,path:t}}function oe(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function ue(e,t){return{type:"text",node:e,path:t}}var ce=F(new c);function se(e,t){var n=(e.convert||k)(t),r=e.transform;r&&(n=r(n));var a=D(n,e.type);he(a);var i=[];return function e(t,n,r,a){for(var i=t.childNodes,o=i.length,u=0;u<o;){var c=i[u];switch(c.nodeType){case E:var s=a.concat(u);ae(c,n,r,s),e(c,n,r,s);break;case w:var f=c.textContent;if(f===y)r.shift(),n.push(A.test(t.nodeName)?ue(t,a):ie(c,a.concat(u)));else switch(f.slice(0,2)){case"/*":if("*/"!==f.slice(-2))break;case"👻":t.removeChild(c),u--,o--}break;case x:A.test(t.nodeName)&&te.call(c.textContent)===m&&(r.shift(),n.push(ue(t,a)))}u++}}(a,i,t.slice(0),[]),{content:a,updates:function(n){for(var r=[],a=i.length,o=0,u=0;o<a;){var c=i[o++],s=re(n,c.path);switch(c.type){case"any":r.push({fn:e.any(s,[]),sparse:!1});break;case"attr":var f=c.sparse,l=e.attribute(s,c.name,c.node);null===f?r.push({fn:l,sparse:!1}):(u+=f.length-2,r.push({fn:l,sparse:!0,values:f}));break;case"text":r.push({fn:e.text(s),sparse:!1}),s.textContent=""}}return a+=u,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var i=1,o=1;i<e;){var u=r[i-o];if(u.sparse){var c=u.values,s=c[0],f=1,l=c.length;for(o+=l-2;f<l;)s+=arguments[i++]+c[f++];u.fn(s)}else u.fn(arguments[i++])}return n}}}}var fe=[];function le(t){var n=fe,r=he;return function(a){return n!==a&&(r=function(t,n){var r=ce.get(n)||ce.set(n,se(t,n));return r.updates(ee.call(e,r.content,!0))}(t,n=a)),r.apply(null,arguments)}}function he(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===te.call(r.textContent).length&&e.removeChild(r)}}var pe=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var i,o;return function(u){var c,s,f,l;switch(typeof u){case"object":if(u){if("object"===i){if(!a&&o!==u)for(s in o)s in u||(r[s]="")}else a?r.value="":r.cssText="";for(s in c=a?{}:r,u)f="number"!=typeof(l=u[s])||e.test(s)?l:l+"px",!a&&/^--/.test(s)?c.setProperty(s,f):c[s]=f;i="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(o=c):o=u;break}default:o!=u&&(i="string",o=u,a?r.value=u||"":r.cssText=u||"")}}}}(),ve=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},de=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},ge=/^(?:form|list)$/i;function ye(e){return this.type=e,le(this)}function be(e){return e(this)}ye.prototype={attribute:function(e,t,n){var r="svg"===this.type;switch(t){case"class":if(r)return ve(e,n);t="className";case"data":case"props":return de(e,t);case"style":return pe(e,n,r);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t,n){return n?function(n){try{e[t]=n}catch(r){e.setAttribute(t,n)}}:function(n){e[t]=n}}(e,t.slice(1),r):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var a=Z(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}}(e,t):t in e&&!r&&!ge.test(t)?de(e,t):ve(e,n)}},any:function(e,t){var n,r={node:I,before:e},a=this.type,i=!1;return function o(u){switch(typeof u){case"string":case"number":case"boolean":i?n!==u&&(n=u,t[0].textContent=u):(i=!0,n=u,t=Y(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,u)],r));break;case"function":o(u(e));break;case"object":case"undefined":if(null==u){i=!1,t=Y(e.parentNode,t,[],r);break}default:if(i=!1,n=u,Z(u))if(0===u.length)t.length&&(t=Y(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":o(String(u));break;case"function":o(u.map(be,e));break;case"object":Z(u[0])&&(u=u.concat.apply([],u));default:t=Y(e.parentNode,t,u,r)}else"ELEMENT_NODE"in u?t=Y(e.parentNode,t,11===u.nodeType?H.call(u.childNodes):[u],r):"text"in u?o(String(u.text)):"any"in u?o(u.any):"html"in u?t=Y(e.parentNode,t,H.call(D([].concat(u.html).join(""),a).childNodes),r):"length"in u&&o(H.call(u))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(H.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var me=Object.create,we=Object.freeze,Ee=Object.keys,xe=ye.prototype,Ae=F(new c),Ne=function(e){return{html:Ce("html",e),svg:Ce("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=Ae.get(t)||Ae.set(t,ke()),i=r instanceof Se?Oe(e,a,r):r;return i!==a.wire&&(a.wire=i,t.textContent="",t.appendChild(i.valueOf())),t}}},ke=function(){return{stack:[],entry:null,wire:null}},Ce=function(e,t){var n=F(new c);return r.for=function(e,a){var i,o=n.get(e)||n.set(e,me(null));return o[a]||(o[a]=(i=ke(),function(){return Oe(t,i,r.apply(null,arguments))}))},r.node=function(){return Oe(t,ke(),r.apply(null,arguments)).valueOf()},r;function r(){return new Se(e,function(e){for(var t=arguments.length,n=[d(e)],r=1;r<t;)n.push(arguments[r++]);return n}.apply(null,arguments))}},Oe=function(e,t,n){var r,a=n.type,i=n.template,u=n.values,c=u.length;je(e,t,u,c);var s=t.entry;if(s&&s.template===i&&s.type===a)(r=s).tag.apply(r,[i].concat(o(u)));else{var f=new e(a);t.entry=s={type:a,template:i,tag:f,wire:function(e){var t=e.childNodes,n=t.length;if(n<2)return t[0];var r=H.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var a=0;a<n;)e.appendChild(r[a++]);return e}}}(f.apply(void 0,[i].concat(o(u))))}}return s.wire},je=function e(t,n,r,a){for(var i=n.stack,o=0;o<a;o++){var u=r[o];u instanceof _e?r[o]=Oe(t,i[o]||(i[o]=ke()),u):Z(u)?e(t,i[o]||(i[o]=ke()),u,u.length):i[o]=null}a<i.length&&i.splice(a)};function Se(e,t){this.type=e,this.template=t.shift(),this.values=t}we(Se);var _e=Se,Te=(Ne(ye),"function"==typeof cancelAnimationFrame),$e=Te?cancelAnimationFrame:clearTimeout,Me=Te?requestAnimationFrame:setTimeout;function Le(e){var t,n,r,a,i;return u(),function(e,u,s){return r=e,a=u,i=s,n||(n=Me(o)),--t<0&&c(!0),c};function o(){u(),r.apply(a,i||[])}function u(){t=e||1/0,n=Te?0:null}function c(e){var t=!!n;return t&&($e(n),e&&o()),t}}var Re=null,Pe=function(e){var t=[];return function n(){var r=Re,a=[];Re={hook:n,args:arguments,stack:t,i:0,length:t.length,after:a};try{return e.apply(null,arguments)}finally{Re=r;for(var i=0,o=a.length;i<o;i++)a[i]()}}},Ze=F(new WeakMap),ze=function(e,t,n){e.apply(t,n)},We={async:!1,always:!1},He=function(e,t){var n=Re.i++,r=Re,a=r.hook,i=r.args,o=r.stack,u=r.length,c=t||We,s=c.async,f=c.always;n===u&&(Re.length=o.push({$:"function"==typeof e?e():e,_:s?Ze.get(a)||Ze.set(a,Le()):ze}));var l=o[n];return[l.$,function(e){var t="function"==typeof e?e(l.$):e;(f||l.$!==t)&&(l.$=t,l._(a,null,i))}]},Fe=new WeakMap,Ie=function(e){var t=e.hook,n=e.args;t.apply(null,n)};function De(e){this.value!==e&&(this.value=e,Fe.get(this).forEach(Ie))}function Ve(e){return e.hook===this.hook}var qe=new WeakMap,Be=F(qe),Ge=function(){},Ue=function(e){return function(t,n){var r=Re.i++,a=Re,i=a.hook,o=a.after,u=a.stack;if(r<a.length){var c=u[r],s=c.update,f=c.values,l=c.stop;if(!n||n.some(Ye,f)){c.values=n,e&&l(e);var h=c.clean;h&&(c.clean=null,h());var p=function(){c.clean=t()};e?s(p):o.push(p)}}else{var v=e?Le():Ge,d={clean:null,update:v,values:n,stop:Ge};Re.length=u.push(d),(Be.get(i)||Be.set(i,[])).push(d);var g=function(){d.clean=t()};e?d.stop=v(g):o.push(g)}}},Je=qe.has.bind(qe),Ke=Ue(!0),Qe=Ue(!1),Xe=function(e,t){var n=Re.i++,r=Re,a=r.stack;return n===r.length?Re.length=a.push({$:e(),_:t}):t&&!t.some(Ye,a[n]._)||(a[n]={$:e(),_:t}),a[n].$};function Ye(e,t){return e!==this[t]}var et=null;try{et=new function(){}}catch(e){}var tt=function(e){return function(t){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a(this,n(i).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(i,e),i}()};if(et){var nt=Object.getPrototypeOf,rt=Object.setPrototypeOf,at=("object"==("undefined"==typeof Reflect?"undefined":typeof Reflect)?Reflect:{construct:function(e,t,n){for(var r=[null],a=0;a<t.length;a++)r.push(t[a]);var i=e.bind.apply(e,r);return rt(new i,n.prototype)}}).construct;tt=function(e,t){function n(){return at(t?nt(e):e,arguments,n)}return rt(n.prototype,e.prototype),rt(n,e)}}var it={map:{},re:null},ot=function(e){return new RegExp("<(/)?(".concat(e.join("|"),")([^A-Za-z0-9:._-])"),"g")},ut=null,ct=function(e,t){var n=ut||t,r=n.map,a=n.re;return e.replace(a,function(e,t,n,a){var i=r[n],o=i.tagName,u=i.is;return i.element?t?"</".concat(u,">"):"<".concat(u).concat(a):t?"</".concat(o,">"):"<".concat(o,' is="').concat(u,'"').concat(a)})},st=function(e){var t=e.tagName,n=e.is;return e.element?n:"".concat(t,'[is="').concat(n,'"]')},ft=function(){return ut},lt=function(e){ut=e},ht={useCallback:function(e,t){return Xe(function(){return e},t)},useContext:function(e){var t=Re,n=t.hook,r=t.args,a=Fe.get(e),i={hook:n,args:r};return a.some(Ve,i)||a.push(i),e.value},useEffect:Ke,useLayoutEffect:Qe,useMemo:Xe,useReducer:function(e,t,n,r){var a="function"==typeof n,i=He(a?n(t):t,a?r:n);return[i[0],function(t){i[1](e(i[0],t))}]},useRef:function(e){var t=Re.i++,n=Re,r=n.stack;return t===n.length&&(Re.length=r.push({current:e})),r[t]},useState:He},pt=function(e){var t=me(xe);return Ee(e).forEach(function(n){t[n]=e[n](t[n]||("convert"===n?k:String))}),n.prototype=t,Ne(n);function n(){return ye.apply(this,arguments)}}({transform:function(){return function(e){return ct(e,it)}}}),vt=pt.render,dt=pt.html,gt=pt.svg,yt="_🔥",bt=Object.defineProperties,mt=new c,wt=new c,Et=new c,xt=new h,At="attributeChangedCallback",Nt="connectedCallback",kt="dis".concat(Nt),Ct=function(e,t,n){if(n in e){var r=e[n];t[n]={configurable:!0,value:function(){return zt.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:zt}},Ot=function(e){var t=e.prototype,n=[],r={html:{configurable:!0,get:Rt},svg:{configurable:!0,get:Pt}};if(r[yt]={value:{events:n,info:null}},"handleEvent"in t||(r.handleEvent={configurable:!0,value:Zt}),"render"in t&&t.render.length){var a=t.oninit;bt(t,{oninit:{configurable:!0,value:function(){var e=Pe(this.render.bind(this,ht));bt(this,{render:{configurable:!0,value:e}}),this.addEventListener("disconnected",function(e){(qe.get(e)||[]).forEach(function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())})}.bind(null,e),!1),a&&a.apply(this,arguments)}}})}"oninit"in t&&(n.push("init"),Ct(t,r,"render")),Ct(t,r,At),Ct(t,r,Nt),Ct(t,r,kt),[[At,"onattributechanged",function(e,t,n){var r=jt("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}],[Nt,"onconnected",function(){this.dispatchEvent(jt("connected"))}],[kt,"ondisconnected",function(){this.dispatchEvent(jt("disconnected"))}],[Nt,"render",function(){this.render()}]].forEach(function(e){var a=i(e,3),o=a[0],u=a[1],c=a[2];if(!(o in t)&&u in t)if("render"!==u&&n.push(u.slice(2)),o in r){var s=r[o].value;r[o]={configurable:!0,value:function(){return s.apply(this,arguments),c.apply(this,arguments)}}}else r[o]={configurable:!0,value:c}});var o=e.booleanAttributes||[];o.forEach(function(e){e in t||(r[e]={configurable:!0,get:function(){return this.hasAttribute(e)},set:function(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});var u=e.observedAttributes||[];u.forEach(function(e){e in t||(r[e]={configurable:!0,get:function(){return this.getAttribute(e)},set:function(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),(e.mappedAttributes||[]).forEach(function(e){var a=new c,i="on"+e in t;i&&n.push(e),r[e]={configurable:!0,get:function(){return a.get(this)},set:function(t){if(a.set(this,t),i){var n=jt(e);if(n.detail=t,xt.has(this))this.dispatchEvent(n);else{var r=Et.get(this);r?r.push(n):Et.set(this,[n])}}}}}),bt(t,r);var s=o.concat(u);return s.length?bt(e,{observedAttributes:{configurable:!0,get:function(){return s}}}):e},jt=function(e){return new f(e)},St=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new _e("html",t)};St.for=dt.for;var _t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new _e("svg",t)};_t.for=gt.for;var Tt=function(e,t,n){var r=$t(e,t,new c);return n.set(e,r),r},$t=function(e,t,n){return function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];var u=d(r),c=n.get(u)||function(e,t,n){var r=n.info,a=r?ct(t.join(yt),r).split(yt):t;return e.set(t,a),a}(n,u,e[yt]);return vt(e,function(){return t.apply(void 0,[c].concat(i))})}};function Mt(e){this.addEventListener(e,this)}function Lt(e){this.dispatchEvent(e)}function Rt(){return mt.get(this)||Tt(this,St,mt)}function Pt(){return wt.get(this)||Tt(this,_t,wt)}function Zt(e){this["on".concat(e.type)](e)}function zt(){if(!xt.has(this)){xt.add(this),this[yt].events.forEach(Mt,this),this.dispatchEvent(jt("init"));var e=Et.get(this);e&&(Et.delete(this),e.forEach(Lt,this))}}var Wt=Object.create,Ht=Object.defineProperty,Ft=Object.defineProperties,It=Object.getOwnPropertyNames,Dt=Object.getOwnPropertySymbols,Vt=Object.getOwnPropertyDescriptor,qt=Object.keys,Bt={element:HTMLElement},Gt=new c,Ut=new c,Jt=new c,Kt=(new c,function(e,t){return("string"==typeof e?Xt(e,t,""):Xt(e.name,e,"")).Class}),Qt=function(e){var t=Wt(null),n=Wt(null),r={prototype:n,statics:t};return It(e).concat(Dt(e)).forEach(function(r){var a=Vt(e,r);switch(a.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"booleanAttributes":case"mappedAttributes":case"observedAttributes":case"style":case"tagName":t[r]=a;break;default:n[r]=a}}),r},Xt=function(t,n,r){var a;if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test(t))throw"Invalid name";var i=RegExp.$1,o=RegExp.$3,u=RegExp.$4,c=o||u||n.tagName||n.extends||"element",s="fragment"===c;if(s)c="element";else if(!/^[A-Za-z0-9:._-]+$/.test(c))throw"Invalid tag";var f,l="",h="";c.indexOf("-")<0?(l=i.replace(/([A-Z])([A-Z][a-z])/g,f="$1"+(f||"-")+"$2").replace(/([a-z])([A-Z])/g,f).toLowerCase()+r).indexOf("-")<0&&(h="-heresy"):(l=c+r,c="element");var p=l+h;if(customElements.get(p))throw"Duplicated ".concat(p," definition");var v=tt("object"==typeof n?Jt.get(n)||function(t,n){var r=Qt(t),a=r.statics,i=r.prototype,o=tt(Bt[n]||(Bt[n]=e.createElement(n).constructor),!1);return Ft(o.prototype,i),Ft(o,a),Jt.set(t,Ot(o)),o}(n,c):Gt.get(n)||function(e){var t=tt(e,!1);return Gt.set(e,Ot(t)),t}(n),!0),d="element"===c;if(Ht(v,"new",{value:d?function(){return e.createElement(p)}:function(){return e.createElement(c,{is:p})}}),Ht(v.prototype,"is",{value:p}),""===r){var g=function(e){for(var t=e.length,n=0,r=0;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)}(l.toUpperCase());it.map[i]=tn(v,c,p,{id:g,i:0}),it.re=ot(qt(it.map))}if(s){var y=v.prototype.render;Ht(v.prototype,"render",{configurable:!0,value:function(){if(y&&y.apply(this,arguments),this.parentNode){var t=this.firstChild,n=null;if(t){var r=e.createRange();r.setStartBefore(t),r.setEndAfter(this.lastChild),n=r.extractContents(),this.parentNode.replaceChild(n,this)}}}})}var b=[p,v];return d||b.push({extends:c}),(a=customElements).define.apply(a,b),{Class:v,is:p,name:i,tagName:c}},Yt=Math.random(),en=function(e){var t=Ut.get(e);if(!t){var n=("Heresy"+ ++Yt).replace(/[^He-y0-9]/g,"");Ut.set(e,t=Kt(n,e))}return function(){return t.new()}},tn=function t(n,r,a,i){var o=n.prototype,u=function(e,t){return{tagName:e,is:t,element:"element"===e}}(r,a),c=[st(u)],s=n.includes||n.contains;if(s){var f={};qt(s).forEach(function(e){var n="-".concat(i.id,"-").concat(i.i++),r=Xt(e,s[e],n),a=r.Class,o=r.is,u=r.name,l=r.tagName;c.push(st(f[u]=t(a,l,o,i)))});var l=ot(qt(f)),h={events:o[yt].events,info:{map:f,re:l}};if(Ht(o,yt,{value:h}),"render"in o){var p=o.render,v=h.info;Ht(o,"render",{configurable:!0,value:function(){var e=ft();lt(v);var t=p.apply(this,arguments);return lt(e),t}})}}return"style"in n&&function(t){if((t||"").length){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t));var r=e.head||e.querySelector("head");r.insertBefore(n,r.lastChild)}}(n.style.apply(n,c)),u};return t.contextual=function(e){var t=!0,n=null,r=Pe(function(){return e.apply(n,arguments)});return function e(){var a=r.apply(n=this,arguments);return t&&(t=!t,Je(r)&&qe.set(e,qe.get(r))),a}},t.createContext=function(e){var t={value:e,provide:De};return Fe.set(t,[]),t},t.define=Kt,t.defineHook=function(e,t){if(e in ht)throw new Error("duplicated hook "+e);ht[e]=t(ht)},t.html=St,t.ref=function(e,t){return e?e[t]||(e[t]={current:null}):{current:null}},t.render=function(e,t){return vt(e,"function"==typeof t?t:t instanceof _e?function(){return t}:en(t))},t.svg=_t,t}(document,{});
