import { brand } from '../brand';
import { asset } from '../lib/asset';

export const EDIT_START = brand.editStart;
export const EDIT_END = new Date(EDIT_START.getTime() + brand.editWindowDays * 86400000);

export const COLLECTIONS = [
  {
    name: 'Phulkari Rang',
    tagline: 'Silk dupion with phulkari hand-embroidery, festive vibrancy',
    fabric: 'Silk Dupion',
    weave: 'Phulkari hand-embroidery',
    loom: 'Patiala',
    loomImg: asset('/images/loom-phulkari-rang.jpg'),
    names: ['Gulnaar', 'Amrita', 'Tejinder', 'Prabhjot', 'Harleen', 'Manjeet', 'Simran', 'Kiranjit'],
  },
  {
    name: 'Kashmiri Kali',
    tagline: 'Pashmina wool with kashida embroidery, winter opulence',
    fabric: 'Pashmina Wool',
    weave: 'Kashida hand-embroidery',
    loom: 'Srinagar',
    loomImg: asset('/images/loom-kashmiri-kali.jpg'),
    names: ['Irfana', 'Zooni', 'Gulshan', 'Naseema', 'Parveen', 'Shahida', 'Rukhsar', 'Tabassum'],
  },
  {
    name: 'Bandhani Bloom',
    tagline: 'Cotton silk with bandhani tie-dye, festive colour',
    fabric: 'Cotton Silk',
    weave: 'Bandhani tie-dye',
    loom: 'Bhuj',
    loomImg: asset('/images/loom-bandhani-bloom.jpg'),
    names: ['Devyani', 'Jalpa', 'Kavya', 'Nidhi', 'Priya', 'Riddhi', 'Saumya', 'Tanvi'],
  },
  {
    name: 'Resham Naaz',
    tagline: 'Chanderi silk with resham thread work, diaphanous grace',
    fabric: 'Chanderi Silk',
    weave: 'Resham thread embroidery',
    loom: 'Chanderi',
    loomImg: asset('/images/loom-resham-naaz.jpg'),
    names: ['Aahana', 'Deepali', 'Ishita', 'Kshipra', 'Madhuri', 'Nandini', 'Pallavi', 'Radha'],
  },
  {
    name: 'Kantha Roz',
    tagline: 'Muslin with kantha stitch, effortless everyday artistry',
    fabric: 'Muslin',
    weave: 'Kantha stitch embroidery',
    loom: 'Kolkata',
    loomImg: asset('/images/loom-kantha-roz.jpg'),
    names: ['Aditi', 'Bela', 'Chanda', 'Dipti', 'Eshita', 'Falguni', 'Garima', 'Haimanti'],
  },
];

const COLORWAYS = ['Deep Maroon', 'Antique Gold', 'Emerald', 'Midnight Indigo', 'Ivory & Rose', 'Rust & Copper', 'Sapphire', 'Wine', 'Peacock Teal', 'Sandalwood'];
const COLORWAY_SLUGS = {
  'Deep Maroon': 'deep-maroon',
  'Antique Gold': 'antique-gold',
  Emerald: 'emerald',
  'Midnight Indigo': 'midnight-indigo',
  'Ivory & Rose': 'ivory-rose',
  'Rust & Copper': 'rust-copper',
  Sapphire: 'sapphire',
  Wine: 'wine',
  'Peacock Teal': 'peacock-teal',
  Sandalwood: 'sandalwood',
};

function buildProducts() {
  const list = [];
  let i = 0;
  COLLECTIONS.forEach((coll, cIdx) => {
    for (let j = 1; j <= 8; j++) {
      i++;
      const colorway = COLORWAYS[i % COLORWAYS.length];
      const nameBase = coll.names[j - 1];
      const price = brand.basePrice + (i % 9) * brand.priceStep;
      const stock = 10 - ((i * 3 + 1) % 10); // 1-10, out of 10 sets total
      list.push({
        id: i,
        number: i,
        collectionId: cIdx,
        collectionName: coll.name,
        collectionTagline: coll.tagline,
        numberInCollection: j,
        totalInCollection: 8,
        totalPieces: 10,
        name: nameBase,
        fabric: coll.fabric,
        weave: coll.weave,
        colorway,
        loom: coll.loom,
        price,
        priceLabel: '₹' + price.toLocaleString('en-IN'),
        stock,
        lowStock: stock <= 3,
        imgSrc: asset(`/images/${COLORWAY_SLUGS[colorway]}.jpg`),
        description: `Hand-crafted in ${coll.loom}, this ${coll.fabric.toLowerCase()} suit set features ${coll.weave.toLowerCase()} in ${colorway.toLowerCase()} tones. Part of the ${coll.name} line — only 10 sets of this design exist in this edit; once sold, it will not be remade.`,
        weaverStory: `Hand-crafted over 18 days by master artisan families in ${coll.loom}, carrying forward a technique passed through four generations. Your purchase directly supports the atelier collective behind this set.`,
        specs: [
          { label: 'Fabric', value: coll.fabric },
          { label: 'Craft', value: coll.weave },
          { label: 'Edition size', value: '10 sets' },
          { label: 'Set includes', value: 'Kameez, bottom, dupatta' },
          { label: 'Sizing', value: 'Made-to-measure, XS–XXL' },
          { label: 'Includes', value: 'Certificate of authenticity, edition card' },
        ],
      });
    }
  });
  return list;
}

export const PRODUCTS = buildProducts();

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

export function getCollectionsGrouped() {
  return COLLECTIONS.map((coll, cIdx) => ({
    ...coll,
    items: PRODUCTS.filter((p) => p.collectionId === cIdx),
  }));
}

export function getRelatedProducts(product, count = 3) {
  return PRODUCTS.filter((p) => p.collectionId === product.collectionId && p.id !== product.id).slice(0, count);
}

export function getFeatured() {
  return [0, 8, 16, 24, 32].map((idx) => PRODUCTS[idx]);
}
