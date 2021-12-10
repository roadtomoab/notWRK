import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import Products from './components/Products';
import Login from './components/Login'
import Cart from './components/Cart';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {

  const baseURL = "http://localhost:3001/products";

  const [ productsArray, setProductsArray ] = useState([]);
  const [ cartArray, setCartArray ] = useState([]);

  function fetchData () {
    fetch(baseURL)
    .then(r => r.json())
    .then(data => setProductsArray(data))
  }

  useEffect(fetchData, []);

  function productsToApp (clickedProduct) {

    // const updatedCartArray = cartArray.find((product) => product.id === clickedProduct.id)

    // if (updatedCartArray === undefined) {
    // setCartArray([...cartArray, clickedProduct])
    // }
    // else {
    //   console.log("duplicate")
    // }

    let newCart = [...cartArray];
    let itemInCart = newCart.find(
      (item) => clickedProduct.name === item.name
    );

    if (itemInCart) {
      itemInCart.amount++;
    } else {
      itemInCart = {
        ...clickedProduct,
        amount: 1,
      }
      newCart.push(itemInCart)
    }
    setCartArray(newCart);

  }

  const removeFromCart = (clickedProduct) => {
    setCartArray(
      cartArray.filter((product) => product.id !== clickedProduct.id)
    );
  }


  return (
    <div id="background">
      <NavBar cartArray={cartArray}/>
      <Route render={({location}) => (
              <TransitionGroup>
              <CSSTransition
              key={location.key}
              timeout={600}
              classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/products">
                    <Products 
                    productsArray={productsArray}
                    productsToApp={productsToApp}/>
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/cart">
                    <Cart
                    cartArray={cartArray}
                    removeFromCart={removeFromCart}/>
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>

      )} />
    </div>
  );
}

export default App;
