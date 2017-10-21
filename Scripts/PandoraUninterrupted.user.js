// ==UserScript==
// @name         Pandora Uninterrupted
// @namespace    http://github.com/craymichael
// @version      0.1.1
// @description  Takes care of "Still Listening" messages.
// @author       Zach
// @match        https://www.pandora.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        // Check if div exists
        var btn = document.querySelectorAll('[data-qa="keep_listening_button"]')[0];
        if (btn !== undefined) {
            btn.click();
        }
    }, 500);
})();
