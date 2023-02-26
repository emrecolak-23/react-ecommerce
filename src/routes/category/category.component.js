import './category.styles.scss';
import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
// import useCategoriesContext from '../../hooks/categories-context.hooks';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectorCategoriesMap } from '../../store/categories/categories.selector';
const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useCategoriesContext();
  const categoriesMap = useSelector(selectorCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
