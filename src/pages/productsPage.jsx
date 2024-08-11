import React from "react";
import ProductList from "../components/list";

const products = [
  {
    id: 1,
    name: "Product A",
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product B",
    price: 30,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product C",
    price: 70,
    quantity: 2,
  },
  {
    id: 4,
    name: "Product D",
    price: 120,
    quantity: 3,
  },
  {
    id: 5,
    name: "Product E",
    price: 45,
    quantity: 4,
  },
  {
    id: 6,
    name: "Product F",
    price: 85,
    quantity: 2,
  },
  {
    id: 7,
    name: "Product G",
    price: 150,
    quantity: 1,
  },
  {
    id: 8,
    name: "Product H",
    price: 25,
    quantity: 5,
  },
  {
    id: 9,
    name: "Product I",
    price: 95,
    quantity: 1,
  },
  {
    id: 10,
    name: "Product J",
    price: 200,
    quantity: 2,
  },
  {
    id: 11,
    name: "Product K",
    price: 110,
    quantity: 3,
  },
  {
    id: 12,
    name: "Product L",
    price: 60,
    quantity: 4,
  },
  {
    id: 13,
    name: "Product M",
    price: 130,
    quantity: 2,
  },
  {
    id: 14,
    name: "Product N",
    price: 40,
    quantity: 3,
  },
  {
    id: 15,
    name: "Product O",
    price: 175,
    quantity: 1,
  },
];

const ProductsPage = () => {
  return (
    <div className="w-full mx-auto p-4 bg-white text-black rounded-lg shadow-lg mb-12">
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
