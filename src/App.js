import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    quantity: 0,
  };

  // Decrease Quantity
  handleDecrease = () => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    } else {
      alert(`Your Cart is Empty!`);
    }
  };

  // Increase Quantity
  handleIncrease = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  render() {
    const quantity = this.state.quantity;
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
            <span className="cart-total-count">{quantity}</span>
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
                <button onClick={this.handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={this.handleIncrease}>+</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
