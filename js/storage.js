/* Keep the Phase 1 key to migrate existing browser progress in place. */
window.AvanzaProgress = (() => {
 const key='avanza.phase1.progress.v1';
 let available=true;
 const fresh=()=>({version:2,completed:[],sessions:{},flash:0,mastery:{},legacyCompleted:[],legacySessions:{},unitComplete:false});
 let state=fresh();
 const activityIds=value=>Array.isArray(value)?[...new Set(value.filter(n=>Number.isInteger(n)&&n>=0&&n<5))]:[];
 try {
  let parsed;
  try{parsed=JSON.parse(localStorage.getItem(key));}catch{parsed=null;}
  if(parsed?.version===1){
   const oldCompleted=activityIds(parsed.completed);
   state={...fresh(),completed:oldCompleted.includes(0)?[0]:[],flash:parsed.flash||0,
    legacyCompleted:oldCompleted,legacySessions:parsed.sessions||{},
    sessions:parsed.sessions?.[0]?{0:parsed.sessions[0]}:{}};
  }else if(parsed?.version===2){
   state={...fresh(),...parsed};state.completed=activityIds(parsed.completed);
   state.mastery=parsed.mastery&&typeof parsed.mastery==='object'?parsed.mastery:{};
   state.sessions=parsed.sessions&&typeof parsed.sessions==='object'?parsed.sessions:{};
   state.legacyCompleted=activityIds(parsed.legacyCompleted);
   // An old completion flag alone must never authorize a mastery certificate.
   state.completed=state.completed.filter(i=>i===0||state.mastery[i]?.passed===true);
  }
  state.unitComplete=state.completed.length===5;
  localStorage.setItem(key,JSON.stringify(state));
 }catch{available=false;}
 return {get:()=>state,available:()=>available,save(){try{localStorage.setItem(key,JSON.stringify(state));available=true;}catch{available=false;}return available;}};
})();
