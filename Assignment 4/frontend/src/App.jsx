import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail"; // ⬅️ Import this
import "./index.css"; // Import your CSS file
import "./App.css"; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} /> {/* ⬅️ Add this */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
