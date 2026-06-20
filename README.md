# Uyen Ni Love Game

A static GitHub Pages app built around `index.html`. The page uses the generated `support.js` runtime to render the custom `<x-dc>` component.

## Structure

- `index.html` - GitHub Pages entry point and main app template/state machine.
- `support.js` - generated runtime. Do not edit by hand.
- `assets/js/game-config.js` - editable game content: stages, questions, prompts, sprites, audio notes, and visual palettes.
- `assets/css/app.css` - shared page styles and animation keyframes.
- `assets/reference/` - screenshots or design/reference files that are not loaded by the app.

## Local Preview

Open `index.html` directly, or serve the folder with any static server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Adding Content

Most new quiz content should go in `assets/js/game-config.js`:

- Add a new stage object to `stages`.
- Add questions to a stage with `q`, `opts`, and `ans`.
- Keep `ans` exactly equal to one of the strings in `opts`.

Only edit `index.html` when changing the app flow, markup, or UI behavior.
