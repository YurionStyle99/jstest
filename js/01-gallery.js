import  { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const createEL = createCards(galleryItems);

gallery.insertAdjacentHTML("beforeend", createEL);

function createCards() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
<div class="gallery__item">
<a href="${original}" class="gallery__link"  rel = "noreferrer noopener">
<img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
</a>
</div>
`;
    })
    .join("");
}

gallery.addEventListener("click", onLinkClick);

function onLinkClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery")) {
    return;
  }
  const closeModal = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  let instance = basicLightbox.create(
    `
  <img width="100%" height="100%" src=${event.target.dataset.source}>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
}

console.log(galleryItems);
