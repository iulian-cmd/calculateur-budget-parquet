/* Keep the original French copy as the source for both language variants. */
let language = 'fr';
const translations = {
  'Calculateur de budget parquet — Leroy Merlin': 'Laminate flooring budget calculator — Leroy Merlin',
  'Bricolage · Budget matériaux': 'DIY · Materials budget',
  'Calculateur de budget parquet stratifié': 'Laminate flooring budget calculator',
  'Pièce de 1,52 m × 1,56 m — références et prix Leroy Merlin, achat par paquets complets, sous-couche acoustique et outillage. Tous les montants sont TTC.': 'Room measuring 1.52 m × 1.56 m — Leroy Merlin products and prices, full packs, acoustic underlay and tools. All prices include VAT.',
  'Prix constatés le 25/10/2026': 'Prices recorded on 25 October 2026',
  'Votre pièce': 'Your room',
  'Surface nette = longueur × largeur. La marge de chutes couvre les découpes de la première et dernière rangée ainsi que les ratés ; 15 % est recommandé pour une petite pièce, où les pertes proportionnelles sont plus élevées.': 'Net area = length × width. The waste allowance covers cuts in the first and last rows and mistakes; 15% is recommended for a small room, where proportionally more material is wasted.',
  'Longueur (m)': 'Length (m)', 'Largeur (m)': 'Width (m)',
  'Surface nette': 'Net area', 'À commander': 'Area to order', 'Surplus livré': 'Surplus supplied',
  'chutes réutilisables': 'reusable offcuts', 'Marge pour les chutes': 'Waste allowance',
  '10 % (pièce simple)': '10% (simple room)', '15 % (petite pièce, conseillé)': '15% (small room, recommended)',
  'Le sol stratifié': 'Laminate flooring',
  'Entrée à milieu de gamme, du 13,99 €/m² au 24,99 €/m². Les lames se vendent par botte complète : le calculateur arrondit au nombre de bottes nécessaire.': 'Budget to mid-range, from €13.99/m² to €24.99/m². Boards are sold in full packs: the calculator rounds up to the number of packs required.',
  'Choisissez votre sol stratifié': 'Choose your laminate flooring',
  'La sous-couche acoustique': 'Acoustic underlay',
  "Incluse dans ce budget conformément à votre demande, pour le confort acoustique. Les quatre stratifiés proposés n'ont pas de sous-couche intégrée : pas de doublon. Vendue en rouleau complet.": 'Included in this budget for acoustic comfort. None of the four flooring options has built-in underlay, so there is no duplication. Sold in full rolls.',
  'Choisissez votre sous-couche acoustique': 'Choose your acoustic underlay',
  'Les outils de pose': 'Installation tools',
  "Le maillet se vend séparément des kits de pose (qui contiennent une cale de frappe, un outil différent). Cochez « déjà possédé » si vous avez l'outil.": 'The mallet is sold separately from installation kits (which contain a tapping block, a different tool). Select “already owned” if you have the tool.',
  'Choisissez votre kit de pose': 'Choose your installation kit', 'Choisissez votre maillet': 'Choose your mallet', 'Choisissez votre outil de découpe': 'Choose your cutting tool',
  'Maillet de frappe': 'Rubber mallet', 'Découpe des lames': 'Cutting the boards', 'Bon à savoir': 'Good to know',
  'Paquets complets :': 'Full packs:',
  "pour 2,73 m² à couvrir, il faut 2 bottes quel que soit le modèle — soit 3,4 à 4,4 m² livrés selon la botte. Les chutes restantes (~1 à 2 m²) se conservent pour d'éventuelles réparations.": 'to cover 2.73 m², you need 2 packs of any model — supplying 3.4 to 4.4 m² depending on pack size. Keep the remaining offcuts (~1 to 2 m²) for future repairs.',
  'Promotion en cours :': 'Current promotion:',
  "l'ARTENS Intenso Malte est à 16,50 €/m² au lieu de 21,99 €/m² (−24 %, offre relevée valable jusqu'au 3 novembre sur leroymerlin.fr).": 'ARTENS Intenso Malte costs €16.50/m² instead of €21.99/m² (−24%; the recorded offer runs until 3 November on leroymerlin.fr).',
  'Boîte à onglets :': 'Mitre box:',
  'le modèle Dexter (285 × 110 mm) est trop étroit pour une lame de stratifié de 19,2 cm de large. Elle convient aux plinthes et aux petites coupes ; pour tronçonner les lames, préférez une scie sauteuse ou une scie que vous possédez déjà.': 'the Dexter model (285 × 110 mm) is too narrow for a 19.2 cm wide laminate board. It suits skirting and small cuts; use a jigsaw or a suitable saw you already own to cut boards.',
  'Non inclus dans ce budget :': 'Not included in this budget:',
  'plinthes et barres de seuil, livraison, pose par un artisan, film pare-vapeur sur dalle béton.': 'skirting and threshold strips, delivery, professional installation, or a vapour barrier on concrete.',
  'Prix :': 'Prices:',
  'montants TTC relevés sur les fiches leroymerlin.fr le 25 octobre 2026 — vérifiez la disponibilité en magasin à Annecy avant de commander.': 'VAT-inclusive prices recorded on leroymerlin.fr on 25 October 2026 — check stock at the Annecy store before ordering.',
  'Récapitulatif TTC': 'Budget including VAT', 'Stratifié livré': 'Flooring supplied',
  'Marge réelle due aux paquets complets': 'Actual surplus from full packs', 'Total TTC': 'Total incl. VAT',
  'Hors livraison et pose. Prix Leroy Merlin constatés le 25/10/2026 (les promotions peuvent évoluer). Soit': 'Excludes delivery and installation. Leroy Merlin prices recorded on 25 October 2026 (promotions may change). Equivalent to',
  'de surface nette.': 'of net floor area.',
  'Calculateur indicatif — les prix, conditionnements et disponibilités sont susceptibles de varier. Consultez les fiches produits liées pour les valeurs à jour.': 'Indicative calculator — prices, pack sizes and availability may change. Check the linked product pages for current details.',
  'Entrée de gamme — chêne clair, chanfrein V 4 côtés': 'Budget range — light oak, four-sided V-groove',
  'Milieu de gamme — résistant à l’eau, promo en cours': 'Mid-range — water resistant, currently on offer',
  'Milieu de gamme — classe 33, fabriqué en France': 'Mid-range — class 33, made in France',
  'Haut de la fourchette — résistant à l’eau, Uniclic': 'Upper price range — water resistant, Uniclic',
  'Le plus économique': 'Lowest price', 'Résistant à l’eau': 'Water resistant', 'Fabriqué en France': 'Made in France', 'Classe': 'Class', 'Pose Uniclic': 'Uniclic installation', 'Promo': 'Offer',
  'Acoustique + compensation des petites irrégularités du sol': 'Sound reduction + compensation for minor floor unevenness',
  'Acoustique standard — rouleau de 15 m²': 'Standard sound reduction — 15 m² roll',
  'Acoustique premium — rouleau de 15 m²': 'Premium sound reduction — 15 m² roll',
  '30 cales de dilatation + tire-lame + cale de frappe': '30 expansion spacers + pull bar + tapping block',
  'Tire-lame + cale de frappe + 30 cales': 'Pull bar + tapping block + 30 spacers',
  'Cale de frappe + cales de dilatation réglables + tire-lame métal': 'Tapping block + adjustable expansion spacers + metal pull bar',
  'Kit de pose (cales + tire-lame)': 'Installation kit (spacers + pull bar)', 'Kit de pose': 'Installation kit',
  'Maillet de caoutchouc noir 0,308 kg': 'Black rubber mallet 0.308 kg',
  'Maillet de caoutchouc blanc Dexter 0,540 kg': 'Dexter white rubber mallet 0.540 kg',
  '1er prix — suffisant pour emboîter des lames clic': 'Budget option — suitable for click-fit boards',
  'Plus confortable pour une grande pièce': 'More comfortable for a large room',
  '1er prix — coupe bois 55 mm, idéale pour tronçonner les lames': 'Budget option — cuts wood up to 55 mm, ideal for cutting boards',
  'Plus robuste — 4,5 étoiles, 290 avis': 'More robust — 4.5 stars, 290 reviews',
  'Le moins cher — plinthes et petites coupes uniquement': 'Lowest price — skirting and small cuts only',
  'Boîte à onglet + scie Dexter 360 mm': 'Dexter mitre box + 360 mm saw', 'Boîte à onglet + scie Dexter': 'Dexter mitre box + saw',
  'Scie sauteuse': 'Jigsaw', 'Maillet': 'Mallet', 'Outil de découpe': 'Cutting tool',
  'Aucun — déjà possédé': 'None — already owned', 'Je dispose déjà de cet outil': 'I already own this tool',
  'Recommandé': 'Recommended', 'Tout le nécessaire pour la pose': 'Everything needed for installation',
  'Voir la fiche Leroy Merlin →': 'View on Leroy Merlin →', 'Photo du produit :': 'Product photo:',
  'Boîte de 285 × 110 mm : trop étroite pour couper une lame de 19,2 cm de large. À réserver aux plinthes et petites coupes — pour les lames, choisissez une scie sauteuse.': '285 × 110 mm box: too narrow for a 19.2 cm wide board. Use for skirting and small cuts only — choose a jigsaw for boards.',
  'Découpe des lames non couverte : la boîte à onglets est trop étroite pour les lames de 19,2 cm — utilisez une scie que vous possédez déjà ou choisissez une scie sauteuse.': 'Board cutting is not covered: the mitre box is too narrow for 19.2 cm boards — use a suitable saw you already own or choose a jigsaw.',
  'Pour cette pièce :': 'For this room:', 'Il vous faut :': 'You need:', 'par botte': 'per pack',
  'Rouleau de': 'Roll of', 'bottes': 'packs', 'botte': 'pack', 'rouleaux': 'rolls', 'rouleau': 'roll',
  'paquets complets': 'full packs', 'livrés': 'supplied', 'avec': 'with', 'de chutes': 'waste',
  'Agrandir :': 'Enlarge:', 'Fermer l’image': 'Close image'
};
const translationEntries = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);
function translate(text) {
  if (language === 'fr') return text;
  // One pass prevents short terms from re-translating an already translated phrase.
  const pattern = new RegExp(translationEntries.map(([key]) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  return text.replace(pattern, match => translations[match]);
}
const sourceText = new WeakMap();
function applyLanguage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, .language-switch')) continue;
    const saved = sourceText.get(node);
    const original = saved && (node.nodeValue === saved.fr || node.nodeValue === saved.display) ? saved.fr : node.nodeValue;
    const display = translate(original);
    sourceText.set(node, { fr: original, display });
    if (node.nodeValue !== display) node.nodeValue = display;
  }
  document.querySelectorAll('[data-fr-label]').forEach(el => el.setAttribute('aria-label', translate(el.dataset.frLabel)));
  document.querySelectorAll('img[data-fr-alt]').forEach(el => el.alt = translate(el.dataset.frAlt));
  document.documentElement.lang = language;
  document.title = translate('Calculateur de budget parquet — Leroy Merlin');
  document.querySelector('meta[name="description"]').content = language === 'en'
    ? 'Estimate your laminate flooring budget with full packs, acoustic underlay and installation tools. All prices include VAT.'
    : 'Calculateur de budget pour un parquet stratifié Leroy Merlin : pièce de 1,52 × 1,56 m, marge de chutes 10–15 %, sous-couche acoustique et outillage, détail TTC.';
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
}

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
  language = button.dataset.language;
  try { localStorage.setItem('parquet-language', language); } catch (_) { /* Storage may be disabled. */ }
  renderOptions();
  document.getElementById('ongletWarn')?.remove();
  render();
}));

const imageDialog = document.getElementById('imageDialog');
let previewTrigger;
document.addEventListener('click', event => {
  const button = event.target.closest('.image-preview');
  if (!button) return;
  event.preventDefault();
  previewTrigger = button;
  const image = button.querySelector('img');
  const fullImage = imageDialog.querySelector('img');
  fullImage.src = image.src;
  fullImage.dataset.frAlt = image.dataset.frAlt;
  fullImage.alt = image.alt;
  document.getElementById('imageCaption').textContent = image.alt;
  imageDialog.showModal();
  document.body.classList.add('preview-open');
});
imageDialog.querySelector('button').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => {
  const bounds = imageDialog.getBoundingClientRect();
  if (event.target === imageDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) imageDialog.close();
});
imageDialog.addEventListener('close', () => {
  document.body.classList.remove('preview-open');
  previewTrigger?.focus();
});
try { language = localStorage.getItem('parquet-language') === 'en' ? 'en' : 'fr'; } catch (_) {}
renderOptions();
render();
