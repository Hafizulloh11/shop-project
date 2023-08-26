import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from "../modules";
import { RootState } from "./store";

const initialState: Types.IEntity.Products = [];

export const productsSlice = createSlice({
 name: "products",
 initialState,
 reducers: {
  addProduct: (state, action: PayloadAction<Types.IEntity.Product>) => {
   return [...state, action.payload]
  }
 }
})

export const { addProduct } = productsSlice.actions;

export const getProducts = (state: RootState) => state.products;

export default productsSlice.reducer;