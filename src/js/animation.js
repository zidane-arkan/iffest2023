function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var animatedElements = document.querySelectorAll(".animated-element");

function animateElements() {
  for (var i = 0; i < animatedElements.length; i++) {
    var element = animatedElements[i];
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    }
  }
}

window.addEventListener("scroll", animateElements);
