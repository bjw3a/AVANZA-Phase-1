# AVANZA — Phase 2
Aprende inglés

Expanded directly from AVANZA-Phase-1.1(1).zip. Static HTML/CSS/JavaScript; no build, server API, accounts, or external dependencies.

## Changes
- Unit 2 — School & Classroom: 30 Learn cards, 12 Recognize questions, 10 Build sentences, 10 Type items, and a 77-word reading with 7 questions.
- Unit 2 unlocks after Unit 1's five core activities. Each scored activity retains the 80% first-response mastery rule.
- Independent saved Unit 2 progress, completion checkmarks, and completion email.
- Simple Unit 1 / Unit 2 flashcard selection; review remains optional.
- Reading comprehension accepts correct short answers, including Honduras, while retaining sentence starters. Build and Type still require the target structure.
- Advancing positions the activity heading or reading question on screen. Typed fields receive focus without a competing focus scroll.

## Upload to GitHub Pages
Extract the ZIP. Upload its contents to the same location as the existing app, with index.html at the repository's serving root. All application URLs are relative, including data/unit2.js.

IMPORTANT: The supplied Phase 1.1 ZIP has a blank TEACHER_EMAIL in js/config.js. This file is preserved byte-for-byte. If your deployed copy already contains your working teacher email, retain that configured js/config.js instead of replacing it with the blank file. Otherwise fill in the single TEACHER_EMAIL value before uploading.

Completion uses mailto: it opens the student's email application with a prepared message. The student still presses Send. AVANZA cannot verify actual delivery.

## Progress compatibility
The original key avanza.phase1.progress.v1 remains unchanged. Unit 1's completed, sessions, mastery, and flash fields stay at the root. Unit 2 uses an additional unit2 object. Existing Phase 1.1 completion remains valid. Keep the same site origin and browser; progress does not transfer across devices or domains.

## Source files
- data/curriculum.js: existing Unit 1 curriculum and future unit names
- data/unit2.js: new Unit 2 curriculum
- js/app.js: shared activity rendering, navigation, answer validation, and mailto
- js/storage.js: compatible browser storage
- js/mastery.js: unchanged first-response scoring
- js/config.js: unchanged single teacher email setting

Units 3–10 and Levels 2–3 remain coming soon.
