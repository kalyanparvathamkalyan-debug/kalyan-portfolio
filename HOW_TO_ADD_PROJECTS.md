# Kalyan Portfolio — How to add projects, images and videos

## 1. Add a project
Open `index.html` and duplicate any `<article class="project">...</article>` inside `#projectGrid`.

Change:
- `data-cat="data"` to `data`, `ml`, or `web`
- `data-title="..."` to your project name
- `data-desc="..."` to your longer description
- `data-tech="..."` to your technologies
- The visible title/text in the card.

## 2. Add project screenshots
Create `assets/projects/` and put images there, for example:
`assets/projects/mutual-fund-dashboard.png`

Then replace the project's `.project-media` block with:
`<div class="project-media"><img src="assets/projects/mutual-fund-dashboard.png" alt="Mutual Fund dashboard"></div>`

You can add more than one screenshot inside a project detail section later.

## 3. Add a project video
For a local MP4:
`<video controls width="100%" poster="assets/projects/thumb.jpg"><source src="assets/projects/demo.mp4" type="video/mp4"></video>`

For YouTube, use an iframe embed from the video's Share → Embed option.

## 4. Add GitHub / live-demo buttons
Inside a project's `.project-body`, add:
`<a class="btn ghost" href="YOUR_GITHUB_URL" target="_blank">GitHub ↗</a>`
and/or
`<a class="btn primary" href="YOUR_DEMO_URL" target="_blank">Live demo ↗</a>`

## 5. Publish
This is a static HTML/CSS/JS site, so it can be hosted on any static hosting service. Upload the entire folder, not only index.html.

The site is already responsive for phone and desktop, has project filtering, dark/light mode, a project-details modal, resume download, LinkedIn and email buttons.
