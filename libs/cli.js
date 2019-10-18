/**
 * Cli module.
 * 
 * @file cli.js
 * @author Sachchidanand
*/

//Dependency
import { DARK_BLUE_COLOR, GREEN_COLOR, RED_COLOUR } from './appConstants';
import readLine from 'readline';
import { commandsList } from './cliCommands';
import  events from 'events';
import { help, exit, clientDisconnected, averageLimitExceeded, dropCountExceeded } from './eventHandler';


// cli module
const cli = {};

// Creating instance of event class
class e extends events{};
const _events = new e();

// Event handler
_events.on('help', () => {
    help();
});

_events.on('exit', () => {
    exit();
});

_events.on('client_disconnected', command => {
    clientDisconnected(command);
});

_events.on('average_limit_exceeded', command => {
    averageLimitExceeded(command);
});

_events.on('drop_count_exceeded', command => {
    dropCountExceeded(command);
});

//Input processors to process command and emit an event
const processInput = inputCommand => {
    inputCommand = typeof(inputCommand) === 'string' && inputCommand.trim().length > 0 ? inputCommand.trim() : false;

    //Validate the input
    if (inputCommand) {
        let matchFound = commandsList.some( command => {
            if (inputCommand.toLowerCase().indexOf(command) > -1) {
                //Emit an event
                _events.emit(command, inputCommand);
                return true;
            }
        });

        if (!matchFound) {
			console.log(RED_COLOUR, 'Sorry, invalid command try again');
        }
    }
};

//Init cli
cli.init = async() => {
    //Sent start message to the console, in dark blue
    console.log(DARK_BLUE_COLOR, 'Please type "help" to know commands.');

    //Start the interface
    const _interface =  readLine.createInterface({
        input : process.stdin,
        output : process.stdout,
        prompt : '>'
    });

    //Create an initial prompt
    _interface.prompt();

    //Read input from cli
    _interface.on('line', inputCommand => {
        //Call processors to process input
        processInput(inputCommand);

        //Re initialize prompt
        _interface.prompt();
    });

    //If the user stops the cli
    _interface.on('close', () => {
        console.log(GREEN_COLOR, '\n Bye, Have a nice day!');
        process.exit(0);
    });
};

export default cli;
