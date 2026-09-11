import { useNavigate } from 'react-router-dom';
import { EDIT_END, getCollectionsGrouped } from '../data/products';
import ImageSlot from '../components/ImageSlot';
import useCountdown from '../hooks/useCountdown';
import { brand } from '../brand';

export default function Collection() {
  const navigate = useNavigate();
  const { days } = useCountdown(EDIT_END);
  const collectionsGrouped = getCollectionsGrouped();
  const daysLeftLabel = `${days} days left`;
  const { copy } = brand;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '48px 64px 80px', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>
          {copy.collectionEyebrowPrefix} &middot; {daysLeftLabel}
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 42, fontWeight: 500, margin: 0 }}>{copy.collectionTitle}</h1>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{copy.collectionSubtitle}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {collectionsGrouped.map((coll) => (
          <div key={coll.name} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid var(--border)',
                paddingBottom: 14,
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 600, margin: 0 }}>{coll.name}</h2>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{coll.tagline}</span>
              </div>
              <span style={{ fontSize: 12, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>8 designs</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '28px 24px' }}>
              {coll.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}
                >
                  <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                    <ImageSlot src={item.imgSrc} alt={`${item.name} — ${item.colorway}`} />
                    <span
                      style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        background: 'color-mix(in oklch, var(--bg) 92%, transparent)',
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '4px 9px',
                        borderRadius: 2,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.numberInCollection} / 8
                    </span>
                    {item.lowStock && (
                      <span
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          background: 'var(--accent)',
                          color: 'var(--bg)',
                          fontSize: 11,
                          fontWeight: 700,
                          padding: '4px 9px',
                          borderRadius: 2,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Only {item.stock} left
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</span>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                      {item.fabric} &middot; {item.colorway}
                    </span>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, marginTop: 4 }}>{item.priceLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
