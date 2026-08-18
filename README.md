# Abraham Barajas — Portfolio

A bold, colorful personal resume/portfolio site built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

## Edit your content

**All text lives in one file: [`src/data.js`](src/data.js).**
Update your summary, skills, jobs, projects, and education there — no other files needed.

- **Add a project:** copy one of the objects in the `projects` array. Set `kind` to `'Work'` or `'Personal'`, and add a `link` (GitHub/live URL) to make the card clickable.
- **Add your résumé PDF:** drop the file into `public/` and set `resumeUrl` in `src/data.js` to match its name (e.g. `/Abraham-Barajas-Resume.pdf`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host — GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Structure

```
src/
  data.js     ← your content (edit this)
  App.jsx     ← page sections & layout
  index.css   ← styling / color theme
  main.jsx    ← app entry
public/
  favicon.svg
```
