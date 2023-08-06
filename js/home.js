function loadMovie(cate) {
    fetch("data/movie.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            if (c.category == cate.id) {
                h += `
            <a class="rowContainer" href="#">
                <img src="./img/${c.image}.jpg" alt="uoc gi duoc nay">
                <div class="itembot">
                    <div class="rowButton">
                        <button><i class='bx bx-play-circle'></i></button>
                        <button><i class='bx bx-like'></i></button>
                        <button><i class='bx bx-chevron-down-circle'></i></button>
                    </div>
                    <div class="rowConten">${c.name}</div>
                </div>
            </a>`;
            }
        }
        render("rowMovie", h);
        // Cách 1
        // let d = document.getElementById("menu");
        // d.innerHTML += h;

        // Cách 2
        // let d = document.querySelector("#menu :first-child");
        // d.insertAdjacentHTML("afterend", h);
    })

}
function render(idDiv, h) {
    let d = document.getElementById(idDiv);
    d.innerHTML += h;
}
function loadCates() {
    fetch("data/categories.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h += ` <div class="rowHeader">
            <h2>${p.name}</h2>
        </div>
        <div class="flex rowMovie" id="rowMovie">
        </div>`;
            let d = document.getElementById("loloMovie");
            d.innerHTML = h;
            loadMovie(p);
        }

    })

}
window.onload = function () {
    loadCates();
}