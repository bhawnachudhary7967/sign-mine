import {SPR} from './mobs.js';
export function boom(done,fast){const g=window.gsap,o=document.createElement('div');o.className='boom';o.innerHTML=`<div class="bc">${SPR.creeper}</div>`;document.body.append(o);
const fin=()=>{o.remove();done&&done()};
if(!g||g.__stub||matchMedia('(prefers-reduced-motion:reduce)').matches){o.style.background='#fff';return void setTimeout(fin,350)}
const c=o.firstChild,bits=[...Array(36)].map((_,i)=>{const b=document.createElement('i'),s=10+i%3*8;b.style.cssText=`background:${['#5fa83a','#3d7a22','#111','#fff','#f1c40f'][i%5]};width:${s}px;height:${s}px`;o.append(b);return b});
const R=(a,b)=>()=>g.utils.random(a,b);
const t=g.timeline({onComplete:()=>{g.set('#app, #app *',{clearProps:'all'});fin()}});
t.fromTo(c,{scale:.2,opacity:0},{scale:2.6,opacity:1,duration:.4,ease:'back.out'})
 .to(c,{scale:3.3,duration:.06,yoyo:true,repeat:5,filter:'brightness(3)'})
 .set(c,{opacity:0}).set(o,{backgroundColor:'#fff'})
 .to(o,{backgroundColor:'rgba(255,255,255,0)',duration:.5})
 .to(bits,{opacity:1,x:R(-innerWidth/2,innerWidth/2),y:R(-innerHeight/2,innerHeight/2),rotation:R(-540,540),duration:.7,ease:'power3.out'},'<')
 .to(bits,{opacity:0,duration:.3},'-=.25')
 .to('#app',{x:'+=14',yoyo:true,repeat:9,duration:.04},'<-.6')
 .to('#app .opt,#app .card,#app h2,#app .stage',{x:R(-300,300),y:R(-300,300),rotation:R(-120,120),opacity:0,duration:.6,ease:'power2.out',stagger:.02},'<');
fast&&t.timeScale(1.8)}
