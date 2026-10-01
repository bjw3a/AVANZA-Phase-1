/* Unit 2: Spanish support, English output. */
window.AVANZA_UNIT2 = {
  "unit": {
    "id": "level1-unit2",
    "level": "Level 1 — Beginning",
    "title": "Unit 2 — School & Classroom",
    "number": 2,
    "activityCount": 5
  },
  "cards": [
    [
      "teacher",
      "maestro/a · profesor/a",
      "The teacher is here."
    ],
    [
      "student",
      "estudiante",
      "I am a student."
    ],
    [
      "class",
      "clase",
      "I am in class."
    ],
    [
      "classroom",
      "salón de clases",
      "Class = clase; classroom = salón."
    ],
    [
      "desk",
      "escritorio · pupitre",
      "My desk = mi pupitre."
    ],
    [
      "chair",
      "silla",
      "My chair = mi silla."
    ],
    [
      "book",
      "libro",
      "This is my book."
    ],
    [
      "notebook",
      "cuaderno",
      "This is my notebook."
    ],
    [
      "pencil",
      "lápiz",
      "A pencil = un lápiz."
    ],
    [
      "pen",
      "bolígrafo · pluma",
      "A pen = un bolígrafo."
    ],
    [
      "paper",
      "papel",
      "I need paper. Sin a."
    ],
    [
      "computer",
      "computadora",
      "My computer = mi computadora."
    ],
    [
      "backpack",
      "mochila",
      "My backpack = mi mochila."
    ],
    [
      "door",
      "puerta",
      "The door = la puerta."
    ],
    [
      "bathroom",
      "baño",
      "The bathroom = el baño."
    ],
    [
      "school",
      "escuela",
      "At school = en la escuela."
    ],
    [
      "I have a pencil.",
      "Tengo un lápiz.",
      "I have... = Tengo..."
    ],
    [
      "I need a pencil.",
      "Necesito un lápiz.",
      "I need... = Necesito..."
    ],
    [
      "I need paper.",
      "Necesito papel.",
      "Paper no lleva a aquí."
    ],
    [
      "This is my book.",
      "Este es mi libro.",
      "My = mi."
    ],
    [
      "This is my notebook.",
      "Este es mi cuaderno.",
      "This is... = Este es..."
    ],
    [
      "Where is my notebook?",
      "¿Dónde está mi cuaderno?",
      "Where is...? = ¿Dónde está...?"
    ],
    [
      "Where is my pencil?",
      "¿Dónde está mi lápiz?",
      "Where is my book? = ¿Dónde está mi libro?"
    ],
    [
      "I am in class.",
      "Estoy en clase.",
      "También: I’m in class."
    ],
    [
      "The teacher is here.",
      "El profesor está aquí.",
      "The = el / la; here = aquí."
    ],
    [
      "I don't understand.",
      "No entiendo.",
      "También: I do not understand."
    ],
    [
      "Can you help me?",
      "¿Me puedes ayudar?",
      "Para pedir ayuda."
    ],
    [
      "Please repeat.",
      "Repite, por favor.",
      "Please = por favor."
    ],
    [
      "Can I go to the bathroom?",
      "¿Puedo ir al baño?",
      "Can I...? = ¿Puedo...?"
    ],
    [
      "Thank you.",
      "Gracias.",
      "Para agradecer la ayuda."
    ]
  ],
  "recognize": [
    {
      "q": "Necesito un lápiz.",
      "options": [
        "I have a pencil.",
        "I need a pencil.",
        "This is my pencil."
      ],
      "answer": "I need a pencil.",
      "hint": "Recuerda: I need a pencil."
    },
    {
      "q": "¿Dónde está mi cuaderno?",
      "options": [
        "Where is my notebook?",
        "This is my notebook.",
        "I have a notebook."
      ],
      "answer": "Where is my notebook?",
      "hint": "Recuerda: Where is my notebook?"
    },
    {
      "q": "No entiendo.",
      "options": [
        "I don't have a book.",
        "I am not in class.",
        "I don't understand."
      ],
      "answer": "I don't understand.",
      "hint": "Recuerda: I don't understand."
    },
    {
      "q": "¿Me puedes ayudar?",
      "options": [
        "Can I help you?",
        "Can you help me?",
        "Can I go to class?"
      ],
      "answer": "Can you help me?",
      "hint": "Recuerda: Can you help me?"
    },
    {
      "q": "Repite, por favor.",
      "options": [
        "Please help me.",
        "Thank you.",
        "Please repeat."
      ],
      "answer": "Please repeat.",
      "hint": "Recuerda: Please repeat."
    },
    {
      "q": "¿Puedo ir al baño?",
      "options": [
        "Can I go to the bathroom?",
        "Where is my classroom?",
        "Can you help me?"
      ],
      "answer": "Can I go to the bathroom?",
      "hint": "Recuerda: Can I go to the bathroom?"
    },
    {
      "q": "Tengo un lápiz.",
      "options": [
        "I need a pencil.",
        "I have a pencil.",
        "This is my pen."
      ],
      "answer": "I have a pencil.",
      "hint": "Recuerda: I have a pencil."
    },
    {
      "q": "Este es mi libro.",
      "options": [
        "Where is my book?",
        "This is my notebook.",
        "This is my book."
      ],
      "answer": "This is my book.",
      "hint": "Recuerda: This is my book."
    },
    {
      "q": "Estoy en clase.",
      "options": [
        "I am in class.",
        "I am at home.",
        "The teacher is here."
      ],
      "answer": "I am in class.",
      "hint": "Recuerda: I am in class."
    },
    {
      "q": "Necesito papel.",
      "options": [
        "I need a pen.",
        "I need paper.",
        "I have paper."
      ],
      "answer": "I need paper.",
      "hint": "Recuerda: I need paper."
    },
    {
      "q": "El profesor está aquí.",
      "options": [
        "The student is here.",
        "The teacher is here.",
        "The teacher is at home."
      ],
      "answer": "The teacher is here.",
      "hint": "Recuerda: The teacher is here."
    },
    {
      "q": "Gracias.",
      "options": [
        "Please repeat.",
        "Can you help me?",
        "Thank you."
      ],
      "answer": "Thank you.",
      "hint": "Recuerda: Thank you."
    }
  ],
  "build": [
    [
      "Necesito un lápiz.",
      "I need a pencil."
    ],
    [
      "Tengo un cuaderno.",
      "I have a notebook."
    ],
    [
      "Este es mi libro.",
      "This is my book."
    ],
    [
      "¿Dónde está mi lápiz?",
      "Where is my pencil?"
    ],
    [
      "Estoy en clase.",
      "I am in class."
    ],
    [
      "El profesor está aquí.",
      "The teacher is here."
    ],
    [
      "No entiendo.",
      "I don't understand."
    ],
    [
      "¿Me puedes ayudar?",
      "Can you help me?"
    ],
    [
      "Repite, por favor.",
      "Please repeat."
    ],
    [
      "¿Puedo ir al baño?",
      "Can I go to the bathroom?"
    ]
  ],
  "type": [
    {
      "q": "Necesito un lápiz.",
      "answers": [
        "I need a pencil."
      ],
      "task": "translate",
      "hint": "Empieza con I..."
    },
    {
      "q": "Tengo un cuaderno.",
      "answers": [
        "I have a notebook."
      ],
      "task": "translate",
      "hint": "Empieza con I..."
    },
    {
      "q": "Este es mi libro.",
      "answers": [
        "This is my book."
      ],
      "task": "translate",
      "hint": "Empieza con This..."
    },
    {
      "q": "¿Dónde está mi lápiz?",
      "answers": [
        "Where is my pencil?"
      ],
      "task": "translate",
      "hint": "Empieza con Where..."
    },
    {
      "q": "Estoy en clase.",
      "answers": [
        "I am in class."
      ],
      "task": "translate",
      "hint": "Empieza con I..."
    },
    {
      "q": "El profesor está aquí.",
      "answers": [
        "The teacher is here."
      ],
      "task": "translate",
      "hint": "Empieza con The..."
    },
    {
      "q": "No entiendo.",
      "answers": [
        "I don't understand.",
        "I do not understand."
      ],
      "task": "translate",
      "hint": "Empieza con I..."
    },
    {
      "q": "¿Me puedes ayudar?",
      "answers": [
        "Can you help me?"
      ],
      "task": "translate",
      "hint": "Empieza con Can..."
    },
    {
      "q": "Repite, por favor.",
      "answers": [
        "Please repeat."
      ],
      "task": "translate",
      "hint": "Empieza con Please..."
    },
    {
      "q": "¿Puedo ir al baño?",
      "answers": [
        "Can I go to the bathroom?"
      ],
      "task": "translate",
      "hint": "Empieza con Can..."
    }
  ],
  "reading": "Hello! My name is Mateo. I am a student. I am at school. I am in English class. This is my backpack. I have a book, a notebook, and a pencil. My teacher is Ms. Green. She is here. I need paper. I ask, \"Can you help me?\" Sometimes I don't understand. I say, \"Please repeat.\" Ms. Green helps me. I say, \"Thank you.\" My notebook is on my desk in the classroom. I like my class.",
  "glossary": "school = escuela · backpack = mochila · paper = papel · sometimes = a veces · ask = preguntar · helps = ayuda",
  "read": [
    {
      "q": "What is the student's name?",
      "options": [
        "Carlos",
        "Mateo",
        "Sofia"
      ],
      "answer": "Mateo",
      "hint": "Busca My name is..."
    },
    {
      "q": "Where is Mateo?",
      "starter": "He is...",
      "answers": [
        "He is at school.",
        "Mateo is at school.",
        "At school.",
        "School",
        "He is in English class.",
        "In English class.",
        "English class",
        "He is in class.",
        "In class.",
        "He is in school.",
        "In school."
      ],
      "hint": "Busca I am... al principio."
    },
    {
      "q": "What does Mateo have?",
      "options": [
        "A book, a notebook, and a pen.",
        "A book, paper, and a pencil.",
        "A book, a notebook, and a pencil."
      ],
      "answer": "A book, a notebook, and a pencil.",
      "hint": "Busca I have..."
    },
    {
      "q": "Who is the teacher?",
      "starter": "The teacher is...",
      "answers": [
        "The teacher is Ms. Green.",
        "Ms. Green.",
        "His teacher is Ms. Green.",
        "She is Ms. Green."
      ],
      "hint": "Busca My teacher is..."
    },
    {
      "q": "What does Mateo need?",
      "starter": "He needs...",
      "answers": [
        "He needs paper.",
        "Mateo needs paper.",
        "Paper."
      ],
      "hint": "Busca I need..."
    },
    {
      "q": "What does Mateo say when he needs help?",
      "starter": "He says...",
      "answers": [
        "Can you help me?",
        "He says, \"Can you help me?\"",
        "Mateo says, \"Can you help me?\""
      ],
      "hint": "Busca la pregunta después de I ask."
    },
    {
      "q": "What does Mateo say to ask the teacher to say it again?",
      "starter": "He says...",
      "answers": [
        "Please repeat.",
        "He says, \"Please repeat.\"",
        "Mateo says, \"Please repeat.\""
      ],
      "hint": "Busca I say... después de Sometimes."
    }
  ]
};
