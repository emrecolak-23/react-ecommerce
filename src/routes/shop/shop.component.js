import './shop.styles.scss';

import useProductContext from '../../hooks/products-context.hooks';

import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
  const { products } = useProductContext();

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
