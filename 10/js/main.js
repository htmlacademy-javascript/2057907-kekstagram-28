import {drawPhotos} from './thumbnail.js';
import {setUserFormSubmit, closeUploadModal} from './form.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {showErrorMessage, showSuccessMessage} from './form-message.js';


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
  drawPhotos(data);
} catch (err) {
  showAlert(err.message);
}

