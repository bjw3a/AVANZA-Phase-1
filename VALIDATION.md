# Phase 2 validation

Source: exact AVANZA-Phase-1.1(1).zip.

Passed automated headless Chromium checks at 1280×900 and 390×740:
- Completed all five activities in both units.
- Unit 2 locked before Unit 1 completion and available afterward.
- Below-80% Recognize attempt withheld completion; successful retry passed.
- Incorrect Type and reading responses stayed editable, regained focus, and accepted current corrected input through Enter/Check.
- Corrections did not alter first-response scoring (9/10 Type; 6/7 reading).
- Unit 1 Honduras short answer accepted with scaffold retained; capitalization/punctuation and full-sentence equivalents verified.
- Unit 2 reading accepted paper; Type accepted I do not understand.
- Both completion records survived refresh, independently.
- Both email drafts used the single configuration, student name, and correct unit subject/body. A temporary in-memory test address was used; no email was sent, and config.js was not edited.
- Learn, Recognize, Build, Type, reading, and Flashcards advance positioning checked at desktop and phone viewport sizes; typed questions retained input focus.
- No horizontal overflow or JavaScript runtime errors in these flows.
- Desktop home and phone flashcard screenshots visually reviewed.

Additional checks:
- Existing Phase 1.1 storage fixture preserved every original field, including completion/mastery, while adding independent Unit 2 state.
- 7/10 fails and 8/10 passes the unchanged mastery engine; corrections retain original score.
- Teacher configuration and mastery engine byte-for-byte identical to source.
- All JavaScript syntax, relative asset paths, ZIP integrity, and root index.html checked.

Limits: phone checks use a Chromium viewport simulation, not a physical iOS/Android keyboard. Actual mail application delivery and a live GitHub Pages deployment were not performed. The source teacher email was blank and remains blank; retain the deployed configured js/config.js or configure it before uploading.
