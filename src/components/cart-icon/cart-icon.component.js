import './cart-icon.styles.scss';

import useCartContext from '../../hooks/cart-context.hooks';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useCartContext();

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
