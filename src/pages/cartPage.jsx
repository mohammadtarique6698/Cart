import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  updateQuantity,
  applyDiscount,
  removeProductFromCart,
} from "../redux/cartSlice";
import CurrencyFormatter from "../components/currency";
import { enqueueSnackbar } from "notistack";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const discount = useSelector((state) => state.cart.discount);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const handleDiscountChange = (e) => {
    const discountValue = parseInt(e.target.value, 10) || 0;
    dispatch(applyDiscount(discountValue));
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total * ((100 - discount) / 100);
  };

  const handleOrder = () => {
    enqueueSnackbar(
      "Your Order has been placed successfully. Keep Shopping😃",
      {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        style: {
          top: "50%",
          transform: "translateY(-50%)",
        },
        autoHideDuration: 3000,
      }
    );
  };

  return (
    <div className="w-full mx-auto p-4 bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-lg"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  Price: {CurrencyFormatter.formatCurrency(item.price)}
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-16 p-2 border rounded-lg text-center"
                />
                <button
                  onClick={() => handleRemoveProduct(item.id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <label htmlFor="discount" className="block mb-2">
              Discount:
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="discount"
                min="0"
                max="100"
                value={discount}
                onChange={handleDiscountChange}
                className="w-full p-2 border rounded-lg"
              />
              <span className="ml-2 text-lg">%</span>
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-xl font-bold">
              Total: {CurrencyFormatter.formatCurrency(calculateTotalPrice())}
            </p>
          </div>
          <button
            onClick={handleOrder}
            className="mt-6 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Place Order
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
