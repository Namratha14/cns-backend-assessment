
import axios from "axios";
import { Product, ProductDetails } from "../types/productTypes";

/**
 * This function should contain code to retrieve the product data
 * @returns <Promise>
 */
export async function getProducts(): Promise<Product[]> {
    const url: string = 'https://api.commbank.com.au/public/cds-au/v1/banking/products';
    const headers = { 'x-v': 3 };
    try{
        const response = await axios.get(url, { headers });
        const { data: { products } } = response.data;
        return products;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error(`API Error: ${error.response.status} - ${error.response.statusText}`);
                console.error(`Details: ${JSON.stringify(error.response.data)}`);
            } else if (error.request) {                                                            
                console.error(`Network Error: ${JSON.stringify(error.request)}`);
            } else {
                console.error('Axios Configuration Error:', error.message);
            }
        } else {
            //fallback error message
            console.error('Error fetching products:', error);
        }
        // Return an empty array as a fallback
        return [];    
    }
}

/**
 * This function should contain code to retrieve details for a single product and return it as the correct type
 * @param product_id - id of product, retrieved from getProducts() function
 * @returns Promise<ProductDetails>
 */
export async function getProductDetails(product_id: string): Promise<ProductDetails> {
    const url: string = 'https://api.commbank.com.au/public/cds-au/v1/banking/products';
    const headers = { 'x-v': 3 };
    return ; // replace line - stand-in return
}