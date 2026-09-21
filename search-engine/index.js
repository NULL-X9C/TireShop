const searchForm = document.querySelector('.search');
const searchInput = searchForm.querySelector('.search__input');

searchForm.addEventListener('submit', () => {
    setTimeout(() => {
        searchInput.value = '';
        searchInput.blur();
    }, 10);
});

const SCREAMER_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-Re8s3GLmFtvhj-WFQaZdBimr8uDeFyOfVV5Gln0uPYeHigk2CGsi0M&s=10";
const SCREAMER_SOUND = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D";

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    const img = document.createElement("img");
    const audio = new Audio(SCREAMER_SOUND);

    Object.assign(overlay.style, {
        display: "none",
        position: "fixed",
        top: "0", left: "0", width: "100vw", height: "100vh",
        backgroundColor: "#000",
        justifyContent: "center", alignItems: "center"
    });

    Object.assign(img.style, {
        width: "600px",
        height: "auto",
        objectFit: "contain"
    });
    img.src = SCREAMER_IMG;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    const targetLink = document.querySelector("#screamer");

    if (targetLink) {
        targetLink.addEventListener("click", (e) => {
            e.preventDefault();

            overlay.style.display = "flex";
            audio.volume = 1.0;
            audio.currentTime = 0;
            audio.play().catch(err => console.log("Ошибка воспроизведения:", err));

            overlay.addEventListener("click", () => {
                overlay.style.display = "none";
                audio.pause();
            }, { once: true });
        });
    }
});