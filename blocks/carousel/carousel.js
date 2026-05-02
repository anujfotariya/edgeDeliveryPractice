export default function decorate(block) {

  const rows = [...block.children];

  rows.forEach((row, r) => {
    if (r === 0) {
      const nextbtn = document.createElement('button');
      nextbtn.classList.add('btn', 'btn-next');
      nextbtn.textContent = ">>";
      row.innerHTML = "";
      row.appendChild(nextbtn);

    } else if (r === rows.length - 1) {
      const prebtn = document.createElement('button');
      prebtn.classList.add('btn', 'btn-prev');
      prebtn.textContent = "<<";
      row.innerHTML = "";
      row.appendChild(prebtn);

    } else {
      row.classList.add('slide');

      [...row.children].forEach((col, c) => {
        if (c === 1) {
          col.classList.add('slide-text');
        }
      });
    }
  });

  const slides = block.querySelectorAll(".slide");

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  const nextSlide = block.querySelector(".btn-next");
  const prevSlide = block.querySelector(".btn-prev");

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  if (nextSlide) {
    nextSlide.addEventListener("click", () => {
      curSlide = curSlide === maxSlide ? 0 : curSlide + 1;

      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });
  }

  if (prevSlide) {
    prevSlide.addEventListener("click", () => {
      curSlide = curSlide === 0 ? maxSlide : curSlide - 1;

      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });
  }
}