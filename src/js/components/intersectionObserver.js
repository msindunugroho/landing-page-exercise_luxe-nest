export const animationObserver = () => {
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // carousel target
        if (
          entry.target.classList.contains("carousel_heading") ||
          entry.target.classList.contains("carousel_par") ||
          entry.target.classList.contains("card_count")
        ) {
          entry.target.classList.add("transform_carousel-desc");
        }
        // button target
        if (entry.target.classList.contains("button")) {
          entry.target.classList.add("show-button");
        }

        // production section target
        if (
          entry.target.classList.contains("production-image") ||
          entry.target.classList.contains("production-image-title")
        ) {entry.target.classList.add("transform_production-img");}
        if(
          entry.target.classList.contains('product-desc-p1') ||
          entry.target.classList.contains('product-desc-h2') ||
          entry.target.classList.contains('product-desc-p2')
          ) {entry.target.classList.add('transform_production-desc')}
        if(
          entry.target.classList.contains('production_desc-list')
        ) {entry.target.classList.add('transform_production-desc-list')}
        if(
          entry.target.classList.contains('production-list-item')
          ) {entry.target.classList.add('transform_production-list-item')}
        
        // furniture section target
        if(entry.target.classList.contains('product_header'))
        {entry.target.classList.add('transform_product_header')}
        if(entry.target.classList.contains('card_product-body'))
        {entry.target.classList.add('transform_card-product-body')}
        if(entry.target.classList.contains('furniture-img-item'))
        {entry.target.classList.add('transform_furniture-img-item')}
      } else {
        // button transform
        entry.target.classList.remove("show-button");
        // carousel transform
        entry.target.classList.remove("transform_carousel-desc");
        // production section transform
        entry.target.classList.remove("transform_production-img");
        entry.target.classList.remove("transform_production-desc");
        entry.target.classList.remove("transform_production-desc-list");
        entry.target.classList.remove("transform_production-list-item");
        // furniture section transform
        entry.target.classList.remove("transform_product_header");
        entry.target.classList.remove("transform_card-product-body");
        entry.target.classList.remove("transform_furniture-img-item");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback);

  const target = document.querySelectorAll(
    `
    .carousel_heading, .carousel_par, .card_count, 
    .button,
    .production-image, .production-image-title, .product-desc-p1, 
    .product-desc-h2, .product-desc-p2, .production_desc-list, .production-list-item,
    .product_header, .card_product-body, .furniture-img-item
    `
  );
  target.forEach((target) => {
    observer.observe(target);
  });
};
