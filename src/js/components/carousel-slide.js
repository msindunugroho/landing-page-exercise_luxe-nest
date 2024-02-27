export const carouselSlide = () => {
  let slideIndex = 0;
  showSlides();
  carouselCircle();
  
  function carouselCircle() {
    const dotes = document.querySelectorAll('.dot');
    let slides = document.querySelectorAll('.slide-img');

    dotes.forEach((dot, index) => {
        dot.addEventListener('click', () => {
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
    
    slides.forEach((slide) => {
      slide.style.display = 'none';
    })
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    if(slideIndex < 1) slideIndex = slides.length;
    slides[slideIndex - 1].style.display = 'block'
    setTimeout(showSlides, 2500);
  }
};
