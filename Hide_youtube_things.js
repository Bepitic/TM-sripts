// ==UserScript==
// @name         Hide youtube things
// @namespace    bepitic
// @version      0.11
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
            setTimeout(() => { $(s).style.display = "none"; }, 1000);
        }else{
            setTimeout(function() { ocultando(s);}, 1000);
        }
    }

    // Quitar secondary solo si no tiene un hijo que sea id=chat (un livestream)
    setTimeout(function() { ocultando('secondary > :not(#chat)');}, 1000);
    setTimeout(function() { ocultando('related');}, 1000);
    setTimeout(function() { ocultando('comments');}, 1000);
    //setTimeout(function() { ocultando(':not(#guide-renderer) < sections');}, 1000);
});
