(() => {
'use strict';
const C=window.AVANZA_CONTENT, repo=window.AvanzaProgress, state=repo.get(), main=document.querySelector('main');
const M=window.AvanzaMastery, unit=C.unit;
const unitDone=()=>state.completed.length===unit.activityCount&&[1,2,3,4].every(i=>state.mastery[i]?.passed);
const proofButton=()=>unitDone()?'<button data-action="proof">Enviar comprobante · Send Completion</button>':'';
const names=['Learn','Recognize','Build','Type','Read & Write'], spanish=['Aprende','Reconoce','Ordena','Escribe','Lee y escribe'];
let active=-1, flash=false, revealed=false, selected=null, picked=[], tokens=[], passed=false;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const save=()=>{repo.save();document.querySelector('#storage-warning').hidden=repo.available();};
// Forgive case, ordinary punctuation and spacing, but preserve lexical content.
function normalize(value){return value.normalize('NFKC').toLowerCase().replace(/[‘’]/g,"'").replace(/\b(i'm|you're|he's|she's|we're|they're|what's)\b/g,s=>({"i'm":'i am',"you're":'you are',"he's":'he is',"she's":'she is',"we're":'we are',"they're":'they are',"what's":'what is'}[s])).replace(/[.,!?;:“”"]/g,' ').replace(/\s+/g,' ').trim();}
const valid=(v,answers)=>answers.some(a=>normalize(v)===normalize(a));
const items=i=>i===0?C.cards:i===1?C.recognize:i===2?C.build:i===3?C.type:C.read;
const session=()=>state.sessions[active]||(state.sessions[active]=M.fresh());
const unlocked=i=>i===0||Array.from({length:i},(_,j)=>j).every(j=>state.completed.includes(j));
function focusMain(){main.focus();window.scrollTo(0,0);}
function focusQuestion(){focusMain();const input=document.querySelector('#answer');if(input&&!input.disabled)input.focus();else if(passed)document.querySelector('#next')?.focus();}
function home(){active=-1;flash=false;const done=state.completed.length,next=[0,1,2,3,4].find(i=>!state.completed.includes(i))??0;
 main.innerHTML=`<section class="hero"><div><div class="eyebrow">Nivel 1 · Beginning</div><h1 lang="en">Hello &<br>Introductions</h1><p>${done===5?'UNIDAD 1 COMPLETADA ✓ · UNIT 1 COMPLETE ✓ · 5 / 5':'Unidad 1 · Tu primera conversación en inglés.'}</p><button class="primary" data-start="${next}">${done===5?'Repasar unidad':done||state.sessions[0]?.index?'Continuar':'Empezar unidad'}</button> ${proofButton()}</div><div class="ring" aria-label="${done} de 5 actividades completas"><strong>${done}<span> / 5</span></strong><span>actividades completas</span></div></section>${state.legacyCompleted.some(i=>i>0&&!state.completed.includes(i))?'<p class="subtle">Tu práctica anterior está guardada. Completa ahora las actividades con 80% para verificar tu dominio.</p>':''}<div class="section-head"><h2>Tu recorrido</h2><span class="pill">Paso a paso</span></div><section class="activities" aria-label="Actividades de la unidad">${names.map((name,i)=>`<button class="activity ${state.completed.includes(i)?'done':''}" data-start="${i}" ${!unlocked(i)?'disabled':''}><span class="number">0${i+1} · ${state.completed.includes(i)?'✓ Completa':unlocked(i)?'Disponible':'Bloqueada'}</span><strong lang="en">${name}</strong><small>${spanish[i]}</small></button>`).join('')}</section><div class="lower"><section class="panel review-panel"><div class="eyebrow">Practica a tu ritmo</div><h2>Flashcards</h2><p class="muted">Saludos, presentaciones y <span lang="en">to be</span>.</p><button data-action="flash">Repasar tarjetas</button></section><section class="panel"><details><summary>Próximas unidades <span class="pill">9</span></summary><ul class="future-list">${C.units.slice(1).map((name,i)=>`<li><b>${i+2}. ${name}</b><span>Próximamente</span></li>`).join('')}</ul></details><p class="subtle">Más inglés, una unidad a la vez.</p></section></div><section class="levels" aria-label="Próximos niveles">${C.levels.slice(1).map(l=>`<div><strong>Nivel ${l.id} · ${l.name}</strong>Próximamente / Coming soon</div>`).join('')}</section>`;focusMain();}
function start(i){if(!Number.isInteger(i)||i<0||i>=unit.activityCount||!unlocked(i))return;active=i;flash=false;const s=session();if(!Number.isInteger(s.index)||s.index<0||s.index>=items(i).length)s.index=0;save();render();focusQuestion();}
function shell(title,index,total,body){main.innerHTML=`<div class="workspace"><button class="back" data-action="home">Volver al inicio</button><div class="workspace-top"><div><div class="eyebrow">Unidad 1 · ${flash?'Repaso':`Actividad ${active+1} de 5`}</div><h1>${title}</h1></div><span class="pill">${index+1} / ${total}</span></div><div class="progress" role="progressbar" aria-label="Progreso de la actividad" aria-valuenow="${index}" aria-valuemin="0" aria-valuemax="${total}"><div style="width:${100*index/total}%"></div></div>${body}</div>`;}
function render(){
 passed=false;selected=null;picked=[];
 const current=session(),list=items(active),item=list[current.index];
 if(active===0){shell('Aprende · Learn',current.index,list.length,`<section class="card learn"><span class="eyebrow">${current.index>=22?'To be · Ser / estar':'Inglés para conocernos'}</span><h2 lang="en">${esc(item[0])}</h2><div class="translation">${esc(item[1])}</div><p class="note">${esc(item[2])}</p></section><div class="row end"><button data-action="previous" ${current.index===0?'disabled':''}>Anterior</button><button class="dark" data-action="learn-next">${current.index===list.length-1?'Terminar · Finish':'Siguiente · Next card'}</button></div>`);return;}
 const prompt=active===2?item[0]:item.q,translate=item.task==='translate';
 const instruction=active===2?['Toca las palabras en orden. Toca una palabra para quitarla.','Tap words in order. Tap a selected word to remove it.']:item.options?['Elige la respuesta en inglés.','Choose the answer in English.']:translate?['Traduce al inglés.','Translate into English.']:['Responde en inglés con una oración completa.','Answer in English with a complete sentence.'];
 shell(`${spanish[active]} · ${names[active]}`,current.index,list.length,`<section class="card"><p class="instructions">${instruction[0]}<span lang="en">${instruction[1]}</span></p>${current.index===0?'<p class="subtle">Meta: 80%. Cuenta tu primera respuesta a cada pregunta.</p>':''}${active===4?`<aside class="reading"><p lang="en">${esc(C.reading)}</p><small>${esc(C.glossary)}</small></aside>`:''}<div class="prompt">${esc(prompt)}</div>${item.starter?`<p class="instructions">${translate?'Empieza con':'Responde con'}: <strong lang="en">&quot;${esc(item.starter)}&quot;</strong><span lang="en">${translate?'Start with':'Answer with'}: &quot;${esc(item.starter)}&quot;</span></p>`:''}<form id="answer-form" novalidate>${active===2?'<div id="built" class="tokens answer-line" aria-label="Tu oración"></div><label>Palabras / Word bank</label><div id="bank" class="tokens"></div>':item.options?`<div class="options" role="group" aria-label="Respuestas">${item.options.map((v,i)=>`<button type="button" data-choice="${i}" aria-pressed="false" lang="en">${esc(v)}</button>`).join('')}</div>`:`<label for="answer">${translate?'Traducción / Translation':'Tu respuesta / Your answer'}</label><input id="answer" lang="en" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="done" placeholder="${esc(item.starter||(translate?'Escribe la traducción en inglés...':'Escribe una oración en inglés...'))}">`}<div id="feedback" class="feedback" role="status" aria-live="polite"></div><div class="row"><button type="submit" class="dark" id="check">Comprobar · Check</button><button type="button" data-action="hint" id="hint">Pista</button><button type="button" class="dark" data-action="next" id="next" hidden>Siguiente · Next</button></div></form></section>`);
 if(active===2){tokens=item[1].split(' ').map((word,id)=>({word,id}));for(let i=tokens.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[tokens[i],tokens[j]]=[tokens[j],tokens[i]];}if(tokens.map(t=>t.word).join(' ')===item[1])tokens.reverse();drawTokens();}
 const prior=current.responses?.[current.index];
 if(prior){
  const input=document.querySelector('#answer');if(input)input.value=prior.response;
  if(item.options){selected=item.options.indexOf(prior.response);const chosen=document.querySelector(`[data-choice="${selected}"]`);if(chosen){chosen.classList.add('selected');chosen.setAttribute('aria-pressed','true');}}
  if(active===2&&prior.corrected){picked=[...tokens].sort((a,b)=>a.id-b.id).map(t=>t.id);drawTokens();}
  if(prior.corrected)showCorrect(item);else showIncorrect(item);
 }
}
function drawTokens(){document.querySelector('#built').innerHTML=picked.length?picked.map(id=>`<button type="button" data-remove="${id}">${esc(tokens.find(t=>t.id===id).word)}</button>`).join(''):'<span class="empty">Tu oración aparece aquí.</span>';document.querySelector('#bank').innerHTML=tokens.filter(t=>!picked.includes(t.id)).map(t=>`<button type="button" data-token="${t.id}">${esc(t.word)}</button>`).join('');}
function feedback(text,correct=false){const box=document.querySelector('#feedback');box.textContent=text;box.className='feedback'+(correct?' correct':'');}
function showCorrect(item){
 passed=true;feedback('¡Bien hecho! '+(active===2?item[1]:item.answers?.[0]||item.answer),true);
 document.querySelectorAll('#answer-form input,#answer-form .options button,#answer-form .tokens button').forEach(el=>el.disabled=true);
 document.querySelector('#check').hidden=true;document.querySelector('#hint').hidden=true;
 const next=document.querySelector('#next');next.hidden=false;next.textContent=session().index===items(active).length-1?'Terminar · Finish':'Siguiente · Next';next.focus();
}
function showIncorrect(item){
 feedback('Inténtalo otra vez. Try again. '+(active===2?'Empieza con '+item[1].split(' ')[0]+'.':item.hint));
 const input=document.querySelector('#answer');if(input){input.disabled=false;input.focus();}
}
function check(){
 if(passed)return;
 const current=session(),item=items(active)[current.index],input=document.querySelector('#answer');
 // Always read the live field. First-response scoring is separate from feedback state.
 const answer=active===2?picked.map(id=>tokens.find(t=>t.id===id).word).join(' '):item.options?(selected===null?'':item.options[selected]):input.value;
 if(!normalize(answer||'')){feedback('Primero escribe o elige una respuesta.');input?.focus();return;}
 const correct=active===2?valid(answer,[item[1]]):item.options?answer===item.answer:valid(answer,item.answers);
 M.record(current,current.index,correct,answer);save();
 if(correct)showCorrect(item);else showIncorrect(item);
}
function finish(){
 const i=active,result=i===0?null:M.result(session(),items(i).length);
 if(result&&!result.passed){
  state.mastery[i]={...state.mastery[i],lastAttempt:result};delete state.sessions[i];save();passed=false;
  main.innerHTML=`<div class="workspace"><section class="card success"><h1>Vamos otra vez</h1><p class="score">${result.correct} / ${result.total} · ${Number(result.percent.toFixed(1))}%</p><p>Necesitas 80% para avanzar.<br><span lang="en">You need 80% to continue.</span></p><p class="subtle">Cuenta la primera respuesta a cada pregunta.</p><div class="row"><button class="dark" data-start="${i}">Intentar otra vez · Try again</button><button data-action="home">Inicio</button></div></section></div>`;focusMain();return;
 }
 if(result)state.mastery[i]={...result,passed:true,bestPercent:Math.max(result.percent,state.mastery[i]?.bestPercent||0),lastAttempt:result};
 if(!state.completed.includes(i))state.completed.push(i);
 delete state.sessions[i];state.unitComplete=unitDone();save();const all=unitDone();passed=false;
 main.innerHTML=`<div class="workspace"><section class="card success"><div class="check">✓</div><div class="eyebrow">${names[i]} · Completa</div><h1>${all?'UNIDAD 1 COMPLETADA ✓':'¡Un paso más!'}</h1>${all?'<h2 lang="en">UNIT 1 COMPLETE ✓</h2>':''}${result?`<p class="score">${result.correct} / ${result.total} · ${Number(result.percent.toFixed(1))}%</p>`:''}<p class="muted">${state.completed.length} / ${unit.activityCount} actividades completas${all?' · Activities complete':''}</p><div class="row">${i<4?`<button class="dark" data-start="${i+1}">Continuar · ${names[i+1]}</button>`:'<button class="dark" data-action="home">Ver mi progreso</button>'}<button data-start="${i}">Repetir actividad</button>${proofButton()}${i<4?'<button data-action="home">Inicio</button>':'<button data-action="flash">Repasar tarjetas</button>'}</div></section></div>`;focusMain();
}
function showProof(){
 if(!unitDone())return;
 main.innerHTML=`<div class="workspace"><button class="back" data-action="home">Volver al inicio</button><section class="card"><h1>Enviar comprobante</h1><p>Unidad 1 completada ✓ · 5 / 5</p><form id="proof-form"><label for="student-name">Nombre / Student Name</label><input id="student-name" type="text" maxlength="100" autocomplete="name" required><p class="subtle">Se abrirá tu correo. Revisa el mensaje y pulsa Enviar.</p><div id="proof-status" role="status"></div><div class="row"><button class="dark" type="submit">Abrir correo · Open email</button></div></form></section></div>`;
 focusMain();document.querySelector('#student-name').focus();
}
function createEmail(){
 if(!unitDone())return;
 const name=document.querySelector('#student-name').value.trim().replace(/[\r\n]+/g,' ');
 const status=document.querySelector('#proof-status');
 if(!name){status.textContent='Escribe tu nombre. / Enter your name.';return;}
 const teacher=String(window.AVANZA_CONFIG.TEACHER_EMAIL||'').trim();
 if(!/^[^\s@,;?&]+@[^\s@,;?&]+\.[^\s@,;?&]+$/.test(teacher)){status.textContent='El profesor debe configurar su correo antes de enviar el comprobante.';return;}
 const subject=`AVANZA — Unit ${unit.number} Complete`;
 const body=`Student: ${name}\n\nAVANZA\n${unit.level}\n${unit.title}\n\nStatus: COMPLETE\nActivities: ${unit.activityCount}/${unit.activityCount}\nMastery requirement: ${M.threshold}%\n\n`+[1,2,3,4].map(i=>`${names[i]}: ${state.mastery[i].correct}/${state.mastery[i].total} (${Number(state.mastery[i].percent.toFixed(1))}%)`).join('\n');
 const link=document.createElement('a');link.href=`mailto:${teacher}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 link.textContent='Abrir correo otra vez';link.className='email-link';status.replaceChildren(link);link.click();
 const note=document.createElement('p');note.className='subtle';note.textContent='Pulsa Enviar en tu aplicación de correo. AVANZA no puede confirmar el envío.';status.append(note);
}
function advance(){const s=session();if(s.index===items(active).length-1){finish();return;}s.index++;save();render();focusQuestion();}
function showFlash(){flash=true;active=-1;revealed=false;if(!Number.isInteger(state.flash)||state.flash<0||state.flash>=C.cards.length)state.flash=0;renderFlash();focusMain();}
function renderFlash(){const index=state.flash,card=C.cards[index];shell('Flashcards',index,C.cards.length,`<section class="card learn"><div class="eyebrow">Recuerda el inglés · Recall the English</div><h2>${esc(card[1])}</h2>${revealed?`<div class="translation" lang="en">${esc(card[0])}</div>`:'<p class="muted">¿Cómo se dice en inglés?</p>'}<button class="reveal" data-action="reveal">${revealed?'Ocultar inglés · Hide English':'Ver inglés · Show English'}</button></section><div class="row end flash-tools"><button data-action="flash-prev" ${index===0?'disabled':''}>Anterior</button><button class="dark" data-action="flash-next">${index===C.cards.length-1?'Terminar repaso · Finish':'Siguiente · NEXT CARD'}</button></div><p class="subtle">Repaso libre · Las tarjetas no completan las cinco actividades.</p>`);}
main.addEventListener('submit',e=>{if(e.target.id==='answer-form'){e.preventDefault();check();}else if(e.target.id==='proof-form'){e.preventDefault();createEmail();}});
main.addEventListener('keydown',e=>{if(e.target.id==='answer'&&e.key==='Enter'&&!e.isComposing){e.preventDefault();check();}});
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;if(b.dataset.start!==undefined){start(Number(b.dataset.start));return;}if(b.dataset.choice!==undefined){selected=Number(b.dataset.choice);document.querySelectorAll('[data-choice]').forEach(el=>{el.classList.toggle('selected',el===b);el.setAttribute('aria-pressed',el===b?'true':'false');});return;}if(b.dataset.token!==undefined&&!passed){picked.push(Number(b.dataset.token));drawTokens();return;}if(b.dataset.remove!==undefined&&!passed){picked=picked.filter(id=>id!==Number(b.dataset.remove));drawTokens();return;}
 switch(b.dataset.action){case'home':home();break;case'proof':showProof();break;case'flash':showFlash();break;case'previous':if(session().index>0){session().index--;save();render();}break;case'learn-next':if(active===0)advance();break;case'next':if(passed)advance();break;case'hint':{const item=items(active)[session().index];feedback(active===2?'Empieza con '+item[1].split(' ')[0]+'.':item.hint);break;}case'reveal':revealed=!revealed;renderFlash();break;case'flash-prev':state.flash=Math.max(0,state.flash-1);revealed=false;save();renderFlash();break;case'flash-next':if(state.flash===C.cards.length-1){state.flash=0;save();main.innerHTML='<div class="workspace"><section class="card success"><div class="check">✓</div><h1>¡Repaso completo!</h1><p>28 tarjetas repasadas.</p><div class="row"><button class="dark" data-action="flash">Repasar otra vez</button><button data-action="home">Inicio</button></div></section></div>';focusMain();}else{state.flash++;revealed=false;save();renderFlash();}break;}
});
save();home();
})();
