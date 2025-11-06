# Portfolio — S M Tusher Mustakim

This is a small, responsive static portfolio template created for S M Tusher Mustakim. It contains a single-page HTML site with CSS and small JavaScript helpers.

Files created:

- `index.html` — main page
- `styles.css` — visual styles
- `script.js` — small interactivity (contact mailto + smooth scrolling)

How to use

1. Replace the placeholder text (bio, projects, email) with your real info in `index.html`.
2. Open `d:\UK\Web\portfolio\index.html` in your browser (double-click or right-click → Open with).

Adding your photo

- To display your photo in the hero section, add an image file named `image.jpeg` into the same folder as `index.html` (that is: `d:\UK\Web\portfolio\image.jpeg`).
- Recommended: square crop ~800×800px or larger. The layout will scale it down to fit the hero avatar box. Use progressive JPEG or optimized images for best page load speed.
- If `image.jpeg` is not present or fails to load, the page will show a decorative SVG fallback avatar instead.

Optional: host on GitHub Pages or any static host by pushing this folder to a repository.

Notes

- The contact form uses `mailto:` so it opens the user's mail client. If you want a server-backed contact form, add a small API endpoint or use a service like Formspree.
- Update the email address in `index.html` and `script.js` to your real email before sharing.
