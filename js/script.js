/* =====================================
   PRZESTRZEŃ CZUŁOŚCI
   script.js
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Animacja pojawiania się sekcji
    const elements = document.querySelectorAll("section");

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold:0.15
    });

    elements.forEach(function(section){

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all .8s ease";

        observer.observe(section);

    });

});
