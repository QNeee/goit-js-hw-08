// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';
// Change code below this line
const mainDivForGalleryItems = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
mainDivForGalleryItems.insertAdjacentHTML("beforeend", imagesMarkup);
function createItemsMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li>
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </li>`;
        })
        .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
});
