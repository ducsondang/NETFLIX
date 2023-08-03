
function loadProduct() {
    fetch("product/home.json").then(res => res.json()).then(product=>{
        let h= "";
        for(let b of product)
        h += `<li><a href="#">${b.name}</a></li>`;

        let d=document.getElementById("menu flex ");
         d.innerHTML += h;
    })
}
window.onload= function(){
    loadProduct();
}