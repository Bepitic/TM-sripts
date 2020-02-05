// ==UserScript==
// @name         Hide youtube things
// @namespace    bepitic
// @version      0.7
// @description  Hide related vid and comments section, in the most overpowered form.
// @author       Bepitic
// @match        https://www.youtube.com/**
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

$( document ).ready(function() {


    function ocultando(s){
        if( $('#' + s).length)
        {
            console.log('Ocultando ' + s);

            document.getElementById(s).style.display = "none";
            $(s).style.display = "none";
        }else{
            setTimeout(function() { ocultando(s);}, 1000);
        }
    }

    setTimeout(function() { ocultando('secondary');}, 1000);
    //setTimeout(function() { ocultando('related');}, 1000);
    setTimeout(function() { ocultando('sections');}, 1000);
});
