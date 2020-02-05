// ==UserScript==
// @name         Hide youtube good, but insecure.
// @namespace    bepitic
// @version      0.1
// @description  Deactivate recomendations from youtube
// @author       Bepitic
// @match        https://www.youtube.com/**
// @require https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// @require https://raw.githubusercontent.com/moderntribe/tampermonkey-scripts/master/waitForKeyElements.js
// @grant        none
// ==/UserScript==


$( document ).ready(function() {

    function hide_r(){
                document.getElementById("related").style.display = "none";
    }
    waitForKeyElements ("#related", hide_r);

    function hide_s(){
                document.getElementById("sections").style.display = "none";
    }
    waitForKeyElements ("#sections", hide_s);
});
