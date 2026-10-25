import {SIGNS} from '../signs.js';import {SENT} from '../sentences.js';import {stage,vid} from '../hand.js';import {SPR} from '../mobs.js';
import {page,$,T} from '../ui.js';import {award,xpg,setXpg} from '../store.js';
const S=SENT.map(([e,g])=>({e,w:g.split('|').map(x=>SIGNS.find(s=>s.w==x))}));
export const pSentences=()=>page('sentences',`<h1>Sentences · ${S.length}</h1><p>Watch the signs in order. Real ASL grammar differs from English, so treat these as practice and check with a Deaf signer.</p><div class="sl">${S.map((s,i)=>`<a class="card" href="#/sentence/${i}"><b>${s.e}</b><br><small>${s.w.map(x=>x.w.toUpperCase()).join(' · ')}</small></a>`).join('')}</div>`);
export function pSentence(a){const n=Math.max(0,Math.min(S.length-1,+a||0)),s=S[n],L=s.w.length;let i=0,auto=0;
const go=d=>{i=(i+d+L)%L;draw()},draw=()=>{const w=s.w[i],done=xpg().includes('S'+n);
page('sentences',`<div class="card center"><small>SENTENCE ${n+1}/${S.length}</small><h2>${s.e}</h2><small>${s.w.map((x,k)=>k==i?`<b>[${x.w.toUpperCase()}]</b>`:x.w.toUpperCase()).join(' · ')}</small></div><div class="sent">${stage(w,SPR.steve)}<small>sign ${i+1}/${L}</small><p>${w.d}</p>${vid(w)}</div>
<div class="btns"><button id="pv">◀</button><button id="ap">${auto?'⏸ Pause':'▶ Auto play'}</button><button id="nx">▶</button></div><div class="btns" style="margin-top:14px"><button class="go" id="dn">${done?'Practised ✓':'I practised this +10 XP'}</button>${n<S.length-1?`<a class="btn" href="#/sentence/${n+1}">Next sentence ›</a>`:''}<a class="btn" href="#/sentences">All</a></div>`);
$('#pv').onclick=()=>go(-1);$('#nx').onclick=()=>go(1);
$('#ap').onclick=()=>{auto=!auto;clearInterval(T.id);if(auto)T.id=setInterval(()=>go(1),2200);draw()};
$('#dn').onclick=()=>{if(!xpg().includes('S'+n)){setXpg([...xpg(),'S'+n]);award(10)}draw()};
onkeydown=e=>{if(e.key=='ArrowRight')go(1);if(e.key=='ArrowLeft')go(-1)}};draw()}
