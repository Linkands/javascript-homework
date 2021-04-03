const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.getElementById("gallery");

const galleryItems = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width=200px></li>`

const galleryMarkup = images.map(galleryItems).join("")

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup)
galleryList.setAttribute("style", "display: flex; justify-content: space-around; list-style: none; padding: 0px;")
