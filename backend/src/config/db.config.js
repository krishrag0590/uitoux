import mysql from "mysql";
import moment from "moment";
import { Logger } from "../helper/logger.js";

export class DBconn {
    constructor(){}

    setDBConnection() {
        let log = new Logger();
        return new Promise((resolve, reject) => {
            var connection = mysql.createConnection({
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'uitoux'
            });

            connection.connect(async function(err) {
                if (err) {
                    let errMessage = `${moment().format('YYYY-MM-DD hh:mm:ss')} Database error : ${err.message}`
                    await log.createLog(errMessage)
                    resolve({state: "FAILED", message: err.message})
                } else {
                    resolve(connection)
                }
            });
        })
    }
}