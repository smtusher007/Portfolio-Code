// Lightweight interactivity for the portfolio
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const message = data.get('message') || '';

      if (!name.trim() || !email.trim() || !message.trim()) {
        status.textContent = 'Please complete all fields.';
        return;
      }

      // Use mailto to open user's mail client prefilled (no backend required).
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      const mailto = 'mailto:you@example.com' + '?subject=' + subject + '&body=' + body;
      // open mail client
      window.location.href = mailto;
      status.textContent = 'Opening your mail client...';
    });
  }

  // smooth scrolling for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = a.getAttribute('href');
      if (target.length > 1) {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Avatar image loader: show image if provided, otherwise leave SVG fallback visible
  (function avatarLoader() {
    const avatarImg = document.querySelector('.hero-card .avatar');
    const avatarFallback = document.querySelector('.hero-card .avatar-fallback');
    if (!avatarImg || !avatarFallback) return;

    // Initially hide the image until load state is known to prevent flash
    avatarImg.style.display = 'none';

    function showImage() {
      avatarFallback.style.display = 'none';
      avatarImg.style.display = 'block';
    }
    function showFallback() {
      avatarImg.style.display = 'none';
      avatarFallback.style.display = 'block';
    }

    avatarImg.addEventListener('load', showImage);
    avatarImg.addEventListener('error', showFallback);

    // If the browser already attempted to load the image, check its state
    if (avatarImg.complete) {
      if (avatarImg.naturalWidth && avatarImg.naturalHeight) {
        showImage();
      } else {
        showFallback();
      }
    }
  })();
});
