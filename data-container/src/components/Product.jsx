import React from 'react';

export default function Product({ product }) {
  const { name, title, category, image, price, id } = product;
  return (
    <div className="p-4">
      <div className="">
        <div className="row">
          <div className="col">
            <img src={image} class="img-fluid" alt="..." />
          </div>
          <div className="col">
            <h5 className="card-title">{title}</h5>
            <a href="#" className="btn btn-dark">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
