document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const scrollRow = carousel.querySelector(".scroll-row");
    const scrollLeftBtn = carousel.querySelector(".scroll-btn.left");
    const scrollRightBtn = carousel.querySelector(".scroll-btn.right");

    const scrollAmount = 300;

    scrollLeftBtn.addEventListener("click", () => {
      scrollRow.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    });

    scrollRightBtn.addEventListener("click", () => {
      scrollRow.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  });
});