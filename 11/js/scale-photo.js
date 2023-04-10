const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scaleUploadImage = document.querySelector('.img-upload__preview');

const scaleImage = (value) => {
  scaleUploadImage.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleButtonSmaller.addEventListener('click', onSmallerButtonClick);
scaleButtonBigger.addEventListener('click', onBiggerButtonClick);

export {resetScale};
