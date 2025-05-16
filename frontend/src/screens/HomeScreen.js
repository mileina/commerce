import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Produits</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              border: '1px solid #ddd',
              padding: '0.5rem',
              width: '200px',
            }}
          >
            <Link to={`/product/${p._id}`}>
              <img
                src={p.image}
                alt={p.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <h2>{p.name}</h2>
              <p>{p.price} €</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
