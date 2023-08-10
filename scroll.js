let navlinks = document.querySelectorAll(".nav-links a");


for (const link of navlinks) {

  link.addEventListener("click", smoothScroll);

}


function smoothScroll(event) {

  event.preventDefault();

  const href = this.getAttribute("href");


  document.querySelector(href).scrollIntoView({

    behavior: "smooth"

  });

}