# Technical Documentation
This document explains **how the site is built**, and **what the code structure looks like** so the reviewer can understand and extend the project quickly


# How is it built
Technical choices:
- **HTML** for semantic structure of sections
- **CSS** (Flexbox + Grid + CSS variables) for layout, spacing, and theming
- **JavaScript** for small interactions - the greeting/**time-based**


**Structure:**
```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```
## File roles
- **README.md** — Project overview and local setup instructions
- **index.html** — All page sections and their semantic structure. includes links to `styles.css` and `script.js`
- **css/styles.css** — Theme variables, base styles (colors & spacing), section layouts, and grids/flex rules
- **js/script.js** — Minimal interaction logic (time-based greeting)
- **assets/** — images used in the website
- **docs/** — Written documentation: AI usage report and technical document
- **.gitignore** — Ignore node_modules, build artifacts, and IDE config files (if any) to keep the repo clean
> **Note:** No build tooling is used (no bundlers, frameworks, or package installs) to keep the project simple and easy to run locally by opening `index.html` directly in a browser