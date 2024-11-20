export interface Product {
   productId : number,
   effectiveFrom? : Date, 
   effectiveTo?: Date, 
   productCategory: string, 
   name: string, 
   description: string, 
   brand: string 
   lastUpdated: Date
}

export interface ProductDetails {
   features: string, 
   eligibility:  string, 
   fees: string
}