const __vite__fileDeps=["./DBSqIh72.js","./UQKBOjoD.js","./C-v3KzvZ.js","./CZwGL--F.js","./IShi1APO.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ak as x,y as _,al as T,i as L,X as j,R as q,J as I,H as C,D as F,am as H,I as M,E as Q,G as K,an as N,ae as g,ao as U,ap as k,aq as z,ah as A}from"./UQKBOjoD.js";import{h as b}from"./IShi1APO.js";import{u as O}from"./CZwGL--F.js";const G=e=>e==="defer"||e===!1;function se(...e){var P;const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[a,i,n={}]=e;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=F(),r=i,u=()=>null,l=()=>s.isHydrating?s.payload.data[a]:s.static.data[a];n.server=n.server??!0,n.default=n.default??u,n.getCachedData=n.getCachedData??l,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0,n.deep=n.deep??x.deep,n.dedupe=n.dedupe??"cancel";const p=()=>n.getCachedData(a,s)!=null;if(!s._asyncData[a]||!n.immediate){(P=s.payload._errors)[a]??(P[a]=null);const f=n.deep?_:T;s._asyncData[a]={data:f(n.getCachedData(a,s)??n.default()),pending:_(!p()),error:L(s.payload._errors,a),status:_("idle")}}const o={...s._asyncData[a]};o.refresh=o.execute=(f={})=>{if(s._asyncDataPromises[a]){if(G(f.dedupe??n.dedupe))return s._asyncDataPromises[a];s._asyncDataPromises[a].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&p())return Promise.resolve(n.getCachedData(a,s));o.pending.value=!0,o.status.value="pending";const y=new Promise((h,c)=>{try{h(r(s))}catch(w){c(w)}}).then(async h=>{if(y.cancelled)return s._asyncDataPromises[a];let c=h;n.transform&&(c=await n.transform(h)),n.pick&&(c=W(c,n.pick)),s.payload.data[a]=c,o.data.value=c,o.error.value=null,o.status.value="success"}).catch(h=>{if(y.cancelled)return s._asyncDataPromises[a];o.error.value=H(h),o.data.value=M(n.default()),o.status.value="error"}).finally(()=>{y.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[a])});return s._asyncDataPromises[a]=y,s._asyncDataPromises[a]},o.clear=()=>J(s,a);const m=()=>o.refresh({_initial:!0}),B=n.server!==!1&&s.payload.serverRendered;{const f=Q();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const c=f._nuxtOnBeforeMountCbs;j(()=>{c.forEach(w=>{w()}),c.splice(0,c.length)}),q(()=>c.splice(0,c.length))}B&&s.isHydrating&&(o.error.value||p())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||n.lazy)&&n.immediate?f._nuxtOnBeforeMountCbs.push(m):n.immediate&&m();const y=K();if(n.watch){const c=I(n.watch,()=>o.refresh());y&&C(c)}const h=s.hook("app:data:refresh",async c=>{(!c||c.includes(a))&&await o.refresh()});y&&C(h)}const v=Promise.resolve(s._asyncDataPromises[a]).then(()=>o);return Object.assign(v,o),v}function J(e,t){t in e.payload.data&&(e.payload.data[t]=void 0),t in e.payload._errors&&(e.payload._errors[t]=null),e._asyncData[t]&&(e._asyncData[t].data.value=void 0,e._asyncData[t].error.value=null,e._asyncData[t].pending.value=!1,e._asyncData[t].status.value="idle"),t in e._asyncDataPromises&&(e._asyncDataPromises[t].cancelled=!0,e._asyncDataPromises[t]=void 0)}function W(e,t){const a={};for(const i of t)a[i]=e[i];return a}const E=(e,t)=>t.split(".").reduce((a,i)=>a&&a[i],e),D=(e,t)=>Object.keys(e).filter(t).reduce((a,i)=>Object.assign(a,{[i]:e[i]}),{}),ie=e=>t=>e&&e.length?D(t,a=>!e.includes(a)):t,oe=e=>t=>Array.isArray(t)?t.map(a=>e(a)):e(t),S=e=>{const t=[],a=[];for(const i of e)["$","_"].includes(i)?t.push(i):a.push(i);return{prefixes:t,properties:a}},ce=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:a,properties:i}=S(e);return D(t,n=>!i.includes(n)&&!a.includes(n[0]))},ue=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:a,properties:i}=S(e);return D(t,n=>i.includes(n)||a.includes(n[0]))},le=(e,t)=>{const a=new Intl.Collator(t.$locale,{numeric:t.$numeric,caseFirst:t.$caseFirst,sensitivity:t.$sensitivity}),i=Object.keys(t).filter(n=>!n.startsWith("$"));for(const n of i)e=e.sort((s,r)=>{const u=[E(s,n),E(r,n)].map(l=>{if(l!==null)return l instanceof Date?l.toISOString():l});return t[n]===-1&&u.reverse(),a.compare(u[0],u[1])});return e},fe=(e,t="Expected an array")=>{if(!Array.isArray(e))throw new TypeError(t)},d=e=>Array.isArray(e)?e:[void 0,null].includes(e)?[]:[e],X=["sort","where","only","without"];function V(e,t={}){const a={};for(const r of Object.keys(t.initialParams||{}))a[r]=X.includes(r)?d(t.initialParams[r]):t.initialParams[r];const i=(r,u=l=>l)=>(...l)=>(a[r]=u(...l),s),n=r=>{var u;return t.legacy?r!=null&&r.surround?r.surround:r&&(r!=null&&r.dirConfig&&(r.result={_path:(u=r.dirConfig)==null?void 0:u._path,...r.result,_dir:r.dirConfig}),r!=null&&r._path||Array.isArray(r)||!Object.prototype.hasOwnProperty.call(r,"result")?r:r==null?void 0:r.result):r},s={params:()=>({...a,...a.where?{where:[...d(a.where)]}:{},...a.sort?{sort:[...d(a.sort)]}:{}}),only:i("only",d),without:i("without",d),where:i("where",r=>[...d(a.where),...d(r)]),sort:i("sort",r=>[...d(a.sort),...d(r)]),limit:i("limit",r=>parseInt(String(r),10)),skip:i("skip",r=>parseInt(String(r),10)),find:()=>e(s).then(n),findOne:()=>e(i("first")(!0)).then(n),count:()=>e(i("count")(!0)).then(n),locale:r=>s.where({_locale:r}),withSurround:i("surround",(r,u)=>({query:r,...u})),withDirConfig:()=>i("dirConfig")(!0)};return t.legacy&&(s.findSurround=(r,u)=>s.withSurround(r,u).find().then(n)),s}function R(e){return JSON.stringify(e,Y)}function Y(e,t){return t instanceof RegExp?`--REGEX ${t.toString()}`:t}const Z=e=>{let t=R(e);return t=typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t),t=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(t.match(/.{1,100}/g)||[]).join("/")},$=e=>N(e,g().public.content.api.baseURL),de=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},ee=()=>{const{experimental:e}=g().public.content;return e.clientDB?!0:O().isEnabled()},te=()=>async e=>{const{content:t}=g().public,a=e.params(),i=t.experimental.stripQueryParameters?$(`/query/${`${b(a)}.${t.integrity}`}/${Z(a)}.json`):$(`/query/${b(a)}.${t.integrity}.json`);if(ee())return(await A(()=>import("./DBSqIh72.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>r.useContentDatabase())).fetch(e);const n=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:R(a),previewToken:O().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};function he(e,...t){const{content:a}=g().public,i=V(te(),{initialParams:typeof e!="string"?e:{},legacy:!0});let n;typeof e=="string"&&(n=U(k(e,...t)));const s=i.params;return i.params=()=>{var u,l,p;const r=s();return n&&(r.where=r.where||[],r.first&&(r.where||[]).length===0?r.where.push({_path:z(n)}):r.where.push({_path:new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=r.sort)!=null&&u.length||(r.sort=[{_file:1,$numeric:!0}]),a.locales.length&&((p=(l=r.where)==null?void 0:l.find(m=>m._locale))!=null&&p._locale||(r.where=r.where||[],r.where.push({_locale:a.defaultLocale}))),r},i}export{se as a,fe as b,d as c,le as d,Z as e,oe as f,E as g,ce as h,ue as i,R as j,V as k,ie as o,he as q,ee as s,de as u,$ as w};
