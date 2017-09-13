var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var TACOCAT = "img/tacocat1.png";
var isClicked = false;

// generate a random number between 0 and 4
function randomize() {
  'use strict';
  return (Math.floor(Math.random() * 5));
}

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function setDetailsFromTacocat(thumbnail) {
  'use strict';
  setDetails(TACOCAT, "TACOCAT");
}

function eventTaco(thumb) {
  event.preventDefault();
  setDetailsFromTacocat(thumb);
  initializeEvents();   // if tacocat is clicked, reset
  // console.log("Tacocat is clicked.");   // used for debugging
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.removeEventListener('click', eventTaco);  // remove the tacocat click listener
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function addThumbClickHandlerTacocat(thumb) {
  'use strict';
  thumb.addEventListener('click', eventTaco);
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

//reset the image urls and place tacocat at a random location
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  // add a tacocat click handler at on a random element in the array
  var RANDOM = randomize();
  addThumbClickHandlerTacocat(thumbnails[RANDOM]);
  //console.log("Random is ", RANDOM);  // used for debugging
}

initializeEvents();
