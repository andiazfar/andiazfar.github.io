# Decisions

One entry per major choice. Newest last. Status is Accepted or Proposed.

## D-001 — Project lives at D:\programming\andi_azfar_website
Status: Accepted
The site and its code stay in this one folder. Rejected: developing elsewhere.

## D-002 — AGENTS.md only, no CLAUDE.md
Status: Accepted
AGENTS.md is the cross-tool standard and this harness reads it. Maintaining both
would let them drift. Rejected: keeping CLAUDE.md too.

## D-003 — No Vercel
Status: Accepted
Owner preference. Rejected: Vercel, and any PaaS as the primary host.

## D-004 — Single server, everything on it
Status: Proposed
One droplet running the app and PostgreSQL, with automatic HTTPS and off-server
backups. Cheaper and fewer accounts than splitting database to a free tier.
Rejected: Vercel, Supabase free tier, static hosting (cannot run login or a database).

## D-005 — Playwright for browser verification
Status: Accepted
Lets the agent check its own work in a real browser instead of asking the owner.

## D-006 — Domain registrar and name
Status: Open
Not chosen yet.

## D-007 — Hostname strategy
Status: Accepted
One deployable unit gets one hostname.
Independently deployed POCs live at `<name>.andi.com`. Features and content that ship
with the main site live at paths, e.g. `andi.com/tools/timezones`. Static demos live
under `andi.com/demos/...`.
Rejected: every app under a path prefix (forces each app to be prefix-aware);
every feature on its own subdomain (needless certificates and config).
Shared login across POCs is handled by scoping the session cookie to `.andi.com`.

## D-008 — Docker containers on a single droplet
Status: Proposed (server deferred until D-009 is met)
The app and its dependencies are packaged as containers and orchestrated with
docker-compose on one droplet, with Caddy as the reverse proxy and Coolify for deploys.
Up to a handful of apps run at once; the rest are parked (container stopped, zero memory).
Rejected: installing runtimes directly on the server (version collisions over time);
Kubernetes (unnecessary complexity for one machine).

## D-009 — Build and verify locally before renting a server
Status: Accepted
Nothing is bought, provisioned or deployed until the site runs on the owner's machine
and has been seen working in a browser.
Rejected: provisioning the droplet first, then developing against it.

## D-010 — Minimum complexity as the default
Status: Accepted
Start with the simplest solution that solves the actual problem. Add complexity when a
concrete need appears, or immediately when a need is certain and imminent — never for
imagined futures.
Safety is exempt: backups, HTTPS, secret handling and tests are always included,
however small the project.
Container bases: smallest image that works, but compatibility beats byte count.
Using `node:slim` rather than Alpine musl images unless a real size constraint appears.
Rejected: Alpine-by-default (saves ~40MB, risks subtle native-dependency failures);
rejected: pre-emptive abstraction, queues, caches, microservices or Kubernetes.

## D-011 — Motion (motion.dev) for animation
Status: Accepted
Use the `motion` package (Motion, formerly Framer Motion) for entrance, scroll-reveal and
hover animation. `MotionConfig reducedMotion="user"` respects the OS setting.
Kept to three patterns on purpose: heavy animation makes a personal site feel cheap.
Rejected: hand-rolled CSS keyframes (no scroll orchestration, no stagger);
rejected: 3D libraries (weight without purpose here).

## D-012 — Public site is static, hosted on GitHub Pages (supersedes D-004 for this site)
Status: Accepted (2026-11-22)
The public site (landing page, links, world time, NFC `/card` page) is exported as static
files and hosted free on GitHub Pages, deployed by GitHub Actions on push to `main`.
It holds no secrets and no database. Cost: 0.
Rejected: serving the public site from the droplet (adds cost and upkeep for no gain).

## D-013 — Login and database live in separate apps on the droplet
Status: Accepted (2026-11-22)
Login and PostgreSQL are still wanted, but they belong to projects deployed on the
DigitalOcean droplet (D-008), each on its own subdomain (D-007). The static site only
links to them. D-004 and D-008 remain valid for those apps, not for the public site.

## D-014 — No resume file in the repo; link to Google Drive
Status: Accepted (2026-11-22)
Resume and documents are Google Drive links; access is controlled on the Drive side.
Nothing personal is committed to the public repo.
Rejected: committing a resume PDF (public forever in git history).

## D-015 — Start on github.io, move to a custom domain later
Status: Accepted (2026-11-22)
Get online first on the free `<user>.github.io` address. D-006 (domain) stays open.
Risk: do not write the NFC card until the final domain is chosen, since the URL on a
handed-out card cannot be changed.

## D-016 — Site is the user site andiazfar.github.io (supersedes the project-site URL in D-015)
Status: Accepted (2026-11-22)
The site is served from the repo `andiazfar/andiazfar.github.io`, at the root of
https://andiazfar.github.io/ with no base path. It replaces the older "AAA Github Page".
The old files stay on that repo's `master` branch and in a local copy at
`D:\programming\_backup_andiazfar.github.io`; the new site lives on `main`.
Rejected: renaming the old repo (owner chose to overwrite in place).
