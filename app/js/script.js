const sliderData = [
  {
    image: "./images/avatar-anisha.png",
    tName: "Anisha Li",
    cap: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    image: "./images/avatar-ali.png",
    tName: "Ali Bravo",
    cap: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    image: "./images/avatar-shanai.png",
    tName: "Shanai Gough",
    cap: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
  {
    image: "./images/avatar-richard.png",
    tName: "Richard Watts",
    cap: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
];

const bullets = document.querySelectorAll(".bullets span");
const mobileSlider = document.querySelector(".mobile-slider");
const sliderImage = mobileSlider.querySelector("img");
const sliderName = mobileSlider.querySelector("h4");
const sliderQuote = mobileSlider.querySelector("p");

const hamMenu = document.querySelector(".ham-menu img");
const linksSect = document.querySelector(".mobile-links");
const fForm = document.querySelector("form");

const hamIcon = "./images/icon-hamburger.svg";
const closeIcon = "./images/icon-close.svg";
hamMenu.addEventListener("click", () => {
  hamMenu.src.includes(hamIcon.slice(1))
    ? (hamMenu.src = closeIcon)
    : (hamMenu.src = hamIcon);
  linksSect.classList.toggle("fade-in");
  document.body.classList.toggle("no-scroll");
});

bullets.forEach((bullet, bindex) => {
  bullet.addEventListener("click", () => {
    if (!bullet.classList.contains("active")) {
      removeActiveClass(bullets);
      bullet.classList.toggle("active");

      hideSlider(mobileSlider);

      sliderData.map((per, pindex) => {
        if (pindex === bindex) {
          setTimeout(() => {
            handleData(per);
          }, 300);
          setTimeout(() => {
            showSlider(mobileSlider);
          }, 300);
        }
      });
    }
  });
});

fForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("you gonna get spammed real bad");
};

// FUNCTIONS
function removeActiveClass(elements) {
  elements.forEach((el) => {
    el.classList.contains("active") && el.classList.remove("active");
  });
}

function handleData(person) {
  sliderImage.src = person.image;
  sliderName.innerText = person.tName;
  sliderQuote.innerText = person.cap;
}

function hideSlider(slider) {
  slider.style.opacity = 0;
}

function showSlider(slider) {
  slider.style.opacity = 1;
}
