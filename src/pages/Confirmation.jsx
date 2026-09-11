import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { brand } from '../brand';

export default function Confirmation() {
  const navigate = useNavigate();
  const { lastOrder } = useCart();
  const { copy } = brand;

  if (!lastOrder) return <Navigate to="/" replace />;

  const totalLabel = '₹' + lastOrder.total.toLocaleString('en-IN');

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: '100px 64px', textAlign: 'center' }}>
      <span
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--accent)',
          color: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 26,
        }}
      >
        &#10003;
      </span>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 500, margin: 0 }}>Order confirmed</h1>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', maxWidth: 420, margin: 0 }}>{copy.confirmedBody(lastOrder.orderNumber, totalLabel)}</p>
      <button
        onClick={() => navigate('/collection')}
        style={{ background: 'var(--text)', color: 'var(--bg)', border: 'none', padding: '15px 30px', fontSize: 14, fontWeight: 600, cursor: 'pointer', borderRadius: 2, marginTop: 10 }}
      >
        {copy.continueBrowsing}
      </button>
    </main>
  );
}
