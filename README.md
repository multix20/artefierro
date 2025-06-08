# Artefierro Landing Page

This project contains the marketing site for **Artefierro**, built with React, Vite and Tailwind CSS.  The repository provides everything required to run the site locally or deploy it to Netlify.

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   The site will be available at the URL printed by Vite (usually <http://localhost:5173/>).

3. **Create a production build**

   ```bash
   npm run build
   ```

   The compiled output is generated in the `dist` directory.

## Netlify deployment

Deployment is configured via `netlify.toml`. Netlify builds the site using `npm run build` and publishes the `dist` directory. A redirect rule sends all paths to `index.html` so the React router works correctly.

