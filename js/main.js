// Minimal JS for contact form and smooth scroll

document.addEventListener('DOMContentLoaded', () => {
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const formData = new FormData(contactForm);
          const data = Object.fromEntries(formData.entries());
          if (!data.name || !data.email || !data.message) {
              alert('Please fill in all fields');
              return;
          }
          // Here you would typically send the data to a server
          alert('Thank you for your message!');
          contactForm.reset();
      });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              e.preventDefault();
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
});