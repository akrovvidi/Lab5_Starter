// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    switch (selectedHorn) {
      case 'air-horn':
        document.querySelector('#expose img').src = 'assets/images/air-horn.svg';
        audioElement.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        document.querySelector('#expose img').src = 'assets/images/car-horn.svg';
        audioElement.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        document.querySelector('#expose img').src = 'assets/images/party-horn.svg';
        audioElement.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        break;
    }
  });

  volumeSlider.addEventListener('input', function() {
    const volumeValue = volumeSlider.value;
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    audioElement.volume = volumeValue / 100;
  });
  playButton.addEventListener('click', function() {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti();
    }
  });
}
