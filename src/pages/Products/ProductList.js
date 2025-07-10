import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import AddToCart from "../../components/Cart/AddToCart";
import PageHero from "../../components/PageHero/PageHero";
import "../../App.css";

const ProductList = () => {
  const { products } = useProductsContext();
  const [category, setCategory] = useState("all");

  const categories = ["all", "laptop", "mouse", "keyboard", "mobile"];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) => product.category?.toLowerCase() === category
        );

  return (
    <>
      <PageHero item={products.length} name="PRODUCTS" />

      {/* Category Filter Card */}
      <div
        className="filter-card"
        style={{
          maxWidth: "600px",
          margin: "3rem auto 2rem auto",
          padding: "1rem 2rem",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          backgroundColor: "#fff",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`filter-btn ${category === cat ? "active" : ""}`}
            style={{
              padding: "0.5rem 1rem",
              background: category === cat ? "#17252A" : "#fff",
              color: category === cat ? "#fff" : "#17252A",
              border: "2px solid #17252A",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "0.3s ease",
              minWidth: "80px",
              textTransform: "capitalize",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className="cocktails-center"
        style={{
          marginTop: "2rem",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const { id, image, name, price } = product;
            return (
              <article key={id} className="cocktail">
                <div className="img-container">
                  <img src={image} alt={name} />
                </div>
                <div className="cocktail-footer">
                  <div className="product">
                    <h4>{name}</h4>
                    <h4 className="price">৳{price}</h4>
                  </div>
                  <AddToCart product={product} />
                  <Link
                    to={`/products/${id}`}
                    className="add-cart"
                    style={{
                      color: "#17252A",
                      background: "#fff",
                      border: "2px solid #17252A",
                    }}
                  >
                    View
                  </Link>
                </div>
              </article>
            );
          })
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>No products found in this category.</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
