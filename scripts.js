

document.addEventListener("DOMContentLoaded", function () {
  const words = ['Mobile App Developer', 'Web Developer', 'iOS App Developer'];
  const animatedText = document.getElementById('animatedText');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function animateText() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
      animatedText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    } else {
      animatedText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(animateText, 1500); // Delay before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(animateText, 500); // Delay before typing next word
    } else {
      setTimeout(animateText, 80); // Typing speed
    }
  }

  animateText();
});



document.addEventListener("DOMContentLoaded", function () {
  const item1 = document.getElementById("item1");
  const item2 = document.getElementById("item2");
  const item3 = document.getElementById("item3");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8 // Trigger when half of the item is visible
  };

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        item1.style.opacity = 1;
        item1.style.transform = "translateX(0)";
      } else {
        item1.style.opacity = 0;
        item1.style.transform = "translateX(-80px)";
      }
    });
  }, observerOptions);

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        item2.style.opacity = 1;
        item2.style.transform = "translateX(0)";
      } else {
        item2.style.opacity = 0;
        item2.style.transform = "translateX(80px)";
      }
    });
  }, observerOptions);

  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        item3.style.opacity = 1;
        item3.style.transform = "translateX(0)";
      } else {
        item3.style.opacity = 0;
        item3.style.transform = "translateX(-80px)";
      }
    });
  }, observerOptions);

  observer1.observe(item1);
  observer2.observe(item2);
  observer3.observe(item3);
});




document.addEventListener("DOMContentLoaded", function () {
  const skillitems = document.querySelectorAll(".skillitem");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Trigger when half of the item is visibl
  };

  let tempCount = 1;
  let lastDelay = 0;

  skillitems.forEach((item, index) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transitionDuration = '1.8s';
          entry.target.style.transitionTimingFunction = 'ease-out';
        } else {
          entry.target.style.opacity = 0;
        }
      });
    }, observerOptions);

    let delay = index * 0.0444;
    if (index > 0 && tempCount >= 2) {
      delay = lastDelay;
      tempCount = 1;
    } else if (index > 0) {
      tempCount++;
      lastDelay = delay;
    }

    observer.observe(item);
    item.style.transitionDelay = `${delay}s`; // Delay animation based on item index
  });
});
