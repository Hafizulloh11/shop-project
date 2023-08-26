import { configureStore } from '@reduxjs/toolkit';
import products from './product-slice';

const store = configureStore({
 reducer: {
  products
 }
})

export default store;

export type RootState = ReturnType<typeof store.getState>