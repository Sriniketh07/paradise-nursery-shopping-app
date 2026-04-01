import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [addedItems, setAddedItems] = useState({});

  const categories = {
    'Indoor Foliage': [
      { id: 1, name: 'Snake Plant', price: 499, image: 'https://source.unsplash.com/300x300/?snakeplant' },
      { id: 2, name: 'Monstera Deliciosa', price: 899, image: 'https://source.unsplash.com/300x300/?monstera' },
      { id: 3, name: 'ZZ Plant', price: 649, image: 'https://source.unsplash.com/300x300/?zzplant' },
      { id: 4, name: 'Pothos Golden', price: 399, image: 'https://source.unsplash.com/300x300/?pothos' },
      { id: 5, name: 'Rubber Plant', price: 749, image: 'https://source.unsplash.com/300x300/?rubberplant' },
      { id: 6, name: 'Peace Lily', price: 549, image: 'https://source.unsplash.com/300x300/?peacelily' },
    ],
    'Flowering Plants': [
      { id: 7, name: 'Money Plant', price: 299, image: 'https://source.unsplash.com/300x300/?moneyplant' },
      { id: 8, name: 'Jade Plant', price: 449, image: 'https://source.unsplash.com/300x300/?jadeplant' },
      { id: 9, name: 'Aloe Vera', price: 349, image: 'https://source.unsplash.com/300x300/?aloevera' },
      { id: 10, name: 'Christmas Cactus', price: 599, image: 'https://source.unsplash.com/300x300/?cactus' },
      { id: 11, name: 'Orchid', price: 1299, image: 'https://source.unsplash.com/300x300/?orchid' },
      { id: 12, name: 'Anthurium', price: 799, image: 'https://source.unsplash.com/300x300/?anthurium' },
    ],
    'Succulents & Cacti': [
      { id: 13, name: 'Haworthia', price: 399, image: 'https://source.unsplash.com/300x300/?succulent' },
      { id: 14, name: 'Echeveria', price: 449, image: 'https://source.unsplash.com/300x300/?echeveria' },
      { id: 15, name: 'String of Pearls', price: 699, image: 'https://source.unsplash.com/300x300/?stringofpearls' },
      { id: 16, name: 'Burro\'s Tail', price: 549, image: 'https://source.unsplash.com/300x300/?succulent' },
      { id: 17, name: 'Barrel Cactus', price: 599, image: 'https://source.unsplash.com/300x300/?cactus' },
      { id: 18, name: 'Panda Plant', price: 479, image: 'https://source.unsplash.com/300x300/?succulent' },
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems(prev => ({ ...prev, [plant.id]: true }));
    
    // Visual feedback
    const btn = document.getElementById(`add-btn-${plant.id}`);
    if (btn) {
      btn.textContent = 'Added ✓';
      btn.disabled = true;
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ 
        backgroundColor: '#2e7d32', 
        padding: '15px', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <h2>🌿 Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/products" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Plants</a>
          <a href="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</a>
          
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            🛒 
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 8px',
              fontSize: '12px'
            }}>
              {totalQuantity}
            </span>
          </div>
        </div>
      </nav>

      <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Beautiful Houseplants</h1>

        {Object.keys(categories).map((category) => (
          <div key={category} style={{ marginBottom: '60px' }}>
            <h2 style={{ borderBottom: '3px solid #4CAF50', paddingBottom: '10px' }}>{category}</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '25px' 
            }}>
              {categories[category].map((plant) => (
                <div key={plant.id} style={{
                  border: '1px solid #ddd',
                  borderRadius: '12px',
                  padding: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}>
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <h3>{plant.name}</h3>
                  <p style={{ fontSize: '1.3rem', color: '#2e7d32', fontWeight: 'bold' }}>
                    ₹{plant.price}
                  </p>
                  <button 
                    id={`add-btn-${plant.id}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.id]}
                    style={{
                      padding: '12px 25px',
                      backgroundColor: addedItems[plant.id] ? '#888' : '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: addedItems[plant.id] ? 'not-allowed' : 'pointer',
                      fontSize: '1rem',
                      marginTop: '10px'
                    }}
                  >
                    {addedItems[plant.id] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
