
    import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");

  const products = [
    { id: 1, name: "Apple", category: "fruit" },
    { id: 2, name: "Banana", category: "fruit" },
    { id: 3, name: "Carrot", category: "vegetable" },
    { id: 4, name: "Broccoli", category: "vegetable" },
  ];

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
