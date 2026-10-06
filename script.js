/* =================================
   CUSTOM CURSOR
================================= */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    if (cursorDot) {
        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    }

});


function animateCursor() {

    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;

    if (cursor) {
        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();



/* =================================
   FOLDER POPUPS
================================= */

const folders = document.querySelectorAll(".folder-card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");


/* OPEN FOLDER */

folders.forEach((folder) => {

    folder.addEventListener("click", () => {

        const modalId = folder.dataset.modal;
        const modal = document.getElementById(modalId);

        if (!modal) return;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});



/* =================================
   HOVER CURSOR
================================= */

folders.forEach((folder) => {

    folder.addEventListener("mouseenter", () => {

        if (!cursor) return;

        cursor.style.width = "70px";
        cursor.style.height = "70px";
        cursor.style.borderColor = "rgba(155,120,255,.8)";

    });


    folder.addEventListener("mouseleave", () => {

        if (!cursor) return;

        cursor.style.width = "38px";
        cursor.style.height = "38px";
        cursor.style.borderColor = "rgba(255,255,255,.5)";

    });

});



/* =================================
   CLOSE BUTTON
================================= */

closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        closeModal(button.closest(".modal"));

    });

});



/* =================================
   CLICK OUTSIDE MODAL
================================= */

modals.forEach((modal) => {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal(modal);

        }

    });

});



/* =================================
   ESC KEY
================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        const activeModal =
            document.querySelector(".modal.active");

        if (activeModal) {

            closeModal(activeModal);

        }

    }

});



/* =================================
   CLOSE MODAL
================================= */

function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}



/* =================================
   FOLDER 3D TILT
================================= */

folders.forEach((folder) => {

    folder.addEventListener("mousemove", (event) => {

        const rect = folder.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -4;

        const rotateY =
            ((x / rect.width) - 0.5) * 4;

        folder.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    folder.addEventListener("mouseleave", () => {

        folder.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});



/* =================================
   SPLASH SCREEN
================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



/* =================================
   TYPING ANIMATION
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const nameElement =
        document.getElementById("typing-name");

    const descriptionElement =
        document.getElementById("typing-description");


    /* ---------------------------------
       TEXT
    --------------------------------- */

    const nameText =
        "Joud Alotaibi";

    const descriptionText =
        " a Computer Science graduate with a passion for software development and a strong interest in artificial intelligence. I enjoy turning ideas into practical applications. I’m eager to apply what I’ve learned in a professional environment and continue developing my skills.";


    let nameIndex = 0;
    let descriptionIndex = 0;


    /* ---------------------------------
       TYPE NAME
    --------------------------------- */

    function typeName() {

        if (!nameElement) return;

        if (nameIndex < nameText.length) {

            nameElement.textContent +=
                nameText.charAt(nameIndex);

            nameIndex++;

            setTimeout(typeName, 120);

        } else {

            /* Wait before starting description */

            setTimeout(typeDescription, 500);

        }

    }


    /* ---------------------------------
       TYPE DESCRIPTION
    --------------------------------- */

    function typeDescription() {

        if (!descriptionElement) return;

        if (descriptionIndex < descriptionText.length) {

            descriptionElement.textContent +=
                descriptionText.charAt(descriptionIndex);

            descriptionIndex++;

            setTimeout(typeDescription, 25);

        }

    }


    /* ---------------------------------
       START
    --------------------------------- */

    /*
       Wait for splash screen first.
       Then type the name.
    */

    setTimeout(() => {

        typeName();

    }, 1800);

});