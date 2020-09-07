import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {

    const login = () => {
        if (user)
            auth.signOut()
    }
    const [{ basket, user }] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="headerNav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header_optionLineOne">Hello {user?.email}</span>
                        <span className="header_optionLineTwo">{user ? "Sign Out" : "SignIn"}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Order</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
