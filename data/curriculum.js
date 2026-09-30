/* Content is independent of the activity engine. Levels are app pathways, not assessment scores. */
window.AVANZA_CONTENT = {
 levels: [{id:1,name:'Beginning',es:'Principiante',support:'es-en'},{id:2,name:'Developing',es:'En desarrollo',support:'en-es'},{id:3,name:'Expanding',es:'En expansión',support:'en'}],
 units:['Hello & Introductions','School & Classroom','Numbers, Dates & Time','Family & People','Describing People & Things','Daily Routine','Food & Everyday Needs','Places & Directions','Asking Questions','School & Academic English'],
 cards:[
 ['Hello','Hola','Un saludo para cualquier momento.'],['Hi','Hola','Un saludo informal.'],['Good morning','Buenos días','Para saludar por la mañana.'],['Good afternoon','Buenas tardes','Para saludar por la tarde.'],['Good evening','Buenas noches (al saludar)','Al llegar o saludar por la noche.'],['Good night','Buenas noches (al despedirse)','Al despedirse por la noche o ir a dormir.'],['Goodbye','Adiós','Para despedirte.'],['See you later','Hasta luego','Otra forma de despedirte.'],['My name is Ana.','Me llamo Ana.','También: I’m Ana.'],['What is your name?','¿Cómo te llamas?','También: What’s your name?'],['I am Carlos.','Soy Carlos.','También: I’m Carlos.'],['I am from Guatemala.','Soy de Guatemala.','También: I’m from Guatemala.'],['Where are you from?','¿De dónde eres?','From indica el lugar de origen.'],['How are you?','¿Cómo estás?','Pregunta cómo se siente alguien.'],['I am good.','Estoy bien.','También: I’m good.'],['I am fine.','Estoy bien.','También: I’m fine.'],['I am tired.','Estoy cansado/a.','También: I’m tired.'],['I am happy.','Estoy feliz.','También: I’m happy.'],['I am a student.','Soy estudiante.','En inglés usamos a: a student.'],['I am sixteen years old.','Tengo dieciséis años.','Edad: I am… (no I have…). Sixteen = 16.'],['Nice to meet you.','Mucho gusto.','Al conocer a alguien.'],['Nice to meet you too.','Igualmente.','Responde a “Nice to meet you.”'],['I am → I’m','Yo soy / estoy','I am a student. → I’m a student.'],['You are → You’re','Tú eres / estás; ustedes son / están','You are happy. → You’re happy.'],['He is → He’s','Él es / está','He is tired. → He’s tired.'],['She is → She’s','Ella es / está','She is a student. → She’s a student.'],['We are → We’re','Nosotros/as somos / estamos','We are students. → We’re students.'],['They are → They’re','Ellos/as son / están','They are happy. → They’re happy.'] ],
 recognize:[
 {q:'Llegas por la noche. ¿Cómo saludas?',options:['Good night','Good evening','Good morning'],answer:'Good evening',hint:'Good evening es un saludo. Good night es una despedida.'},
 {q:'Te vas a dormir. ¿Qué dices?',options:['Good afternoon','Good night','Hi'],answer:'Good night',hint:'Para despedirte antes de dormir: Good night.'},
 {q:'¿Cómo te llamas?',options:['How are you?','Where are you from?','What is your name?'],answer:'What is your name?',hint:'Name significa nombre.'},
 {q:'I am from Guatemala.',options:['Estoy en Guatemala.','Soy de Guatemala.','Voy a Guatemala.'],answer:'Soy de Guatemala.',hint:'From indica el lugar de origen.'},
 {q:'¿Cómo estás?',options:['How are you?','What is your name?','Nice to meet you.'],answer:'How are you?',hint:'How are you? pregunta cómo estás.'},
 {q:'She ___ happy.',options:['am','is','are'],answer:'is',hint:'She is = ella es / está.'},
 {q:'We ___ students.',options:['is','am','are'],answer:'are',hint:'We are = nosotros/as somos / estamos.'},
 {q:'They are tired. ¿Cuál es la contracción?',options:["They're tired.","He's tired.","You're tired."],answer:"They're tired.",hint:'They are → They’re.'},
 {q:'Alguien dice “Nice to meet you.” ¿Qué respondes?',options:['Good night.','Nice to meet you too.','I am tired.'],answer:'Nice to meet you too.',hint:'Too aquí significa también: igualmente.'},
 {q:'Tengo dieciséis años.',options:['I have sixteen years.','I am sixteen years old.','I are sixteen.'],answer:'I am sixteen years old.',hint:'En inglés usamos I am para expresar la edad.'}
 ],
 build:[['Me llamo Ana.','My name is Ana.'],['Soy de Guatemala.','I am from Guatemala.'],['Ella es estudiante.','She is a student.'],['Él está cansado.','He is tired.'],['Estamos felices.','We are happy.'],['Ellos son estudiantes.','They are students.'],['Tú estás bien.','You are fine.'],['¿De dónde eres?','Where are you from?']],
 type:[
 {q:'Me llamo Carlos.',answers:['My name is Carlos.','I am Carlos.'],hint:'Empieza con My name is… o I am…'},
 {q:'Soy estudiante.',answers:['I am a student.'],hint:'Usa I am y recuerda a antes de student.'},
 {q:'Soy de Honduras.',answers:['I am from Honduras.'],hint:'I am from + lugar.'},
 {q:'Ella está feliz.',answers:['She is happy.'],hint:'She + is + happy.'},
 {q:'Estamos cansados.',answers:['We are tired.'],hint:'We are = nosotros/as estamos.'},
 {q:'Ellos son estudiantes.',answers:['They are students.'],hint:'They are + students (plural).'},
 {q:'¿Cómo te llamas?',answers:['What is your name?'],hint:'What + is + your name?'},
 {q:'Tengo dieciséis años.',answers:['I am sixteen years old.','I am 16 years old.','I am sixteen.','I am 16.'],hint:'Edad: I am + sixteen / 16 + years old.'}
 ],
 reading:'Hello! My name is Sofia. I am sixteen years old. I am from Honduras. I am a student. I am happy today. This is Carlos. He is from Guatemala. We are students. Nice to meet you!',
 glossary:'sixteen = dieciséis · today = hoy · this is = este es · students = estudiantes',
 read:[
 {q:'What is her name? / ¿Cómo se llama?',options:['Ana','Sofia','Carlos'],answer:'Sofia',hint:'Busca “My name is…” en el texto.'},
 {q:'How old is Sofia? / ¿Cuántos años tiene?',options:['15','16','17'],answer:'16',hint:'Sixteen = dieciséis.'},
 {q:'Where is Sofia from? Escribe una oración.',answers:['She is from Honduras.','Sofia is from Honduras.'],hint:'Completa: She is from ____.'},
 {q:'How is Sofia today? Escribe una oración.',answers:['She is happy.','Sofia is happy.','She is happy today.','Sofia is happy today.'],hint:'Completa: She is ____.'},
 {q:'Where is Carlos from? Escribe una oración.',answers:['He is from Guatemala.','Carlos is from Guatemala.'],hint:'Completa: He is from ____.'},
 {q:'Escribe “Somos estudiantes” en inglés.',answers:['We are students.'],hint:'We + are + students.'}
 ]
};
