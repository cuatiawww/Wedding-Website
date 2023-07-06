const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink))

//AUDIO
var backsound = document.getElementById("audio");
var icon = document.getElementById("iconsvg");
icon.onclick = function () {
    if (backsound.paused) {
        backsound.play();
        icon.src = "assets/pause.svg";
    } else {
        backsound.pause();
        icon.src = "assets/play.svg";
    }
}

//COPY BUTTON
function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);

    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}
document.querySelector('#copied-btn').onclick = function () {
    copyText(document.querySelector('#copied-text'))
}