const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPhoto = ({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
};

const drawPhotos = (similarPictures) => {
  const similarListFragment = document.createDocumentFragment();
  similarPictures.forEach((similarPicture) => {
    similarListFragment.appendChild(createPhoto(similarPicture));
  });
  pictures.appendChild(similarListFragment);
};

export {drawPhotos};
