const form = document.querySelector('.contact form');
if (form) {
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting me!');
    form.reset();
  });
}