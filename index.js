/**
 * Entry point of the project.
 * 
 * @file index.js
 * @author Sachchidanand
*/

// Dependency
import _cli from './libs/cli';

// app module
const app = {};

app.init = async() => {
    // Start cli
    _cli.init();
}

app.init();
