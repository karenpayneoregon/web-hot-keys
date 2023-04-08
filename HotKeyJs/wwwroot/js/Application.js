var $Application = $Application || {};
$Application = function () {

    var keyEnabled = true;

    /*
     * @param { settingName } determine if there is a setting in local storage
     */
    var hasStorage = function (settingName) {
        return localStorage.getItem(settingName) !== null;
    };

    /*
     *  set custom hot key to traverse to home page
     *  See also getHomeHotKey
     */
    var setHomeKey = function (keyCombination)
    {
        if (!supportsLocalStorage()) {
            return;
        }
        hotkeys(keyCombination, function (event, handler) {
            event.preventDefault();
            window.location.replace("Index");
        });
    }

    /*
     * Setup hot-keys for index page
     */
    var setStandardKeys = function () {
        if (!supportsLocalStorage()) {
            return;
        }

        hotkeys('alt+0', function (event) {
            event.preventDefault();
            $("#skipper").focus();
        });

        hotkeys('alt+1', function (event) {
            event.preventDefault();
            $DebugHelper.addCss();
        });


        hotkeys('alt+2', function (event) {
            event.preventDefault();
            $DebugHelper.removeCss();
        });

        hotkeys('alt+3', function (event, handler) {
            showHideAccordion();
        });

        hotkeys('alt+a', function (event, handler) {
            event.preventDefault();
            window.location.replace("About");
        });

        setFormSubmitHotKey();

        keyEnabled = true;

    };

    var showHideAccordion = function() {
        var x = document.getElementById("accordionFlushExample");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    /*
     * Setup hot-keys for about page
     */
    var setAboutPageKeys = function () {
        if (!supportsLocalStorage()) {
            return;
        }

        hotkeys(getHomeHotKey(), function (event, handler) {
            event.preventDefault();
            // open about page
            window.location.replace("Index");
        });


        hotkeys('alt+0', function (event) {
            event.preventDefault();
            alert('ALT+0 pressed');
        });

        setFormSubmitHotKey();

        keyEnabled = true;

    };

    var setFormSubmitHotKey = function () {
        if (!supportsLocalStorage()) {
            return;
        }

        hotkeys('ctrl+q', function (event, handler) {
            event.preventDefault();
            // focus submit button with specific identifier
            $("#btn-submit").focus();
        });

    }

    /*
     * Setup hot-keys for privacy page
     */
    var setPrivacyPageKeys = function () {
        if (!supportsLocalStorage()) {
            return;
        }
        setFormSubmitHotKey();
        hotkeys(getHomeHotKey(), function (event, handler) {
            event.preventDefault();
            window.location.replace("Index");
        });

        setFormSubmitHotKey();

        keyEnabled = true;

    };

    /*
     * remove keys for current page
     */
    var removeKeys = function () {
        if (!supportsLocalStorage()) {
            return ;
        }
        hotkeys.deleteScope('all');
        keyEnabled = false;
    };

    /*
     * Are hot-keys enabled
     */
    var isEnabled = function () {
        return keyEnabled;
    };

    /*
     * Does the current browser support local storage
     */
    var supportsLocalStorage = function() {
        return typeof (Storage) !== "undefined";
    };

    /*
     * Save key combination for home page hot-key
     */
    var saveKeys = function (controlKeys, key) {
        if (!supportsLocalStorage()) {
            return false;
        }
        localStorage.setItem("appControlKeys", controlKeys);
        localStorage.setItem("appKey", key);
        return true;
    };

    let hello = () => { return "Well hello there" };

    /*
     * Get home hot key
     */
    var getHomeHotKey = function () {
        if (localStorage.getItem('homeHotKey') === null) {
            localStorage.setItem('homeHotKey', 'alt+h');
        }

        return localStorage.getItem('homeHotKey');
    };
    
    return {
        removeKeys: removeKeys,
        setHomeKey: setHomeKey,
        setKeys: setStandardKeys,
        setAboutPageKeys: setAboutPageKeys,
        setPrivacyPageKeys: setPrivacyPageKeys,
        isEnabled: isEnabled,
        saveKeys: saveKeys,
        supportsLocalStorage: supportsLocalStorage,
        hasStorage: hasStorage,
        getHomeHotKey: getHomeHotKey,
        showHideAccordion: showHideAccordion,
        hello: hello
    };
}();