// ==UserScript==
// @name         Hide youtube things
// @namespace    bepitic
// @version      0.5
// @description  Hide related vid and comments section.
// @author       Bepitic
// @match        https://www.youtube.com/**
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

$( document ).ready(function() {


    function ocultando(var s){
        if( $('#secondary').length)
        {
            console.log('Ocultando ' + s);
            $(s).style.display = "none";
        }else{
            setTimeout(function() { ocultando(s);}, 1000);
        }
    }

    setTimeout(function() { ocultando('#secondary');}, 1000);
});
