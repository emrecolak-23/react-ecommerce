// import useCategoriesContext from '../../hooks/categories-context.hooks';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { selectorCategoriesMap } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  // const { categoriesMap } = useCategoriesContext();

  const categoriesMap = useSelector(selectorCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
