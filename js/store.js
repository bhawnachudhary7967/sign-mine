import {Auth} from './auth.js';
export const ST={user:Auth.current()};
const rd=(k,d)=>{try{return JSON.parse(localStorage.getItem(k+ST.user))??d}catch{return d}},wr=(k,v)=>{try{localStorage.setItem(k+ST.user,JSON.stringify(v))}catch{}};
export const learned=()=>rd('bs_l_',[]),setLearned=a=>wr('bs_l_',a),favs=()=>rd('bs_f_',[]);
export const toggleFav=w=>{const f=favs(),n=f.includes(w)?f.filter(x=>x!=w):[...f,w];wr('bs_f_',n);return n.includes(w)};
export const prof=()=>{const p={xp:0,streak:0,last:'',perfect:0,best:0,quizzes:0,speeds:0,...rd('bs_p_',{})};if(p.last!=new Date().toDateString()&&p.last!=new Date(Date.now()-864e5).toDateString())p.streak=0;return p};
export const cfg=()=>({theme:'auto',sound:1,...rd('bs_c_',{})}),setCfg=c=>wr('bs_c_',{...cfg(),...c});
export const resetAll=()=>['bs_l_','bs_f_','bs_p_','bs_x_','bs_m_'].forEach(k=>{try{localStorage.removeItem(k+ST.user)}catch{}});
export function award(xp,o={}){const p=prof(),t=new Date().toDateString(),lb=level(p.xp).name;if(o.fc){if(p.fcd!=t){p.fcd=t;p.fcn=0}if(p.fcn>=20)xp=0;else p.fcn=(p.fcn||0)+1}p.xp+=xp;if(o.perfect)p.perfect=1;if(o.quiz)p.quizzes++;if(o.speed)p.speeds++;if(o.score>p.best)p.best=o.score;
if(p.last!=t){p.streak=p.last==new Date(Date.now()-864e5).toDateString()?p.streak+1:1;p.last=t}wr('bs_p_',p);const la=level(p.xp).name;if(la!=lb)dispatchEvent(new CustomEvent('bs-toast',{detail:'⬆ Level up: '+la+'!'}))}
export const LEVELS=[['Dirt',0],['Wood',100],['Stone',300],['Iron',600],['Gold',1000],['Diamond',1600],['Netherite',2500]];
export const level=xp=>{let i=0;LEVELS.forEach(([n,m],k)=>{if(xp>=m)i=k});const nx=LEVELS[i+1];return{name:LEVELS[i][0],next:nx&&nx[0],pct:nx?(xp-LEVELS[i][1])/(nx[1]-LEVELS[i][1])*100:100}};
export const BADGES=[['🌱','First Sign',(l)=>l>=1],['📘','10 Signs',(l)=>l>=10],['⛏️','25 Signs',(l)=>l>=25],['👑','Half Way',(l,p,n)=>l>=n/2],['🏆','All Signs',(l,p,n)=>l>=n],['🔥','3-Day Streak',(l,p)=>p.streak>=3],['🎯','Perfect Quiz',(l,p)=>p.perfect],['⚡','Speed 15+',(l,p)=>p.best>=15],['💎','500 XP',(l,p)=>p.xp>=500]];
export const applyTheme=()=>{const t=cfg().theme;t=='auto'?delete document.documentElement.dataset.theme:document.documentElement.dataset.theme=t};

export const xpg=()=>rd('bs_x_',[]),setXpg=a=>wr('bs_x_',a);
export const miss=()=>rd('bs_m_',{}),addMiss=w=>{const m=miss();m[w]=(m[w]||0)+1;wr('bs_m_',m)},clearMiss=w=>{const m=miss();if(m[w]){if(--m[w]<=0)delete m[w];wr('bs_m_',m)}};
const KS=['l','f','p','c','x','m'];
export const exportData=()=>JSON.stringify(Object.fromEntries(KS.map(k=>[k,rd('bs_'+k+'_',null)])));
export const importData=s=>{const o=JSON.parse(s);KS.forEach(k=>o[k]!=null&&wr('bs_'+k+'_',o[k]))};
