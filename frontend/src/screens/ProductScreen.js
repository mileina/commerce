import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/">&#60; Retour</Link>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '300px', objectFit: 'cover' }}
        />
        <div>
          <h1>{product.name}</h1>
          <p style={{ marginTop: '0.5rem' }}>{product.description}</p>
          <p style={{ marginTop: '0.5rem', fontSize: '1.25rem' }}>
            {product.price} €
          </p>
          <button
            disabled={product.countInStock === 0}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
