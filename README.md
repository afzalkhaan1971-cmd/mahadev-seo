# Mahadev SEO Static Site

A fast, mobile-first informational website covering Cricket ID topics. It uses only HTML5, CSS3, and vanilla JavaScript; there is no build step, package manager, framework, database, or backend.

## Project structure

- `index.html` — homepage and topic hub
- `cricket-id/index.html` — main Cricket ID overview
- `online-cricket-id/index.html` — online access and account security
- `cricket-id-india/index.html` — India-specific research context
- `cricket-id-guide/index.html` — step-by-step educational guide
- `cricket-id-faq/index.html` — detailed visible FAQ
- `assets/css/style.css` — shared responsive design
- `assets/js/main.js` — accessible mobile menu and footer year
- `robots.txt`, `sitemap.xml`, `404.html` — crawling and error-page essentials

## Preview locally

Run a local static server from this project folder. If Python is installed:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`. A server is recommended instead of opening the HTML file directly because the site uses root-relative links.

## Deploy to Render

1. Push the approved project to a GitHub repository.
2. In Render, create a **Static Site** and connect the repository.
3. Leave the build command empty.
4. Set the publish directory to `.`.
5. Deploy, then test the homepage, internal routes, `robots.txt`, `sitemap.xml`, and the 404 response.

No deployment has been performed from this workspace.

## Current domain

The current production base domain is `https://cricketidinfo.org`. It is used in canonical links, Open Graph URLs, JSON-LD, `robots.txt`, and `sitemap.xml`.

If a custom domain is connected later, replace this exact URL globally, keep trailing slashes consistent, and confirm every URL uses HTTPS.
