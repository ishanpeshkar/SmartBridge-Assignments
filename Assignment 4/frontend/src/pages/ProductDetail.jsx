import { useParams } from "react-router-dom";
import products from "../data/products";
import image from "../assets/image.png"; // Placeholder image
import "../index.css"; // Import your CSS file
import "../App.css"; // Import your CSS file
import React from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20 text-red-500">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl shadow mb-6"
      />
      <h2 className="text-3xl font-bold text-blue-800">{product.name}</h2>
      <p className="text-xl text-gray-600 my-4">{product.price}</p>
      <p className="text-gray-700">
        This is a detailed description of {product.name}. It's a fantastic product that you'll love using!
      </p>
    </div>
  );
};

export default ProductDetail;
