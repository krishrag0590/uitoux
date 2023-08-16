import { SelectQuery } from "../helper/queries/select.queries.js";
import statuscode from "../helper/statuscode.js";
import moment from "moment";
import { Logger } from "../helper/logger.js";

export class MetaData {
    constructor() {}

    async getMetaData(req, res) {
        let log = new Logger();
        try {
            let selectQuery = new SelectQuery();
            let respObj = {}
            respObj["currency"] = []
            respObj["language"] = []

            let rsCur = await selectQuery.getResultSet(`SELECT * FROM site_currency`)
            if(rsCur.length > 0) {
                respObj["currency"] = rsCur
            }

            let rsLang = await selectQuery.getResultSet(`SELECT * FROM site_language`)
            if(rsLang.length > 0) {
                respObj["language"] = rsLang
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(statuscode.SUCCESS).send(respObj)
        } catch (err) {
            let errObj = {"message": err}
            let errMessage = `${moment().format('YYYY-MM-DD hh:mm:ss')} : GET META DATA ${errObj}.`
            await log.createLog(errMessage)
        }
    }

    async getFeaturedProducts(req, res) {
        let log = new Logger();
        res.setHeader('Access-Control-Allow-Origin', '*');
        let baseUrl = 'http://localhost:5005'
        try {
            let selectQuery = new SelectQuery();
            let tool_type_id = req.query.tool_type_id
            if(tool_type_id) {
                let rs
                if(tool_type_id == -1) {
                    rs = await selectQuery.getResultSet(`SELECT sttm.product_id, sp.serial_no, sp.name product_name, sp.product_value, COUNT(spr.id) no_of_reviews, concat('${baseUrl}/images/', sp.image) image FROM site_tool_types_mapping sttm INNER JOIN site_products sp ON sp.id = sttm.product_id INNER JOIN site_product_reviews spr ON spr.product_id = sttm.product_id GROUP BY sttm.product_id;`)
                } else {
                    rs = await selectQuery.getResultSet(`SELECT sttm.product_id, sp.serial_no, sp.name product_name, sp.product_value, COUNT(spr.id) no_of_reviews, concat('${baseUrl}/images/', sp.image) image FROM site_tool_types_mapping sttm INNER JOIN site_products sp ON sp.id = sttm.product_id INNER JOIN site_product_reviews spr ON spr.product_id = sttm.product_id WHERE sttm.tool_types_id = ${tool_type_id} GROUP BY sttm.product_id;`)
                }
                if(rs.length > 0) {
                    res.status(statuscode.SUCCESS).send(rs)
                } else {
                    res.status(statuscode.SUCCESS).send([])
                }
            } else {
                let errMessage = `${moment().format('YYYY-MM-DD hh:mm:ss')} Query params missing error : Tool type id missing from request.`
                await log.createLog(errMessage)
                res.status(statuscode.BADREQUEST).send({"message": "Tool type id missing."})
            }
        } catch (err) {
            let errObj = {"message": err}
            let errMessage = `${moment().format('YYYY-MM-DD hh:mm:ss')} : GET FEATURED PRODUCTS ${errObj}.`
            await log.createLog(errMessage)
        }
    }

    async getProductsByCategory(req, res) {
        let log = new Logger();
        try {
            let selectQuery = new SelectQuery();
            let respObj = {}
            let baseUrl = 'http://localhost:5005'
            let rsProductCategory = await selectQuery.getResultSet(`SELECT name FROM site_product_category`)
            let rsProductList = await selectQuery.getResultSet(`SELECT spc.name product_category_name, sp.name product_name, sp.product_value, count(spr.id) no_of_reviews, concat('${baseUrl}/images/', sp.image) image FROM site_product_category_mapping spcm INNER JOIN site_product_category spc ON spc.id = spcm.product_category_id INNER JOIN site_products sp ON sp.id = spcm.product_id INNER JOIN site_product_reviews spr ON spr.product_id = spcm.product_id GROUP BY spcm.product_id;`)
            if(rsProductList.length > 0) {
                for(let i in rsProductCategory) {
                    let productList = rsProductList.filter(x => x.product_category_name == rsProductCategory[i].name)
                    if(productList.length > 0) {
                        respObj[rsProductCategory[i].name.toLowerCase().replaceAll(/ /g, '_')] = productList
                    } else {
                        respObj[rsProductCategory[i].name.toLowerCase().replaceAll(/ /g, '_')] = []
                    }
                }
            } else {
                for(let i in rsProductCategory) {
                    respObj[rsProductCategory[i].name.toLowerCase().replaceAll(/ /g, '_')] = []
                }
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(statuscode.SUCCESS).send(respObj)
        } catch (err) {
            let errObj = {"message": err}
            let errMessage = `${moment().format('YYYY-MM-DD hh:mm:ss')} : GET PROJECTS BY CATEGORY ${errObj}.`
            await log.createLog(errMessage)
        }
    }
}