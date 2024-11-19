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
router.get('/productDetails', async (req: Request, res: Response, next: (e: Error) => void): Promise<any> => {
    
});

export default router;