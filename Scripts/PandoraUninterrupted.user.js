// ==UserScript==
// @name         Pandora Uninterrupted
// @namespace    http://github.com/craymichael
// @version      0.1
// @description  Takes care of "Still Listening" messages.
// @author       Zach
// @match        https://www.pandora.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
        // Check if div exists
        var sl_div = document.getElementsByClassName("StillListeningBody")[0];
        if (sl_div !== undefined) {
            var btn = sl_div.getElementsByClassName("Button")[0];
            btn.click();
        }
    }, 500);
})();
