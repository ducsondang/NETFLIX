function loadUser() {
    fetch("data/users.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            h += `<a class="user" href="/home.html">
                <div class="imgUser"><img src="./img/${c.image}.png" alt="dai dien"></div>
                <p class="userName">${c.name}</p>
            </a>`;
        }
        let d = document.getElementById("users");
        d.innerHTML = h;
        // Cách 1
        // let d = document.getElementById("menu");
        // d.innerHTML += h;

        // Cách 2
        // let d = document.querySelector("#menu :first-child");
        // d.insertAdjacentHTML("afterend", h);
    })

}
window.onload = function () {
    loadUser();
}