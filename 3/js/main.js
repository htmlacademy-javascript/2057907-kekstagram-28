function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const COMMENTS = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTION = [
  'Моя первая фотография!',
  'Это был лучший день в моей жизни!',
  'Круто получилось, да?',
];

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, 25);
const generateLikesCount = createRandomIdFromRangeGenerator(15, 200);
const generateCommentsId = createRandomIdFromRangeGenerator(1, 999);
const generateCommentsAvatar = createRandomIdFromRangeGenerator(1, 6);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const SIMILAR_COMMENTS_COUNT = 3;
const SIMILAR_PHOTO_DESCRIPTION = 25;

const createComments = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${generateCommentsAvatar()}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const similarComments = Array.from({length: SIMILAR_COMMENTS_COUNT}, createComments);


const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: generateLikesCount(),
  comments: similarComments,
});

const similarPhotoDescription = Array.from({length: SIMILAR_PHOTO_DESCRIPTION}, createPhotoDescription);

console.log(similarPhotoDescription);
