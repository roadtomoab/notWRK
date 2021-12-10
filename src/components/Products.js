import Product from "./Product";

function Products({ productsToApp, productsArray }) {

    function productToProducts (clickedProduct) {
        productsToApp(clickedProduct)
    }

    return(
        <div className="page">
            <div id="product-wrapper">
                <h1 id="product-header">We've got wellness down to a science.</h1>
                <p>Our products are proven to not work.  Using custom formulas and sustainabily sourced ingredients, we have
                    successfully created a line of bespoke products at the cutting edge of anti-functionality.
                </p>
            </div>
            <div id="products">
            {productsArray.map((product) => {
                return (
                    <Product
                    key={product.id}
                    product={product}
                    productToProducts={productToProducts}/>
                )
            })}
            </div>
        </div>
    )
}

export default Products;

// Our products are proven to not work. Using custom formulas and ecologically sourced ingredients, 
// we have successfully created a line of bespoke products at the cutting edge of anti-functionality