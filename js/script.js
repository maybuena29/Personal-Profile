// NavBar Active OnChange //
// var header = document.getElementById("navbar");
// var btns = header.getElementsByClassName("navbtn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

// For Toggle Navbar Icon //
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// For Active Menu On Scroll //
let menu = document.querySelectorAll("header nav a");
let section = document.querySelectorAll("section");
function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menu.forEach((sec) => sec.classList.remove("active"));
  menu[len].classList.add("active");

  // For Sticky Navbar //
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // For removing toggle icon and navbar when click navbar link (scroll) //

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// For Circle //
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// Scroll Effects //
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollScale.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollScale.forEach((el) => observer.observe(el));

// Scroll Reveal //
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".about-img, .home-content h1, .main-text h2", {
  origin: "left",
});

// Typed JS //
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Back-End Developer", "Full-Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// For Read More in About //
function readMore() {
  var moreText = document.getElementById("more-info");
  var btnText = document.getElementById("read-more");

  if (btnText.innerHTML === "Read less") {
    btnText.innerHTML = "Read more";
    //   moreText.style.display = "none";
    moreText.classList.remove("readmore-active");
    moreText.classList.add("readmore-inactive");
  } else {
    btnText.innerHTML = "Read less";
    moreText.classList.add("readmore-active");
    moreText.classList.remove("readmore-inactive");
  }
}

// FOR CHECKING FIELDS BEFORE SUBMITTING
// Get the form and submit button
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

// Function to check if any field is empty
function checkEmptyFields() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const mobileInput = document.getElementById("mobile");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  return (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    mobileInput.value.trim() === "" ||
    subjectInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  );
}

// Function to handle form submission
function handleSubmit(event) {
  if (checkEmptyFields()) {
    event.preventDefault(); // Prevent form submission
    alert("Please fill in all fields."); // Show an alert to the user
  }
}

// Add event listener to the form submit event
contactForm.addEventListener("submit", handleSubmit);
