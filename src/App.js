import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav>
        <h1>React-CART</h1>
        <div className="cart-icon">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt="cart-icon"
          />
          <span className="cart-total-count">0</span>
        </div>
      </nav>

      {/* Products */}
      <main>
        <div className="products-container">
          <div className="product">
            <div className="product-detail">
              <img src="https://placehold.co/100x100" alt="" />
              <h3 className="product Name">Product Name</h3>
            </div>
            <div className="product-count">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
