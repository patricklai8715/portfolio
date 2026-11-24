# ONES Performance Case Replacement

Owner approved the English case text on 2026-11-24. Replaces the HR Management case on the public and Upwork portfolio website entries. Upwork marketplace publishing is handled separately.

Project order: Ledger CRM → ONES Website Performance Optimization → SHEIN.

The ONES case describes a Next.js corporate website optimization project completed during employment. Personal work covers frontend lazy loading, critical-resource priority, responsive WebP images and sizing, third-party script deferral, render-blocking resource reductions, and PageSpeed checks. CDN caching configuration and deployment are attributed to the team.

Performance claims retain the approved wording: FCP and LCP each decreased approximately 2 seconds; TBT decreased more than 800ms; CLS decreased over 90%; Performance score improved more than 30 points. The supplied desktop screenshot independently shows the final Performance 95 result, not the baseline. Do not rewrite this as a 30% overall performance improvement.

Media: full screenshot converted to WebP, 1200 × 656, 33,730 bytes. Existing 3:2 media frame uses contain with background letterboxing. Title links to https://ones.com/ using a separate website field, so a corporate-site click is not recorded as a demo click.

New static routes: /projects/ones-performance/ and /upwork/projects/ones-performance/. Retired HR routes now return 404. Worker analytics allowlist includes the new route/project slug and no longer accepts the retired HR route. Legacy gallery data also replaces the HR entry.

Local verification:

- npm run build: pass; eight entry/detail routes exported.
- npm run typecheck and git diff --check: pass.
- node scripts/verify-positioning.cjs: pass, both entries; new title/link, no demo tracking on ONES link, approved attribution/results text, HR absence and retired-route 404s, project order, five responsive widths, 3:2 media, contact isolation, CRM autoplay/pause.
- node scripts/verify-v2.cjs: pass; eight routes, refresh, links, images, five widths, FAQ, header clearance, 404, no runtime exceptions.
- node scripts/verify-worker.cjs: pass; new ONES project-view data accepted, retired HR path rejected, existing privacy/origin/binding/asset checks retained.
- node scripts/verify-analytics.cjs: pass; visit, case view, Upwork click, CRM demo click browser dispatch against mocked production origin.
- Screenshot review: shots/v2/ones-project-desktop.png and ones-project-mobile.png; refreshed default-open full home screenshots in shots/v2/home-desktop.png and home-mobile.png.
