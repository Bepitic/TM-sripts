// ==UserScript==
// @name         Hide youtube things
// @namespace    bepitic
// @version      0.1
// @description  Deactivate recomendations from youtube
// @author       Bepitic
// @match        https://www.youtube.com/**
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

$( document ).ready(function() {

    function ocultando_related(){
        //document.getElementById("related").style.display = "none";
        //document.getElementById("sections").style.display = "none";
        if($('#related').length)
        {
            console.log("ocultando related");
            document.getElementById("related").style.display = "none";
        }else{
            setTimeout(function() { ocultando_related(); }, 1000);
        }
    }

    function ocultando_sections(){
        //document.getElementById("related").style.display = "none";
        //document.getElementById("sections").style.display = "none";
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
