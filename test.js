const { info, warn, error } = require('./index.js');

info("nombre de ejemplo", "¡Hola Mundo! ¡Esta es la función info!");
warn("nombre de ejemplo", "¡Hola Mundo! ¡Esta es la función warn!");
error("nombre de ejemplo", "¡Hola Mundo! ¡Esta es la función error!");

const { Logger } = require('./index.js');

let L = new Logger("nombre de ejemplo");

L.info("¡Hola Mundo! ¡Esta es la función info!");
L.warn("¡Hola Mundo! ¡Esta es la función warn!");
L.error("¡Hola Mundo! ¡Esta es la función error!");
