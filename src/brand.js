// Brand config — the knobs that differ between drop-model storefronts (Mahika here;
// Aaranya's saree site and Vasavi's lehenga site follow the same pattern in their own repos).
export const brand = {
  name: 'Mahika',
  wordmark: 'MAHIKA',
  unit: 'set',
  unitPlural: 'sets',
  orderPrefix: 'MAH-',
  editStart: new Date(2026, 7, 3), // Aug 3, 2026
  editWindowDays: 60,
  basePrice: 18500,
  priceStep: 2800,

  nav: {
    editLabel: 'The Edit — 40 Suits',
    artisansLabel: 'Our Artisans',
  },

  copy: {
    heroEyebrow: 'The 2026 Festive Edit',
    heroHeadline: ['Forty suits.', 'Sixty days.', 'Then, gone.'],
    heroBody:
      'Each set is hand-crafted across our partner ateliers in Patiala, Srinagar, Bhuj, Chanderi and Kolkata — forty sets, individually numbered, never remade once the collection closes.',
    heroCtaPrimary: 'View The 40 Suits',
    heroCtaSecondary: 'Our Craft Story',
    heroPlaceholder: 'Hero photo — model in featured phulkari suit, editorial lighting',

    whyOnlyTitle: 'Why only forty',
    whyCards: [
      {
        number: '01',
        title: 'Individually numbered',
        body: 'Every design is crafted in a run of ten sets, each carrying its own number on an inner label and certificate of authenticity.',
      },
      {
        number: '02',
        title: 'Hand-crafted, not remade',
        body: "Once a design's ten sets are complete, the atelier moves on. No reissues, no restocks — ever.",
      },
      {
        number: '03',
        title: 'A new edit every 60 days',
        body: 'When the countdown ends, this collection retires permanently and a new edit of forty takes its place.',
      },
    ],

    fromThisEdit: 'From this edit',
    viewAllCta: 'View all 40 suits',

    collectionEyebrowPrefix: 'Festive Edit',
    collectionTitle: 'The 40 Suits',
    collectionSubtitle: "Forty sets, each numbered 1–40. When they're gone, this edit is retired.",
    collectionCrumb: 'The 40 Suits',

    craftedInLabel: 'Crafted in',
    inclusiveOfTaxes: 'inclusive of taxes',
    lowStockSuffix: (n) => `Only ${n} of 10 sets remain in this design`,
    closesSuffix: 'not restocked after sellout',
    theMakerHeading: 'The artisan',
    moreFromPrefix: 'More from',

    bagTitle: 'Your Bag',
    bagEmpty: 'Your bag is empty.',
    browseAllCta: 'Browse the 40 suits',
    shipsWithCert: 'Each set ships with its certificate of authenticity',

    checkoutTitle: 'Checkout',
    measurementsLabel: 'Measurements for made-to-measure stitching',
    measurementsPlaceholder: 'e.g. Bust 36" / Waist 30" / Hip 38" / Kameez length 50"',

    confirmedBody: (orderNumber, totalLabel) =>
      `Order ${orderNumber} for ${totalLabel} is being prepared. Each set will arrive with its certificate of authenticity and edition card.`,
    continueBrowsing: 'Continue Browsing',

    artisansEyebrow: 'Our Artisans',
    artisansHeadline: ['Five ateliers.', 'One promise.'],
    artisansBody:
      'Every Mahika edit is hand-crafted by five partner artisan collectives, each behind one of our ongoing lines. We commission by hand, pay above market rate, and never rush a design to meet a deadline.',
    artisansHeroPlaceholder: 'Photo — artisan hand-embroidering, Patiala atelier',
    artisansRowSuffix: 'An ongoing line, revisited with eight new designs in every edit.',

    footerTagline: 'Crafted in India',
  },

  // Color tokens live as CSS custom properties in index.css (:root), not here —
  // components consume them via var(--accent) etc. rather than importing this object.
};
