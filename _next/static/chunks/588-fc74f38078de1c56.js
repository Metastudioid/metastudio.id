(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{3398:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{u:function(){return q}});var u,c,f=t(7294);function s(e,n){if(e in n){for(var t=n[e],r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return"function"===typeof t?t.apply(void 0,i):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,s),a}function l(e){var n=e.props,t=e.slot,o=e.defaultTag,a=e.features,f=e.visible,l=void 0===f||f,v=e.name;if(l)return d(n,t,o,v);var p=null!=a?a:u.None;if(p&u.Static){var m=n.static,h=void 0!==m&&m,b=i(n,["static"]);if(h)return d(b,t,o,v)}if(p&u.RenderStrategy){var g,y=n.unmount,E=void 0===y||y,w=i(n,["unmount"]);return s(E?c.Unmount:c.Hidden,((g={})[c.Unmount]=function(){return null},g[c.Hidden]=function(){return d(r({},w,{hidden:!0,style:{display:"none"}}),t,o,v)},g))}return d(n,t,o,v)}function d(e,n,t,r){var o;void 0===n&&(n={});var u=v(e,["unmount","static"]),c=u.as,s=void 0===c?t:c,l=u.children,d=u.refName,p=void 0===d?"ref":d,m=i(u,["as","children","refName"]),h=void 0!==e.ref?((o={})[p]=e.ref,o):{},b="function"===typeof l?l(n):l;if(m.className&&"function"===typeof m.className&&(m.className=m.className(n)),s===f.Fragment&&Object.keys(m).length>0){if(!(0,f.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(m).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,f.cloneElement)(b,Object.assign({},function(e,n,t){for(var r,i=Object.assign({},e),o=function(){var t,o=r.value;void 0!==e[o]&&void 0!==n[o]&&Object.assign(i,((t={})[o]=function(t){t.defaultPrevented||e[o](t),t.defaultPrevented||n[o](t)},t))},u=a(t);!(r=u()).done;)o();return i}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(v(m,["ref"])),b.props,["onClick"]),h))}return(0,f.createElement)(s,Object.assign({},v(m,["ref"]),s!==f.Fragment&&h),b)}function v(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),i=a(n);!(t=i()).done;){var o=t.value;o in r&&delete r[o]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(u||(u={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(c||(c={}));var p="undefined"!==typeof window?f.useLayoutEffect:f.useEffect,m={serverHandoffComplete:!1};function h(){var e=(0,f.useState)(m.serverHandoffComplete),n=e[0],t=e[1];return(0,f.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,f.useEffect)((function(){!1===m.serverHandoffComplete&&(m.serverHandoffComplete=!0)}),[]),n}var b=0;function g(){return++b}var y,E,w=(0,f.createContext)(null);function C(){return(0,f.useContext)(w)}function O(e){var n=e.value,t=e.children;return f.createElement(w.Provider,{value:n},t)}function T(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=a(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function F(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function S(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function j(e,n,t,r,i,o){var a=T(),u=void 0!==o?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(o):function(){};return S.apply(void 0,[e].concat(i)),F.apply(void 0,[e].concat(n,t)),a.nextFrame((function(){S.apply(void 0,[e].concat(t)),F.apply(void 0,[e].concat(r)),a.add(function(e,n){var t=T();if(!e)return t.dispose;var r=getComputedStyle(e),i=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),o=i[0],a=i[1];return 0!==o?t.setTimeout((function(){n(E.Finished)}),o+a):n(E.Finished),t.add((function(){return n(E.Cancelled)})),t.dispose}(e,(function(t){return S.apply(void 0,[e].concat(r,n)),F.apply(void 0,[e].concat(i)),u(t)})))})),a.add((function(){return S.apply(void 0,[e].concat(n,t,r,i))})),a.add((function(){return u(E.Cancelled)})),a.dispose}function H(e){return void 0===e&&(e=""),(0,f.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}w.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(y||(y={})),function(e){e.Finished="finished",e.Cancelled="cancelled"}(E||(E={}));var A,x=(0,f.createContext)(null);x.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(A||(A={}));var V=(0,f.createContext)(null);function N(e){return"children"in e?N(e.children):e.current.filter((function(e){return e.state===A.Visible})).length>0}function R(e){var n=(0,f.useRef)(e),t=(0,f.useRef)([]),r=function(){var e=(0,f.useRef)(!1);return(0,f.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,f.useEffect)((function(){n.current=e}),[e]);var i=(0,f.useCallback)((function(e,i){var o;void 0===i&&(i=c.Hidden);var a=t.current.findIndex((function(n){return n.id===e}));-1!==a&&(s(i,((o={})[c.Unmount]=function(){t.current.splice(a,1)},o[c.Hidden]=function(){t.current[a].state=A.Hidden},o)),!N(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),o=(0,f.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==A.Visible&&(n.state=A.Visible):t.current.push({id:e,state:A.Visible}),function(){return i(e,c.Unmount)}}),[t,i]);return(0,f.useMemo)((function(){return{children:t,register:o,unregister:i}}),[o,i,t])}function L(){}V.displayName="NestingContext";var k=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){for(var n,t={},r=a(k);!(n=r()).done;){var i,o=n.value;t[o]=null!=(i=e[o])?i:L}return t}var U=u.RenderStrategy;function M(e){var n,t=e.beforeEnter,o=e.afterEnter,a=e.beforeLeave,u=e.afterLeave,d=e.enter,v=e.enterFrom,m=e.enterTo,b=e.entered,w=e.leave,C=e.leaveFrom,T=e.leaveTo,F=i(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),S=(0,f.useRef)(null),L=(0,f.useState)(A.Visible),k=L[0],M=L[1],q=F.unmount?c.Unmount:c.Hidden,D=function(){var e=(0,f.useContext)(x);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),I=D.show,_=D.appear,B=D.initial,Y=function(){var e=(0,f.useContext)(V);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),$=Y.register,z=Y.unregister,G=function(){var e=h(),n=(0,f.useState)(e?g:null),t=n[0],r=n[1];return p((function(){null===t&&r(g())}),[t]),null!=t?""+t:void 0}(),J=(0,f.useRef)(!1),K=R((function(){J.current||(M(A.Hidden),z(G),re.current.afterLeave())}));p((function(){if(G)return $(G)}),[$,G]),p((function(){var e;q===c.Hidden&&G&&(I&&k!==A.Visible?M(A.Visible):s(k,((e={})[A.Hidden]=function(){return z(G)},e[A.Visible]=function(){return $(G)},e)))}),[k,G,$,z,I,q]);var Q=H(d),W=H(v),X=H(m),Z=H(b),ee=H(w),ne=H(C),te=H(T),re=function(e){var n=(0,f.useRef)(P(e));return(0,f.useEffect)((function(){n.current=P(e)}),[e]),n}({beforeEnter:t,afterEnter:o,beforeLeave:a,afterLeave:u}),ie=h();(0,f.useEffect)((function(){if(ie&&k===A.Visible&&null===S.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[S,k,ie]);var oe=B&&!_;p((function(){var e=S.current;if(e&&!oe)return J.current=!0,I&&re.current.beforeEnter(),I||re.current.beforeLeave(),I?j(e,Q,W,X,Z,(function(e){J.current=!1,e===E.Finished&&re.current.afterEnter()})):j(e,ee,ne,te,Z,(function(e){J.current=!1,e===E.Finished&&(N(K)||(M(A.Hidden),z(G),re.current.afterLeave()))}))}),[re,G,J,z,K,S,oe,I,Q,W,X,ee,ne,te]);var ae={ref:S},ue=F;return f.createElement(V.Provider,{value:K},f.createElement(O,{value:s(k,(n={},n[A.Visible]=y.Open,n[A.Hidden]=y.Closed,n))},l({props:r({},ue,ae),defaultTag:"div",features:U,visible:k===A.Visible,name:"Transition.Child"})))}function q(e){var n,t=e.show,o=e.appear,a=void 0!==o&&o,u=e.unmount,c=i(e,["show","appear","unmount"]),d=C();void 0===t&&null!==d&&(t=s(d,((n={})[y.Open]=!0,n[y.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var v=(0,f.useState)(t?A.Visible:A.Hidden),p=v[0],m=v[1],h=R((function(){m(A.Hidden)})),b=function(){var e=(0,f.useRef)(!0);return(0,f.useEffect)((function(){e.current=!1}),[]),e.current}(),g=(0,f.useMemo)((function(){return{show:t,appear:a||!b,initial:b}}),[t,a,b]);(0,f.useEffect)((function(){t?m(A.Visible):N(h)||m(A.Hidden)}),[t,h]);var E={unmount:u};return f.createElement(V.Provider,{value:h},f.createElement(x.Provider,{value:g},l({props:r({},E,{as:f.Fragment,children:f.createElement(M,Object.assign({},E,c))}),defaultTag:f.Fragment,features:U,visible:p===A.Visible,name:"Transition"})))}q.Child=function(e){var n=null!==(0,f.useContext)(x),t=null!==C();return!n&&t?f.createElement(q,Object.assign({},e)):f.createElement(M,Object.assign({},e))},q.Root=q},9008:function(e,n,t){e.exports=t(5443)}}]);