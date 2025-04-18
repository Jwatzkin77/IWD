const menuBtn = document.querySelector("#menuBtn");
const openIcon = document.querySelector("#openIcon");
const closeIcon = document.querySelector("#closeIcon");
const mobileNav = document.querySelector("#mobileNav");
const mobileLinks = mobileNav.querySelectorAll("a");

function toggleMenu() {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    
    menuBtn.setAttribute("aria-expanded", !isExpanded);

    mobileNav.setAttribute("aria-hidden", isExpanded);

    if (!isExpanded) {
        closeIcon.computedStyleMap.display = "block";
        openIcon.computedStyleMap.display = "none";
        mobileNav.classList.add("open");
    } else {
        closeIcon.computedStyleMap.display = "none";
        openIcon.computedStyleMap.display = "block";
        mobileNav.classList.remove("open");
    }
}

menuBtn.addEventListener("click", () => {
    toggleMenu();
});

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (mobileLinksNav.classList.contains("open")) {
            toggleMenu();
        }
        
    });
});

