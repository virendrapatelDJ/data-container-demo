import React from 'react';
import { Error } from './Error';
import { Loader } from './Loader';

export default function DataContainer({ children, loading, error }) {
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loader />;
  }

  return children;
}
