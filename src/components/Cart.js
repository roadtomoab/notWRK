import { NavLink } from 'react-router-dom';

function Cart ({ cartArray, removeFromCart }) {

    // <div class="row">
    //     <div class="column"></div>
    //     <div class="column"></div>
    // </div>

    function getTotalSum () {
        return (
            cartArray.reduce((sum, { price, amount }) => sum + price * amount, 0)
        )
    }

    return (
        <div className="page">
            <div id="product-wrapper">
                <h1 id="product-header">Shopping Cart</h1>
                <p>You've made a great choice.  Your total cost is ${getTotalSum()} - sign up using the link below to get 10% off of your
                    first purchase.
                </p>
                <NavLink to="/login">
                    <button id="home-button">Sign Up</button>
                </NavLink>
            </div>
            <div id="products">
                {cartArray.map((product) => {
                    return (
                        <div id="product-card">
                            <div className="hover">
                                <p id="top-p">{product.name}</p>
                                <img id="image" src={product.image} alt={product.image}/>
                                <p>price: ${product.price}</p>
                                <p>quantity: {product.amount}</p>
                                <button onClick={() => removeFromCart(product)} id="home-button">Remove From Cart</button>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>

    )
}

export default Cart;