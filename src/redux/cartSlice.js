import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  discount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addProductToCart,
  updateQuantity,
  applyDiscount,
  removeProductFromCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectDiscount = (state) => state.cart.discount;
export const selectTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;
