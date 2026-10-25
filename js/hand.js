const POS={forehead:['170px','6px'],chin:['174px','66px'],chest:['94px','108px'],side:['170px','116px']};
const RING={forehead:[96,20,68,14],chin:[112,84,36,12],chest:[98,114,64,40]};
const TH={s:'side',o:'out',i:'in'};
function hand(fs,t){const K='#3b2314',C='#e0ac84',D='#c08a62',O=[],P=[];
const r=(x,y,w,h,c)=>{O.push(`<rect x="${x-.5}" y="${y-.5}" width="${w+1}" height="${h+1}" fill="${K}"/>`);P.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`)};
r(5,11,8,8,C);r(5,19,8,2,'#3aa6b9');
[...fs].forEach((e,i)=>{const x=5+i*2,L=[9,10,9,7][i];+e?r(x,12-L,1.8,L,C):r(x,8,1.8,4,D)});
TH[t]=='out'?r(1,10,4,2.4,C):TH[t]=='side'?r(3,13,2,4,C):r(5,12,8,2.4,D);
return `<svg viewBox="0 0 18 22">${O.join('')}${P.join('')}</svg>`}
export const vid=s=>`<a href="https://www.youtube.com/results?search_query=ASL+sign+${encodeURIComponent(s.w)}" target="_blank" rel="noopener">▶ Watch a real signer</a>`;
export const stage=(s,steve)=>{const[p,q]=POS[s.l],g=RING[s.l];
return `<div class="stage"><div class="head">${steve}</div><div class="body"></div>${g?`<div class="ring" style="left:${g[0]}px;top:${g[1]}px;width:${g[2]}px;height:${g[3]}px"></div>`:''}<div class="hand" style="--x:${p};--y:${q};--m:${s.m}">${hand(s.f,s.t)}</div><div class="cap">${s.w.toUpperCase()}</div></div>`};
