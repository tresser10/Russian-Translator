# Переводчик – English ⇄ Russian voice translator

Static front end (`index.html`) + one serverless function (`api/translate.js`)
that calls the Google Gemini API. Your API key stays on the server.

## Run locally
1. Install Node.js 20.6+ and keep the folder structure (`api/translate.js` must be inside `api`).
2. Copy `.env.example` to `.env` and paste your key from https://aistudio.google.com/apikey
   (optional second line: `GEMINI_MODEL=gemini-3.5-flash-lite`).
3. Run `npm start`, then open http://localhost:3000 in Chrome, Edge or Safari.

## Deploy on Vercel
1. Push to GitHub (`.gitignore` already excludes `.env` – never commit your key).
2. Import the repo at https://vercel.com/new
3. Add environment variable `GEMINI_API_KEY` (and optionally `GEMINI_MODEL`), then deploy.

## Notes
- Default model is `gemini-3.6-flash`. If it errors, try `gemini-3.5-flash-lite` or `gemini-3.7-flash`.
- Russian speech recognition and playback depend on your device having a Russian voice; Chrome and Android work well, on Windows you may need to add the Russian language pack.
- Anyone with your URL can use your API quota; add rate limiting before sharing widely.
