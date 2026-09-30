# AVANZA — Phase 1.1
## Aprende inglés

Refinement of the exact AVANZA-Phase-1(1).zip build. The original design, five-activity flow, Unit 1 reading, Build interactions, future-unit placeholders and offline static architecture are preserved.

## Teacher email: one setting
Open js/config.js and enter your school email between the quotes for TEACHER_EMAIL. This is the only teacher email setting. It ships blank intentionally. If blank, the app explains that the teacher must configure it and does not open an unaddressed email.

After the unit is complete, “Enviar comprobante · Send Completion” asks for the student's name, then opens a mailto draft. The student must press Send in their configured email application. No email is sent automatically; the app cannot verify delivery. Name is used for the draft and is not stored. The draft includes the unit, 5/5 completion, 80% requirement and activity results. It is browser-generated, editable proof, not a tamper-proof record.

## Mastery
- Learn completes by finishing its 28-card instructional sequence; it is unscored.
- Recognize, Build, Type and Read & Write require at least 80% first-response accuracy.
- A blank response is not scored. A nonblank submitted response is scored once per question.
- Wrong answers remain correctable with unlimited attempts. Corrections do not overwrite the first-response score.
- Students correct each question before moving on. At the end, a score below 80% offers a fresh attempt without unlocking the next activity.
- Pass thresholds with existing question counts: Recognize 8/10; Build 7/8; Type 7/8; Read & Write 5/6. Exact ratios decide the result; displayed percentages are rounded to one decimal.
- Previously mastered activities stay complete during later practice, including a failed retake.
- Flashcard review never affects mastery or unit completion.

## Language and keyboard changes
Recognize responses are English. Type tasks say “Traduce al inglés / Translate into English.” Task metadata distinguishes translation from answering. Read & Write uses English number words and sentence starters; Sofia is from Honduras and Carlos is from Guatemala. Type and written reading answers autofocus; Enter checks the current input. Incorrect answers stay visible and editable, with focus returned to the field. Normalization accepts case, normal sentence punctuation, whitespace, curly apostrophes and taught contractions, while checking actual words and meaning against explicit answers.

Learn keeps instructional notes. Flashcards now show Spanish cues and reveal English, without the full Learn explanations.

## Existing progress
The same localStorage key (avanza.phase1.progress.v1) is retained with a version-2 payload.
- Existing Learn completion/position and flashcard position carry forward.
- Phase 1 completed activities and in-progress sessions are archived as legacyCompleted and legacySessions.
- Earlier unscored practice cannot be treated as measured mastery. Activities 2–5 need a new 80% attempt, in sequence, before new completion marks or email proof are awarded. A brief migration notice explains this on the homepage.
- New mastery, completion, question position and submitted responses survive refresh. A wrong first response remains scored wrong after refreshing and correcting it.
- No accounts or synchronization: progress belongs to this browser and site origin. Clearing browser data clears progress. A storage warning appears if saving is unavailable.

## Open or deploy
Open index.html to try locally. For GitHub Pages, upload the ZIP contents into the repository root, keeping index.html beside css, js, data and assets. All asset paths are relative. No Node, npm, backend, API key, external font or service is needed to run the app. No repository was changed or deployment performed for this deliverable.

## Files
- data/curriculum.js: existing curriculum plus unit metadata, task types and sentence starters.
- js/app.js: navigation and activity UI, typed validation and completion draft.
- js/mastery.js: reusable first-response recording and threshold calculation.
- js/storage.js: progress adapter and explicit Phase 1 migration.
- js/config.js: the single teacher email setting.
- css/styles.css: original responsive design with small usability fixes.

The three level names are app learning pathways, not official WIDA scores. More units, audio, speaking, accounts and dashboards remain future scope.
