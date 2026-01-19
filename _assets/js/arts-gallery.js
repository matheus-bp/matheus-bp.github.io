const images = [
"RSG-Bdw.png",
"trapcluster-d203506.png",
"V509-Cas.png"
];

let current = 0;

function showImage() {
  document.getElementById("gallery-image").src = images[current];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage();
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}