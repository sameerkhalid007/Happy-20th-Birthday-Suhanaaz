# Suhanaaz — Interactive Birthday Website

A romantic, responsive birthday surprise built with plain HTML, CSS and JavaScript. It is designed for GitHub Pages and requires no build tools, paid hosting, or backend.

## What's included

- Birthday welcome screen and countdown to **2 November 2026**
- Interactive balloons with personal-message reveals
- Candle-blowing effect, illustrated bouquet and gift reveal
- Photo gallery using separate original photos (not a collage)
- Tap any photo to open a larger viewer; use arrows or keyboard arrow keys to browse
- Responsive layout for mobile and desktop
- CSS animations, reduced-motion support, and a simple top navigation
- Easy-to-edit source files and real photos in `assets/photos/`

## Preview on your computer

1. Download and unzip the project.
2. Open the `suhanaaz_birthday_website` folder.
3. Double-click `index.html` to open it in Chrome or Edge.
4. Internet is only needed for the optional Google Fonts. The site itself is static.

## Publish free with GitHub Pages

1. Sign in to [GitHub](https://github.com/) or create an account.
2. Click **+ → New repository**.
3. Name it `suhanaaz-birthday` (or any name you prefer), set it to **Public**, and create it.
4. Open the new repository and choose **Add file → Upload files**.
5. Upload the *contents* of this project folder — `index.html`, `styles.css`, `script.js`, `assets/`, `.nojekyll`, and the documentation files. Do not upload only the ZIP file.
6. Click **Commit changes**.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, select **Deploy from a branch**.
9. Choose branch **main** and folder **/(root)**, then click **Save**.
10. Wait a minute or two. GitHub will show the published URL on the Pages settings screen, usually `https://YOUR-USERNAME.github.io/suhanaaz-birthday/`.
11. Open that URL on your phone and test all the buttons and photos.

If you later edit files, commit the changes to `main`; GitHub Pages will publish the update automatically.

## Make changes later

The website highlights Suhanaaz’s 20th birthday (born 2 November 2006), and that this is the first birthday Sameer gets to celebrate with her since they met.

### Change the birthday date

In `script.js`, find `new Date(2026, 10, 2, 0, 0, 0)`. JavaScript months are zero-based: January is `0`, November is `10`. Update the year, month, and day. Also update the visible date text in `index.html` (search for `02 NOVEMBER 2026` and `02 · 11 · 2026`).

### Change the name, message, or love letter

Open `index.html` in VS Code, Notepad, or another text editor. Search for `Suhanaaz`, then update the headings, captions, letter, or signature. Keep the HTML tags around the text intact.

### Replace or add photos

- Put your image files in `assets/photos/`.
- Use simple names such as `photo-18.jpg` and avoid spaces in filenames.
- In `index.html`, duplicate one `<figure class="photo-card"> ... </figure>` gallery block, then update its image path, `alt`, `data-caption`, and caption.
- The hero portrait is set to `assets/photos/photo-17.jpg` in the `hero-photo` block.
- Use your original images. CSS only applies a very subtle display adjustment; it does not reshape faces or bodies.

### Change colours and styling

Open `styles.css`. The main colours are near the start in `:root` (`--wine`, `--rose`, `--pink`, `--cream`, `--gold`). Adjust those values to change the theme. The same file contains the responsive layout and animations.

### Change interactive messages

Open `script.js` and edit the `balloonLines` array. The same file contains the candle, gift, countdown, and photo viewer logic.

### Add music (optional)

Add a licensed audio file such as `assets/music/birthday-song.mp3`, then set the `src` of the `#birthday-audio` element in `index.html`. Browsers generally require a user tap before audio can start. Make sure you have permission to use the song.

## Project files

- `index.html` — page sections and text
- `styles.css` — colours, layout, responsive styling and animations
- `script.js` — countdown and interactive behaviour
- `assets/photos/` — the selected original photos used on the website
- `CUSTOMIZE.md` — quick reference for future edits

## Notes

This is a static website. It does not collect or store visitor data. The countdown uses the visitor's local browser time. Photo files are included in the repository, so anyone with the public site link can view them; only publish photos you are comfortable sharing publicly.

## Personalization included

- Signed by Sameer Khalid in the letter and final gift section.
- Includes an original soft synthesized romantic instrumental loop at `assets/music/soft-romantic-instrumental.wav`.
- Music is user-initiated via the **♫ Play music** button (no autoplay).
- The existing letter draft and original individual photos are retained.
- See `CUSTOMIZE.md` for future edits and instructions for replacing the music.


### Rose bouquet image
The bouquet section now uses the realistic rose-bouquet image at `assets/rose-bouquet.jpg` instead of the illustrated flower animation. To change it later, replace that asset while keeping the same filename.


### Latest visual refinements
This version uses realistic multicolour balloons, falling metallic-gold “20” numerals on the home screen, a photographic birthday cake, Polaroid-style memory cards with handwritten captions, and a paper-like handwritten letter. See `CUSTOMIZE.md` for editable asset paths and CSS notes.
