document.addEventListener("DOMContentLoaded", function () {
    const reviewImages = document.querySelectorAll(".review-image");
   const reviewPopup = document.querySelector(".review-popup");
   const close = document.querySelector(".close");
   const popupImage = document.querySelector(".popup-image");
   const popupText = document.querySelector(".popup-text");

   reviewImages.forEach((image) => {
       image.addEventListener("click", function () {
           const reviewText = this.nextElementSibling.textContent;
           popupImage.src = this.src;
           popupText.textContent = reviewText;
           reviewPopup.style.display = "block";
       });
   });

   close.addEventListener("click", function () {
       reviewPopup.style.display = "none";
   });

   window.addEventListener("click", function (event) {
       if (event.target === reviewPopup) {
           reviewPopup.style.display = "none";
       }
   });
});