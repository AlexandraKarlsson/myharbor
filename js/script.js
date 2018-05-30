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
    //window.addEventListener('scroll', fixedNav);
   // window.onscroll = function() {fixedNav()};

})();


