import {isEscapeKey} from './util.js';

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);

const errorButton = errorTemplate.querySelector('.error__button');

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success')
  .cloneNode(true);

const successButton = successTemplate.querySelector('.success__button');

const fragment = document.createDocumentFragment();

const closeErrorMessage = () => {
  errorTemplate.remove();
  document.removeEventListener('keydown', onDocumentKeydown, {capture:true});
  errorButton.removeEventListener('click', onCancelButtonClick);
  errorTemplate.removeEventListener('click', onCancelButtonClick);
};

const showErrorMessage = () => {
  fragment.append(errorTemplate);
  document.body.append(fragment);
  document.addEventListener('keydown', onDocumentKeydown, {capture:true});
  errorButton.addEventListener('click', onCancelButtonClick);
  errorTemplate.addEventListener('click', (evt) => {
    if(evt.target === errorTemplate) {
      closeErrorMessage();
    }
  });
};

const closeSuccessMessage = () => {
  successTemplate.remove();
  document.removeEventListener('keydown', onDocumentKeydown, {capture:true});
  successButton.removeEventListener('click', onCancelButtonClick);
  successTemplate.removeEventListener('click', onCancelButtonClick);
};

const showSuccessMessage = () => {
  fragment.append(successTemplate);
  document.body.append(fragment);
  document.addEventListener('keydown', onDocumentKeydown, {capture:true});
  successButton.addEventListener('click', onCancelButtonClick);
  successTemplate.addEventListener('click', (evt) => {
    if(evt.target === successTemplate) {
      closeSuccessMessage();
    }
  });
};


function onDocumentKeydown(evt) {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
    closeErrorMessage();
    closeSuccessMessage();
  }
}

function onCancelButtonClick() {
  closeErrorMessage();
  closeSuccessMessage();
}


export {showErrorMessage, showSuccessMessage};
