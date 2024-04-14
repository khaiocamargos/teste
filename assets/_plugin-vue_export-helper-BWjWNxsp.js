import{l as wt,n as bt}from"./VGrid-CmoWF2CG.js";import{a9 as Ie,ag as He,ah as oe,X as he,p as D,m as we,a as qe,g as K,f as x,Z as ze,c as T,y as $,af as ve,r as F,ai as H,q as be,w as L,O as W,aj as Et,P as ae,i as _,j as Ce,z as Ee,ak as Ge,al as St,am as Se,a5 as Ue,N as Ae,an as xt,s as G,ao as pt,o as Pt,ap as Ye,aq as Ot,ar as Ct,as as At,b as kt,n as Xe,d as Lt,e as Rt,t as Tt,k as Bt,u as Ke,at as Ft,$ as Mt,a8 as Vt,a0 as Nt,S as _t,au as $t}from"./index-DuJTDyAq.js";import{p as ke,q as se,r as le,s as Le,t as Re,k as Dt,n as jt,u as Wt,l as It,M as Ht,f as qt}from"./VImg-Dy7h4JrB.js";class z{constructor(n){let{x:t,y:o,width:a,height:r}=n;this.x=t,this.y=o,this.width=a,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Te(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Ze(e){return Array.isArray(e)?new z({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Je(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),o=t.transform;if(o){let a,r,i,s,l;if(o.startsWith("matrix3d("))a=o.slice(9,-1).split(/, /),r=+a[0],i=+a[5],s=+a[12],l=+a[13];else if(o.startsWith("matrix("))a=o.slice(7,-1).split(/, /),r=+a[0],i=+a[3],s=+a[4],l=+a[5];else return new z(n);const c=t.transformOrigin,f=n.x-s-(1-r)*parseFloat(c),d=n.y-l-(1-i)*parseFloat(c.slice(c.indexOf(" ")+1)),y=r?n.width/r:e.offsetWidth+1,v=i?n.height/i:e.offsetHeight+1;return new z({x:f,y:d,width:y,height:v})}else return new z(n)}function X(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(a=>{o.onfinish=()=>{a(o)}})),o}const Q=new WeakMap;function zt(e,n){Object.keys(n).forEach(t=>{if(Ie(t)){const o=He(t),a=Q.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[i,s]=r;i===o&&(e.removeEventListener(o,s),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),Q.has(e)||Q.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Gt(e,n){Object.keys(n).forEach(t=>{if(Ie(t)){const o=He(t),a=Q.get(e);a==null||a.forEach(r=>{const[i,s]=r;i===o&&(e.removeEventListener(o,s),a.delete(r))})}else e.removeAttribute(t)})}function Qe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const me="cubic-bezier(0.4, 0, 0.2, 1)",Ut="cubic-bezier(0.0, 0, 0.2, 1)",Yt="cubic-bezier(0.4, 0, 1, 1)";function Xt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Kt(e):xe(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(xe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function xe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Kt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Zt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const et=oe.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),tt=oe.reduce((e,n)=>{const t="offset"+he(n);return e[t]={type:[String,Number],default:null},e},{}),nt=oe.reduce((e,n)=>{const t="order"+he(n);return e[t]={type:[String,Number],default:null},e},{}),Be={col:Object.keys(et),offset:Object.keys(tt),order:Object.keys(nt)};function Jt(e,n,t){let o=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");o+=`-${a}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const Qt=["auto","start","end","center","baseline","stretch"],en=D({cols:{type:[Boolean,String,Number],default:!1},...et,offset:{type:[String,Number],default:null},...tt,order:{type:[String,Number],default:null},...nt,alignSelf:{type:String,default:null,validator:e=>Qt.includes(e)},...we(),...qe()},"VCol"),In=K()({name:"VCol",props:en(),setup(e,n){let{slots:t}=n;const o=x(()=>{const a=[];let r;for(r in Be)Be[r].forEach(s=>{const l=e[s],c=Jt(r,s,l);c&&a.push(c)});const i=a.some(s=>s.startsWith("v-col-"));return a.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return ze(e.tag,{class:[o.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),pe=["start","end","center"],ot=["space-between","space-around","space-evenly"];function Pe(e,n){return oe.reduce((t,o)=>{const a=e+he(o);return t[a]=n(),t},{})}const tn=[...pe,"baseline","stretch"],at=e=>tn.includes(e),rt=Pe("align",()=>({type:String,default:null,validator:at})),nn=[...pe,...ot],it=e=>nn.includes(e),st=Pe("justify",()=>({type:String,default:null,validator:it})),on=[...pe,...ot,"stretch"],lt=e=>on.includes(e),ct=Pe("alignContent",()=>({type:String,default:null,validator:lt})),Fe={align:Object.keys(rt),justify:Object.keys(st),alignContent:Object.keys(ct)},an={align:"align",justify:"justify",alignContent:"align-content"};function rn(e,n,t){let o=an[e];if(t!=null){if(n){const a=n.replace(e,"");o+=`-${a}`}return o+=`-${t}`,o.toLowerCase()}}const sn=D({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:at},...rt,justify:{type:String,default:null,validator:it},...st,alignContent:{type:String,default:null,validator:lt},...ct,...we(),...qe()},"VRow"),Hn=K()({name:"VRow",props:sn(),setup(e,n){let{slots:t}=n;const o=x(()=>{const a=[];let r;for(r in Fe)Fe[r].forEach(i=>{const s=e[i],l=rn(r,i,s);l&&a.push(l)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return ze(e.tag,{class:["v-row",o.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),ln=D({target:[Object,Array]},"v-dialog-transition"),cn=K()({name:"VDialogTransition",props:ln(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,r){var y;await new Promise(v=>requestAnimationFrame(v)),await new Promise(v=>requestAnimationFrame(v)),a.style.visibility="";const{x:i,y:s,sx:l,sy:c,speed:f}=Ve(e.target,a),d=X(a,[{transform:`translate(${i}px, ${s}px) scale(${l}, ${c})`,opacity:0},{}],{duration:225*f,easing:Ut});(y=Me(a))==null||y.forEach(v=>{X(v,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:me})}),d.finished.then(()=>r())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,r){var y;await new Promise(v=>requestAnimationFrame(v));const{x:i,y:s,sx:l,sy:c,speed:f}=Ve(e.target,a);X(a,[{},{transform:`translate(${i}px, ${s}px) scale(${l}, ${c})`,opacity:0}],{duration:125*f,easing:Yt}).finished.then(()=>r()),(y=Me(a))==null||y.forEach(v=>{X(v,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:me})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?T(ve,$({name:"dialog-transition"},o,{css:!1}),t):T(ve,{name:"dialog-transition"},t)}});function Me(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ve(e,n){const t=Ze(e),o=Je(n),[a,r]=getComputedStyle(n).transformOrigin.split(" ").map(C=>parseFloat(C)),[i,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=t.left+t.width/2;i==="left"||s==="left"?l-=t.width/2:(i==="right"||s==="right")&&(l+=t.width/2);let c=t.top+t.height/2;i==="top"||s==="top"?c-=t.height/2:(i==="bottom"||s==="bottom")&&(c+=t.height/2);const f=t.width/o.width,d=t.height/o.height,y=Math.max(1,f,d),v=f/y||0,m=d/y||0,g=o.width*o.height/(window.innerWidth*window.innerHeight),O=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:l-(a+o.left),y:c-(r+o.top),sx:v,sy:m,speed:O}}function ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function un(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ne(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return ce({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ce({x:a,y:r},n)}return ce({x:n.width/2,y:n.height/2},n)}const ut={static:vn,connected:gn},fn=D({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ut},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function dn(e,n){const t=F({}),o=F();H&&be(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var i,s;L(()=>e.locationStrategy,r),W(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:o.value=(s=ut[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation});function a(r){var i;(i=o.value)==null||i.call(o,r)}return{contentStyles:t,updateLocation:o}}function vn(){}function mn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Je(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function gn(e,n,t){(Array.isArray(e.target.value)||Zt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Et(()=>{const m=ke(n.location,e.isRtl.value),g=n.origin==="overlap"?m:n.origin==="auto"?se(m):ke(n.origin,e.isRtl.value);return m.side===g.side&&m.align===le(g).align?{preferredAnchor:Le(m),preferredOrigin:Le(g)}:{preferredAnchor:m,preferredOrigin:g}}),[i,s,l,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(m=>x(()=>{const g=parseFloat(n[m]);return isNaN(g)?1/0:g})),f=x(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const m=n.offset.split(" ").map(parseFloat);return m.length<2&&m.push(0),m}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let d=!1;const y=new ResizeObserver(()=>{d&&v()});L([e.target,e.contentEl],(m,g)=>{let[O,C]=m,[p,b]=g;p&&!Array.isArray(p)&&y.unobserve(p),O&&!Array.isArray(O)&&y.observe(O),b&&y.unobserve(b),C&&y.observe(C)},{immediate:!0}),W(()=>{y.disconnect()});function v(){if(d=!1,requestAnimationFrame(()=>d=!0),!e.target.value||!e.contentEl.value)return;const m=Ze(e.target.value),g=mn(e.contentEl.value,e.isRtl.value),O=te(e.contentEl.value),C=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(g.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=O.reduce((P,E)=>{const h=E.getBoundingClientRect(),w=new z({x:E===document.documentElement?0:h.x,y:E===document.documentElement?0:h.y,width:E.clientWidth,height:E.clientHeight});return P?new z({x:Math.max(P.left,w.left),y:Math.max(P.top,w.top),width:Math.min(P.right,w.right)-Math.max(P.left,w.left),height:Math.min(P.bottom,w.bottom)-Math.max(P.top,w.top)}):w},void 0);p.x+=C,p.y+=C,p.width-=C*2,p.height-=C*2;let b={anchor:a.value,origin:r.value};function I(P){const E=new z(g),h=Ne(P.anchor,m),w=Ne(P.origin,E);let{x:V,y:B}=un(h,w);switch(P.anchor.side){case"top":B-=f.value[0];break;case"bottom":B+=f.value[0];break;case"left":V-=f.value[0];break;case"right":V+=f.value[0];break}switch(P.anchor.align){case"top":B-=f.value[1];break;case"bottom":B+=f.value[1];break;case"left":V-=f.value[1];break;case"right":V+=f.value[1];break}return E.x+=V,E.y+=B,E.width=Math.min(E.width,l.value),E.height=Math.min(E.height,c.value),{overflows:Te(E,p),x:V,y:B}}let M=0,A=0;const u={x:0,y:0},R={x:!1,y:!1};let re=-1;for(;!(re++>10);){const{x:P,y:E,overflows:h}=I(b);M+=P,A+=E,g.x+=P,g.y+=E;{const w=Re(b.anchor),V=h.x.before||h.x.after,B=h.y.before||h.y.after;let U=!1;if(["x","y"].forEach(k=>{if(k==="x"&&V&&!R.x||k==="y"&&B&&!R.y){const N={anchor:{...b.anchor},origin:{...b.origin}},Z=k==="x"?w==="y"?le:se:w==="y"?se:le;N.anchor=Z(N.anchor),N.origin=Z(N.origin);const{overflows:q}=I(N);(q[k].before<=h[k].before&&q[k].after<=h[k].after||q[k].before+q[k].after<(h[k].before+h[k].after)/2)&&(b=N,U=R[k]=!0)}}),U)continue}h.x.before&&(M+=h.x.before,g.x+=h.x.before),h.x.after&&(M-=h.x.after,g.x-=h.x.after),h.y.before&&(A+=h.y.before,g.y+=h.y.before),h.y.after&&(A-=h.y.after,g.y-=h.y.after);{const w=Te(g,p);u.x=p.width-w.x.before-w.x.after,u.y=p.height-w.y.before-w.y.after,M+=w.x.before,g.x+=w.x.before,A+=w.y.before,g.y+=w.y.before}break}const ie=Re(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:_(ue(A)),left:e.isRtl.value?void 0:_(ue(M)),right:e.isRtl.value?_(ue(-M)):void 0,minWidth:_(ie==="y"?Math.min(i.value,m.width):i.value),maxWidth:_(_e(Ce(u.x,i.value===1/0?0:i.value,l.value))),maxHeight:_(_e(Ce(u.y,s.value===1/0?0:s.value,c.value)))}),{available:u,contentBox:g}}return L(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>v()),ae(()=>{const m=v();if(!m)return;const{available:g,contentBox:O}=m;O.height>g.y&&requestAnimationFrame(()=>{v(),requestAnimationFrame(()=>{v()})})}),{updateLocation:v}}function ue(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function _e(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ge=!0;const ne=[];function yn(e){!ge||ne.length?(ne.push(e),ye()):(ge=!1,e(),ye())}let $e=-1;function ye(){cancelAnimationFrame($e),$e=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?ye():ge=!0})}const ee={none:null,close:bn,block:En,reposition:Sn},hn=D({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ee}},"VOverlay-scroll-strategies");function wn(e,n){if(!H)return;let t;Ee(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ge(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ee[e.scrollStrategy])==null||o.call(ee,n,e,t)}))}),W(()=>{t==null||t.stop()})}function bn(e){function n(t){e.isActive.value=!1}ft(e.targetEl.value??e.contentEl.value,n)}function En(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,o=[...new Set([...te(e.targetEl.value,n.contained?t:void 0),...te(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(s=>xe(s)&&s)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((s,l)=>{s.style.setProperty("--v-body-scroll-x",_(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",_(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",_(a)),s.classList.add("v-overlay-scroll-blocked")}),W(()=>{o.forEach((s,l)=>{const c=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(s.style.getPropertyValue("--v-body-scroll-y")),d=s.style.scrollBehavior;s.style.scrollBehavior="auto",s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-c,s.scrollTop=-f,s.style.scrollBehavior=d}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Sn(e,n,t){let o=!1,a=-1,r=-1;function i(s){yn(()=>{var f,d;const l=performance.now();(d=(f=e.updateLocation).value)==null||d.call(f,s),o=(performance.now()-l)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{ft(e.targetEl.value??e.contentEl.value,s=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),W(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function ft(e,n){const t=[document,...te(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),W(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const xn=Symbol.for("vuetify:v-menu"),pn=D({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Pn(e,n){let t=()=>{};function o(i){t==null||t();const s=Number(i?e.openDelay:e.closeDelay);return new Promise(l=>{t=St(s,()=>{n==null||n(i),l(i)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:r}}const On=D({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...pn()},"VOverlay-activator");function Cn(e,n){let{isActive:t,isTop:o}=n;const a=Se("useActivator"),r=F();let i=!1,s=!1,l=!0;const c=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:d,runCloseDelay:y}=Pn(e,u=>{u===(e.openOnHover&&i||c.value&&s)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==u&&(l=!0),t.value=u)}),v=F(),m={onClick:u=>{u.stopPropagation(),r.value=u.currentTarget||u.target,t.value||(v.value=[u.clientX,u.clientY]),t.value=!t.value},onMouseenter:u=>{var R;(R=u.sourceCapabilities)!=null&&R.firesTouchEvents||(i=!0,r.value=u.currentTarget||u.target,d())},onMouseleave:u=>{i=!1,y()},onFocus:u=>{xt(u.target,":focus-visible")!==!1&&(s=!0,u.stopPropagation(),r.value=u.currentTarget||u.target,d())},onBlur:u=>{s=!1,u.stopPropagation(),y()}},g=x(()=>{const u={};return f.value&&(u.onClick=m.onClick),e.openOnHover&&(u.onMouseenter=m.onMouseenter,u.onMouseleave=m.onMouseleave),c.value&&(u.onFocus=m.onFocus,u.onBlur=m.onBlur),u}),O=x(()=>{const u={};if(e.openOnHover&&(u.onMouseenter=()=>{i=!0,d()},u.onMouseleave=()=>{i=!1,y()}),c.value&&(u.onFocusin=()=>{s=!0,d()},u.onFocusout=()=>{s=!1,y()}),e.closeOnContentClick){const R=Ue(xn,null);u.onClick=()=>{t.value=!1,R==null||R.closeParents()}}return u}),C=x(()=>{const u={};return e.openOnHover&&(u.onMouseenter=()=>{l&&(i=!0,l=!1,d())},u.onMouseleave=()=>{i=!1,y()}),u});L(o,u=>{u&&(e.openOnHover&&!i&&(!c.value||!s)||c.value&&!s&&(!e.openOnHover||!i))&&(t.value=!1)}),L(t,u=>{u||setTimeout(()=>{v.value=void 0})},{flush:"post"});const p=F();Ee(()=>{p.value&&ae(()=>{r.value=Ae(p.value)})});const b=F(),I=x(()=>e.target==="cursor"&&v.value?v.value:b.value?Ae(b.value):dt(e.target,a)||r.value),M=x(()=>Array.isArray(I.value)?void 0:I.value);let A;return L(()=>!!e.activator,u=>{u&&H?(A=Ge(),A.run(()=>{An(e,a,{activatorEl:r,activatorEvents:g})})):A&&A.stop()},{flush:"post",immediate:!0}),W(()=>{A==null||A.stop()}),{activatorEl:r,activatorRef:p,target:I,targetEl:M,targetRef:b,activatorEvents:g,contentEvents:O,scrimEvents:C}}function An(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(l,c)=>{if(c&&l!==c){const f=s(c);f&&i(f)}l&&ae(()=>r())},{immediate:!0}),L(()=>e.activatorProps,()=>{r()}),W(()=>{i()});function r(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&zt(l,$(a.value,c))}function i(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&Gt(l,$(a.value,c))}function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=dt(l,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function dt(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function kn(){if(!H)return G(!1);const{ssr:e}=pt();if(e){const n=G(!1);return Pt(()=>{n.value=!0}),n}else return G(!0)}const Ln=D({eager:Boolean},"lazy");function Rn(e,n){const t=G(!1),o=x(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function vt(){const n=Se("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const De=Symbol.for("vuetify:stack"),Y=Ye([]);function Tn(e,n,t){const o=Se("useStack"),a=!t,r=Ue(De,void 0),i=Ye({activeChildren:new Set});Ot(De,i);const s=G(+n.value);be(e,()=>{var d;const f=(d=Y.at(-1))==null?void 0:d[1];s.value=f?f+10:+n.value,a&&Y.push([o.uid,s.value]),r==null||r.activeChildren.add(o.uid),W(()=>{if(a){const y=Ct(Y).findIndex(v=>v[0]===o.uid);Y.splice(y,1)}r==null||r.activeChildren.delete(o.uid)})});const l=G(!0);a&&Ee(()=>{var d;const f=((d=Y.at(-1))==null?void 0:d[0])===o.uid;setTimeout(()=>l.value=f)});const c=x(()=>!i.activeChildren.size);return{globalTop:At(l),localTop:c,stackStyles:x(()=>({zIndex:s.value}))}}function Bn(e){return{teleportTarget:x(()=>{const t=e.value;if(t===!0||!H)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Fn(){return!0}function mt(e,n,t){if(!e||gt(e,t)===!1)return!1;const o=Qe(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function gt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Fn)(e)}function Mn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&mt(e,n,t)&&setTimeout(()=>{gt(e,t)&&o&&o(e)},0)}function je(e,n){const t=Qe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Vn={mounted(e,n){const t=a=>Mn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=mt(a,e,n)};je(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(je(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Nn(e){const{modelValue:n,color:t,...o}=e;return T(ve,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&T("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const yt=D({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...On(),...we(),...Dt(),...Ln(),...fn(),...hn(),...kt(),...jt()},"VOverlay"),We=K()({name:"VOverlay",directives:{ClickOutside:Vn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...yt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=Xe(e,"modelValue"),i=x({get:()=>r.value,set:S=>{S&&e.disabled||(r.value=S)}}),{teleportTarget:s}=Bn(x(()=>e.attach||e.contained)),{themeClasses:l}=Lt(e),{rtlClasses:c,isRtl:f}=Rt(),{hasContent:d,onAfterLeave:y}=Rn(e,i),v=Wt(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:g,stackStyles:O}=Tn(i,Tt(e,"zIndex"),e._disableGlobalStack),{activatorEl:C,activatorRef:p,target:b,targetEl:I,targetRef:M,activatorEvents:A,contentEvents:u,scrimEvents:R}=Cn(e,{isActive:i,isTop:g}),{dimensionStyles:re}=It(e),ie=kn(),{scopeId:P}=vt();L(()=>e.disabled,S=>{S&&(i.value=!1)});const E=F(),h=F(),w=F(),{contentStyles:V,updateLocation:B}=dn(e,{isRtl:f,contentEl:w,target:b,isActive:i});wn(e,{root:E,contentEl:w,targetEl:I,isActive:i,updateLocation:B});function U(S){a("click:outside",S),e.persistent?J():i.value=!1}function k(S){return i.value&&m.value&&(!e.scrim||S.target===h.value)}H&&L(i,S=>{S?window.addEventListener("keydown",N):window.removeEventListener("keydown",N)},{immediate:!0}),Bt(()=>{H&&window.removeEventListener("keydown",N)});function N(S){var j,Oe;S.key==="Escape"&&m.value&&(e.persistent?J():(i.value=!1,(j=w.value)!=null&&j.contains(document.activeElement)&&((Oe=C.value)==null||Oe.focus())))}const Z=wt();be(()=>e.closeOnBack,()=>{bt(Z,S=>{m.value&&i.value?(S(!1),e.persistent?J():i.value=!1):S()})});const q=F();L(()=>i.value&&(e.absolute||e.contained)&&s.value==null,S=>{if(S){const j=Xt(E.value);j&&j!==document.scrollingElement&&(q.value=j.scrollTop)}});function J(){e.noClickAnimation||w.value&&X(w.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:me})}function ht(){y(),a("afterLeave")}return Ke(()=>{var S;return T(_t,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:i.value,props:$({ref:p,targetRef:M},A.value,e.activatorProps)}),ie.value&&d.value&&T(Ft,{disabled:!s.value,to:s.value},{default:()=>[T("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},l.value,c.value,e.class],style:[O.value,{"--v-overlay-opacity":e.opacity,top:_(q.value)},e.style],ref:E},P,o),[T(Nn,$({color:v,modelValue:i.value&&!!e.scrim,ref:h},R.value),null),T(Ht,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:ht},{default:()=>{var j;return[Mt(T("div",$({ref:w,class:["v-overlay__content",e.contentClass],style:[re.value,V.value]},u.value,e.contentProps),[(j=t.default)==null?void 0:j.call(t,{isActive:i})]),[[Vt,i.value],[Nt("click-outside"),{handler:U,closeConditional:k,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,scrimEl:h,target:b,animateClick:J,contentEl:w,globalTop:m,localTop:g,updateLocation:B}}}),fe=Symbol("Forwarded refs");function de(e,n){let t=e;for(;t;){const o=Reflect.getOwnPropertyDescriptor(t,n);if(o)return o;t=Object.getPrototypeOf(t)}}function _n(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return e[fe]=t,new Proxy(e,{get(a,r){if(Reflect.has(a,r))return Reflect.get(a,r);if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const i of t)if(i.value&&Reflect.has(i.value,r)){const s=Reflect.get(i.value,r);return typeof s=="function"?s.bind(i.value):s}}},has(a,r){if(Reflect.has(a,r))return!0;if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,r))return!0;return!1},set(a,r,i){if(Reflect.has(a,r))return Reflect.set(a,r,i);if(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,r))return Reflect.set(s.value,r,i);return!1},getOwnPropertyDescriptor(a,r){var s;const i=Reflect.getOwnPropertyDescriptor(a,r);if(i)return i;if(!(typeof r=="symbol"||r.startsWith("$")||r.startsWith("__"))){for(const l of t){if(!l.value)continue;const c=de(l.value,r)??("_"in l.value?de((s=l.value._)==null?void 0:s.setupState,r):void 0);if(c)return c}for(const l of t){const c=l.value&&l.value[fe];if(!c)continue;const f=c.slice();for(;f.length;){const d=f.shift(),y=de(d.value,r);if(y)return y;const v=d.value&&d.value[fe];v&&f.push(...v)}}}}})}const $n=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...yt({origin:"center center",scrollStrategy:"block",transition:{component:cn},zIndex:2400})},"VDialog"),qn=K()({name:"VDialog",props:$n(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Xe(e,"modelValue"),{scopeId:a}=vt(),r=F();function i(l){var d,y;const c=l.relatedTarget,f=l.target;if(c!==f&&((d=r.value)!=null&&d.contentEl)&&((y=r.value)!=null&&y.globalTop)&&![document,r.value.contentEl].includes(f)&&!r.value.contentEl.contains(f)){const v=$t(r.value.contentEl);if(!v.length)return;const m=v[0],g=v[v.length-1];c===m?g.focus():m.focus()}}H&&L(()=>o.value&&e.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),L(o,async l=>{var c,f;await ae(),l?(c=r.value.contentEl)==null||c.focus({preventScroll:!0}):(f=r.value.activatorEl)==null||f.focus({preventScroll:!0})});const s=x(()=>$({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps));return Ke(()=>{const l=We.filterProps(e);return T(We,$({ref:r,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},l,{modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,"aria-modal":"true",activatorProps:s.value,role:"dialog"},a),{activator:t.activator,default:function(){for(var c=arguments.length,f=new Array(c),d=0;d<c;d++)f[d]=arguments[d];return T(qt,{root:"VDialog"},{default:()=>{var y;return[(y=t.default)==null?void 0:y.call(t,...f)]}})}})}),_n({},r)}}),zn=(e,n)=>{const t=e.__vccOpts||e;for(const[o,a]of n)t[o]=a;return t};export{We as V,zn as _,Hn as a,In as b,qn as c,X as d,_n as f,yt as m,Je as n,me as s,vt as u};