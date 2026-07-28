import Link from 'next/link'

const ARTICLES = [
  {
    slug: 'sas-sarl-quelle-forme-juridique',
    title: 'SAS ou SARL : quelle forme juridique choisir ?',
    excerpt: "SAS et SARL se ressemblent mais diffèrent sur des points décisifs : gouvernance, régime social du dirigeant, cession des titres. Ce qu'il faut peser avant de trancher.",
    date: '2025',
  },
  {
    slug: 'cession-fonds-de-commerce-etapes',
    title: 'Cession de fonds de commerce : les étapes clés',
    excerpt: "De la promesse de vente à l'acte définitif, plusieurs étapes sont incontournables pour sécuriser l'opération, côté vendeur comme côté acquéreur.",
    date: '2025',
  },
  {
    slug: 'recouvrement-creances-amiable-judiciaire',
    title: 'Recouvrement de créances : amiable puis judiciaire',
    excerpt: "Une facture impayée n'est pas une fatalité. Avant de saisir le tribunal, des procédures amiables permettent souvent de recouvrer rapidement sa créance.",
    date: '2025',
  },
]

export default function Ressources() {
  return (
    <section id="ressources" style={{ padding: '7rem 0', background: '#ede8df' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b89d5a', marginBottom: '0.8rem' }}>
              Ressources
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#1a2535',
            }}>
              Mieux piloter votre entreprise
            </h2>
          </div>
          <Link href="/ressources" style={{
            fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#b89d5a', textDecoration: 'none', borderBottom: '1px solid rgba(184,157,90,0.35)',
            paddingBottom: '2px',
          }}>
            Tous les articles
          </Link>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none' }}>
              <article className="card-hover" style={{ background: '#f5f2ec', padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(26,37,53,0.40)', marginBottom: '1rem' }}>
                  {a.date}
                </p>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#1a2535', lineHeight: 1.42, marginBottom: '1rem', flexGrow: 1 }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.72, color: '#5a6a7e', marginBottom: '1.5rem' }}>
                  {a.excerpt}
                </p>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b89d5a', borderBottom: '1px solid rgba(184,157,90,0.35)', paddingBottom: '2px', alignSelf: 'flex-start' }}>
                  Lire
                </span>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
