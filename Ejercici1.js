// Definir variables que almacenen los siguientes datos:

// Un nombre: "Pepe"
// Una edad: 25
// Un precio: $99.90
// Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
// Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.


let nombre = "Pepe";
let edad = 25;
let precio = 99.9;
let seriesFav = ["Dark", " Mr Robot", "Castlevania"];
let peliculas = [
  {
    nombre: "Mision imposible: Sentencia Mortal - Parte Uno",
    año: 2023,
    protagonistas: ["Ethan Hunt", "Grace"],
  },
  {
    nombre: "Rapidos y Furiosos 7",
    año: 2017,
    protagonistas: ["Dominic Toretto", "Brian O'Conner"],
  },
  {
    nombre: "Bad Boys 4",
    año: 2024,
    protagonistas: ["Mike Lowrey", "Marcus Burnett"],
  },
];

// Mostrar todos esos valores por consola.

console.log("Nombre:", nombre);
console.log("Edad:",edad);
console.log("Precio:", precio);
console.log("Series Favoritas:", seriesFav);
console.log("Películas Favoritas:", peliculas);

// Incrementar la edad en 1 y volver a mostrarla.

edad += 1;
console.log("Nueva Edad:", edad);


// Agregar una serie a la lista de series favoritas y volver a mostrarla.

seriesFav.push("The Vampire Diaries");
console.log("Nueva serie favorita:", seriesFav);
