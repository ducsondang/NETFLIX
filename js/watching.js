function btWatching() {
    let h = document.getElementById('bt-watch-acti')
    if (h.innerHTML == "xem thêm") {
        document.getElementById("watch-acti-boottom").style.display = "block";
        h.innerHTML = "ẩn"
    } else {
        document.getElementById("watch-acti-boottom").style.display = "none";
        h.innerHTML = "xem thêm"
    }
}

// let btest = document.getElementsByClassName("Btall")
// btest.addEventListener('click', function onClick() {
//     console.log(this)
//     // btest.style.backgroundColor = 'salmon';
//     // btest.style.color = 'white';
// });
const btn = document.querySelectorAll(".Btall");
for (let c of btn) {
    for (let v of btn) {
        if (v != c) {
            c.addEventListener('click', function onClick() {
                v.classList.remove("colorInput")
            });
        }
    }
    c.addEventListener('click', function onClick() {
        c.classList.add("colorInput")
    });
}

