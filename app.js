const carouselDisplay = document.getElementById("carousel-card-container");
let currSlide = 0;
const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");

const people = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=3276&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Susan",
    lastName: "Ortega",
    occupation: "Web Developer",
    statement:
      "I like to eat tacos and play monster hunter with my friends on the weekends.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=3988&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "James",
    lastName: "Franco",
    occupation: "Data Analyst",
    statement: "Hi i like to eat cheken.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=2550&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Chris",
    lastName: "Wilde",
    occupation: "Billing Specialist",
    statement:
      "I am from Washington, the mexican food here is better than Mexico.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=3569&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Joan",
    lastName: "Kehlani",
    occupation: "Singer",
    statement: "Holaaaaaa........",
  },
];

people.forEach((people) => {
  const peopleCard = document.createElement("div");
  peopleCard.classList.add(`carousel-card`);
  peopleCard.insertAdjacentHTML(
    "beforeend",
    `<img class="circle-image" src ="${people.image}"/>
  <p>${people.firstName + " " + people.lastName}</p>
  <p>${people.occupation}</p>
  <p>
    ${people.statement}
  </p>`
  );

  carouselDisplay.appendChild(peopleCard);
});

const slides = document.querySelectorAll(".carousel-card");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

leftBtn.addEventListener("click", function () {
  if (currSlide === 0) {
    currSlide = 3;
  } else {
    currSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX( ${100 * (index - currSlide)}%)`;
  });
});

rightBtn.addEventListener("click", function () {
  if (currSlide === 3) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
  });
});
