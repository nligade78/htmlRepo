let textarea = document.querySelector('#textArea');
let button = document.querySelector('#btn');
button.addEventListener("click", function() {
    let text = textarea.value;
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[1];
    window.speechSynthesis.speak(utterance);
});
