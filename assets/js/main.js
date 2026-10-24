/**
 * Manifold Operations - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking any link in mobile nav
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'flex';
          } else {
            const categories = card.getAttribute('data-category') || '';
            if (categories.split(' ').includes(filter)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // 3. Copy Code Button
  const copyButtons = document.querySelectorAll('.copy-code-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const codeBlock = document.getElementById(targetId);
      if (!codeBlock) return;

      const text = codeBlock.innerText || codeBlock.textContent;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.borderColor = 'var(--green)';
        btn.style.color = 'var(--green)';
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    });
  });

  // 4. Active Nav Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateNav() {
    let scrollY = window.scrollY;
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
});
