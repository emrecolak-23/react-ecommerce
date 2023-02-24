import './navigation.styles.scss';

import useUserContext from '../../hooks/user-context.hooks';
import useCartContext from '../../hooks/cart-context.hooks';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CardIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();

  const handleSignOut = async () => {
    await signOutUser();
  };

  let authLink;
  if (!currentUser) {
    authLink = (
      <Link className="nav-link" to="/auth">
        SIGN IN
      </Link>
    );
  } else {
    authLink = (
      <span className="nav-link" onClick={handleSignOut}>
        SIGN OUT
      </span>
    );
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {authLink}
          <CardIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
