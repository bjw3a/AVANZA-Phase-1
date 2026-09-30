# Phase 1.1 validation

Source: exact Library file AVANZA-Phase-1(1).zip, extracted before editing.

## Passed in headless Chromium
- Full Learn sequence and refresh/resume.
- All questions in Recognize, Build, Type and Read & Write.
- Failed attempts and successful fresh retries in every scored activity.
- Recognize: 7/10 fails; exactly 8/10 passes.
- Build and Type: 6/8 fails; 7/8 passes.
- Read & Write: 4/6 fails; 5/6 passes.
- Corrections do not inflate first-response scores; wrong responses persist across reload.
- Incorrect typed answers remain visible/editable and refocus the field.
- Current edited values are reevaluated with Enter and Check; no incorrect-answer dead end.
- The reported Sofia case: select “Guatemala” inside the existing sentence, replace it with “Honduras,” and immediately resubmit successfully.
- Autofocus on initial and subsequent written questions; Enter submission.
- Type translation directions and labels.
- English answer options, age number words and reading sentence starters.
- Capitalization, whitespace, final punctuation and straight/curly contraction handling.
- Sequential locks, completion, mastery and 5/5 unit state after reload.
- Completion proof is absent before mastery and available after full completion.
- Blank teacher email gives a configuration message; a temporary test setting produces a correctly addressed and encoded mailto draft with student name, unit, 5/5 and 80% requirement. No email was sent.
- Flashcards: Spanish front, English reveal, simple review, next card, resume and final card.
- Phase 1 migration retains Learn, flashcard position and archived historical practice without inventing mastery scores.
- No JavaScript runtime errors during the student journey.

## Layout and packaging
Desktop (1365px) and mobile (390px) screenshots inspected. Reading, completion, proof and flashcard layouts checked for horizontal overflow. Original stylesheet/design retained with small additions for hidden controls, status and wrapping.

JavaScript syntax, ZIP integrity, root index.html and relative asset paths checked before packaging.

## Limits
Testing used desktop Chromium and simulated mobile viewports. Physical phone keyboards, other browser engines, OS email-client launch/delivery, live GitHub Pages and district network access were not tested. Email drafting was validated without sending mail. Test the deployed site on a school device before classroom use.
