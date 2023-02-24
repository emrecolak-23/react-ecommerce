import { useContext } from 'react';

import { ProductContext } from '../contexts/products.context';

const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;
