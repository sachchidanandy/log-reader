/**
 * Cli commands and there description.
 * 
 * @file cliCommands.js
 * @author Sachchidanand
*/

export const commandsList = [
    'help',
    'exit',
    'client_disconnected',
    'average_limit_exceeded',
    'drop_count_exceeded'
];

export const description = {
    'exit' : 'Kill the CLI (and the rest of the application)',
    'help' : 'Show this help page',
    'client_disconnected --{to} --{from}' : 'List down number of client Disconnects for that computer name',
    'average_limit_exceeded --{to} --{from}' : 'List down number of Average Count limit exceeded for that computer',
    'drop_count_exceeded --{to} --{from}' : 'List down  number of Drop Count limit exceeded for that computer',
    'NOTE' : 'Date should be in MM/DD/YYY formate.'
};
