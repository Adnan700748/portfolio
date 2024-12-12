document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('menu-toggle');
  const sidenav = document.getElementById('sidenav');

  // Handle navigation clicks
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          
          // Update active states
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          
          sections.forEach(section => {
              section.classList.remove('active');
              if (section.id === targetId) {
                  section.classList.add('active');
              }
          });

          // Close mobile menu if open
          if (window.innerWidth <= 768) {
              sidenav.classList.remove('active');
          }
      });
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
      sidenav.classList.toggle('active');
  });

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      };
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      contactForm.reset();
  });

  // Animate skill bars on scroll
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const skillBars = entry.target.querySelectorAll('.skill-progress');
              skillBars.forEach(bar => {
                  const width = bar.style.width;
                  bar.style.width = '0';
                  setTimeout(() => {
                      bar.style.width = width;
                  }, 100);
              });
          }
      });
  }, { threshold: 0.5 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
      observer.observe(skillsSection);
  }
});