import{S as N,i as Y,s as z,J as g,w as Z,W as x,y as L,z as w,A as O,M,U as R,X as ee,g as m,d as h,B as A,O as P,I as D,a0 as ce,P as F,$ as B,C as I,D as K,E as X,F as j,e as W,b as fe,v as ue,f as ae,h as de,Q as he,o as be}from"./index.6fff21c0.js";import{P as pe,g as U,h as _e,i as te,T as ne,j as ve,R as Pe,A as Ee}from"./root.513436f8.js";import{c as oe}from"./index.112b0889.js";import{P as ke}from"./Portal.aebaf4a3.js";function re(s,e,r){const t=r.originalEvent.target,n=new CustomEvent(s,{cancelable:!0,detail:r});e&&t.addEventListener(s,e,{once:!0}),t.dispatchEvent(n)}const se=(s,e)=>{let r,t,n;const o=l=>{l instanceof KeyboardEvent&&l.key==="Escape"&&(re("escDismiss",t,{originalEvent:l,preventDefault:()=>l.preventDefault()}),l.defaultPrevented||n==null||n()),l instanceof MouseEvent&&!s.contains(l.target)&&(re("pointerDownDismiss",r,{originalEvent:l,preventDefault:()=>l.preventDefault()}),l.defaultPrevented||n==null||n())},i=l=>{document.removeEventListener("keydown",o),document.removeEventListener("click",o),!(l!=null&&l.disable)&&(r=l==null?void 0:l.onPointerDownOutside,t=l==null?void 0:l.onEscapeKeyDown,n=l==null?void 0:l.onDismiss,document.addEventListener("keydown",o),document.addEventListener("click",o))};return Ce(1).then(()=>{i(e)}),{update:i,destroy(){document.removeEventListener("keydown",o),document.removeEventListener("click",o)}}},Ce=s=>new Promise(e=>setTimeout(e,s));function $e(s){let e;const r=s[9].default,t=I(r,s,s[23],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&8388608)&&K(t,r,n,n[23],e?j(r,n[23],o,null):X(n[23]),null)},i(n){e||(m(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Te(s){let e,r,t;const n=[{as:"button"},{"aria-describedby":s[3].open?s[3].contentId:void 0},{"data-state":s[3].stateAttribute},{use:[...s[0]??[]]},s[8]];function o(l){s[10](l)}let i={$$slots:{default:[$e]},$$scope:{ctx:s}};for(let l=0;l<n.length;l+=1)i=g(i,n[l]);return s[3].trigger!==void 0&&(i.ref=s[3].trigger),e=new pe.Anchor({props:i}),Z.push(()=>x(e,"ref",o)),e.$on("pointermove",s[11]),e.$on("pointermove",s[12]),e.$on("pointerleave",s[13]),e.$on("pointerleave",s[14]),e.$on("pointerdown",s[15]),e.$on("pointerdown",s[16]),e.$on("focus",s[17]),e.$on("focus",s[18]),e.$on("blur",s[19]),e.$on("blur",s[20]),e.$on("click",s[21]),e.$on("click",s[22]),{c(){L(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,c){O(e,l,c),t=!0},p(l,[c]){const f=c&265?M(n,[n[0],c&8&&{"aria-describedby":l[3].open?l[3].contentId:void 0},c&8&&{"data-state":l[3].stateAttribute},c&1&&{use:[...l[0]??[]]},c&256&&R(l[8])]):{};c&8388608&&(f.$$scope={dirty:c,ctx:l}),!r&&c&8&&(r=!0,f.ref=l[3].trigger,ee(()=>r=!1)),e.$set(f)},i(l){t||(m(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function De(s,e,r){const t=["use"];let n=P(e,t),o,i,{$$slots:l={},$$scope:c}=e,{use:f=[]}=e;const u=U();D(s,u,a=>r(3,o=a));const k=_e();D(s,k,a=>r(4,i=a));let _=!1,v=!1;const C=()=>{r(1,_=!1)};ce(()=>{te&&document.removeEventListener("pointerup",C)});function G(a){s.$$.not_equal(o.trigger,a)&&(o.trigger=a,u.set(o))}function H(a){B.call(this,s,a)}const p=a=>{a.pointerType!=="touch"&&!v&&!(i!=null&&i.isPointerInTransit)&&(o.onTriggerEnter(),r(2,v=!0))};function y(a){B.call(this,s,a)}const d=()=>{o.onTriggerLeave(),r(2,v=!1)};function T(a){B.call(this,s,a)}const E=()=>{te&&(r(1,_=!0),document.addEventListener("pointerup",C,{once:!0}))};function $(a){B.call(this,s,a)}const b=()=>{_||o.onOpen()};function S(a){B.call(this,s,a)}const Q=()=>{o.onClose()};function q(a){B.call(this,s,a)}const V=()=>{o.onClose()};return s.$$set=a=>{e=g(g({},e),F(a)),r(8,n=P(e,t)),"use"in a&&r(0,f=a.use),"$$scope"in a&&r(23,c=a.$$scope)},[f,_,v,o,i,u,k,C,n,l,G,H,p,y,d,T,E,$,b,S,Q,q,V,c]}class Le extends N{constructor(e){super(),Y(this,e,De,Te,z,{use:0})}}function le(s){let e,r;const t=[{target:s[0]},s[3]];let n={$$slots:{default:[we]},$$scope:{ctx:s}};for(let o=0;o<t.length;o+=1)n=g(n,t[o]);return e=new ke({props:n}),{c(){L(e.$$.fragment)},l(o){w(e.$$.fragment,o)},m(o,i){O(e,o,i),r=!0},p(o,i){const l=i&9?M(t,[i&1&&{target:o[0]},i&8&&R(o[3])]):{};i&32&&(l.$$scope={dirty:i,ctx:o}),e.$set(l)},i(o){r||(m(e.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),r=!1},d(o){A(e,o)}}}function we(s){let e;const r=s[4].default,t=I(r,s,s[5],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&32)&&K(t,r,n,n[5],e?j(r,n[5],o,null):X(n[5]),null)},i(n){e||(m(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Oe(s){let e,r,t=s[1].open&&le(s);return{c(){t&&t.c(),e=W()},l(n){t&&t.l(n),e=W()},m(n,o){t&&t.m(n,o),fe(n,e,o),r=!0},p(n,[o]){n[1].open?t?(t.p(n,o),o&2&&m(t,1)):(t=le(n),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(ue(),h(t,1,1,()=>{t=null}),ae())},i(n){r||(m(t),r=!0)},o(n){h(t),r=!1},d(n){t&&t.d(n),n&&de(e)}}}function Ae(s,e,r){const t=["container"];let n=P(e,t),o,{$$slots:i={},$$scope:l}=e,{container:c="body"}=e;const f=U();return D(s,f,u=>r(1,o=u)),s.$$set=u=>{e=g(g({},e),F(u)),r(3,n=P(e,t)),"container"in u&&r(0,c=u.container),"$$scope"in u&&r(5,l=u.$$scope)},[c,o,f,n,i,l]}class ye extends N{constructor(e){super(),Y(this,e,Ae,Oe,z,{container:0})}}const ie=()=>({subscribe(s){let e=null;return s(r=>{e==null||e(),e=r()??null}),()=>{e==null||e(),e=null}}});function Me(s){let e;const r=s[7].default,t=I(r,s,s[10],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&1024)&&K(t,r,n,n[10],e?j(r,n[10],o,null):X(n[10]),null)},i(n){e||(m(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Re(s){let e,r,t;const n=[s[6],{use:[...s[1]??[],[se,{onPointerDownOutside:s[4],onEscapeKeyDown:s[5],onDismiss:s[8]}]]},{"data-state":s[2].stateAttribute}];function o(l){s[9](l)}let i={$$slots:{default:[Me]},$$scope:{ctx:s}};for(let l=0;l<n.length;l+=1)i=g(i,n[l]);return s[0]!==void 0&&(i.ref=s[0]),e=new pe.Content({props:i}),Z.push(()=>x(e,"ref",o)),{c(){L(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,c){O(e,l,c),t=!0},p(l,[c]){const f=c&118?M(n,[c&64&&R(l[6]),c&54&&{use:[...l[1]??[],[se,{onPointerDownOutside:l[4],onEscapeKeyDown:l[5],onDismiss:l[8]}]]},c&4&&{"data-state":l[2].stateAttribute}]):{};c&1024&&(f.$$scope={dirty:c,ctx:l}),!r&&c&1&&(r=!0,f.ref=l[0],ee(()=>r=!1)),e.$set(f)},i(l){t||(m(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function Ie(s,e,r){const t=["use","ref"];let n=P(e,t),o,{$$slots:i={},$$scope:l}=e;const c=he();let{use:f=[]}=e,{ref:u=void 0}=e;const k=U();D(s,k,p=>r(2,o=p)),be(()=>(document.addEventListener(ne,o.onClose),()=>{document.removeEventListener(ne,o.onClose)}));const _=p=>{const y=p.target;y!=null&&y.contains(o.trigger)&&o.onClose()},v=p=>{c("pointerDownOutside",p.detail)},C=p=>{c("escapeKeyDown",p.detail)},G=()=>{o.onClose()};function H(p){u=p,r(0,u)}return s.$$set=p=>{e=g(g({},e),F(p)),r(6,n=P(e,t)),"use"in p&&r(1,f=p.use),"ref"in p&&r(0,u=p.ref),"$$scope"in p&&r(10,l=p.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&(window.removeEventListener("scroll",_,{capture:!0}),o.trigger&&window.addEventListener("scroll",_,{capture:!0}))},[u,f,o,k,v,C,n,i,G,H,l]}class me extends N{constructor(e){super(),Y(this,e,Ie,Re,z,{use:1,ref:0})}}function Ke(s){let e;const r=s[9].default,t=I(r,s,s[11],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&2048)&&K(t,r,n,n[11],e?j(r,n[11],o,null):X(n[11]),null)},i(n){e||(m(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Xe(s){let e,r,t;const n=[s[4]];function o(l){s[10](l)}let i={$$slots:{default:[Ke]},$$scope:{ctx:s}};for(let l=0;l<n.length;l+=1)i=g(i,n[l]);return s[0]!==void 0&&(i.ref=s[0]),e=new me({props:i}),Z.push(()=>x(e,"ref",o)),{c(){L(e.$$.fragment)},l(l){w(e.$$.fragment,l)},m(l,c){O(e,l,c),t=!0},p(l,[c]){const f=c&16?M(n,[R(l[4])]):{};c&2048&&(f.$$scope={dirty:c,ctx:l}),!r&&c&1&&(r=!0,f.ref=l[0],ee(()=>r=!1)),e.$set(f)},i(l){t||(m(e.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function je(s,e){const r=Math.abs(e.top-s.y),t=Math.abs(e.bottom-s.y),n=Math.abs(e.right-s.x),o=Math.abs(e.left-s.x);switch(Math.min(r,t,n,o)){case o:return"left";case n:return"right";case r:return"top";case t:return"bottom";default:return null}}function Ge(s){const{top:e,right:r,bottom:t,left:n}=s;return[{x:n,y:e},{x:r,y:e},{x:r,y:t},{x:n,y:t}]}function He(s,e){const{x:r,y:t}=s;let n=!1;for(let o=0,i=e.length-1;o<e.length;i=o++){const l=e[o].x,c=e[o].y,f=e[i].x,u=e[i].y;c>t!=u>t&&r<(f-l)*(t-c)/(u-c)+l&&(n=!n)}return n}function Se(s){const e=s.slice();return e.sort((r,t)=>r.x<t.x?-1:r.x>t.x?1:r.y<t.y?-1:r.y>t.y?1:0),qe(e)}function qe(s){if(s.length<=1)return s.slice();const e=[];for(let t=0;t<s.length;t++){const n=s[t];for(;e.length>=2;){const o=e[e.length-1],i=e[e.length-2];if((o.x-i.x)*(n.y-i.y)>=(o.y-i.y)*(n.x-i.x))e.pop();else break}e.push(n)}e.pop();const r=[];for(let t=s.length-1;t>=0;t--){const n=s[t];for(;r.length>=2;){const o=r[r.length-1],i=r[r.length-2];if((o.x-i.x)*(n.y-i.y)>=(o.y-i.y)*(n.x-i.x))r.pop();else break}r.push(n)}return r.pop(),e.length===1&&r.length===1&&e[0].x===r[0].x&&e[0].y===r[0].y?e:e.concat(r)}function Be(s,e,r){const t=[];let n=P(e,t),o,i,l,{$$slots:c={},$$scope:f}=e;const u=_e(),k=U();D(s,k,d=>r(6,o=d));let _=null,v=null;const C=()=>{r(5,v=null),u==null||u.update(d=>({...d,isPointerInTransit:!1}))},G=(d,T)=>{const E=d.currentTarget,$={x:d.clientX,y:d.clientY},b=je($,E.getBoundingClientRect()),S=b==="right"||b==="bottom"?-5:5,q=b==="right"||b==="left"?{x:d.clientX+S,y:d.clientY}:{x:d.clientX,y:d.clientY+S},V=Ge(T.getBoundingClientRect()),a=Se([q,...V]);r(5,v=a),u==null||u.update(ge=>({...ge,isPointerInTransit:!0}))},H=ie();D(s,H,d=>r(8,l=d));const p=ie();D(s,p,d=>r(7,i=d)),ce(()=>{C()});function y(d){_=d,r(0,_)}return s.$$set=d=>{e=g(g({},e),F(d)),r(4,n=P(e,t)),"$$scope"in d&&r(11,f=d.$$scope)},s.$$.update=()=>{s.$$.dirty&321&&l(()=>{if(_&&o.trigger){const d=o.trigger,T=_,E=b=>G(b,T),$=b=>G(b,d);return o.trigger.addEventListener("pointerleave",E),_.addEventListener("pointerleave",$),()=>{var b;(b=o.trigger)==null||b.removeEventListener("pointerleave",E),_==null||_.removeEventListener("pointerleave",$)}}}),s.$$.dirty&225&&i(()=>{if(v){const d=v,T=E=>{var q;const $=E.target,b={x:E.clientX,y:E.clientY},S=((q=o.trigger)==null?void 0:q.contains($))||(_==null?void 0:_.contains($)),Q=!He(b,d);S?C():Q&&(C(),o.onClose())};return document.addEventListener("pointermove",T),()=>{document.removeEventListener("pointermove",T)}}})},[_,k,H,p,n,v,o,i,l,c,y,f]}class Ne extends N{constructor(e){super(),Y(this,e,Be,Xe,z,{})}}function Ye(s){let e,r;const t=[{side:s[0]},s[3]];let n={$$slots:{default:[Fe]},$$scope:{ctx:s}};for(let o=0;o<t.length;o+=1)n=g(n,t[o]);return e=new Ne({props:n}),{c(){L(e.$$.fragment)},l(o){w(e.$$.fragment,o)},m(o,i){O(e,o,i),r=!0},p(o,i){const l=i&9?M(t,[i&1&&{side:o[0]},i&8&&R(o[3])]):{};i&32&&(l.$$scope={dirty:i,ctx:o}),e.$set(l)},i(o){r||(m(e.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),r=!1},d(o){A(e,o)}}}function ze(s){let e,r;const t=[{side:s[0]},s[3]];let n={$$slots:{default:[Ue]},$$scope:{ctx:s}};for(let o=0;o<t.length;o+=1)n=g(n,t[o]);return e=new me({props:n}),{c(){L(e.$$.fragment)},l(o){w(e.$$.fragment,o)},m(o,i){O(e,o,i),r=!0},p(o,i){const l=i&9?M(t,[i&1&&{side:o[0]},i&8&&R(o[3])]):{};i&32&&(l.$$scope={dirty:i,ctx:o}),e.$set(l)},i(o){r||(m(e.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),r=!1},d(o){A(e,o)}}}function Fe(s){let e;const r=s[4].default,t=I(r,s,s[5],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&32)&&K(t,r,n,n[5],e?j(r,n[5],o,null):X(n[5]),null)},i(n){e||(m(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Ue(s){let e;const r=s[4].default,t=I(r,s,s[5],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&32)&&K(t,r,n,n[5],e?j(r,n[5],o,null):X(n[5]),null)},i(n){e||(m(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Je(s){let e,r,t,n;const o=[ze,Ye],i=[];function l(c,f){return c[1].disableHoverableContent?0:1}return e=l(s),r=i[e]=o[e](s),{c(){r.c(),t=W()},l(c){r.l(c),t=W()},m(c,f){i[e].m(c,f),fe(c,t,f),n=!0},p(c,[f]){let u=e;e=l(c),e===u?i[e].p(c,f):(ue(),h(i[u],1,1,()=>{i[u]=null}),ae(),r=i[e],r?r.p(c,f):(r=i[e]=o[e](c),r.c()),m(r,1),r.m(t.parentNode,t))},i(c){n||(m(r),n=!0)},o(c){h(r),n=!1},d(c){i[e].d(c),c&&de(t)}}}function Qe(s,e,r){const t=["side"];let n=P(e,t),o,{$$slots:i={},$$scope:l}=e,{side:c="top"}=e;const f=U();return D(s,f,u=>r(1,o=u)),s.$$set=u=>{e=g(g({},e),F(u)),r(3,n=P(e,t)),"side"in u&&r(0,c=u.side),"$$scope"in u&&r(5,l=u.$$scope)},[c,o,f,n,i,l]}class We extends N{constructor(e){super(),Y(this,e,Qe,Je,z,{side:0})}}const J={Provider:ve,Root:Pe,Trigger:Le,Portal:ye,Content:We,Arrow:Ee};function Ve(s){let e;const r=s[3].default,t=I(r,s,s[4],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&16)&&K(t,r,n,n[4],e?j(r,n[4],o,null):X(n[4]),null)},i(n){e||(m(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Ze(s){let e,r;const t=[{sideOffset:s[1]},{class:oe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",s[0])},s[2]];let n={$$slots:{default:[Ve]},$$scope:{ctx:s}};for(let o=0;o<t.length;o+=1)n=g(n,t[o]);return e=new J.Content({props:n}),{c(){L(e.$$.fragment)},l(o){w(e.$$.fragment,o)},m(o,i){O(e,o,i),r=!0},p(o,i){const l=i&7?M(t,[i&2&&{sideOffset:o[1]},i&1&&{class:oe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",o[0])},i&4&&R(o[2])]):{};i&16&&(l.$$scope={dirty:i,ctx:o}),e.$set(l)},i(o){r||(m(e.$$.fragment,o),r=!0)},o(o){h(e.$$.fragment,o),r=!1},d(o){A(e,o)}}}function xe(s){let e,r;return e=new J.Portal({props:{$$slots:{default:[Ze]},$$scope:{ctx:s}}}),{c(){L(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){O(e,t,n),r=!0},p(t,[n]){const o={};n&23&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function et(s,e,r){const t=["class","sideOffset"];let n=P(e,t),{$$slots:o={},$$scope:i}=e,{class:l=void 0}=e,{sideOffset:c=4}=e;return s.$$set=f=>{e=g(g({},e),F(f)),r(2,n=P(e,t)),"class"in f&&r(0,l=f.class),"sideOffset"in f&&r(1,c=f.sideOffset),"$$scope"in f&&r(4,i=f.$$scope)},[l,c,n,o,i]}class st extends N{constructor(e){super(),Y(this,e,et,xe,z,{class:0,sideOffset:1})}}const lt=J.Provider,it=J.Root,ct=J.Trigger;export{lt as T,it as a,ct as b,st as c};
