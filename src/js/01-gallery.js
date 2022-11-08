// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const refs = {
    galleryContainer: document.querySelector('.gallery'),
}

const galleryMarkUp = createGalleryMarkUp(galleryItems);
refs.galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkUp);


function createGalleryMarkUp(items) {
    return items.map(({ preview, original, description } = {}) => {
        return `
        <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
        `
    })
        .join('')
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250'
});
