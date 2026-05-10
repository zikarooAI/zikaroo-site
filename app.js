(function () {
  var config = window.ZIKAROO_CONFIG || {};
  var supportEmail = config.supportEmail || "support@zikaroo.com";
  var yearNodes = document.querySelectorAll("[data-current-year]");
  var supportLinks = document.querySelectorAll(".support-email");
  var waitlistRoot = document.querySelector("[data-waitlist-embed]");

  yearNodes.forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  supportLinks.forEach(function (link) {
    link.textContent = supportEmail;
    link.setAttribute("href", "mailto:" + supportEmail);
  });

  if (!waitlistRoot) {
    return;
  }

  var waitlist = config.waitlist || {};

  if (waitlist.embedUrl) {
    waitlistRoot.innerHTML = [
      '<div class="waitlist-live">',
      '  <iframe',
      '    title="Zikaroo waitlist form"',
      '    loading="lazy"',
      '    referrerpolicy="strict-origin-when-cross-origin"',
      '    src="' + escapeHtml(waitlist.embedUrl) + '">',
      "  </iframe>",
      "</div>"
    ].join("");
    return;
  }

  var publicFormLink = waitlist.publicFormUrl
    ? '<a class="button button-primary" href="' + escapeHtml(waitlist.publicFormUrl) + '" target="_blank" rel="noreferrer">Open the waitlist form</a>'
    : "";

  waitlistRoot.innerHTML = [
    '<div class="waitlist-empty">',
    '  <div class="waitlist-empty-card">',
    "    <h3>Waitlist opening shortly</h3>",
    "    <p>The site is ready for a live Google Form embed. Add your Google Form URLs in <code>site-config.js</code> and this section will switch from placeholder to live waitlist automatically.</p>",
    '    <div class="waitlist-actions">',
    publicFormLink,
    '      <a class="button button-secondary" href="mailto:' + escapeHtml(supportEmail) + '?subject=Zikaroo%20Waitlist">Email to join manually</a>',
    "    </div>",
    "  </div>",
    "</div>"
  ].join("");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
}());
