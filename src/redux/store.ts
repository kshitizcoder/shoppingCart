import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import { addToCartSlice } from "./addToCartSlice";
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    addedProducts: addToCartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
