# Portfolio Site

A single-page portfolio built with plain HTML/CSS/JS — no build step, no
frameworks, so it deploys straight to GitHub Pages.

## Files

- `index.html` — page content and structure
- `style.css` — all styling (design tokens at the top of the file)
- `script.js` — scroll-reveal animation, skill bar animation, footer year

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
   - If you want it at `https://yourusername.github.io`, name the repo
     exactly `yourusername.github.io`.
   - Otherwise any repo name works — it'll be published at
     `https://yourusername.github.io/repo-name`.

2. Push these three files (plus this README) to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages**.
   - Under "Build and deployment", set **Source** to `Deploy from a branch`.
   - Set **Branch** to `main` and folder to `/ (root)`.
   - Save.

4. GitHub will give you a live URL within a minute or two (also shown at the
   top of the Pages settings page once it's live).

## What to edit before publishing

Search the files for `EDIT ME` comments — they mark every spot that needs
your real details:

- **`index.html`**
  - About section copy (two paragraphs)
  - Skills: names + `data-level` (0–100) for each bar
  - Projects: three placeholder cards — title, description, tags, links
  - Contact: email, GitHub, LinkedIn

- Swap "Hertfordshire, UK" in the About facts if you'd rather not show location.

## Adding a project later

Copy one `<article class="project-card">...</article>` block in `index.html`,
paste it as a new sibling, and edit the content. No CSS changes needed —
the grid reflows automatically for 1, 2, 3, or more cards.

## Local preview

Just open `index.html` in a browser — no server required. Or, for a local
server (needed if you add anything that requires `fetch`):
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
