(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return s}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},c=()=>{r.selectionChanged()},s=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},NKIX:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("QX1p"),i=e("ItpF"),o=e("2c9M");const c=(t,n)=>{let e,c;const s=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(l(),a(o,i)):l()},a=(t,n)=>{e=t,c||(c=e);const i=e;Object(r.n)(()=>i.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!e)return;const n=e;Object(r.n)(()=>n.classList.remove("ion-activated")),t&&c!==e&&e.click(),e=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,o.a),onMove:t=>s(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),c=void 0}})}},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));const r=async(t,n,e,r,i)=>{if(t)return t.attachViewToDom(n,e,i,r);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return r&&r.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),n.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},QQAA:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("fXoL");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(t,n){1&t&&(r.Mb(0,"div",0),r.Mb(1,"strong"),r.dc(2),r.Lb(),r.Mb(3,"p"),r.dc(4,"Explore "),r.Mb(5,"a",1),r.dc(6,"UI Components"),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.zb(2),r.ec(n.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()},hcCc:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return s}));const r=(t,n)=>null!==n.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,n,e,r)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(t,e,r)}return!1}},qtYk:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("ofXK"),i=e("3Pt+"),o=e("TEn/"),c=e("fXoL");let s=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[r.b,i.a,o.t]]}),t})()}}]);