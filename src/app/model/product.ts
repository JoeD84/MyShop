export interface Product {
    Id: number;
    Name: string;
    Price: number;
    ImageURL: string;
    OnSale: boolean;
    InCart: number;
}

export class Product {
    constructor(
        public Id: number,
        public Name: string, 
        public Price: number, 
        public ImageURL: string,
        public OnSale: boolean){
            this.InCart = 0
    }
}