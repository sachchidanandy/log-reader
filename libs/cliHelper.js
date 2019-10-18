/**
 * Cli helper contains helper function for cli.
 * 
 * @file cliHelper.js
 * @author Sachchidanand
*/

// Dependency
import { DARK_BLUE_COLOR } from './appConstants';

//Draw horizontal line
export const horizontalLine = () => {
	//Get horizonal width of console
	const width = process.stdout.columns;
	// Create line
	let line = '';
	for (let index = 0; index < width; index++, line+= '-');
	console.log(line);
};
  
//Write given string into center
export const centered = (centeredString) => {
	let line = '';
	const padding = Math.round((process.stdout.columns - centeredString.length)/2);
	//Create padding
	for (let index = 0; index < padding; index++, line += ' ');
	line += centeredString;
	console.log(DARK_BLUE_COLOR, line);
};

//Create vertical space
export const verticalSpace = (verticalSpace) => {
	if (verticalSpace) {
		for (let index = 0; index < verticalSpace; index++, console.log(''));
	}
};
