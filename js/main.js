import {drawPhotos} from './thumbnail.js';
import {setUserFormSubmit, closeUploadModal} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert, debounce} from './util.js';
import {showErrorMessage, showSuccessMessage} from './form-message.js';
import {init, getSortedPictures} from './sort.js';
import './avatar.js';


setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeUploadModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedDrawPhotos = debounce(drawPhotos);
  init(data, debouncedDrawPhotos);
  drawPhotos(getSortedPictures());
} catch (err) {
  showAlert(err.message);
}

