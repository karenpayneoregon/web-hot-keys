$(document).ready(function (e) {

    if (localStorage.getItem('useHotKeys') === 'true') {
        $Application.setAboutPageKeys();

    }

});

document.getElementById("setTrue").addEventListener("click", function () {
    localStorage.setItem("useHotKeys", "true");
});

document.getElementById("setFalse").addEventListener("click", function () {
    localStorage.setItem("useHotKeys", "false");
});