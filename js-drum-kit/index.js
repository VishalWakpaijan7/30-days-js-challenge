function playAudio (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode || e.target.attributes[0].value}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode || e.target.attributes[0].value}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('active');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('active')
}

let keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playAudio);
keys.forEach(key => key.addEventListener('click', playAudio))
keys.forEach(key => key.addEventListener('transitionend', removeTransition ))