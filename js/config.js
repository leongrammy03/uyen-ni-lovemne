// ── ntfy.sh push notification topic (must match what you subscribed to in the app) ──
const NTFY_TOPIC = "uyen-said-yes-change-me";

// ── Google Calendar ──
// Setup steps:
//  1. Go to https://console.cloud.google.com → New Project
//  2. APIs & Services → Enable "Google Calendar API"
//  3. Credentials → Create OAuth 2.0 Client ID (Web Application)
//     - Authorized JS origins: https://leongrammy03.github.io
//  4. Credentials → Create API Key
//  5. Fill in the values below
const GOOGLE_CLIENT_ID = "YOUR_CLIENT_ID.apps.googleusercontent.com";
const GOOGLE_API_KEY   = "YOUR_API_KEY";
const LEON_EMAIL       = "leongramminger@gmail.com";
