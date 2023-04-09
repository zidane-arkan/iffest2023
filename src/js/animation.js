function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var topThreshold = windowHeight * 0.7; // Ubah nilai threshold sesuai kebutuhan
  return rect.top <= topThreshold && rect.bottom >= 0;
}

var animatedElements = document.querySelectorAll(".animated-element");

function animateElements() {
  for (var i = 0; i < animatedElements.length; i++) {
    var element = animatedElements[i];
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  }
}

window.addEventListener("scroll", animateElements);
