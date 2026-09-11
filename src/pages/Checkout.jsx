import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { brand } from '../brand';

const inputStyle = {
  padding: '13px 14px',
  border: '1px solid var(--input-border)',
  borderRadius: 4,
  fontSize: 14,
  fontFamily: 'inherit',
  background: 'var(--surface)',
};

const labelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: 14,
  border: '1px solid var(--input-border)',
  borderRadius: 4,
  fontSize: 14,
  cursor: 'pointer',
  background: 'var(--surface)',
};

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartSubtotal, placeOrder } = useCart();
  const cartSubtotalLabel = '₹' + cartSubtotal.toLocaleString('en-IN');
  const { copy } = brand;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    placeOrder();
    navigate('/confirmation');
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '48px 64px 80px', gap: 32, maxWidth: 1000, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, fontWeight: 500, margin: 0 }}>{copy.checkoutTitle}</h1>
      <form onSubmit={handlePlaceOrder} style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h3 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600 }}>Shipping Address</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <input required placeholder="Full name" style={inputStyle} />
              <input required placeholder="Phone number" style={inputStyle} />
            </div>
            <input required placeholder="Address line 1" style={inputStyle} />
            <input placeholder="Address line 2 (optional)" style={inputStyle} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
              <input required placeholder="City" style={inputStyle} />
              <input required placeholder="State" style={inputStyle} />
              <input required placeholder="PIN code" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{copy.measurementsLabel}</span>
              <input required placeholder={copy.measurementsPlaceholder} style={inputStyle} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h3 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600 }}>Payment Method</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <label style={labelStyle}>
                <input type="radio" name="pay" defaultChecked />
                UPI
              </label>
              <label style={labelStyle}>
                <input type="radio" name="pay" />
                Credit / Debit Card
              </label>
              <label style={labelStyle}>
                <input type="radio" name="pay" />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: 24 }}>
          <h3 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600 }}>Order Summary</h3>
          {cartItems.map((ci) => (
            <div key={ci.cartIndex} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)' }}>{ci.name}</span>
              <span style={{ fontWeight: 600 }}>{ci.priceLabel}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
            <span style={{ fontWeight: 700 }}>Total</span>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: 19 }}>{cartSubtotalLabel}</span>
          </div>
          <button
            type="submit"
            disabled={cartItems.length === 0}
            style={{
              background: 'var(--text)',
              color: 'var(--bg)',
              border: 'none',
              padding: 15,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 0.4,
              cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer',
              borderRadius: 2,
              marginTop: 6,
              opacity: cartItems.length === 0 ? 0.5 : 1,
            }}
          >
            Place Order
          </button>
        </div>
      </form>
    </main>
  );
}
