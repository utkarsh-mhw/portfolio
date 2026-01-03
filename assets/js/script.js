
  // Contact Modal
  const contactBtn = document.getElementById('contactBtn');
  const contactModal = document.getElementById('contactModal');
  const closeModal = document.getElementById('closeModal');

  contactBtn.addEventListener('click', () => {
      contactModal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
      contactModal.classList.remove('active');
  });

  contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
          contactModal.classList.remove('active');
      }
  });

  // Toggle Projects
  const toggleBtn = document.getElementById('toggleProjectsBtn');
  const moreProjects = document.getElementById('moreProjects');

  toggleBtn.addEventListener('click', () => {
      if (moreProjects.classList.contains('active')) {
          moreProjects.classList.remove('active');
          toggleBtn.textContent = 'View All Projects';
      } else {
          moreProjects.classList.add('active');
          toggleBtn.textContent = 'Show Less';
      }
  });

  // Active nav on scroll (optional - keeping header minimal)
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
      // Can add scroll-based effects here if needed
  });
