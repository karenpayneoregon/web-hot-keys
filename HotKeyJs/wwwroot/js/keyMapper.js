$(document).ready(function (e) {

    if ($Application.supportsLocalStorage()) {

        document.getElementById("useHotKeys").checked = getFunction();

        // determine if there are hot keys set in local storage
        if (localStorage.getItem('appControlKeys') && localStorage.getItem('appKey')) {
            var array = localStorage.getItem('appControlKeys').split('+');
            $("#keyCombinationsSelect").val(array);
            document.getElementById('keyCombinationsCharacter').value = localStorage.getItem('appKey');
            // apply hot-key
            $Application.setHomeKey(localStorage.getItem('appControlKeys') + '+' + localStorage.getItem('appKey'));
        }

        $Application.setKeys();        
    }

});


// change item
function handleClick(cb) {
    if ($Application.supportsLocalStorage()) {
        localStorage.setItem("useHotKeys", cb.checked);
    }
    
}

// get current setting
function getFunction() {
    if ($Application.supportsLocalStorage()) {
        if (localStorage.getItem('useHotKeys') === 'true') {
            return true;
        } else {
            return false;
        }        
    }
}

/*
 * Clear home hot key
 */
function clearCombinationsSelected() {
    if ($Application.supportsLocalStorage()) {
        $("#keyCombinationsSelect option:selected").prop("selected", false);
        localStorage.setItem("appControlKeys", "");
        localStorage.setItem("appKey", "");
        document.getElementById('keyCombinationsCharacter').value = '';        
    }
}

/*
 * Save home hot key
 */
function saveCombinations() {
    if ($Application.supportsLocalStorage()) {
        var options = document.getElementById('keyCombinationsSelect').selectedOptions;
        var values = Array.from(options).map(({ value }) => value);

        if (!Array.isArray(values) || !values.length) {
            return;
        }

        var item = document.getElementById('keyCombinationsCharacter').value.trim();
        if (item) {

            var controlKeys = values.join("+");
            var key = Array.from(item)[0];
            console.log(`selections ${controlKeys}, ${key}`);
            console.log();

            const array = controlKeys.split('+');
            for (var index = 0; index < array.length; index++) {
                console.log(array[index]);
            }

            $Application.saveKeys(controlKeys, key);

        }        
    }
}


function exit() {
    window.location.replace("Index");
}