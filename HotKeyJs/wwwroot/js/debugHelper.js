var $DebugHelper = $DebugHelper || {};
$DebugHelper = function () {

    /*
     * Add/remove debugger.css to the current page
     * There is no check to see if the style is present or not, its
     * a developer tool so if that is not okay with you feel free
     * to add assertions in.
     */

    var href = "../css/debugger.css";
    var addCss = function() {
        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = href;

        head.appendChild(link);
    };

    var removeCss = function() {
        $('link[href="' + href + '"]').remove();
    };

    return {
        addCss: addCss,
        removeCss: removeCss
    };
}();