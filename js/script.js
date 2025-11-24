const changeBgButton = document.querySelector('#dark-modeBtn');
let isOriginalBg = true;

changeBgButton.addEventListener('click', function () {
    if (isOriginalBg) {
        document.body.style.backgroundImage = "url('../assets/dark-fon.jpg')";
    } else {
        document.body.style.backgroundImage = "url('../assets/fon.jpg')";
    }
    isOriginalBg = !isOriginalBg;
});




