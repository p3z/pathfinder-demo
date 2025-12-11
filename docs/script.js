document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('is-open');
    });

    navList.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navList.classList.remove('is-open');
      }
    });
  }

  document.addEventListener('click', (event) => {
    if (!navList || !navToggle) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!navList.contains(target) && !navToggle.contains(target)) {
      navList.classList.remove('is-open');
    }
  });

  const modeTabs = Array.from(document.querySelectorAll('.mode-tab'));
  const modePanels = Array.from(document.querySelectorAll('.mode-panel'));

  if (modeTabs.length && modePanels.length) {
    const activateMode = (mode) => {
      modeTabs.forEach((tab) => {
        const isActive = tab.dataset.mode === mode;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
      });
      modePanels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.modePanel === mode);
      });
    };

    modeTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const mode = tab.dataset.mode;
        if (mode) {
          activateMode(mode);
        }
      });
    });
  }

  const scrollButtons = document.querySelectorAll('[data-scroll-target]');
  scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetSelector = button.getAttribute('data-scroll-target');
      if (!targetSelector) return;
      const targetElement = document.querySelector(targetSelector);
      if (!targetElement) return;
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const revealTargets = document.querySelectorAll('.section, .hero, .card, .timeline-item, .faq-item, .cta-inner');
  revealTargets.forEach((element) => {
    element.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealTargets.forEach((element) => {
    observer.observe(element);
  });
});

console.log( "16.29" );