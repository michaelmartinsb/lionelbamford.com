// Advanced animations for Lionel Bamford website

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all animations
  initParallaxEffects();
  initScrollRevealAnimations();
  initSplitTextAnimations();
  initMagneticElements();
  initHotspots();
});

// Parallax scrolling effects
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll(".parallax-bg");

  if (parallaxElements.length === 0) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((element) => {
      const speed = element.classList.contains("parallax-slow")
        ? parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--parallax-speed-slow"
            )
          )
        : element.classList.contains("parallax-medium")
        ? parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--parallax-speed-medium"
            )
          )
        : parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--parallax-speed-fast"
            )
          );

      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

// Scroll reveal animations
function initScrollRevealAnimations() {
  const revealElements = document.querySelectorAll(
    ".reveal-on-scroll, .scale-on-scroll, .stagger-container"
  );

  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

// Split text animations
function initSplitTextAnimations() {
  const textElements = document.querySelectorAll(".split-text-container");

  if (textElements.length === 0) return;

  textElements.forEach((container) => {
    const text = container.innerHTML.trim();
    let newHtml = "";

    // Split by character for headings
    if (container.tagName.match(/^H[1-3]$/i)) {
      for (let i = 0; i < text.length; i++) {
        newHtml += `<span class="split-text">${
          text[i] === " " ? "&nbsp;" : text[i]
        }</span>`;
      }
    }
    // Split by word for paragraphs
    else {
      const words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        newHtml += `<span class="split-text">${words[i]}</span> `;
      }
    }

    container.innerHTML = newHtml;

    // Create observer for the container
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("split-text-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(container);
  });
}

// Magnetic elements interaction
function initMagneticElements() {
  const magneticElements = document.querySelectorAll(".magnetic-text");

  if (magneticElements.length === 0) return;

  magneticElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = (mouseX - elementCenterX) / (rect.width / 2);
      const deltaY = (mouseY - elementCenterY) / (rect.height / 2);

      // Apply subtle transform based on mouse position
      element.style.transform = `translate(${deltaX * 5}px, ${deltaY * 5}px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0)";
    });
  });
}

// Hotspots functionality
function initHotspots() {
  const hotspots = document.querySelectorAll(".hotspot");

  if (hotspots.length === 0) return;

  // Make sure hotspots stay within container bounds
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", () => {
      const hotspotContent = hotspot.querySelector(".hotspot-content");
      if (!hotspotContent) return;

      const rect = hotspotContent.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Check if the content goes off-screen to the right
      if (rect.right > viewportWidth) {
        hotspotContent.style.left = "auto";
        hotspotContent.style.right = "0";
        hotspotContent.style.transform = "translateY(0)";
      }
    });
  });
}

// Helper function for image treatments
function initImageTreatments() {
  // Add texture background for text masks if needed
  const textMasks = document.querySelectorAll(".text-mask-content");

  if (textMasks.length === 0) return;

  // You can dynamically set the background image if needed
  // textMasks.forEach(mask => {
  //   mask.style.backgroundImage = `url('${getRandomTexture()}')`;
  // });
}

// Image drag slider functionality
function initDragSlider() {
  const sliders = document.querySelectorAll(".drag-slider");

  if (sliders.length === 0) return;

  sliders.forEach((slider) => {
    const sliderContainer = slider.querySelector(".drag-slider-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    });
  });
}
