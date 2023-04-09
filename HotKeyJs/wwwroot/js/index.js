document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('useHotKeys') === 'true') {
        $Application.setKeys();
    }

    document.getElementById("setTrue").addEventListener("click", function () {
        setTrueFunction();
    });

    document.getElementById("setFalse").addEventListener("click", function () {
        setFalseFunction();
    });

    document.getElementById("getIno").addEventListener("click", function () {
        getFunction();
    });

    document.getElementById("delStuff").addEventListener("click", function () {
        delFunction();
    });

    document.getElementById("hasStuff").addEventListener("click", function () {
        hasFunction();
    });

    document.getElementById("showHelp").addEventListener("click", function () {
        $Application.showHideAccordion();
    });
});


window.addEventListener('beforeunload', (event) => {
    if (localStorage.getItem('useHotKeys') === 'true') {
        $Application.removeKeys();
    }
});

function setTrueFunction() {
    localStorage.setItem("useHotKeys", "true");
    location.reload();
}

function setFalseFunction() {
    localStorage.setItem("useHotKeys", "false");
    location.reload();
}

function getFunction() {
    alert(localStorage.getItem('useHotKeys'));
}
function delFunction() {
    localStorage.removeItem('useHotKeys');
}
function hasFunction() {
    alert($Application.hasStorage("useHotKeys"));
}
