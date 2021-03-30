import React from "react";
import { useHistory } from "react-router-dom";

function Product({ product, handlecart }) {
  const history = useHistory();
  const handleBuy = (product) => {
    handlecart(product);
    history.push("/cart");
  };
  return (
    <div className="card">
      <h4 className="title">{product.name}</h4>
      <div className="row h-100">
        <div className="col-sm-5 col-md-12">
          <img
            className="img-fluid"
            src={product.imageURL}
            alt={product.name}
          />
        </div>
        <div className="col-sm-7 col-md-12 mt-auto">
          <div className="mt-1 description bg-light">
            <div className="text-clamp-3" title={product.description}>
              {product.description}
            </div>
          </div>
          <div className="card-footer">
            <div className="price">MRP Rs. {product.price}</div>
            <button
              className="btn btn-primary my-1"
              onClick={() => handleBuy(product)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;