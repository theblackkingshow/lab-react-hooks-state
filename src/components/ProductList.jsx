import ProductCard from "./ProductCard";

function ProductList({ products, addToCart, category, setCategory }) {
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      <h2>Products</h2>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetables</option>
      </select>

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;