import { describe } from '@jest/globals';
import { getProducts, getProductDetails } from '../lib/products';

describe('Products E2E tests', () => {
    describe('getProducts', () => {
        it('returns a promise', () => {
            const res = getProducts();
            expect(res).toBeInstanceOf(Promise);
        });

        it('has correct fields', async () => {
            const res = await getProducts();
            const product = res[0];
            expect(product).toHaveProperty('productId');
            expect(product).toHaveProperty('productCategory');
            expect(product).toHaveProperty('name');
            expect(product).toHaveProperty('description');
            expect(product).toHaveProperty('brand');
            // x-v 3 does not return these two fields anymore. Tried incrementing version but did not work.
            // the lastUpdated is 2024-11. the commmbank docs update is 2019.
            // expect(product).toHaveProperty('effectiveFrom');
            // expect(product).toHaveProperty('effectiveTo');
            // updated to to match the naming convention of the object
        });
    });

    describe('getProductDetails', () => {
        it('returns a promise', () => {
            const res = getProductDetails('d7c55e295f504692a54360f0d2092c23');
            expect(res).toBeInstanceOf(Promise);
        });

        it('has correct fields', async () => {
            const productDetails = await getProductDetails('d7c55e295f504692a54360f0d2092c23');
            expect(productDetails).toHaveProperty('features');
            expect(productDetails).toHaveProperty('eligibility');
            expect(productDetails).toHaveProperty('fees');
        })
    });
});