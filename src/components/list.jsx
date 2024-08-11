import React from "react";
import ProductItem from "./item";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
