import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initalStatetype, Product } from "./../assets/typeAll";

const initialState: initalStatetype = {
  productInCart: [],
  message: "",
};

export const addToCartSlice = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const productExists = state.productInCart.some(
        (product) => product.id === action.payload.id
      );
      if (!productExists) {
        state.productInCart.push(action.payload);
      } else {
      }
    },
    deletProductFromCart: (state, action: PayloadAction<number>) => {
      let product = state.productInCart.filter(
        (pro) => pro.id != action.payload
      );

      state.productInCart = product;
    },
  },
});
export const { addProductToCart, deletProductFromCart } =
  addToCartSlice.actions;
export default addToCartSlice.reducer;
