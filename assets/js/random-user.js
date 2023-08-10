let url = 'https://randomuser.me/api/';

let nombre = null;
let email = null; 
let edad = null; 
let ubicacion = null; 
let telefono = null; 
let clave = null; 

let text = document.getElementById('text');
let dato = document.getElementById('data');

async function getUser() {
    let response = await fetch(url);
    let data = await response.json();
    let results = data.results[0];
    console.log(results)

    let img = document.getElementById('img');
    img.src = results.picture.large;
    img.classList.add('avatar');

    nombre = results.name.first + " " + results.name.last;
    email = results.email;
    edad = results.registered.age;
    ubicacion = results.location.street.number + "" + results.location.street.name;
    telefono = results.phone;
    clave = results.login.password;
};
getUser();


function getName() {
    text.innerHTML = "Hi, My name is";
    dato.innerHTML = nombre;
};
getName();

function getEmail(){
    text.innerHTML = "My email address is";
    dato.innerHTML = email;
};
getEmail();

function getAge(){
    text.innerHTML = "My Age is";
    dato.innerHTML = edad;
};
getAge();

function getLocation() {
    text.innerHTML = "My address is";
    dato.innerHTML = ubicacion;
};
getLocation();

function getPhone() {
    text.innerHTML = "My phone number is";
    dato.innerHTML = telefono;
};
getPhone();


function getPassword() {
    text.innerHTML = "My password is";
    dato.innerHTML = clave;
};
getPassword();

