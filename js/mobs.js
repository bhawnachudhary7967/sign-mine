const PAL={g:'#5fa83a',G:'#3d7a22',s:'#e0ac84',S:'#b57f5a',b:'#5a3a1e',w:'#fff',k:'#111',n:'#a9714b',e:'#6b4a2b',B:'#3aa6b9',r:'#f0a0a8',R:'#d0707a'};
const px=rows=>`<svg viewBox="0 0 8 8">`+rows.map((r,y)=>[...r].map((c,x)=>PAL[c]?`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${PAL[c]}"/>`:'').join('')).join('')+'</svg>';
export const SPR={
villager:px(['bbbbbbbb','bbbbbbbb','ssssssss','swgssgws','swgssgws','sssnnsss','sssnnsss','sssnnsss']),
steve:px(['bbbbbbbb','bbbbbbbb','ssssssss','swSSSSws','ssssssss','sssSSsss','ssSSSSss','ssssssss']),
allay:px(['..BBBB..','.BBBBBB.','BwkBBkwB','BBBBBBBB','.BBBBBB.','..BBBB..','.B.BB.B.','B..BB..B']),
creeper:px(['gGgggGgg','gGkkGggG','GgkkgGgg','ggGkkGgg','gkkGkkgG','gkkggkkg','GkkggkkG','gGgggGgg']),
pig:px(['rrrrrrrr','rrrrrrrr','rwkrrkwr','rrrrrrrr','rrRRRRrr','rrRkkRrr','rrRRRRrr','rrrrrrrr'])};
// Each mood gets its own GSAP motion
export const FX={
wave:e=>gsap.fromTo(e,{rotation:-14},{rotation:14,transformOrigin:'50% 100%',yoyo:true,repeat:-1,duration:.4,ease:'sine.inOut'}),
float:e=>gsap.to(e,{y:-18,scale:1.1,yoyo:true,repeat:-1,duration:1.1,ease:'sine.inOut'}),
bounce:e=>gsap.to(e,{y:-26,yoyo:true,repeat:-1,duration:.35,ease:'power2.out'}),
wiggle:e=>gsap.fromTo(e,{x:-10,rotation:-8},{x:10,rotation:8,yoyo:true,repeat:-1,duration:.25,ease:'sine.inOut'}),
shake:e=>{const t=gsap.timeline({repeat:-1,repeatDelay:.8});t.to(e,{x:'+=8',repeat:7,yoyo:true,duration:.04}).to(e,{scale:1.35,duration:.15}).to(e,{scale:1,x:0,duration:.3,ease:'bounce.out'});return t}};
Object.assign(PAL,{W:'#e6e6e6',d:'#3a3a3a',P:'#c05bff',h:'#7a4a2a',z:'#4a9a5a',Z:'#2f6b3a',c:'#d33',l:'#7ed957',L:'#4aa832'});
Object.assign(SPR,{
cow:px(['hhhhhhhh','hWWhhWWh','hkWhhWkh','hhhhhhhh','hhWWWWhh','hhWkkWhh','hhWWWWhh','hhhhhhhh']),
skeleton:px(['WWWWWWWW','WWWWWWWW','WddWWddW','WWWWWWWW','WWdddWWW','WWdWdWWW','WdWWWdWW','WWWWWWWW']),
ender:px(['dddddddd','dddddddd','dPPddPPd','dddddddd','dddddddd','dddddddd','dddddddd','dddddddd']),
zombie:px(['ZZZZZZZZ','zzzzzzzz','zkkzzkkz','zzzzzzzz','zzZZZZzz','zzZkkZzz','zzZZZZzz','zzzzzzzz']),
spider:px(['d.dddd.d','.dddddd.','dcddddcd','dddddddd','.dddddd.','.d.dd.d.','d..dd..d','d......d']),
slime:px(['llllllll','lLLLLLLl','lLkLLkLl','lLLLLLLl','lLLkkLLl','lLLLLLLl','lLLLLLLl','llllllll'])});
Object.assign(FX,{
hop:e=>gsap.to(e,{y:-20,scaleY:.9,yoyo:true,repeat:-1,duration:.5,ease:'power1.inOut'}),
rattle:e=>gsap.fromTo(e,{x:-5,rotation:-6},{x:5,rotation:6,yoyo:true,repeat:-1,duration:.06}),
teleport:e=>{const t=gsap.timeline({repeat:-1});t.to(e,{opacity:0,duration:.2}).set(e,{x:()=>gsap.utils.random(-60,60)}).to(e,{opacity:1,duration:.2}).to({},{duration:.8});return t},
stomp:e=>gsap.to(e,{y:12,scaleY:.8,yoyo:true,repeat:-1,duration:.3,ease:'power2.in'}),
crawl:e=>gsap.fromTo(e,{x:-40},{x:40,yoyo:true,repeat:-1,duration:.9,ease:'sine.inOut'}),
squish:e=>gsap.to(e,{scaleX:1.3,scaleY:.7,yoyo:true,repeat:-1,duration:.4,ease:'sine.inOut',transformOrigin:'50% 100%'})});
