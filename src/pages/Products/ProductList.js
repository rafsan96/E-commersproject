import React, { useState } from "react";
import { useProductsContext } from "../../context/products_context";
import AddToCart from "../../components/Cart/AddToCart";
import PageHero from "../../components/PageHero/PageHero";
import "../../App.css";
import "./ProductList.css";

const ProductList = () => {
  const { products } = useProductsContext();
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(150000);
  const [showBestSeller, setShowBestSeller] = useState(false);

  const categories = ["all", "laptop", "mouse", "keyboard", "mobile"];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "all" || product.category?.toLowerCase() === category;
    const matchPrice = product.price <= maxPrice;
    const matchBestSeller = showBestSeller ? product.bestSeller : true;
    return matchCategory && matchPrice && matchBestSeller;
  });

  return (
    <>
      <PageHero item={products.length} name="PRODUCTS" />

      <div className="filters-container">
        {/* Category Filter */}
        <div className="filter-card">
          <h3>Filter by Category</h3>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-btn ${category === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Filter */}
        <div className="filter-card">
          <h3>Filter by Price</h3>
          <label htmlFor="price-range">
            Max Price: ৳{maxPrice}
            <input
              type="range"
              id="price-range"
              min="0"
              max="150000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </label>
        </div>

        {/* Best Seller Filter */}
        <div className="filter-card">
          <h3>Filter by Best Seller</h3>
          <label className="best-seller-label">
            <input
              type="checkbox"
              checked={showBestSeller}
              onChange={() => setShowBestSeller(!showBestSeller)}
            />
            Show only best sellers
          </label>
        </div>
      </div>

      {/* Product Grid */}
      <div className="cocktails-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const { id, image, name, price, bestSeller } = product;
            return (
              <article key={id} className="cocktail">
                <div className="img-container">
                  <img src={image} alt={name} />
                </div>
                <div className="cocktail-footer">
                  <div className="product">
                    <h4>{name}</h4>
                    <h4 className="price">৳{price}</h4>
                    {bestSeller && (
                      <span className="best-seller-tag">Best Seller</span>
                    )}
                  </div>
                  <AddToCart product={product} />
                </div>
              </article>
            );
          })
        ) : (
          <p className="no-products">No products found with current filters.</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
