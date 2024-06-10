import "./singlePage.scss";

import { ProductData } from "../../static";
import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const product = ProductData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="singlePage">
        <img src={product.image} alt={product.title} />
        <div className="singlePage__info">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
