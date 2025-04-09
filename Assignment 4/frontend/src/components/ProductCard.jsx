import React from 'react'
import { Link } from "react-router-dom";
import "../index.css"; 
import "../App.css"; 
import image from "../assets/image.png";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
      <img
        src={image} 
        className="w-full h-52 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-2 text-blue-600 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
