const PICTURES_COUNT = 10;
const Sort = {
  DEFAULT: 'sort-default',
  RANDOM: 'sort-random',
  DISCUSSED: 'sort-discussed',
};

const sortElement = document.querySelector('.img-filters');
let currentSort = Sort.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

const getSortedPictures = () => {
  switch (currentSort) {
    case Sort.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, PICTURES_COUNT);
    case Sort.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
};

const setOnSortClick = (cb) => {
  sortElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentSort) {
      return;
    }

    sortElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentSort = clickedButton.id;
    cb(getSortedPictures());
  });
};

const init = (loadedPictures, cb) => {
  sortElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  setOnSortClick(cb);
};

export {init, getSortedPictures};
