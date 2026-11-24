# Full-Stack Web Developer Positioning

Approved in chat on 2026-11-24. Preserve the existing style and device spacing while positioning Patrick as a Web Developer who delivers interfaces, APIs, databases, access control, testing, and deployment.

- Hero: “I Build Full-Stack Web Applications.” Technology line: Vue, React, Next.js, Node.js, Python. Ten years refers to software development, not ten years entirely in full-stack roles.
- Hero/poster: real Ledger CRM sales overview extracted from the owner-supplied walkthrough at 00:22; details in image-sources.md.
- Project order: Ledger CRM, HR Management, SHEIN. Existing project descriptions and employer contribution boundaries stay accurate. CRM remains a synthetic-data hosted demo with its existing title link and video.
- Services: full-stack applications, frontend development, backend/API development, existing application improvements. Compact Frontend / Backend / Data And Delivery capability groups.
- Remove Shopify and automation positioning from rendered pages, service icons, workflow copy and metadata. Historical front-end job titles and dates remain intact.
- Workflow covers requirements, milestones, interface/API/database/access-control development, testing, deployment and documentation.
- FAQ covers frontend/backend delivery, existing applications, handover, and the live Ledger CRM demo.
- Public homepage retains email/GitHub; /upwork/ retains Upwork-only contact actions. Device spacing, 3:2 project media, visible-area playback and keyboard-focus contrast are preserved.

Validation executed against the static export:

- npm run build and npm run typecheck: pass.
- node scripts/verify-positioning.cjs: both entry routes, title/description/OG, removed services, project order, historical roles, contact isolation, real CRM hero, 3:2 media and no horizontal overflow at 320/390/768/1024/1440. Video autoplay on entry and pause on exit: pass.
- node scripts/verify-v2.cjs: eight routes, reload, internal links, lazy images, five widths, header clearance, FAQ, 404 and no runtime errors: pass. Updated the FAQ selector to its approved new wording.
- node scripts/verify-analytics.cjs: actual browser dispatch against a mocked production origin for visits, project views, Upwork clicks and CRM demo clicks: pass. This does not prove production traffic volume.
- node scripts/verify-worker.cjs: event allowlist, privacy/origin checks, missing binding and asset forwarding: pass.
- Desktop/mobile screenshots reviewed: shots/v2/home-desktop.png and home-mobile.png. This change does not claim a fresh design-taste gate or field performance audit.
