window.addEventListener('load', () => {
  const video = document.getElementById('bgVideo');
  const aura = document.getElementById('aura');

  // Fade in video after 2 seconds
  setTimeout(() => {
    video.style.opacity = '1';
    video.play();
  }, 2000);

  // Fade in aura after 4 seconds
  setTimeout(() => {
    aura.style.opacity = '1';
  }, 4000);
});
