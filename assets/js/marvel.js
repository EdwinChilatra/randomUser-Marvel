/**

 * MD5
 * TS: 1000
 * private key: abcde
 * public key: 12345
 * private_key
 * 1000abcde12345
 * 1000a243134a57aabb9712b4fcc9a0d2e29d9afad7e2
 * 
 */

// 1000a243134a57aabb9712b4fcc9a0d2e29d9afad7e2c25714cd69d137ec91db8032d302435c

let public_key = 'c25714cd69d137ec91db8032d302435c';
let private_key = 'a243134a57aabb9712b4fcc9a0d2e29d9afad7e2'
let hash = '3e1bf0bf081d2c2b67e9b5824885494a';
// let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=cap&apikey=${public_key}&ts=1000&hash=${hash}`;

// async function marvel(){
//     let response = await fetch(url);
//     let data = await response.json();
//     let results = data.data.results;
//     console.log(results);
//     results.map(item => {
//         let img = document.createElement('img');
//         img.src = item.thumbnail.path + "." + item.thumbnail.extension;
//         document.body.append(img);
//     })
// }
// marvel()

let input = document.getElementById('buscar');
let buscar = document.getElementById('boton-busqueda');
let limpiar = document.getElementById('limpiar-busqueda');
let informacionResultado = document.getElementById('resultados');

buscar.addEventListener('click', Marvel);
limpiar.addEventListener('click', limpiarBusqueda);

function Marvel(){

    // Encadenamiento de promesas
    let busqueda = input.value;
    let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${busqueda}&apikey=${public_key}&ts=1000&hash=${hash}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            informacionResultado.innerHTML = '';
            
            let results = json.data.results;
            results.map(item => {
                let img = document.createElement('img');
                img.src = item.thumbnail.path + '.' + item.thumbnail.extension;
                img.classList.add('imagenes');
                informacionResultado.appendChild(img);
                
                let name = document.createElement('h3');
                name.textContent = item.name;
                informacionResultado.appendChild(name);
            });
        })
}

function limpiarBusqueda() {
    informacionResultado.innerHTML = '';
    input.value = '';
}
// Crear un imput donde se reciba las letras con las que quiere que haga la busqueda y mostrar imagen de acuerdo al resultado y h3 para colocar nombre del personaje y un clear para limpiar preguntas

