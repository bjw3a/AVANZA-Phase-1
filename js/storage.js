/* Replace this small repository adapter when accounts are introduced. */
window.AvanzaProgress = (() => {
 const key = 'avanza.phase1.progress.v1';
 let available = true;
 const fresh = () => ({version:1, completed:[], sessions:{}, flash:0});
 let state = fresh();
 try { const parsed=JSON.parse(localStorage.getItem(key)); if(parsed?.version===1){state={...fresh(),...parsed};state.completed=Array.isArray(parsed.completed)?parsed.completed.filter(n=>Number.isInteger(n)&&n>=0&&n<5):[];state.sessions=parsed.sessions&&typeof parsed.sessions==='object'?parsed.sessions:{};} localStorage.setItem(key,JSON.stringify(state)); } catch {available=false;}
 return {get:()=>state, available:()=>available, save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{available=false;}return available;}};
})();
