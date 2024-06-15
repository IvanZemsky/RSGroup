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
];

const multipleElements = [document.querySelectorAll(".title")];

singleElements.forEach((element) => observer.observe(element));

multipleElements.forEach((elements) => {
   console.log(elements)
   elements.forEach((element) => observer.observe(element))
});
