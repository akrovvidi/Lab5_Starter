window.addEventListener('DOMContentLoaded', init);

function init() {
    populateVoiceList();
    const talkButton = document.querySelector('button');
    talkButton.addEventListener('click', speakText);
}

function populateVoiceList() {
    const voices = window.speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voice-select');
    voiceSelect.innerHTML = '';

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';
        option.setAttribute('value', voice.name);
        voiceSelect.appendChild(option);
    });
}

function speakText() {
    const textToSpeak = document.getElementById('text-to-speak').value;
    const selectedVoice = document.getElementById('voice-select').value;

    const speech = new SpeechSynthesisUtterance(textToSpeak);
    speech.voice = window.speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);
    speech.onstart = () => {
        const smilingFace = document.querySelector('img');
        smilingFace.src = 'assets/images/smiling-open.png';
    };
    speech.onend = () => {
        const smilingFace = document.querySelector('img');
        smilingFace.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(speech);
}
