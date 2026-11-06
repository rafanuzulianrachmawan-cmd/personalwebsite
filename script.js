/* =========================================
   SCROLL REVEAL
========================================= */

const elements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    elements.forEach((element) => {

        const position =
            element.getBoundingClientRect().top;

        const screen =
            window.innerHeight;

        if (position < screen - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Jalankan saat pertama kali dibuka */

revealOnScroll();



/* =========================================
   CONTACT FORM
========================================= */

const form =
    document.getElementById("contactForm");


form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        alert(
            "Terima kasih, " +
            name +
            "! Pesan kamu sudah diterima. 🌊"
        );

        form.reset();

    }
);



/* =========================================
   TAHUN FOOTER
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
