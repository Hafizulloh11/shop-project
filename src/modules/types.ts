export namespace IEntity {
	export interface Product {
		id: number;
		title: string;
		price: number;
		description: string;
		category: string;
		image: string;
		rating: {
			rate: number;
			count: number;
		};
	}
	export type Products = Product[];
}

export namespace IQuery {
	export interface Products {
		isLoading: boolean;
		products: IEntity.Products;
	}
	export interface Product {
		isLoading: boolean;
		product: IEntity.Product;
	}
}
export type SaleType = "buy now" | "add cart";
