import "./Product.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ data, id }) => {
  const navigate = useNavigate()
  if (!data || !data.img || !data.img.data || data.img.data.length === 0) {
    // Handle the case where data is missing or not in the expected format
    return null;
  }
  return (
    <div className="product-card"
      onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_DEV_URL +
            data.img.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
