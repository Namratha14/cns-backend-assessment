import { Router, Request, Response } from 'express';
import { getProducts, getProductDetails } from '../lib/products';

const router: Router = Router();

router.get('/products', async (req: Request, res: Response, next: (e: Error) => void): Promise<any> => {
    try{
        const products = await getProducts();
         res.render('index', {products})
         //res.json({message: products})
    }catch(error){
        //either console or throw error
        console.error('Error fetching products:', error);
        //pass error to express
        next(error)
    }
});
router.get('/productDetails/:productId', async (req: Request, res: Response, next: (e: Error) => void): Promise<any> => {
    try{
        const productId = req.params.productId;
        const productsDetails = await getProductDetails(productId);
        //pretty print
        res.type('json').send(JSON.stringify(productsDetails, null, 2));
    }catch(error){
        //either console or throw error
        console.error('Error fetching products details:', error);
        //pass error to express
        next(error)
    }
});

export default router;