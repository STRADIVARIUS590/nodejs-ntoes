// #/usr/bin/env node
'use strict';
/**
 * los argumentos en linea de comandos con alamacenados en el arreglo process.argv 
 * [0] el path del ejecutable qye empezo en proceso de nodejs
 * [1] el path de la aplicacopn
 * [2-n] argumentos extra
 * Example: [ '/bin/node', '/path/to/yourscript', 'arg1', 'arg2', ... ]
 * src: https://nodejs.org/api/process.html#process_process_argv
 */

// almacena el primer atgumento como el username
var username = process.argv[2];
if(!username) {

    // extraer el nombre del archivo

    var appName = process.argv[1].split(require('path').sep()).pop();

    // carle al usuario un ejemplo de como usar la app
    console.error('Misssin argument! Example: %s YOUR_NAME', appName);
    process.exit(1);
}

console.log('Hello %s', username);