import "./products.scss";

import React, { useState } from "react";

import { ProductData } from "../../static";

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(ProductData.map((product) => product.category)),
  ];

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleProducts(6); // Reset visible products when category changes
  };

  const filteredProducts =
    selectedCategory === "All"
      ? ProductData
      : ProductData.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <ul className="categories">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      <div className="product__cards">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div key={product?.id} className="product__card">
            <div className="product__card__img">
              <img src={product?.image} alt="" />
            </div>
            <div className="product__card__info">
              <h3>{product?.title}</h3>
              <div className="df">
                <p>Count: {product?.rating.count}</p>
                <p>Rating: {product?.rating.rate}</p>
              </div>
              <p className="product__card__info__desc">
                {product?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <button className="product__seeMore-btn" onClick={handleSeeMore}>
          See more
        </button>
      )}
    </div>
  );
};

export default Products;
