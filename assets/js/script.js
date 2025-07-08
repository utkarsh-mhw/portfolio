// Scrollspy-style active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main-navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Offset for fixed navbar
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

  // document.addEventListener("DOMContentLoaded", function () {
  //   const copyIcon = document.querySelector(".copy-icon");
  //   const email = copyIcon.getAttribute("data-email");

  //   copyIcon.addEventListener("click", () => {
  //     navigator.clipboard.writeText(email).then(() => {
  //       // Create a temporary "copied" message
  //       const msg = document.createElement("span");
  //       msg.innerText = "Copied!";
  //       msg.style.marginLeft = "10px";
  //       msg.style.color = "#007bff";
  //       msg.style.fontWeight = "500";

  //       copyIcon.appendChild(msg);

  //       // Remove message after 2 seconds
  //       setTimeout(() => {
  //         msg.remove();
  //       }, 2000);
  //     });
  //   });
  // });

  document.addEventListener("DOMContentLoaded", function () {
    const copyIcon = document.querySelector(".copy-icon");
    const email = copyIcon.getAttribute("data-email");
    const feedback = document.querySelector(".copy-feedback");

    copyIcon.addEventListener("click", () => {
        navigator.clipboard.writeText(email).then(() => {
            feedback.style.display = "inline-flex";
            setTimeout(() => {
                feedback.style.display = "none";
            }, 2000);
        });
    });
    const toggleBtn = document.getElementById('navbarToggle');
    const navLinks = document.getElementById('navbarLinks');

    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
}


});


  // Popup open/close
  const openBtn = document.getElementById('openSocialPopup');
  const closeBtn = document.getElementById('closeSocialPopup');
  const popup = document.getElementById('socialPopup');

  openBtn.addEventListener('click', () => popup.style.display = 'flex');
  closeBtn.addEventListener('click', () => popup.style.display = 'none');
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });

  // Copy logic
  const copyBtns = document.querySelectorAll('.copy-social');

copyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(text);

    const icon = btn.querySelector('i');

    // Change to double tick icon
    icon.classList.remove('fa-copy');
    icon.classList.add('fa-check', 'fas');
    icon.classList.remove('far'); // remove outline style
    btn.classList.add('success');

    // Revert after 1.5 seconds
    setTimeout(() => {
      icon.classList.remove('fa-check', 'fas');
      icon.classList.add('fa-copy', 'far');
      btn.classList.remove('success');
    }, 1500);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popup.style.display = 'none';
  }
});


