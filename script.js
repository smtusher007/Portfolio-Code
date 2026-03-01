// Chat-style portfolio interactivity
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const email = (data.get('email') || '').trim();
      const message = (data.get('message') || '').trim();

      if (!name || !email || !message) {
        status.textContent = 'Please complete all fields.';
        return;
      }

      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      const destinationEmail = 'smtusher009@gmail.com';
      window.location.href = 'mailto:' + destinationEmail + '?subject=' + subject + '&body=' + body;
      status.textContent = 'Opening your mail client...';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const target = a.getAttribute('href');
      if (!target || target.length < 2) return;
      const el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Fade messages in as they enter the viewport.
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    reveals.forEach((item) => observer.observe(item));
  } else {
    reveals.forEach((item) => item.classList.add('visible'));
  }

  // Typewriter effect for the h2 element in the about me section.
  const typewriterElement = document.querySelector('.typewriter');
  if (typewriterElement) {
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    typewriterElement.classList.add('typewriter-cursor');
    let i = 0;
    function type() {
      if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      } else {
        typewriterElement.classList.remove('typewriter-cursor');
      }
    }
    type();
  }

  // Avatar fallback behavior when image is missing or fails.
  (function avatarLoader() {
    const avatarImg = document.querySelector('.avatar');
    const avatarFallback = document.querySelector('.avatar-fallback');
    if (!avatarImg || !avatarFallback) return;

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

    if (avatarImg.complete) {
      if (avatarImg.naturalWidth && avatarImg.naturalHeight) {
        showImage();
      } else {
        showFallback();
      }
    }
  })();

  // Mouse-tracking spotlight effect
  document.addEventListener('mousemove', function(e) {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
  });
});
