import { getCollectionsGrouped } from '../data/products';
import ImageSlot from '../components/ImageSlot';
import { asset } from '../lib/asset';
import { brand } from '../brand';

export default function Artisans() {
  const collectionsGrouped = getCollectionsGrouped();
  const { copy } = brand;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', minHeight: 480, borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, padding: '72px 64px', minWidth: 0 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>{copy.artisansEyebrow}</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 500, lineHeight: 1.1, margin: 0 }}>
            {copy.artisansHeadline[0]}
            <br />
            {copy.artisansHeadline[1]}
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-muted-2)', maxWidth: 440, margin: 0 }}>{copy.artisansBody}</p>
        </div>
        <div style={{ position: 'relative', background: 'var(--surface-2)' }}>
          <ImageSlot src={asset('/images/weavers-hero.jpg')} alt={copy.artisansHeroPlaceholder} />
        </div>
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '0 64px 80px' }}>
        {collectionsGrouped.map((coll) => (
          <div
            key={coll.name}
            style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 36, alignItems: 'center', paddingBottom: 32, borderBottom: '1px solid var(--border)' }}
          >
            <div style={{ position: 'relative', aspectRatio: '4/3' }}>
              <ImageSlot src={coll.loomImg} alt={`Atelier photo — ${coll.name} artisans at work`} radius={4} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 600 }}>{coll.name}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 520 }}>
                {coll.tagline}. {copy.artisansRowSuffix}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
