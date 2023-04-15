// Registra un mensaje de información en la consola.
export function info(name: string, texto: string): void;

// Registra un mensaje de advertencia en la consola.
export function warn(name: string, texto: string): void;

// Registra un mensaje de error en la consola.
export function error(name: string, texto: string): void;


/**
  * Una clase de registrador que siempre mantiene su nombre.
  * Útil para el registro multiproceso/tarea.
  */
export class Logger {
    constructor(name: string);
    name: string

    // Modifica el nombre de la clase.
    setNombre(name: string): void;

    // Registra un mensaje de información con el nombre especificado en la clase.
    info(texto: string): void;

    // Registra un mensaje de advertencia con el nombre especificado en la clase.
    warn(texto: string): void;

    // Registra un mensaje de error con el nombre especificado en la clase.
    error(texto: string): void;
}