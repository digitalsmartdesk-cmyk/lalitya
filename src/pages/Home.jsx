import { Link, useNavigate } from 'react-router-dom';
import { EDIT_END, getFeatured } from '../data/products';
import ImageSlot from '../components/ImageSlot';
import useCountdown from '../hooks/useCountdown';
import { asset } from '../lib/asset';
import { brand } from '../brand';

export default function Home() {
  const navigate = useNavigate();
  const { parts: countdownParts } = useCountdown(EDIT_END);
  const featured = getFeatured();
  const { copy } = brand;

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)',
          gap: 0,
          alignItems: 'stretch',
          minHeight: 640,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26, padding: '80px 64px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>{copy.heroEyebrow}</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 64, lineHeight: 1.05, fontWeight: 500, margin: 0, maxWidth: 560 }}>
            {copy.heroHeadline[0]}
            <br />
            {copy.heroHeadline[1]}
            <br />
            <span style={{ fontStyle: 'italic' }}>{copy.heroHeadline[2]}</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-muted-2)', maxWidth: 460, margin: 0 }}>{copy.heroBody}</p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginTop: 6 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              {countdownParts.map((p) => (
                <div
                  key={p.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '12px 16px',
                    minWidth: 64,
                  }}
                >
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 600 }}>{p.value}</span>
                  <span style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: 2 }}>{p.label}</span>
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>until this edit closes for good</span>
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
            <button
              onClick={() => navigate('/collection')}
              style={{
                background: 'var(--text)',
                color: 'var(--bg)',
                border: 'none',
                padding: '15px 30px',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 0.4,
                cursor: 'pointer',
                borderRadius: 2,
              }}
            >
              {copy.heroCtaPrimary}
            </button>
            <button
              onClick={() => navigate('/artisans')}
              style={{
                background: 'none',
                color: 'var(--text)',
                border: '1px solid var(--border-strong)',
                padding: '15px 26px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                borderRadius: 2,
              }}
            >
              {copy.heroCtaSecondary}
            </button>
          </div>
        </div>
        <div style={{ position: 'relative', background: 'var(--surface-2)' }}>
          <ImageSlot src={asset('/images/hero-main.jpg')} alt={copy.heroPlaceholder} />
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 28, padding: '72px 64px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, fontWeight: 500, margin: 0 }}>{copy.whyOnlyTitle}</h2>
          <Link to="/collection" style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            See the full edit &rarr;
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {copy.whyCards.map((card) => (
            <WhyCard key={card.number} number={card.number} title={card.title}>
              {card.body}
            </WhyCard>
          ))}
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '16px 64px 72px' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, fontWeight: 500, margin: 0 }}>{copy.fromThisEdit}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20 }}>
          {featured.map((item) => (
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
                    letterSpacing: 0.3,
                  }}
                >
                  {item.numberInCollection} / 8
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 11, letterSpacing: 0.8, textTransform: 'uppercase', fontWeight: 700, color: 'var(--accent)' }}>
                  {item.collectionName}
                </span>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</span>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, marginTop: 4 }}>{item.priceLabel}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate('/collection')}
          style={{
            alignSelf: 'center',
            marginTop: 20,
            background: 'none',
            color: 'var(--text)',
            border: '1px solid var(--border-strong)',
            padding: '14px 32px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: 2,
          }}
        >
          {copy.viewAllCta}
        </button>
      </section>
    </main>
  );
}

function WhyCard({ number, title, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontStyle: 'italic' }}>{number}</span>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{children}</p>
    </div>
  );
}
