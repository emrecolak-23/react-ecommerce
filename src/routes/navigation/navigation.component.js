import './navigation.styles.scss';

import useUserContext from '../../hooks/user-context.hooks';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useUserContext();

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
