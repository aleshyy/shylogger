"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
function fecha() {
    var d = new Date();
    var hr = d.getHours();
    var mn = d.getMinutes();
    var sc = d.getSeconds();
    if (hr < 10)
        hr = parseInt("0".concat(hr));
    if (mn < 10)
        mn = parseInt("0".concat(mn));
    if (sc < 10)
        sc = parseInt("0".concat(sc));
    return "".concat(hr, ":").concat(mn, ":").concat(sc);
}
function info(nombre, texto) {
    console.log("".concat((0, chalk_1.blue)("[".concat(fecha(), "]")), " ").concat((0, chalk_1.bgCyan)('INFO '), " [").concat((0, chalk_1.bold)(nombre), "] ").concat(texto));
}
function warn(nombre, texto) {
    console.log("".concat((0, chalk_1.blue)("[".concat(fecha(), "]")), " ").concat((0, chalk_1.bgYellow)('WARN '), " [").concat((0, chalk_1.bold)(nombre), "] ").concat(texto));
}
function error(nombre, texto) {
    console.log("".concat((0, chalk_1.blue)("[".concat(fecha(), "]")), " ").concat((0, chalk_1.bgRed)('ERROR'), " [").concat((0, chalk_1.bold)(nombre), "] ").concat(texto));
}
/**
  * Una clase de registrador que siempre mantiene su nombre.
  * Útil para el registro multiproceso/tarea.
  */
var Logger = /** @class */ (function () {
    function Logger(nombre) {
        this.nombre = nombre;
    }
    Logger.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Logger.prototype.info = function (texto) {
        console.log("".concat((0, chalk_1.blue)("[".concat(fecha(), "]")), " ").concat((0, chalk_1.bgCyan)('INFO '), " [").concat((0, chalk_1.bold)(this.nombre), "] ").concat(texto));
    };
    Logger.prototype.warn = function (texto) {
        console.log("".concat((0, chalk_1.blue)("[".concat(fecha(), "]")), " ").concat((0, chalk_1.bgYellow)('WARN '), " [").concat((0, chalk_1.bold)(this.nombre), "] ").concat(texto));
    };
    Logger.prototype.error = function (texto) {
        console.log("".concat((0, chalk_1.blue)("[".concat(fecha(), "]")), " ").concat((0, chalk_1.bgRed)('ERROR'), " [").concat((0, chalk_1.bold)(this.nombre), "] ").concat(texto));
    };
    return Logger;
}());
module.exports = { info: info, warn: warn, error: error, Logger: Logger };
