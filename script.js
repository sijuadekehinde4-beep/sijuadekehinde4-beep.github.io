// Navbar background on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 40) {
        nav.style.background = "rgba(15,15,19,0.95)";
    } else {
        nav.style.background = "#181820";
    }
});

// Scroll animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{
    observer.observe(section);
});
