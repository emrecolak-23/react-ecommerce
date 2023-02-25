import './checkout-item.styles.scss';

import useCartContext from '../../hooks/cart-context.hooks';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useCartContext();

  const clearItemFromCartHandler = () => {
    clearItemFromCart(cartItem);
  };

  const removeItemFromCartHandler = () => {
    removeItemFromCart(cartItem);
  };

  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
