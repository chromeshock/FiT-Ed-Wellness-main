/*scrolling up function*/
const arrowIcon = document.querySelector(".arrow-icon");

if (arrowIcon) {
    arrowIcon.addEventListener("click", () => {
        //scrolls up to top
        scrollToTop();
    });

    window.addEventListener("scroll", () => {
        toggleVisibility();
    });
} else {
    console.log("Class element 'arrow-icon' was not found")
}


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

//toggles icon visibility
const toggleVisibility = () => {
    if (arrowIcon) {
        if (window.scrollY > 200) {
            arrowIcon.style = "block";
        } else {
            arrowIcon.style.display = 'none';
        }
    }
};