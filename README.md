# Snehal Sinha — résumé website

Professional experience, quantitative research, education, and speedcubing.

## Update the website

- Edit website content in `app/page.tsx`.
- Edit the visual style in `app/globals.css`.
- Replace `public/Snehal-Sinha-Resume.pdf` to update the downloadable résumé.
- Replace `public/snehal-sinha.jpg` to update the portrait.

## GitHub Pages

The repository is intended for `ssinhaquant/ssinhaquant.github.io`.
In **Settings → Pages**, set the publishing source to **GitHub Actions**.
Every push to `main` runs the workflow in `.github/workflows/pages.yml`
and publishes the site at https://ssinhaquant.github.io/.

To create the static website locally:

```sh
npm ci
npm run build:github
```

The complete static website is generated in `dist/client`. Only that
directory is uploaded by the GitHub Pages workflow.

The existing Sites build remains available with `npm run build`.
