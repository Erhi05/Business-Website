gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    duration: 1.5,
    delay: 1.5,
  }
);
gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 1,
  },
  {
    y: 0,
    duration: 1,
  }
);
window.addEventListener("load", function () {
  setTimeout(removeLoader, 1000); // Wait for page load plus one seconds.
});

function removeLoader() {
  $(".loading-page").fadeOut(200, function () {
    // FadeOut complete. Remove the loading div
    loadpage();
    $(".loadingDiv").remove(); // Makes the page more lightweight
  });
}
$(document).ready(function () {
  $(this).scrollTop(0);
});
// Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
});

// Navigation bar scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation .nav-items a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});
menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

//Project filter section
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
    let dataFilter = this.getAttribute("data-filter");
    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");
      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

// Animation
function loadpage() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-mode");
      } else {
        entry.target.classList.remove("show-mode");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden-mode");
  hiddenElements.forEach((el) => observer.observe(el));
}
