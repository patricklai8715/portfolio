const { chromium, expect } = require('@playwright/test');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    for (const route of ['/', '/upwork/']) {
      await page.goto('http://127.0.0.1:3100' + route);
      assert((await page.title()).includes('Full-Stack Web Developer'));
      assert.equal(await page.locator('h1').innerText(), 'I Build Full-Stack Web Applications.');
      const text = await page.locator('body').innerText();
      assert(!/Shopify|automations?|n8n|Zapier|Make\b|WordPress/i.test(text));
      assert(!(await page.locator('meta[name="description"]').getAttribute('content')).match(/Shopify|automation/i));
      assert(!(await page.locator('meta[property="og:description"]').getAttribute('content')).match(/Shopify|automation/i));
      assert.deepEqual(await page.locator('.v2-project>h3').allTextContents(), ['Ledger CRM · Full-Stack Sales Workspace', 'Human Resources Management System', 'SHEIN Global E-commerce']);
      assert.equal(await page.locator('.v2-services>.card').count(), 4);
      assert.equal(await page.locator('.capability-stack>div').count(), 3);
      assert.equal(await page.getByText('Front-End Developer', { exact: true }).count(), 3);
      assert.equal(await page.locator('.hero-proof img').getAttribute('src'), '/images/ledger-crm-preview.webp');
      await page.getByText('Can I Try A Live Demo?', { exact: true }).click();
      assert((await page.locator('.v2-faq').innerText()).includes('synthetic sample data'));
      const crmLink = page.locator('.v2-project>h3 a');
      assert.equal(await crmLink.getAttribute('href'), 'https://upwork-crm-v2-acceptance-20261120.patricklai.workers.dev/');
      assert.equal(await crmLink.getAttribute('data-track'), 'demo_click');
      assert.equal(await page.locator('a[href^="mailto:"],a[href*="github.com"]').count(), route === '/' ? 2 : 0);
      for (const width of [320, 390, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        const rows = await page.locator('.project-preview').evaluateAll(es => es.map(e => e.clientWidth / e.clientHeight));
        assert(rows.every(r => Math.abs(r - 1.5) < .02));
      }
      console.log('PASS positioning, project order, contacts, metadata and media: ' + route);
    }
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.goto('http://127.0.0.1:3100/');
    const video = page.locator('.project-preview video');
    await video.scrollIntoViewIfNeeded();
    await expect.poll(() => video.evaluate(e => !e.paused)).toBe(true);
    await page.locator('header').scrollIntoViewIfNeeded();
    await expect.poll(() => video.evaluate(e => e.paused)).toBe(true);
    console.log('PASS video autoplay on entry and pause on exit');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exit(1); });
