import React, { useEffect, useState } from 'react';
import DataContainer from './DataContainer';
import Product from './Product';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const resetState = () => {
    setError(null);
    setProducts([]);
    setLoading(false);
  };

  const loadProducts = (limit, withError) => {
    resetState();
    let url = 'https://fakestoreapi.com/products?limit=' + limit;
    if (withError) url = '';
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        resetState();
        setError(error);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  console.log({ products });

  const loadWithError = () => {
    loadProducts(100, true);
  };

  return (
    <div>
      <div className="row">
        <button
          className="btn btn-success col-4 m-3"
          onClick={() => loadProducts(Math.floor(Math.random() * 100))}
        >
          Load Products
        </button>
        <button className="btn btn-success col-4 m-3" onClick={loadWithError}>
          Load Products With Error
        </button>
      </div>

      <div className="mt-4 border p-3 rounded">
        <DataContainer loading={loading} error={error}>
          <div className="row">
            {products?.map((product, index) => {
              return (
                <div className="col-3">
                  <Product product={product} key={index} />
                </div>
              );
            })}
          </div>
        </DataContainer>
      </div>
    </div>
  );
}
