import{d as w,n as p,o as T,j as U,y as E,G as I,aa as O,ad as S,v as P,K as A,W as D,ae as V,af as z,ag as F,ah as W,a0 as _,C as R,ai as H,aj as $,a3 as M,ak as L,a4 as Q,al as G,a5 as K,am as J,an as X}from"./BHs5J4y9.js";const ne=w({__name:"BaseIcon",props:{name:{type:String,default:"i-line-md-iconify1"},tag:{type:String,default:"span"},width:{type:String,default:""},height:{type:String,default:""}},setup(t){const n=t,i=e=>e&&!(e.endsWith("px")||e.endsWith("em"))?`${e}px`:e,v=p(()=>{const e=i(n.width)||i(n.height)||"20px",a=i(n.height)||e;return{width:e,height:a,display:"inline-block"}});return(e,a)=>(T(),U(O(t.tag),{class:E(t.name),style:I(v.value)},null,8,["class","style"]))}});async function B(t,n=S()){const{path:i,matched:v}=n.resolve(t);if(!v.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(i)))return;const e=n._preloadPromises=n._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>B(t,n));n._routePreloaded.add(i);const a=v.map(s=>{var r;return(r=s.components)==null?void 0:r.default}).filter(s=>typeof s=="function");for(const s of a){const r=Promise.resolve(s()).catch(()=>{}).finally(()=>e.splice(e.indexOf(r)));e.push(r)}await Promise.all(e)}const Y=(...t)=>t.find(n=>n!==void 0);function Z(t){const n=t.componentName||"NuxtLink";function i(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return q(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:q(s,t.trailingSlash)}}function v(e){const a=S(),s=K(),r=p(()=>!!e.target&&e.target!=="_self"),o=p(()=>{const c=e.to||e.href||"";return typeof c=="string"&&L(c,{acceptRelative:!0})}),y=R("RouterLink"),g=y&&typeof y!="string"?y.useLink:void 0,h=p(()=>{if(e.external)return!0;const c=e.to||e.href||"";return typeof c=="object"?!1:c===""||o.value}),u=p(()=>{const c=e.to||e.href||"";return h.value?c:i(c,a.resolve)}),f=h.value||g==null?void 0:g({...e,to:u}),m=p(()=>{var c;if(!u.value||o.value)return u.value;if(h.value){const d=typeof u.value=="object"?k(u.value):u.value;return i(d,a.resolve)}return typeof u.value=="object"?((c=a.resolve(u.value))==null?void 0:c.href)??null:i(Q(s.app.baseURL,u.value),a.resolve)});return{to:u,hasTarget:r,isAbsoluteUrl:o,isExternal:h,href:m,isActive:(f==null?void 0:f.isActive)??p(()=>u.value===a.currentRoute.value.path),isExactActive:(f==null?void 0:f.isExactActive)??p(()=>u.value===a.currentRoute.value.path),route:(f==null?void 0:f.route)??p(()=>a.resolve(u.value)),async navigate(){await G(m.value,{replace:e.replace,external:h.value||r.value})}}}return w({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:v,setup(e,{slots:a}){const s=S(),{to:r,href:o,navigate:y,isExternal:g,hasTarget:h,isAbsoluteUrl:u}=v(e),f=P(!1),m=P(null),c=d=>{var b;m.value=e.custom?(b=d==null?void 0:d.$el)==null?void 0:b.nextElementSibling:d==null?void 0:d.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!te()){const b=A();let x,l=null;D(()=>{const j=ee();V(()=>{x=z(()=>{var C;(C=m==null?void 0:m.value)!=null&&C.tagName&&(l=j.observe(m.value,async()=>{l==null||l(),l=null;const N=typeof r.value=="string"?r.value:g.value?k(r.value):s.resolve(r.value).fullPath;await Promise.all([b.hooks.callHook("link:prefetch",N).catch(()=>{}),!g.value&&!h.value&&B(r.value,s).catch(()=>{})]),f.value=!0}))})})}),F(()=>{x&&W(x),l==null||l(),l=null})}return()=>{var x;if(!g.value&&!h.value){const l={ref:c,to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(f.value&&(l.class=e.prefetchedClass||t.prefetchedClass),l.rel=e.rel||void 0),_(R("RouterLink"),l,a.default)}const d=e.target||null,b=Y(e.noRel?"":e.rel,t.externalRelAttribute,u.value||h.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:o.value,navigate:y,get route(){if(!o.value)return;const l=new URL(o.value,window.location.href);return{path:l.pathname,fullPath:l.pathname,get query(){return H(l.search)},hash:l.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o.value}},rel:b,target:d,isExternal:g.value||h.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:m,href:o.value||null,rel:b,target:d},(x=a.default)==null?void 0:x.call(a))}}})}const re=Z($);function q(t,n){const i=n==="append"?J:X;return L(t)&&!t.startsWith("http")?t:i(t,!0)}function ee(){const t=A();if(t._observer)return t._observer;let n=null;const i=new Map,v=(a,s)=>(n||(n=new IntersectionObserver(r=>{for(const o of r){const y=i.get(o.target);(o.isIntersecting||o.intersectionRatio>0)&&y&&y()}})),i.set(a,s),n.observe(a),()=>{i.delete(a),n.unobserve(a),i.size===0&&(n.disconnect(),n=null)});return t._observer={observe:v}}function te(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}function k(t){return M(t.path||"",t.query||{})+(t.hash?"#"+t.hash:"")}export{re as _,ne as a};