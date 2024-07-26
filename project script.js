let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

// Toggle navbar visibility
document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

// Toggle search form visibility
document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

// Toggle login form visibility
document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

// Show contact info
document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
}

// Hide contact info
document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
}

// Hide all forms on scroll
window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

// Initialize Swiper instances
const homeSlider = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

const reviewsSlider = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

const blogsSlider = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

const logoSlider = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

document.addEventListener("DOMContentLoaded", function () {
   const allProjectsBtn = document.getElementById("all-projects-btn");
   const finishedProjectsBtn = document.getElementById("finished-projects-btn");
   const ongoingProjectsBtn = document.getElementById("ongoing-projects-btn");
   const projectsGrid = document.getElementById("projects-grid");
   const projectItems = Array.from(document.querySelectorAll(".project"));

   function filterProjects(filterClass) {
       projectItems.forEach(item => {
           item.classList.remove("fade-in");
           if (filterClass === "all" || item.classList.contains(filterClass)) {
               item.style.display = "block";
               setTimeout(() => item.classList.add("fade-in"), 10); // for animation
           } else {
               item.style.display = "none";
           }
       });
   }

   allProjectsBtn.addEventListener("click", () => filterProjects("all"));
   finishedProjectsBtn.addEventListener("click", () => filterProjects("finished-project"));
   ongoingProjectsBtn.addEventListener("click", () => filterProjects("ongoing-project"));

   filterProjects("all"); // Display all projects on page load
});
