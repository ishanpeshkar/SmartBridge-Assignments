import React from "react";

import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
        fontSize: "2rem",
        fontWeight: "bold",
        textDecoration: "underline",
        fontFamily: "cursive",
        padding: "20px",
        marginLeft: "80px",
        marginRight: "80px",
        color: "#007BFF",
        }}>
        Our Products
      </h2>
      <div
        className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        style={{
          display: "grid",
          gap: "1rem",
          gridAutoFlow: "dense",
          gridAutoRows: "auto",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
