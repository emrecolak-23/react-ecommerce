import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

import useCartContext from '../../hooks/cart-context.hooks';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCartContext();

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
