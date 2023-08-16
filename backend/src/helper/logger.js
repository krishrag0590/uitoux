import fs from "fs";

export class Logger {
    constructor(){}

    async createLog(message) {
        fs.appendFile('log.txt', `${message}\n`, function(err) {
            if (err) { return console.error(err); } 
            else { return true; }
        });
    }
}