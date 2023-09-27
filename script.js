// Toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle('bx-menu');
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('open');
// });

// var sidemenu = document.getElementById("sidemenu");

//   function openmenu() {
//       sidemenu.style.right = "0";
//   }
//   function closemenu() {
//       sidemenu.style.right = "-200px"
//   }

// scroll sections active links
let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  // sticky navbar
  // let header = document.querySelector('header');

  // header.classList.toggle('sticky', window.scrollY > 100);
  
  // remove toggle icon and navbar when clicking navbar link (scroll)
  // menuIcon.classList.remove('bx-x');
  // navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-texts', {
  strings: ['Frontend Developer', 'Ethical Hacker', 'CTF Player'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

var sidemenu = document.getElementById("sidemenu");
    
  function openmenu() {
    sidemenu.style.right = "0";
  }
  
  function closemenu() {
    sidemenu.style.right = "-200px"
  }

const scriptURL = 'https://script.google.com/macros/s/AKfycbzwox4QIGloJGSHoVNkiuALNbUwEGEbQgAEww4uxG2MQ1eckZeve51PTcM9228KVlYMOQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

document.addEventListener("DOMContentLoaded", function() {
  var sendButton = document.querySelector(".btn");
  sendButton.addEventListener("click", function() {
    document.getElementById("full_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile_number").value = "";
    document.getElementById("email_subject").value = "";
    document.getElementById("message").value = "";
  });
});
