import {ST,applyTheme} from './store.js';import {T,fit} from './ui.js';
import {pLanding,pForm} from './pages/landing.js';import {pHome} from './pages/home.js';import {pLearn,pSign,LS} from './pages/learn.js';
import {pPractice,round,pCards,stopRound} from './pages/practice.js';import {pProfile} from './pages/profile.js';import {pAbout} from './pages/about.js';import {pSentences,pSentence} from './pages/sentences.js';
if(!window.gsap){const n=()=>({kill(){},to(){return this},set(){return this},fromTo(){return this}});window.gsap={__stub:1,to:n,from:n,fromTo:n,set:n,timeline:n,utils:{random:()=>0}}}
const RT={'':pHome,learn:pLearn,sign:pSign,practice:pPractice,quiz:()=>round('quiz'),speed:()=>round('speed'),cards:pCards,sentences:pSentences,sentence:pSentence,profile:pProfile,about:pAbout};
addEventListener('bs-toast',e=>{const d=document.createElement('div');d.className='toast card';d.textContent=e.detail;document.body.append(d);setTimeout(()=>d.remove(),2600)});
function route(){clearInterval(T.id);stopRound();T.tw&&T.tw.kill();onkeydown=null;applyTheme();const[h,a]=location.hash.replace(/^#\/?/,'').split('/');
if(h!='learn'&&h!='sign')LS.list=[];
if(h=='about')return pAbout();if(!ST.user)return h=='login'||h=='signup'?pForm(h):pLanding();(RT[h]||pHome)(a);if(h!='sign')scrollTo(0,0)}
addEventListener('hashchange',route);addEventListener('resize',fit);route();
