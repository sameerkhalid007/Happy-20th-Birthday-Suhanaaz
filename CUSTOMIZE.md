# Quick customization guide

| What to change | File | Search for |
|---|---|---|
| Birthday date/countdown | `script.js` | `new Date(2026, 10, 2, 0, 0, 0)` |
| Visible birthday date | `index.html` | `02 NOVEMBER 2026` |
| Name and headings | `index.html` | `Suhanaaz` |
| Love letter | `index.html` | `Dear Suhanaaz` |
| Balloon messages | `script.js` | `balloonLines` |
| Photo gallery | `index.html` | `gallery-grid` |
| Hero photo | `index.html` | `hero-photo` |
| Theme colours | `styles.css` | `:root` |
| Animation speed and effects | `styles.css` | `@keyframes` |

## Safe editing workflow

1. Download a backup of the current project before making larger changes.
2. Make one change at a time and preview `index.html` locally.
3. Keep photo paths relative, for example `assets/photos/photo-18.jpg`.
4. After testing, upload changed files to the GitHub repository and commit them.
5. Refresh the GitHub Pages link. If an old version appears, hard-refresh the browser.

## Adding a gallery photo

Copy this pattern inside the existing `<div class="photo-grid gallery-grid">`:

```html
<figure class="photo-card">
  <button class="photo-open"
          data-photo="assets/photos/photo-18.jpg"
          data-caption="A memory to treasure"
          aria-label="View photo: A memory to treasure">
    <img src="assets/photos/photo-18.jpg"
         alt="Describe the photo"
         loading="lazy">
  </button>
  <figcaption>A memory to treasure</figcaption>
</figure>
```

The same path should be used for `data-photo` and `img src`. Use an accurate `alt` description for accessibility.

## Personalization applied for Sameer Khalid

- The current heartfelt birthday letter has been kept as requested.
- The letter and final gift section are signed by **Sameer Khalid**.
- A soft, original synthesized romantic instrumental loop is included at `assets/music/soft-romantic-instrumental.wav`. It is an original generated tone arrangement, not a commercial song.
- Music does not autoplay. Suhanaaz can tap **♫ Play music** in the top navigation to start or pause it; this respects browser autoplay rules.
- To replace the music, put your own royalty-free or licensed audio file in `assets/music/`, then update the `<source src="...">` in `index.html` and its audio MIME type if needed.

## Publishing updated changes

If the project was already uploaded to GitHub, upload the changed files and the new `assets/music/soft-romantic-instrumental.wav` file to the same repository paths, then commit the changes. GitHub Pages will redeploy automatically. If you are publishing for the first time, upload all contents of this project folder to the repository root.


Birthday details currently set: 20th birthday on 2 November 2026; date of birth 2 November 2006. The welcome screen highlights that this is the first birthday Sameer gets to celebrate with Suhanaaz since they met. Update the milestone copy in `index.html` if you want to personalize it further.


## Change the rose bouquet
The roses section uses `assets/rose-bouquet.jpg`. Replace that file with another bouquet image using the same filename to update it without changing the HTML. The original personal photos remain separate in `assets/photos/` and are not altered by this change.


## Visual updates in this version
- `assets/realistic-balloons.jpg` is the photographic four-balloon background. The transparent click zones preserve the pop interaction. Replace this image to change the balloon scene; keep the same wide aspect ratio for best alignment.
- `assets/birthday-cake.jpg` is the realistic birthday cake photo used on the wish screen. Replace it with another square image to customize the cake.
- Gold “20” numerals gently fall over the home screen using CSS; change `.golden-twenties` in `styles.css` to adjust the effect.
- Memory photos are displayed in Polaroid-style cards with handwritten captions. Edit each `<figcaption>` in `index.html` to change the caption.
- The letter uses the Caveat handwritten font with a warm paper texture. The font loads from Google Fonts when online; fallback fonts are used otherwise.
