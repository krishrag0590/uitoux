import { DBconn } from "../../config/db.config.js";
import moment from "moment";
import { Logger } from "../../helper/logger.js";

export class SelectQuery {
    constructor() {}

    async getResultSet(query) {
        let dBconn = new DBconn()
        let log = new Logger();
        let conn = await dBconn.setDBConnection()
        return new Promise((resolve, reject) => {
            conn.query(query, async function (error, results) {
                if (error) {
                    let errMessage = `${moment().format('YYYY-MM-DD hh:mm:ss')} Database query error : ${error}`
                    await log.createLog(errMessage)
                    throw error
                } else {
                    resolve(results)
                }
            });
            conn.end();
        })
    }
}