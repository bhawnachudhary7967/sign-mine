// Demo auth: stored in this browser only. Use Supabase/Clerk for real accounts.
const K='bs_users',SK='bs_session',norm=e=>String(e).trim().toLowerCase();
const load=()=>{try{return JSON.parse(localStorage.getItem(K)||'{}')}catch{return{}}};
const fb=t=>{let h=5381;for(const c of t)h=(h*33^c.charCodeAt(0))>>>0;return'f'+h.toString(16)};// insecure-origin fallback (http on LAN)
const hash=async t=>globalThis.crypto?.subtle?[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)))].map(b=>b.toString(16).padStart(2,'0')).join(''):fb(t);
const current=()=>{try{return localStorage.getItem(SK)}catch{return null}};
async function signup(e,p){e=norm(e);const u=load();if(u[e])throw Error('Account already exists');u[e]=await hash(e+p);try{localStorage.setItem(K,JSON.stringify(u));localStorage.setItem(SK,e)}catch{throw Error('Browser storage is unavailable (private mode?)')}return e}
async function login(e,p){e=norm(e);const u=load();if(u[e]!==await hash(e+p))throw Error('Wrong email or password');try{localStorage.setItem(SK,e)}catch{}return e}
const guest=()=>{try{localStorage.setItem(SK,'guest')}catch{}return'guest'};
const logout=()=>{try{localStorage.removeItem(SK)}catch{}};
export const Auth={current,signup,login,guest,logout};
