const images = [
    "V509-Cas.png",
    "trapcluster-d203506.png",
    "RSG-Bdw.png",
];

let current = 0;

function showImage() {
  document.getElementById("gallery-image").src = "/assets/arts-gallery/"+images[current];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage();
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}