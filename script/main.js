document.addEventListener("DOMContentLoaded", function () {
  initProjectsActiveToggle();
  initFaqAccordion();
  initBurgerMenu();
  initHeroVideo();
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

function initBurgerMenu() {
  const burgers = document.querySelectorAll(".header__burger"); 
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  const animationDuration = 400;

  const openMenu = () => {
    const scrollY = window.scrollY;
    body.dataset.scrollY = scrollY;
    burgers.forEach(burger => burger.classList.add("active")); 
    menu.classList.add("active");
    overlay.classList.add("active");

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
  };

  const closeMenu = (targetId = null) => {
    burgers.forEach(burger => burger.classList.remove("active")); 
    menu.classList.remove("active");
    overlay.classList.remove("active");

    requestAnimationFrame(() => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, parseInt(body.dataset.scrollY || "0"));

      if (targetId) {
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, animationDuration);
      }
    });
  };

  burgers.forEach(burger => {
    burger.addEventListener("click", () => {
      burger.classList.contains("active") ? closeMenu() : openMenu();
    });
  });

  overlay.addEventListener("click", closeMenu);

  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      const targetId = event.target.getAttribute("href").slice(1);
      closeMenu(targetId);
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".clients-swiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 29,
    speed: 800,  
    autoplay: {
      delay: 2000,        
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const playButtons = document.querySelectorAll('.play-button');

  playButtons.forEach(button => {
      button.addEventListener('click', function() {
          const videoBlock = button.closest('.video__container');
          const video = videoBlock.querySelector('video');
          
          video.controls = true;  
          video.play(); 

          button.style.display = 'none';
      });
  });
});


function initHeroVideo() {
  const heroBackground = document.querySelector(".hero__background");

  if (!heroBackground) {
      return;
  }

  const heroImage = heroBackground.querySelector(".hero__background-img");
  const heroVideo = heroBackground.querySelector(".hero__background-video");

  if (!heroImage || !heroVideo) {
      return;
  }

  window.addEventListener("load", () => {
      heroImage.style.opacity = "0";
      heroVideo.style.opacity = "1";
  });
}

