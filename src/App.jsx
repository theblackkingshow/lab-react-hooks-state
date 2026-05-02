
    import { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const products = sampleProducts;

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Grocery Store</h1>

      <DarkModeToggle 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <ProductList
        products={products}
        addToCart={addToCart}
        category={category}
        setCategory={setCategory}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;
