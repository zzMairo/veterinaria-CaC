function cargar_api(){
    const seccion = document.getElementById("image-api");
    const name = document.getElementById("dato-name");
    const bred_for = document.getElementById("dato-bred-for");
    const life_span = document.getElementById("dato-life-span");
    const temperament= document.getElementById("dato-temperament");
    
    var num = Math.ceil(Math.random()*172);
    seccion.innerHTML = "<p>°°°</p>"

    fetch("https://api.thedogapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => {
        seccion.innerHTML =`<img src="${data[num].image.url}" class="img-api-size">`

        name.innerHTML = data[num].name
        bred_for.innerHTML =data[num].bred_for
        life_span.innerHTML = data[num].life_span
        temperament.innerHTML = data[num].temperament
    })


} 

