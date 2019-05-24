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
        var btn = document.querySelectorAll('ytd-popup-container paper-dialog.ytd-popup-container yt-confirm-dialog-renderer.ytd-popup-container div#main.yt-confirm-dialog-renderer div.buttons.yt-confirm-dialog-renderer yt-button-renderer#confirm-button.yt-confirm-dialog-renderer a.yt-simple-endpoint.yt-button-renderer paper-button#button.yt-button-renderer')[0];
        if (btn !== undefined) {
            btn.click();
          	btn.remove();
        }
    }, 500);
})();
