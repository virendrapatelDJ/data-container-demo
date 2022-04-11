import React from 'react';
import { Error } from './Error';
import { Loader } from './Loader';

export default function BadDataContainer({ loading, error , dataRenderer , data }) {
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loader />;
  }

  return dataRenderer(data);
}
