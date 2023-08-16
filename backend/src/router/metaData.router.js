import { Router } from "express";
const metaDataRouter = Router()

import { MetaData } from "../controller/metaData.controller.js";

metaDataRouter.get('/', (req, res) => {
    let metaData = new MetaData();
    metaData.getMetaData(req, res)
});

metaDataRouter.post('/featured_products', (req, res) => {
    let metaData = new MetaData();
    metaData.getFeaturedProducts(req, res)
});

metaDataRouter.get('/get_products_by_category', (req, res) => {
    let metaData = new MetaData();
    metaData.getProductsByCategory(req, res)
});

export default metaDataRouter