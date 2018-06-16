/// <reference path="../domain/Product.ts" />

/*
 * GET users listing.
 */
import express = require('express');

import { Domain } from '../domain/Product';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {

    let product1 = new Domain.Product();
    product1.name = "iPhone 8";

    let product2 = new Domain.Product();
    product2.name = "iPhone X";

    let product3 = new Domain.Product();
    product3.name = "iPhone 7";

    var products: Domain.Product[] = new Array(3);
    products[0] = product1;
    products[1] = product2;
    products[2] = product3;

    res.send(JSON.stringify(products));
});

export default router;