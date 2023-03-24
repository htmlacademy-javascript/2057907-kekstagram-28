import { isEscapeKey, isEnterKey } from "./util.js";

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment').cloneNode(true);
const socialCaption = document.querySelector('.social__caption');
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

let photos = [];

const setPhotos = (newPhotos) => {
  photos = newPhotos;
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const createComment = ({avatar, name, message}) => {
  const newComment = socialComment.cloneNode(true);
  newComment.querySelector('img').src = avatar;
  newComment.querySelector('img').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};

const createComments = (comments) => {
  socialComments.innerHTML = '';
  commentsCount.textContent = comments.length;
  const similarListFragment = document.createDocumentFragment();
  comments.forEach((similarPicture) => {
    similarListFragment.appendChild(createComment(similarPicture));
  });
  socialComments.appendChild(similarListFragment);
};

const createBigPicture = ({url, likes, comments, description}) => {
  bigPictureImg.querySelector('img').src = url;
  likesCount.textContent = likes;
  createComments(comments);
  socialCaption.textContent = description;
};

const openBigPicture = (oncePhoto) => {
  bigPicture.classList.remove('hidden');
  createBigPicture(oncePhoto);
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', (evt) => {
  const photoId = evt.target.closest('[data-thumbnail-id]') ?.dataset.thumbnailId;
  if (!photoId) {
    return;
  }
  const oncePhoto = photos.find((photo) => photo.id === +photoId);
  if (oncePhoto) {
    openBigPicture(oncePhoto);
  }
});

bigPictureCloseButton .addEventListener('click', () => {
  closeBigPicture();
});

export {setPhotos};
