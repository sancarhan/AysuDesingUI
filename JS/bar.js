 /* Add Javascript for detecting scroll and adding/removing "sticky" class */
 window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY; // Get scroll position
  
    if (scrollY > 20) { // Change threshold as needed
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
