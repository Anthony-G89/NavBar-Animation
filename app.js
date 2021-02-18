const section = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
    "linear-gradient(to right, #061161, #780206)",
    "linear-gradient(to right, #7B920A, #ADD100)",
    "linear-gradient(to bottom, #ffc500, #c21500)"
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);


// oberserving where we are on the page
section.forEach(section => {
    observer.observe(section);
});

// receiving the entry on where we're on the page
function navCheck(entries) {
    entries.forEach(entry => {
        // console.log(entry);
        const className = entry.target.className;
        // console.log(className);
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
};