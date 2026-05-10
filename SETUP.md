# Zikaroo Launch Setup

This repository is ready for a GitHub Pages launch. The remaining steps happen in GitHub, GoDaddy, Google Forms, and Google Workspace.

## 1. Publish with GitHub Pages

1. Open the repository settings on GitHub:
   `zikarooAI/zikaroo-site -> Settings -> Pages`
2. Under `Build and deployment`, choose:
   `Source: Deploy from a branch`
3. Choose:
   `Branch: main`
   `Folder: / (root)`
4. Under `Custom domain`, enter:
   `www.zikaroo.com`
5. Wait for the first Pages deployment to finish.
6. Turn on `Enforce HTTPS` only after the domain shows as configured successfully.

## 2. Verify the domain in GitHub

1. In the `zikarooAI` organization settings, open:
   `Settings -> Pages`
2. Add the domain `zikaroo.com`.
3. GitHub will show a TXT record for domain verification.
4. Copy that TXT record into GoDaddy DNS exactly as shown.
5. Keep that TXT record in DNS permanently so the domain stays protected.

## 3. Update GoDaddy DNS

Do not remove any Google Workspace mail records such as `MX`, `SPF`, `DKIM`, `DMARC`, or Google verification records.

Only change the website-routing records:

### Apex/root domain

Add or update these four `A` records for `@`:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### WWW subdomain

Add or update the `CNAME` record:

- `Name: www`
- `Value: zikarooai.github.io`

### Remove conflicts

After the GitHub Pages records are added, remove any conflicting web records for `@` or `www`, including:

- GoDaddy Website Builder records
- Forwarding rules for the domain
- Old `A` or `CNAME` records for the website

DNS propagation usually starts quickly but can take up to 24 hours, and sometimes up to 48 hours globally.

## 4. Unpublish the current GoDaddy site

If `zikaroo.com` is currently attached to a GoDaddy Websites + Marketing site:

1. Open your GoDaddy product page.
2. Under `Websites + Marketing`, choose `Manage`.
3. Open the website editor.
4. Go to `Settings`.
5. Choose `Unpublish`.

This stops the old builder site from remaining the active website during cutover.

## 5. Configure the waitlist form

The landing page is already prepared for a Google Form embed.

### Create the form

1. Go to [Google Forms](https://forms.google.com).
2. Create a blank form named `Zikaroo Waitlist`.
3. Add these fields:
   - `Email` as a required question
   - `First name` as an optional question
4. In form settings:
   - keep responses open
   - do not require sign-in
   - do not limit to one response
5. Link responses to a Google Sheet.

### Get the URLs

1. Publish the form.
2. Copy the public form URL.
3. In the form's `Send` dialog, copy the embed URL from the `<>` embed option.

### Add the URLs to the site

Edit [site-config.js](/Users/nikhil_kanwal/Desktop/zikaroo/zikaroo-site/site-config.js):

```js
window.ZIKAROO_CONFIG = {
  supportEmail: "support@zikaroo.com",
  waitlist: {
    embedUrl: "PASTE_GOOGLE_FORM_EMBED_URL_HERE",
    publicFormUrl: "PASTE_GOOGLE_FORM_PUBLIC_URL_HERE",
    sourceLabel: "github-pages-launch"
  }
};
```

Commit and push after updating those values. The waitlist section will automatically switch from placeholder mode to the live embedded form.

## 6. Configure support email alias

In Google Workspace Admin:

1. Open `Directory -> Users`
2. Open your main mailbox user
3. Add the alias:
   `support@zikaroo.com`

Google Workspace aliases do not require another paid seat.

Then in Gmail:

1. Open `Settings -> See all settings -> Accounts and Import`
2. Under `Send mail as`, add `support@zikaroo.com`
3. Keep `Treat as an alias` checked
4. Verify the address

## 7. Final checks

After DNS has propagated:

1. Confirm `https://www.zikaroo.com` loads the new site.
2. Confirm `https://zikaroo.com` redirects to `https://www.zikaroo.com`.
3. Turn on `Enforce HTTPS` in GitHub Pages if it is available.
4. Submit a test waitlist entry and confirm it reaches the linked Google Sheet.
5. Send a test email to `support@zikaroo.com` and confirm it lands in your main inbox.
