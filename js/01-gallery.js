import {
    galleryItems
} from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector('.gallery');


function createImageList(arr) {
    return arr
        .map((element) => `<li class=gallery__item>
    <a class="gallery__link" href="${element.original}">
    <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
    />
    </a>
    </li>`)
        .join('')
}

const listMarkup = createImageList(galleryItems);


list.innerHTML = listMarkup;


list.addEventListener('click', modalImageClick)

function modalImageClick(event) {
    blockAnotherActions(event);
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="800">`);
    instance.show();

}

function blockAnotherActions(event) {
    event.preventDefault();
}