# GRAVL preview and QA

The deployable static site is in `GRAVL WEBSITE MAIN FILE/`. Live entry points
are `index.html` and `about.html`. Historical backup pages are retained, not
included in the supported page/test matrix. There is no compilation or TypeScript
step. Checkout, search/account and subscription integrations are preview-only.

## Local commands

Requires Node.js 20.19+ (verified with Node 26) and npm.

```sh
npm ci
npx playwright install chromium firefox webkit
npm run dev
# http://127.0.0.1:4173/about.html
npm run lint
npm test
npm run audit:metrics
node qa/responsive.cjs
node qa/accessibility.cjs
```

The Chromium test project uses installed Google Chrome (`channel: 'chrome'`).
For machines without Chrome, remove that channel to use Playwright Chromium.
Firefox and WebKit use isolated Playwright installations. WebKit is not native
Safari certification. QA dependencies are development-only and never shipped
with the static pages.

`npm run lint` checks JavaScript syntax, duplicate live HTML IDs and missing
literal local asset references. It is not a TypeScript or full semantic CSS lint.
Tests use a local server, retain traces/screenshots on failure, and write a JSON
summary to `reports/test-results.json`. Avoid publishing `node_modules`, `qa`,
`reports`, `tmp`, historical backups or editor metadata as the storefront.

See `reports/AUDIT.md` for phase results, metrics, known issues and decisions.

## Working across devices

Clone the repository on each device, run `npm ci`, then `npm run dev` to view it
locally. Run `git pull --ff-only` before starting work. After editing, review
`git diff`, commit your changes, and push them before switching devices.
Do not copy `node_modules` or browser installations between computers.
Git stores the source; a publicly accessible website requires separate hosting.
