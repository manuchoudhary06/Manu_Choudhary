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

  // Display the countup
  countup.innerHTML = `<div class="exp">Crafting Frontend Experiences for <em>${years}</em> years <em>${months}</em> months and <em>${days}</em> days</div>`;
}, 1000);
