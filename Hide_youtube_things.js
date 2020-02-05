// ==UserScript==
// @name         Hide youtube things
// @namespace    bepitic
// @version      0.2
// @description  Hide related vid and comments section.
// @author       Bepitic
// @match        https://www.youtube.com/**
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

$( document ).ready(function() {

    function ocultando_related(){

        if($('#related').length)
        {
            console.log("ocultando related");
            document.getElementById("related").style.display = "none";
        }else{
            setTimeout(function() { ocultando_related(); }, 1000);
        }
    }

    function ocultando_sections(){

        if($('#sections').length)
        {
            console.log("ocultando sections");
            document.getElementById("sections").style.display = "none";
        }else{
            setTimeout(function() { ocultando_sections(); }, 1000);
        }
    }

    setTimeout(function() { ocultando_related(); }, 1000);
    setTimeout(function() { ocultando_sections(); }, 1000);

});
