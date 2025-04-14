document.addEventListener("DOMContentLoaded", function () {
  initProjectsActiveToggle();
  initFaqAccordion();
});

function initProjectsActiveToggle() {
  const items = document.querySelectorAll(".projects__item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__item-question");
    const answer = item.querySelector(".faq__item-answer");

    answer.style.maxHeight = "0";
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.3s ease";

    const newQuestion = question.cloneNode(true);
    question.parentNode.replaceChild(newQuestion, question);

    newQuestion.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq__item-answer").style.maxHeight = "0";
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        answer.style.maxHeight = "0";
      }
    });
  });
}



document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.clients-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 29,
    autoplay: 
    {
      delay: 2000,
    },
  });
});