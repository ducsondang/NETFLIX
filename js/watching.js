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

