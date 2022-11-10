import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)

  const updateTotal = (price) => {
    setTotal(total + price)
  }

  const updateCart = (name) => {
    /* const new_cart = cart.concat(name);
    console.log(new_cart)
    setCart(new_cart) */
    let newCart = cart;
    if (newCart[name]) {
      newCart[name] += 1;
    } else {
      newCart[name] = 1;
    }
    setCart({ ...newCart })
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="grid">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} index={index} updateCart={updateCart} updateTotal={updateTotal} />
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {Object.keys(cart).map((item) => (
          <p>{`${item} x ${cart[item]}`}</p>
        ))}
        <p>Total: {total}</p>
      </div>
    </div>
  );
}

export default App;
