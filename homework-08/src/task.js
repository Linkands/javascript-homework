import galleryItems from './gallery-items.js'

const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const closeLightboxBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxImage = document.querySelector(".lightbox__image");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener("click", onImageClick);
closeLightboxBtn.addEventListener("click", onCloseBtnClick);

function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}">
        </a>
        </li>`;
    }).join('');
}

function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    else if (e.target.nodeName === "IMG") {
        lightbox.classList.add("is-open");
        lightboxImage.src = e.target.parentNode.href;
        lightboxImage.alt = e.target.alt;
    };
}

function onCloseBtnClick(e) {
    e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
        lightbox.classList.remove("is-open");
        lightboxImage.src = '';
        lightboxImage.alt = '';
    };
}