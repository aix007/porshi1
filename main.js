// ============ Mobile nav toggle ============
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks){
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open-mobile');
    if (isOpen){
      navLinks.style.display = 'flex';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '72px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--off-white)';
      navLinks.style.flexDirection = 'column';
      navLinks.style.padding = '24px 32px';
      navLinks.style.borderBottom = '1px solid rgba(27,23,20,.08)';
      navLinks.style.gap = '20px';
    } else {
      navLinks.removeAttribute('style');
    }
  });
}

// ============ Shop page: category filtering ============
const filterChips = document.querySelectorAll('.filter-chip');
const productCards = document.querySelectorAll('[data-category]');
if (filterChips.length){
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const target = chip.dataset.filter;
      productCards.forEach(card => {
        const match = target === 'all' || card.dataset.category === target;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

// ============ FAQ accordion ============
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    q.closest('.faq-item').classList.toggle('open');
  });
});

// ============ Contact form (front-end only) ============
const contactForm = document.querySelector('.contact-form form');
if (contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message sent ✓';
    contactForm.reset();
    setTimeout(() => { btn.textContent = original; }, 2600);
  });
}
