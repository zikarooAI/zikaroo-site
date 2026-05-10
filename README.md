# Zikaroo Site

Static launch site for Zikaroo, built for GitHub Pages.

## Files

- `index.html`: launch landing page
- `privacy.html`: privacy page for waitlist and support contact
- `styles.css`: shared visual system and layout
- `site-config.js`: support email and Google Form URLs
- `app.js`: small client-side behavior for waitlist and footer year
- `CNAME`: GitHub Pages custom domain
- `.nojekyll`: bypass Jekyll processing
- `SETUP.md`: GitHub, GoDaddy, Google Forms, and Google Workspace setup steps

## Local preview

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open:

- `http://127.0.0.1:4173`

## Waitlist

The waitlist area is already wired for Google Forms. After you create the form, paste the Google Form URLs into `site-config.js` and redeploy.
