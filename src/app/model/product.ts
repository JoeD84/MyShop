export interface Product {
    Name: string;
    Price: number;
    ImageURL: string;
    OnSale: boolean;
    InCart: number;
}

export class Product {
    constructor(
        public Name: string, 
        public Price: number, 
        public ImageURL: string,
        public OnSale: boolean){
            this.InCart = 0
    }
}