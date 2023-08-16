import express from 'express';
const app = express()
const PORT = 5005

app.use(express.static('src'));
app.use('/src/images', express.static('images'));

import bodyParser from "body-parser";

import metaDataRouter from "./router/metaData.router.js";
import { DBconn } from "./config/db.config.js";
let dBconn = new DBconn()
let conn = await dBconn.setDBConnection()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/get_meta_data', metaDataRouter)


app.get('/', (req, res) => {
    res.send({"message": "Server created successfully"})
})

app.listen(PORT, () => {
    console.log(`App listening PORT http://localhost:${PORT}`)
    if(conn.state != "FAILED") {
        console.log('Database connection established');
    } else {
        console.log(`Database connection failed. Due to ${conn.message}`);
    }
})