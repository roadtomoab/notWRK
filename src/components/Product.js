import { useState } from 'react';

function Product ({ productToProducts, product }) {

    const [ isAdded, setIsAdded ] = useState(product.added);

    function handleAddToCart () {
        setIsAdded(true)
        productToProducts(product)
  
    }

    return (
        <div id="product-card">
            <div className="hover">
                <p id="top-p">{product.name}</p>
                <img id="image" src={product.image} alt={product.image}/>
                <p>{product.description}</p>
                <p>price: ${product.price}</p>
                <button id="home-button" onClick={handleAddToCart}>{isAdded ? "Added To Cart" : "Add To Cart"}</button>
            </div>
        </div>
    )
}

export default Product;