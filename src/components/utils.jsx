const CartUtils = {
  calculateSubtotal(products) {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  },

  calculateDiscountedTotal(subtotal, discount) {
    return subtotal - (subtotal * discount) / 100;
  },
};

export default CartUtils;
