document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("visible");
    } else {
      navbar.classList.remove("visible");
    }
  });

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const arrowLeft = document.querySelector(".arrow.left");
  const arrowRight = document.querySelector(".arrow.right");

  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  };

  arrowLeft.addEventListener("click", () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  });

  arrowRight.addEventListener("click", () => {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      showSlide(index);
    });
  });

  // ⏱️ Avance automático
  setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".product-cards");
  const leftArrow = document.querySelector(".product-arrow.left");
  const rightArrow = document.querySelector(".product-arrow.right");
  const dots = document.querySelectorAll(".product-dots .dot");

  const totalPages = dots.length;
  const cardsPerPage = 5;
  let currentPage = 0;

  const scrollToPage = (index) => {
    const cardWidth = cardContainer.querySelector(".card").offsetWidth;
    const gap = 30; // debe coincidir con el `gap` de CSS
    const scrollAmount = index * (cardWidth + gap) * cardsPerPage;

    cardContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
    currentPage = index;
  };

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      scrollToPage(i);
    });
  });

  leftArrow.addEventListener("click", () => {
    const prev = (currentPage - 1 + totalPages) % totalPages;
    scrollToPage(prev);
  });

  rightArrow.addEventListener("click", () => {
    const next = (currentPage + 1) % totalPages;
    scrollToPage(next);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".product-cards");
  const cards = document.querySelectorAll(".card");
  const dotsContainer = document.querySelector(".product-dots");
  const leftArrow = document.querySelector(".product-arrow.left");
  const rightArrow = document.querySelector(".product-arrow.right");

  let currentPage = 0;
  let cardsPerPage = 1;

  const updateCardsPerPage = () => {
    const cardWidth = cards[0].offsetWidth;
    const containerWidth = cardContainer.offsetWidth;
    cardsPerPage = Math.floor(containerWidth / cardWidth);
  };

  const createDots = () => {
    dotsContainer.innerHTML = "";
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }
    return totalPages;
  };

  const scrollToPage = (index) => {
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    const scrollAmount = index * (cardWidth + gap) * cardsPerPage;
    cardContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });

    [...dotsContainer.children].forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );

    currentPage = index;
  };

  // Listeners
  window.addEventListener("resize", () => {
    updateCardsPerPage();
    createDots();
    scrollToPage(0);
  });

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      const index = parseInt(e.target.dataset.index);
      scrollToPage(index);
    }
  });

  leftArrow.addEventListener("click", () => {
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const prev = (currentPage - 1 + totalPages) % totalPages;
    scrollToPage(prev);
  });

  rightArrow.addEventListener("click", () => {
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const next = (currentPage + 1) % totalPages;
    scrollToPage(next);
  });

  // Inicialización
  updateCardsPerPage();
  createDots();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
