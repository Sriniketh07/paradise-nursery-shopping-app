import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    alert("🎉 Thank you for shopping at Paradise Nursery!\n\nCheckout feature is Coming Soon...");
  };

  const handleContinueShopping = () => {
    window.location.href = "/products"; // This will link back to ProductList in real app
  };

  if (items.length === 0) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Your Cart is Empty</h2>
        <p>No plants added yet. Start adding some beautiful plants!</p>
        <button 
          onClick={handleContinueShopping}
          style={{
            padding: '15px 30px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Browse Plants
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🛒 Your Shopping Cart</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Total Amount: ₹{totalAmount}</h2>
        <button 
          onClick={handleCheckout}
          style={{
            padding: '12px 30px',
            backgroundColor: '#2e7d32',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}
        >
          Proceed to Checkout
        </button>
      </div>

      {items.map((item) => (
        <div key={item.id} style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px',
          backgroundColor: '#fff'
        }}>
          <img 
            src={item.image} 
            alt={item.name}
            style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px', marginRight: '25px' }}
          />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>Unit Price: ₹{item.price}</p>
            <p><strong>Total: ₹{item.totalPrice}</strong></p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={() => dispatch(decreaseQuantity(item.id))}
              style={{ width: '40px', height: '40px', fontSize: '1.2rem', borderRadius: '50%' }}
            >
              −
            </button>
            
            <span style={{ fontSize: '1.3rem', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
              {item.quantity}
            </span>

            <button 
              onClick={() => dispatch(increaseQuantity(item.id))}
              style={{ width: '40px', height: '40px', fontSize: '1.2rem', borderRadius: '50%' }}
            >
              +
            </button>

            <button 
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{
                padding: '8px 16px',
                backgroundColor: '#d32f2f',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                marginLeft: '20px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button 
          onClick={handleContinueShopping}
          style={{
            padding: '15px 40px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginRight: '15px'
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartItem;
