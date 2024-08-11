import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cartSlice";
import { useSnackbar } from "notistack";
import CurrencyFormatter from "./currency";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...product, quantity }));
    enqueueSnackbar("Product added to cart!", {
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
    });
  };

  return (
    <div className="flex items-center justify-between bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div>
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <p className="text-gray-500">
          Price: {CurrencyFormatter.formatCurrency(product.price)}
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          className="w-16 p-2 border rounded-lg text-center"
        />
        <button
          onClick={handleAddToCart}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
