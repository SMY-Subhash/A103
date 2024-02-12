window.addEventListener('load', function() {
  var images = document.querySelectorAll('.image-item img');
  images.forEach(function(image) {
    image.addEventListener('load', function() {
      var ratio = this.naturalWidth / this.naturalHeight;
      this.parentNode.style.aspectRatio = ratio;
    });
  });
});
