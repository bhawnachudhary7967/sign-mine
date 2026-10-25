# BlockSign
Static site, no build step. Run locally: `npx serve .` (ES modules need http, not file://). Deploy: import the repo in Vercel and click Deploy.
Structure: hash-routed pages in js/pages (home, learn+sign, practice, profile, about, landing); js/store.js (progress, levels, badges), js/sound.js, js/ui.js, js/signs.js, js/hand.js, js/mobs.js, js/auth.js.
Auth is stored in the browser only (demo). For real accounts use Supabase/Clerk.
"# sign-mine" 
