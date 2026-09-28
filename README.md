# Blueforge site

Astro static site, 19 routes.

    npm install
    npm run dev       # http://localhost:4322
    npm run build     # output in dist/

## Pages

- `/` home, with the temper strip
- `/services/` overview and `/services/<slug>/` for software-development, ai-implementation, ai-consulting, digital-marketing
- `/process/`, `/engagements/`, `/about/`, `/faq/`
- `/insights/` and `/insights/<slug>/` (markdown in `src/content/insights/`, schema in `src/content.config.ts`), feed at `/rss.xml`
- `/contact/` and `/contact/thanks/` (the form redirects here when `formEndpoint` is set)
- `/privacy/`, `/terms/` (templates, `noindex` and out of the sitemap until `legalReady` is true in `src/data/site.ts`; also remove them from `hidden` in `astro.config.mjs`)
- `404`, `sitemap-index.xml`, `robots.txt`, `og.png`

Structured data: Organization and WebSite on home, Service and FAQPage on service pages, FAQPage on `/faq/`, Article on insights, BreadcrumbList wherever breadcrumbs show.

To add an article: drop a markdown file in `src/content/insights/` with `title`, `description`, `date` and `service` (a service `id`, or `process`). It appears in the index, footer, related service page and RSS.

## Design direction

Heavy, engineered, built to last, and blue throughout. Blued-steel ground `#0f2260`, ice paper `#e9f0fd`, cobalt `#2f5cf0` and sky `#8db4ff` accents, pale ice `#dbe7ff` buttons on dark.
The one warm moment is the hero strip of real steel temper colours (pale straw at 220°C through to blue at 310°C).
Type is Archivo variable, using its width axis: expanded and heavy for display, normal width for text.
The signature element is the temper strip (`src/components/TemperStrip.astro`). The four process stages, the logo mark and the footer band use a blue ramp.
The home headline is sized to span the full measure at every width (`--t-hero`).
Design canvas with the approved direction (includes a blue-only strip variant as a tweak): https://claude.ai/artifact/4DDe9kDfgLUErTu9RnGZPN
One machining detail is reused everywhere: the chamfered corner (`--chamfer` in `src/styles/global.css`).

## Content

Service specs, the four stages, ownership and fit lists live in `src/data/site.ts`.

## Before launch

- Positioning is a proposal. Confirm each operating promise is one the team will keep: a senior engineer leads and codes on every project, two-week releases, the hardening stage is never cut, fixed-price assay, no margin on cloud, licences or model usage, no reselling or referral fees, on-site assays, NDAs and DPAs signed up front, reply within one working day, the durations per service and engagement.
- Fill every `[bracketed]` fact. They render with a dashed outline so they can't ship unnoticed. Current list: assay price, build pricing model, service agreement pricing, response times, invoicing terms and notice periods, typical project size, preferred stack, security certifications, location; founder, lead engineer and team names, roles, bios, photos; and on the legal pages the legal entity, registered address, jurisdiction, hosting, form and email providers, retention period, response period, liability wording, last-updated date.
- Legal pages are templates and need a lawyer's review.
- Article dates are placeholders from the build week. Set real publish dates, and name authors if you want bylines beyond "The Blueforge team".
- Set the real email and, if wanted, a form endpoint in `src/data/site.ts`. With no endpoint the contact form opens the visitor's email app.
- Set `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the production URL.
- Add real proof (results, client names, testimonials) in the marked proof slot on the home page. None is invented here, and there is no case-study section by choice.
