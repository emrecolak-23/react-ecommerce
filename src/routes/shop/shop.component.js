import useProductContext from '../../hooks/products-context.hooks';

const Shop = () => {
  const { products } = useProductContext();

  return (
    <div>
      {products.map(({ id, name }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
