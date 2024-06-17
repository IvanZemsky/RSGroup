const observerCallback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.style.animation = entry.target.dataset.animation;
         observer.unobserve(entry.target);
      }
   });
};
const options = {
   threshold: 0.25,
};

const observer = new IntersectionObserver(observerCallback, options);

const singleElements = [
   document.querySelector(".intro__heading"),
   document.querySelector(".intro__desc"),
   document.querySelector(".intro__advantage"),
   document.querySelector(".quote__heading"),
   document.querySelector(".price__text"),
];

const multipleElements = [
   document.querySelectorAll(".title"),
   document.querySelectorAll(".stats__item-value"),
   document.querySelectorAll(".stats__item-desc"),
];

singleElements.forEach((element) => observer.observe(element));

multipleElements.forEach((elements) => {
   elements.forEach((element) => observer.observe(element));
});
