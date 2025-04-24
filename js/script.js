document.querySelectorAll('a.bouncy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const audio = new Audio('media/click.mp3');
    audio.play();
  });
});