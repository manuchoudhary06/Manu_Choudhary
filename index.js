const countup = document.querySelector(".experience-time");

// Set the start date (January 1, 2020)
const startDate = new Date("2020-01-01T00:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const elapsedTime = now - startDate;

  const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (elapsedTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (elapsedTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );
  countup.innerHTML = `<div class="exp">Crafting Frontend Experiences for <em>${years}</em> years <em>${months}</em> months and <em>${days}</em> days</div>`;
}, 1000);

// grid colouring on scroll
const gridItems = document.querySelectorAll(".grid-item");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  gridItems.forEach(function (item, index) {
    const offsetTop = item.offsetTop;
    const offsetBottom = offsetTop + item.offsetHeight;
    const text = item.querySelector("p");
    const quote = item.querySelector(".quote");

    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
      item.classList.add("active");
      if (text) {
        const percent = Math.min(
          1,
          Math.max(0, (scrollPosition - offsetTop) / (offsetBottom - offsetTop))
        );
        text.style.color = interpolateColor(percent);
        if (quote) {
          quote.style.opacity = 1;
        }
      }
    } else {
      item.classList.remove("active");
      if (text) {
        text.style.color = ""; // Reset color
        if (quote) {
          quote.style.opacity = 0;
        }
      }
    }
  });
});

function interpolateColor(percent) {
  const startColor = [255, 255, 255]; // Start color (white)
  const endColor = [37, 37, 37, 0.7]; // End color (orange)

  const interpolatedColor = startColor.map((channel, index) => {
    const range = endColor[index] - channel;
    return Math.round(channel + range * percent);
  });

  return `rgb(${interpolatedColor.join(",")})`;
}
