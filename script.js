let carousels = ['#trending-carousel', '#watchagain-carousel', '#newreleases-carousel'];

carousels.forEach((carousel) => {
    let items = document.querySelectorAll(`${carousel} > .carousel-item`);
    items.forEach((e) => {
        const slide = 6;
        let next = e.nextElementSibling;
        for (let i = 0; i < slide; i++) {
            if (!next) {
                next = items[0];
            }
            let clonechild = next.cloneNode(true);
            e.appendChild(clonechild.children[0]);
            next = next.nextElementSibling;
        }
    });
});

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// PROVO UN'ALTRO SCIRPT PERCHè NON CAPISCO SE FUNZIONA

// Selezione dell'elemento HTML
const extraArea = document.getElementById("extraarea");

// Funzione per mostrare la sezione
function showExtraArea() {
  extraArea.classList.remove("hidden");
}

// Funzione per nascondere la sezione
function hideExtraArea() {
  extraArea.classList.add("hidden");
}

// Event listener per la scroll event
window.addEventListener("scroll", (event) => {
  // Verifica se la sezione è visibile
  if (extraArea.classList.contains("hidden")) {
    // Se sì, mostrala
    showExtraArea();
  } else {
    // Se no, nascondila
    hideExtraArea();
  }
});
