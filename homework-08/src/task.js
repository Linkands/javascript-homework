import galleryItems from './gallery-items.js'

const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const closeLightboxBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxOverlay = document.querySelector(".lightbox__overlay");
const galleryMarkup = createGalleryMarkup(galleryItems);
const imageArray = [...galleryItems];

let activeIndex = null;

galleryList.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

galleryList.addEventListener("click", onImageClick);
closeLightboxBtn.addEventListener("click", onCloseBtnOrOverlayClick);
lightboxOverlay.addEventListener("click", onCloseBtnOrOverlayClick)

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
    });
}

function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    galleryMarkup.forEach((el, ind) => {
        if (el.includes(e.target.src)) {
            activeIndex = ind;
        }
    })
    lightbox.classList.add("is-open");
    lightboxImage.src = e.target.parentNode.href;
    lightboxImage.alt = e.target.alt;
    window.addEventListener("keydown", closeLightboxOnEscEvent)
    window.addEventListener("keydown", changeImageWithArrows)
}

function closeLightbox(e) {
    lightbox.classList.remove("is-open");
    lightboxImage.src = '';
    lightboxImage.alt = '';
    window.removeEventListener("keydown", closeLightboxOnEscEvent)
    window.removeEventListener("keydown", changeImageWithArrows)
}

function onCloseBtnOrOverlayClick(e) {
    e.preventDefault();
    if (e.target.nodeName === "BUTTON" || e.target === e.currentTarget) {
        closeLightbox();
    };
}

function closeLightboxOnEscEvent(e) {
    if (e.code === "Escape") {
        closeLightbox();
    }
}

function changeImageWithArrows(e) {
    
    if (e.code === "ArrowLeft" && activeIndex > -1) {
        activeIndex -= 1;
    }
    if (e.code === "ArrowLeft" && activeIndex === -1) {
        activeIndex = imageArray.length - 1;
    }
    if (e.code === "ArrowRight") {
        activeIndex += 1;
    }
    if (e.code === "ArrowRight" && activeIndex === imageArray.length-1+1) {
        activeIndex = 0
    }
    
    setModalImage(activeIndex)
}

function setModalImage(index) {
    lightboxImage.src = imageArray[index].original
}