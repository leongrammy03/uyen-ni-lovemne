let gapiReady    = false;
let tokenClient  = null;
let selectedActivity = null;
let pendingEvent = null;

function initCalendar() {
  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.startsWith("YOUR_")) return;

  // Load gapi client + Calendar discovery doc
  gapi.load("client", async () => {
    await gapi.client.init({
      apiKey: GOOGLE_API_KEY,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    });
    gapiReady = true;
  });

  // OAuth token client (implicit grant — no backend needed)
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: "https://www.googleapis.com/auth/calendar.events",
    callback: async (resp) => {
      if (resp.error) { setStatus("couldn't connect to Google 😢 " + resp.error); return; }
      await createCalendarEvent();
    }
  });
}

// Activity chip selection
document.querySelectorAll(".activity-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".activity-chip").forEach(c => c.classList.remove("selected"));
    chip.classList.add("selected");
    selectedActivity = chip.dataset.activity;
  });
});

// Open / close modal
document.getElementById("cal-trigger").addEventListener("click", () => {
  document.getElementById("cal-modal").style.display = "flex";
  document.getElementById("cal-status").textContent  = "";
});
document.getElementById("cal-close").addEventListener("click", closeModal);

function closeModal() {
  document.getElementById("cal-modal").style.display = "none";
}

// Submit
document.getElementById("cal-submit").addEventListener("click", () => {
  const date = document.getElementById("cal-date").value;
  const time = document.getElementById("cal-time").value;

  if (!date)             return setStatus("please pick a date 🥺");
  if (!time)             return setStatus("please pick a time 🥺");
  if (!selectedActivity) return setStatus("what are we doing? pick an activity! 🥺");

  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.startsWith("YOUR_")) {
    setStatus("⚙️ Google Calendar isn't set up yet — fill in js/config.js");
    return;
  }

  pendingEvent = { date, time, note: document.getElementById("cal-note").value.trim() };
  setStatus("connecting to Google... 💕");
  document.getElementById("cal-submit").disabled = true;

  // Request token (will show consent screen on first use)
  const hasToken = gapi.client.getToken();
  tokenClient.requestAccessToken({ prompt: hasToken ? "" : "consent" });
});

async function createCalendarEvent() {
  setStatus("adding to our calendars... 🗓️");
  const { date, time, note } = pendingEvent;
  const tz      = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const startDT = new Date(`${date}T${time}`);
  const endDT   = new Date(startDT.getTime() + 2 * 60 * 60 * 1000); // 2 h default

  const event = {
    summary:     `${selectedActivity} date 💕`,
    description: (note ? note + "\n\n" : "") + "♥ I love you",
    start: { dateTime: startDT.toISOString(), timeZone: tz },
    end:   { dateTime: endDT.toISOString(),   timeZone: tz },
    attendees: [{ email: LEON_EMAIL }],
    reminders: {
      useDefault: false,
      overrides: [{ method: "email", minutes: 60 }, { method: "popup", minutes: 30 }]
    }
  };

  try {
    await gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
      sendUpdates: "all"
    });
    showSuccess(selectedActivity, date);
  } catch (e) {
    setStatus("something went wrong 😢 please try again");
    console.error("Calendar error:", e);
  } finally {
    document.getElementById("cal-submit").disabled = false;
  }
}

function showSuccess(activity, date) {
  const formatted = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric"
  });
  const banner = document.getElementById("cal-success-banner");
  banner.querySelector(".cal-success-title").textContent = `our ${activity.toLowerCase()} date is set! 💕`;
  banner.querySelector(".cal-success-date").textContent  = formatted;
  banner.classList.add("show");
  setStatus("");

  // ntfy the boyfriend 💌
  fetch("https://ntfy.sh/" + NTFY_TOPIC, {
    method: "POST",
    headers: { "Title": "Date planned!", "Tags": "calendar,heart", "Priority": "default" },
    body: `She planned a ${activity} date with you on ${formatted}! 💕`
  }).catch(() => {});
}

function setStatus(msg) {
  document.getElementById("cal-status").textContent = msg;
}

// Init once gapi + GIS scripts are loaded
window.addEventListener("load", () => {
  if (typeof gapi !== "undefined" && typeof google !== "undefined") {
    initCalendar();
  }
});
