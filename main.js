onload = () =>{
        document.body.classList.remove("container");
};

// simple floating particles
const body = document.body;

for (let i = 0; i < 30; i++) {
    const dot = document.createElement("div");
    dot.className = "particle";
    dot.style.left = Math.random() * 100 + "vw";
    dot.style.animationDuration = (Math.random() * 5 + 5) + "s";
    body.appendChild(dot);
}
