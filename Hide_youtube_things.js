// ==UserScript==
// @name         Hide youtube things
// @namespace    bepitic
// @version      0.4
// @description  Hide related vid and comments section.
// @author       Bepitic
// @match        https://www.youtube.com/**
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

$( document ).ready(function() {


    function ocultando(){
        if( $('#secondary') && $('#related').length && $('#sections').length )
        {
            console.log('Ocultando related & sections & secondary');
            $('#secondary').style.display = "none";
            $('#related').style.display = "none";
            $('#sections').style.display = "none";
        }else{
            setTimeout(function() { ocultando();}, 1000);
        }
    }
    setTimeout(function() { ocultando();}, 1000);

