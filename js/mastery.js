/* Shared first-response scoring. Corrections teach; they never rewrite scores. */
window.AvanzaMastery = {
 threshold:80,
 fresh:()=>({index:0,attempts:0,responses:[]}),
 record(session,index,correct,response){
  session.responses ||= [];
  const previous=session.responses[index];
  session.responses[index]={firstCorrect:previous?previous.firstCorrect:correct,corrected:correct,response};
  session.attempts++;
 },
 result(session,total){
  const responses=session.responses||[];
  const correct=responses.slice(0,total).filter(r=>r?.firstCorrect===true).length;
  const finished=Array.from({length:total},(_,i)=>responses[i]?.corrected===true).every(Boolean);
  return {correct,total,percent:100*correct/total,passed:finished&&correct*100>=this.threshold*total};
 }
};
