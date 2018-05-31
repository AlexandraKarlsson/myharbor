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

