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
        var btn = document.querySelectorAll('ytd-popup-container paper-dialog.ytd-popup-container          \
                                             yt-confirm-dialog-renderer.ytd-popup-container                \
                                             div#main.yt-confirm-dialog-renderer                           \
                                             div.buttons.yt-confirm-dialog-renderer                        \
                                             yt-button-renderer#confirm-button.yt-confirm-dialog-renderer  \
                                             a.yt-simple-endpoint.yt-button-renderer                       \
                                             paper-button#button.yt-button-renderer')[0];
      	// Check if button exists
        if (btn !== undefined) {
            btn.click();
            // Remove popup window
            document.querySelectorAll('ytd-popup-container')[0].remove();
            
            // Check if video paused, resume if so
            var playerIntervalID = setInterval(function() {
                var player = document.querySelectorAll("ytd-app div#movie_player.paused-mode")[0];
                if (player !== undefined) {
                    player.click();
                    clearInterval(playerIntervalID);
                }
            }, 50);  // every .05 seconds
            // Kill interval after 3 seconds if not finished already
            setTimeout(function() {clearInterval(playerIntervalID);}, 3000);  // after 3 seconds
        }
    }, 500);  // every .5 seconds
})();
