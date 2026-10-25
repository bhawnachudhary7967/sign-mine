import {prof} from './store.js';
export const $=s=>document.querySelector(s),app=$('#app'),T={id:0,tw:null};
export const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
export const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
export const go=h=>{if(location.hash==h)dispatchEvent(new Event('hashchange'));else location.hash=h};
const nav=a=>{const p=prof();return`<header class="top"><b>🧱 BlockSign</b><nav>${[['','Home'],['learn','Learn'],['sentences','Sentences'],['practice','Practice'],['profile','Profile'],['about','About']].map(([h,n])=>`<a class="${a==h?'on':''}" href="#/${h}">${n}</a>`).join('')}</nav><span>⭐ ${p.xp} · 🔥 ${p.streak}</span></header>`};
export const page=(a,html)=>{app.innerHTML=nav(a)+`<div class="wrap">${html}</div>`};
export const fit=()=>{const k=Math.min(innerHeight*.5/270,innerWidth*.85/260,2);document.querySelectorAll('.slide .stage').forEach(e=>e.style.zoom=k)};
