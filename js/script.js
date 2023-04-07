// ==================================     Toggle Icons Navbar      =================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
};

// ================================      Scroll Section Active Links      ================================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
    }
  })

  // ================================     Sticky Navbar      ==================================


  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ===========================    Remove   Toggle Icons  and Navbar When click Navbar Links (Scroll)      =========================

  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
};

  // ================================ Scroll Reveal    ==================================
  scrollReveal(
    {
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
    }
  )
  scrollReveal().reveal('home-content, heading', {origin :'top'});
  scrollReveal().reveal('home-image, .service-container, .portfolio-box .contact form', {origin :'bottom'});
  scrollReveal().reveal('home-content h1, .about-image', {origin :'left'});
  scrollReveal().reveal('home-content p, .about-content', {origin :'right'});


  // ================================Typed Javascript text ==================================
  const typed = new Typed('.multiple-text', {
    Strings:['Frontend Developer', 'Youtuber', 'Blogger'],
    typeSpeed:100,
    backSpeed:100,
    typedelay:1000,
    loop:true
  })
