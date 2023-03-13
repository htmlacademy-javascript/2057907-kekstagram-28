import {getPhotoDescriptions} from './data.js';
import {drawPhotos} from './thumbnail.js';


const photoDescriptions = getPhotoDescriptions();
drawPhotos(photoDescriptions);
