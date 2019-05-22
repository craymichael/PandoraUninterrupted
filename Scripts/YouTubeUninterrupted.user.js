// ==UserScript==
// @name         YouTube Uninterrupted
// @namespace    http://github.com/craymichael
// @version      0.1.0
// @description  Takes care of "Continue Watching" messages.
// @author       Zach
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        // Check if button exists
        var btn = document.querySelectorAll('.yt-confirm-dialog-renderer paper-button#button')[0];
        if (btn !== undefined) {
            btn.click();
        }
    }, 500);
})();
