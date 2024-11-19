export interface Product {
   product_id : number,
   effective_from? : Date, 
   effective_to?: Date, 
   product_category: string, 
   name: string, 
   description: string, 
   brand: string 
   last_updated: Date
}

export interface ProductDetails {
   features: string, 
   eligibility:  string, 
   fees: string
}