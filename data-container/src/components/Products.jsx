import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import BadDataContainer from './BadDataContainer';
import DataContainer from './DataContainer';
import Product from './Product';

const URL = 'https://fakestoreapi.com/products';
const productRenderer = (products) => {
  return (
    <div className="row">
      {products?.map((product, index) => {
        return (
          <div className="col-3">
            <Product product={product} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default function Products() {
  const [limit, setLimit] = useState(100);
  const [url, setUrl] = useState('https://fakestoreapi.com/products');
  const { data: products, error, loading } = useFetch(`${url}?limit=${limit}`);

  console.log({ products });

  useEffect(() => {
    setUrl('https://fakestoreapi.com/products');
  }, []);

  const loadWithError = () => {
    setUrl('');
    setLimit('');
  };

  const loadProducts = () => {
    setUrl(URL);
    setLimit(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <div className="row">
        <button className="btn btn-success col-4 m-3" onClick={loadProducts}>
          Load Products
        </button>
        <button className="btn btn-success col-4 m-3" onClick={loadWithError}>
          Load Products With Error
        </button>
      </div>

      <div className="row">
        {/* Good Datacontainer */}
        <div className="col">
          <div className="mt-4 border border-success border-3 p-3 rounded">
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
        {/* BAD Data container */}
        <div className="col">
        <div className="mt-4 border border-danger  border-3 p-3 rounded">
          <BadDataContainer
            data={products}
            loading={loading}
            error={error}
            dataRenderer={productRenderer}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
