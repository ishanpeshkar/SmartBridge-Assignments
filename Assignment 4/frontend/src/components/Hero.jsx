import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-100 to-blue-300 text-center py-20 px-4"
      aria-labelledby="hero-heading"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2
        id="hero-heading"
        className="text-5xl font-extrabold text-blue-800 mb-4"
        style={{textAlign: "center", marginBottom: "1rem", fontSize: "2.5rem", fontWeight: "bold", textDecoration: "none", fontFamily: "cursive", padding: "20px", marginLeft: "80px", marginRight: "80px", color: "#007BFF",}}
      >
        Welcome to ShopEasy!
      </h2>
      <p
        className="text-xl text-blue-900 max-w-xl mx-auto"
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
          fontFamily: "Arial, sans-serif",
          fontWeight: "400",
          color: "#333",
          padding: "30px",
          marginLeft: "80px",
          marginRight: "80px",
        }}
      >
        Explore top-quality products with great deals and free shipping. At
        ShopEasy, we bring you a wide range of products that cater to all your
        needs, from electronics to fashion, all at unbeatable prices. Enjoy a
        seamless shopping experience with fast delivery, secure payments, and
        exceptional customer service.
        <br /> <br />
        Start your journey with us today and discover the joy of effortless
        shopping!
      </p>
      <div className="mt-6">
        <button
          href="#products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          style={{
            color: "#FFFFFF",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "1rem",
            fontWeight: "600",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
