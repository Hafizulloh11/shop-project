import { Types } from ".";
import { http } from "../services";

export const Products = {
   List: () => http.get<Types.IEntity.Products>("/products"),
   Single: (id: number) => http.get<Types.IEntity.Product>(`/products/${id}`),
}