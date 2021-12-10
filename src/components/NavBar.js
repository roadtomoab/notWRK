import { NavLink } from "react-router-dom";

function NavBar ({ cartArray }) {

    const getCartTotal = () => {

        return cartArray.reduce((sum, { amount }) => sum + amount, 0)
    }

    return(
            <nav id="nav-bar" className="sticky">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/cart">Cart 🛒 {getCartTotal()} </NavLink>
            </nav>
    )

}

export default NavBar;

// need to have it calculate total amount of products and display in NavBar