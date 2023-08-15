// lấy dữ liệu phim
function loadData() {
}
function loadMovie(cate) {
    fetch("data/movie.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            if (c.category == cate.id) {
                h += `
            <a class="rowContainer">
                <img src="./img/${c.image}.jpg" alt="${c.description}" >
                <div class="itembot">
                    <div class="rowConten"><p class="name-movie">${c.name}</p>
                    <p>${c.description}</p>
                    </div>
                    <div class="rowButton">
                        <button><i class='bx bx-play-circle'></i></button>
                        <button><i class='bx bx-like'></i></button>
                        <button><i class='bx bx-chevron-down-circle'></i></button>
                    </div>
                </div>
            </a>`;
            }
        }
        render(`rowMovie-${cate.id}`, h);


        // Cách 1
        // let d = document.getElementById("menu");
        // d.innerHTML += h;

        // Cách 2
        // let d = document.querySelector("#menu :first-child");
        // d.insertAdjacentHTML("afterend", h);
    })

}
// điều hướng trang
function dieu_huong(url) {
    location.replace("./wachingmovie.html");
    loadingMovie(url)
}

// render movie
function main() {
}
function loadingMovie(c) {
    // var loadcateHref = loadCates.href;
    // if (`${loadcateHref}` == "http://127.0.0.1:5501/wachingmovie.html") {
    let h = `
    <div class="nameMovie">
                    <h1>${c.name}</h1>
                </div>
        <iframe class="movie" src=${c.url} title="Sơ đồ lớp (class diagram)" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe></iframe>`
    let d = document.getElementById("left");
    d.innerHTML = h
    // }


}
//render giao dien
function render(idDiv, h) {
    let d = document.getElementById(idDiv);
    d.innerHTML += h;
}
//lấy dữ liệu category
function loadCates() {
    fetch("data/categories.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h += `<div class="lolomorow padding" id="loloMovie-${p.id}">
            <div class="rowHeader">
            <h2>${p.name}</h2>
        </div>
        <div class="flex rowMovie" id="rowMovie-${p.id}">
        </div></div>`;
            loadMovie(p);
            let d = document.getElementById(`movies`);
            d.innerHTML = h;
        }

    })

}
window.onload = function () {
    loadCates();
    main();
}
const toTop = document.querySelector(".toTop")
function backToTop(){
    toTop.addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    })
}
backToTop();