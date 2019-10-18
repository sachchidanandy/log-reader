/**
 * Contains functions related to file handling.
 * 
 * @file fileHandler.js
 * @author Sachchidanand
*/

// Dependency
import util from 'util';
import fileSystem from 'fs';
import childProcess from 'child_process';

const exec = util.promisify(childProcess.exec);

// Fetch all file names in the folder
export const getfileList = async (folderPath) => {
    let fileList = [];
    try {
        fileList = fileSystem.readdirSync(folderPath, 'utf-8');
    } catch (error) {
        console.log(error.message);
    }
    return fileList.length > 0 ? fileList : false;
};

// Get list of lines which match to given stringToSearch
export const grepFile = async (filePath='', stringToSearch='') => {
    let filteredLines = [];
    try {
        const cmd = `egrep '${stringToSearch.toString().trim()}' ${filePath}`;
        console.log(cmd);
        const { stdout, stderr } = await exec(cmd);
        filteredLines = !stderr && stdout.length > 0 ? stdout.split('\n') : false;
    } catch (error) {
        console.log(error.message);
    }
    return filteredLines.slice(0, (filteredLines.length - 1));
};
