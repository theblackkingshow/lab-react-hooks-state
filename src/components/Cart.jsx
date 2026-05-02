function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items yet</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))
      )}

      <h3>Total Items: {cart.length}</h3>
    </div>
  );
}

export default Cart;