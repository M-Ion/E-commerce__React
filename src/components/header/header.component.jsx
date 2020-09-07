import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; //That lets us modify our component to have access to things related to redux.
import { createStructuredSelector } from 'reselect';


import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg'; // This is a sepcial syntax in React for importing SVG.

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> )
                :
                ( <Link className='option' to="/signin">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

//This naming can be anything but mapStateToProps() is standart with Redux codebases.
const mapStateToProps = createStructuredSelector({ // createStructuredSelector(), the properties that we want point to the correct selector and then create structure selector will automatically pass are top level state that we get as our mapStateToProps into each subsequebt selector.
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);