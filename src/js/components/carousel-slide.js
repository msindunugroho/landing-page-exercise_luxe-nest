export const carouselSlide = () => {
  let slideIndex = 0;
  showSlides();
  carouselCircle();

  function carouselCircle() {
    const dotes = document.querySelectorAll('.dot');
    let slides = document.querySelectorAll('.slide-img');

    dotes.forEach((dot, index) => {
      dot.style.background = 'var(--third-col)';
      dot.addEventListener('click', () => {
        dot.style.background = '#5f442e';
        slides.forEach((slide) => {
              slide.style.display = 'none';
            })
            slides[index].style.display = 'block';
            slideIndex = index;
          })
    })
}

  function showSlides() {
    let slides = document.querySelectorAll('.slide-img');
    const dotes = document.querySelectorAll('.dot');
    
    slides.forEach((slide) => {
      slide.style.display = 'none';
    })
    dotes.forEach((dote) => {
      dote.style.background = 'var(--third-col)';
    })
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    if(slideIndex < 1) slideIndex = slides.length;
    slides[slideIndex - 1].style.display = 'block'
    dotes[slideIndex - 1].style.background = '#5f442e';
    setTimeout(showSlides, 2500);
  }
};
