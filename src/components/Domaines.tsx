const FEATURED = {
  title: 'Droit des sociétés',
  description: "Création de sociétés (SAS, SARL, SA, SCI), rédaction de statuts et de pactes d'associés, augmentations de capital, cessions de parts et d'actions, fusions-acquisitions, dissolution et liquidation. Maître Grizeau Le Meillat accompagne les dirigeants à chaque étape de la vie de leur entreprise.",
  icon: '/societes.svg',
}

const DOMAINES = [
  { title: 'Droit commercial & contrats', icon: '/commercial.svg' },
  { title: 'Recouvrement de créances', icon: '/recouvrement.svg' },
  { title: "Garanties & sûretés", icon: '/credit.svg' },
  { title: 'Cession de fonds de commerce', icon: '/commercial.svg' },
  { title: 'Rédaction de contrats', icon: '/redaction.svg' },
  { title: 'Contentieux commercial', icon: '/societes.svg' },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ padding: '7rem 0', background: '#ede8df' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b89d5a', marginBottom: '0.8rem' }}>
            Domaines d'intervention
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
            fontWeight: 400, color: '#1a2535',
          }}>
            Exclusivement en droit des affaires
          </h2>
        </div>

        {/* Featured */}
        <div style={{
          background: '#1b2d4e', padding: '3.5rem',
          display: 'flex', gap: '2.5rem', alignItems: 'flex-start',
          marginBottom: '1.5rem',
        }}>
          <img src={FEATURED.icon} alt="" aria-hidden style={{ width: '48px', height: '48px', opacity: 0.70, filter: 'brightness(0) invert(1)', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.45rem', fontWeight: 400, color: '#f5f2ec', marginBottom: '1rem' }}>
              {FEATURED.title}
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.82, color: 'rgba(245,242,236,0.65)' }}>
              {FEATURED.description}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3" style={{ gap: '1px', background: '#d5cfc5' }}>
          {DOMAINES.map((d) => (
            <div key={d.title} className="card-hover" style={{
              background: '#f5f2ec', padding: '2.2rem 2rem',
              display: 'flex', alignItems: 'flex-start', gap: '1.2rem',
            }}>
              <img src={d.icon} alt="" aria-hidden style={{ width: '32px', height: '32px', opacity: 0.35, flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.88rem', color: '#1a2535', lineHeight: 1.55 }}>{d.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
