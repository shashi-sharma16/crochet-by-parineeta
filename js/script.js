console.log("Parineeta's Crochet Loaded Successfully!");

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {

    faq.querySelector(".faq-question").addEventListener("click", () => {

        faqs.forEach(item => {

            if(item !== faq){
                item.classList.remove("active");
            }

        });

        faq.classList.toggle("active");

    });

});

// =============================
// Active Navigation on Scroll
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", function(e){

    e.preventDefault();

    moreText.classList.toggle("show");

    if(moreText.classList.contains("show")){

        readMoreBtn.textContent = "Read Less";

    }else{

        readMoreBtn.textContent = "Read More";

    }

});

//==============================
// MOBILE MENU
//==============================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});

document.querySelectorAll(".navbar ul a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

//=====================================
// LIGHTBOX
//=====================================

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const galleryImages = document.querySelectorAll(".polaroid img");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImg.src=image.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});