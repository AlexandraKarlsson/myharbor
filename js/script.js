(function() {
    'use strict';
    
    var nav = document.querySelector('#navigation');
    var sticky = nav.offsetTop;
    
    window.addEventListener("scroll", function(e) {
        if (window.scrollY >= sticky) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
    
    var currentLocation = window.location.href;
    var links = nav.querySelectorAll('a');
    for(var i = 0; i < links.length; i++) {
        if(links[i].href == currentLocation) {
            links[i].parentElement.setAttribute('class', 'activePage');
        }
    }

})();


/*
Genom att jag använder mig av en IIFE så förhindrar jag min kod att läcka ut i det globala scopet, vilket minimerar riskerna att det uppstår namnkonflikt mellan bl.a. variabler.
Jag anser att min js-kod nästan är produktionsredo, men för att den skall bli fullt produktionsfärdig krävs det en del felhantering utifall någon variabel sätts till null eller undefined.

*/