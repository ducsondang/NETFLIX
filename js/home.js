
var phim = [];
function loadMovie(cate) {
    fetch("data/movie.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            if (c.category == cate.id) {
                phim.push(c);
                h += `
                <a class="rowContainer" onclick="getMovie(${c.id})">
                    <img src="./img/${c.image}.jpg" alt="${c.description}" >
                    <div class="itembot">
                        <div class="rowConten"><p class="name-movie">${c.name}</p>
                        <p></p>
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
}
var movieWatching = []
function getMovie(id) {
    for (c of phim) {
        if (c.id == id) {
            movieWatching[0] = c;
            if (window.location != "http://127.0.0.1:5501/wachingmovie.html") {
                dieu_huong("./wachingmovie.html");
                loadingMovie(c.id);
            } else {
                loadingMovie(c.id);
            }
            console.log(movieWatching)
        }
    }
}
function loadingMovie(movie) {
    for (c of phim) {
        if (c.id == movie) {
            document.getElementById("left").innerHTML = `
            <iframe class="movie" src=${c.url} title="Sơ đồ lớp (class diagram)" target="_parent" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
                <div class="nameMovie">
                        <h1>${c.name}</h1>
                    </div>
                <div class="watch-acti">
                    <div class="watch-acti-top">
                        <span>1930 lượt xem</span>
                        <span> 15/8/2023</span>
                        <p class="name-movie ">Chuyến tàu sinh tử</p>
                    </div>
                    <div class="watch-acti-boottom" id="watch-acti-boottom">
                        <span>${c.description}
                        </span>
                    </div>
                    <button class="bt-watch-acti" id="bt-watch-acti" type="button" onclick="btWatching()">xem
                        thêm</button>
                </div>`
        }
    }

}
// điều hướng trang
function dieu_huong(url) {
    location.assign(url);
}

//render giao dien
function render(idDiv, h) {
    let d = document.getElementById(idDiv);
    d.innerHTML += h;
}

//lấy dữ liệu category
//tìm kiếm phim
function movieSearch() {
    let k = document.getElementById("kw")
    if (k != null) {
        k = k.value;
        for (c of phim) {
            if (removeVietnameseTones(c.name).indexOf(removeVietnameseTones(k)) >= 0) {
                renderMovieSearch(c.name);
            }
        }
    }
}
//render phim tìm kiếm
function renderMovieSearch(name) {
    for (c of phim) {
        document.getElementById("movie-search").style.paddingTop = "200px"
        document.getElementById("hero").style.display = "none";
        document.getElementById("movies").style.display = "none";
        document.getElementById("movie-search").style.display = "block";
        if (c.name == name) {

            let h = `<a class="rowContainer" onclick="getMovie(${c.id})">
            <img src="./img/${c.image}.jpg" alt="${c.description}" >
            <div class="itembot">
                <div class="rowConten"><p class="name-movie">${c.name}</p>
                <p></p>
                </div>
                <div class="rowButton">
                    <button><i class='bx bx-play-circle'></i></button>
                    <button><i class='bx bx-like'></i></button>
                    <button><i class='bx bx-chevron-down-circle'></i></button>
                </div>
            </div>
        </a>`
            document.getElementById("rowMovie-search").innerHTML = h;
        }
    }
}
//tắt mở volume
var checkVolum = true;
function volumeControl() {
    if (checkVolum == true) {
        document.getElementById("volume").classList.remove("bx-volume-mute");
        document.getElementById("volume").classList.add("bx-volume-full");
        checkVolum = false;
        document.getElementById("heroVideoBg").muted = "";
    } else {
        document.getElementById("heroVideoBg").muted = "muted";
        document.getElementById("volume").classList.add("bx-volume-mute");
        document.getElementById("volume").classList.remove("bx-volume-full");
        console.log("hihi")
        checkVolum = true;
    }
}

//hiden from search
window.addEventListener('click', function (e) {
    let h = this.document.getElementById("iconSearch");
    let button = this.document.getElementById("btSeacrh");
    if (document.getElementById('iconSearch').contains(e.target)) {
        h.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        h.style.width = "250px"
        h.style.border = "1px white solid"
        setTimeout(function () {
            document.getElementById("kw").style.display = "inline-block"
        }, 500);
        button.style.display = "inline-block"
    } else {
        h.style.backgroundColor = "rgba(0, 0, 0, 0.0)"
        h.style.border = "none"
        h.style.width = "30px"
        button.style.display = "none"
        document.getElementById("kw").style.display = "none"
    }
});
// scoll
var position = document.getElementById('header');
window.addEventListener("scroll", function (event) {

    var scroll_y = this.scrollY;
    // console.log(scroll_x, scroll_y);
    if (scroll_y > 30) {
        position.classList.remove("discolorationNone");
        position.classList.add('discoloration');
    } if (scroll_y <= 30) {
        position.classList.remove('discoloration');
        position.classList.add("discolorationNone");
    }
});
// cover chuoi
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/H/g, "h");
    str = str.replace(/A/g, "a");
    str = str.replace(/B/g, "b");
    str = str.replace(/C/g, "c");
    str = str.replace(/D/g, "h");
    str = str.replace(/E/g, "e");
    str = str.replace(/G/g, "g");
    str = str.replace(/I/g, "i");
    str = str.replace(/K/g, "k");
    str = str.replace(/L/g, "l");
    str = str.replace(/M/g, "m");
    str = str.replace(/N/g, "n");
    str = str.replace(/O/g, "o");
    str = str.replace(/P/g, "p");
    str = str.replace(/Q/g, "q");
    str = str.replace(/R/g, "r");
    str = str.replace(/S/g, "s");
    str = str.replace(/T/g, "t");
    str = str.replace(/U/g, "u");
    str = str.replace(/V/g, "v");
    str = str.replace(/X/g, "x");
    str = str.replace(/Y/g, "y");

    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
}
const toTop = document.querySelector(".toTop")
function backToTop() {
    toTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
}
backToTop();
