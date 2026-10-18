# The Jones TCG website

Static site for thejonestcg.com: pay at our table, show calendar with flyers, sell us your cards.

- `index.html`: home page. `shows.html`: upcoming shows. `shows.json`: the show list (mirrors the Google Calendar "TheJonesTCG Events").
- `flyers/`: show flyers (`<date>-<name>.webp` plus `-thumb.webp`).
- Instagram strip: Behold JSON feed. QR codes: qrcodejs 1.0.0 (MIT) from cdnjs.
- Layout ideas from Start Bootstrap "Landing Page" (MIT); code written fresh.

No build step: serve the folder as-is.
