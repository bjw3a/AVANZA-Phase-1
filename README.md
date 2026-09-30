# AVANZA — Phase 1
## Aprende inglés

A self-contained English-learning app for Spanish-speaking secondary students.

## Open or deploy
Open index.html to try the app locally. For GitHub Pages, upload the contents of this ZIP into the repository root (index.html alongside css, js, data and assets). Enable Pages from the desired branch and root folder. All paths are relative, including when hosted under a repository name. No build, package installation, API key or server is required.

## Included
- Level 1, Unit 1: Hello & Introductions.
- Learn: 28 expression and grammar cards.
- Recognize: 10 questions, including greeting context and to be.
- Build: 8 sentences with click/tap word ordering; no dragging required.
- Type: 8 written responses.
- Read & Write: one short reading, 2 recognition and 4 written questions.
- Independent 28-card flashcard review.
- Future units and levels marked coming soon.

## Completion
Learn completes only after advancing through every card. Each practice question requires a correct answer before advancing; attempts are unlimited and hints remain available. This is supported practice completion, not an independently measured proficiency score. Flashcards do not complete the unit. Repeating an activity preserves previously earned completion.

## Saved progress
Browser localStorage key: avanza.phase1.progress.v1. Each activity saves its current question/card; an unsubmitted answer is not saved. Completed activities and the flashcard position survive reopening in the same browser and site origin. If storage is unavailable, a banner explains the session-only fallback. Clearing browser data removes progress. Shared browser profiles share progress; there are no student identities, teacher tracking, scores sent anywhere, or email reporting.

## Content and architecture
- data/curriculum.js: levels, unit names, cards and question sets.
- js/app.js: activity engine, navigation and answer evaluation.
- js/storage.js: replaceable local progress adapter.
- css/styles.css: responsive layout, keyboard focus and touch controls.

Typed answers ignore capitalization, extra whitespace and ordinary sentence punctuation. Standard taught contractions expand before comparison. Questions use explicit accepted-answer lists, not AI grading; future open paragraphs will need a different assessment method. Build exercises practice the displayed full forms.

Level labels are internal learning pathways, not official WIDA scores or assessments. Audio, listening, speaking, accounts and additional units are future scope.

## Teacher trial
Try the ZIP in a separate repository before assigning it. A working public deployment does not establish whether a district network permits its URL. Check on a student device and the school network.
