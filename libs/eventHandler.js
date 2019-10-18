/**
 * Functions to handle events.
 * 
 * @file eventHandler.js
 * @author Sachchidanand
*/

// Dependency
import { horizontalLine, centered, verticalSpace } from './cliHelper';
import { description } from './cliCommands';
import { YELLOW_COLOR, DARK_BLUE_COLOR } from './appConstants';

// Handle help event
export const help = async () => {
    //Show the header of the manual
	horizontalLine();
	centered('CLI MANUAL');
	horizontalLine();
	verticalSpace(2);

	//Show each command followed by explainantin in white and yellow colour respectively
	for (const key in description) {
		if (description.hasOwnProperty(key)) {
			const value = description[key];
			const padding = 40 - key.length;
			let line = '';

			//Adding padding to the line
			for (let index = 0; index < padding; index++, line+= ' ');
			
			//Adding value to the line
			line+= value;
			console.log(YELLOW_COLOR, key, line);

			verticalSpace(1);
		}
	}
	//Add verical line at last
	horizontalLine();
};

export const exit = async () => {
    console.log(DARK_BLUE_COLOR, '\n Bye, Have a nice day!');
  	process.exit(0);
};

export const clientDisconnected = async () => {

};

export const averageLimitExceeded = async () => {

};

export const dropCountExceeded = async () => {

};
