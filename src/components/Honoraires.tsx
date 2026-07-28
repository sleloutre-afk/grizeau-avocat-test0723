const MODES = [
  {
    title: 'Temps passé',
    description: "Pour les dossiers de contentieux et les missions dont l'étendue n'est pas connue à l'avance. Un devis estimatif est remis en début de mission et actualisé à chaque étape significative.",
  },
  {
    title: 'Forfait',
    description: "Pour les prestations délimitées : création de société, rédaction de statuts, consultation ponctuelle, rédaction d'un contrat type. Le tarif est fixé et communiqué avant toute intervention.",
  },
  {
    title: 'Consultation',
    description: "Consultation au cabinet (60 min · 150 € TTC), par vidéo (45 min · 90 € TTC) ou par téléphone (45 min · 90 € TTC). Question simple par écrit : 60 € TTC.",
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" style={{ padding: '7rem 0', background: '#f5f2ec' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b89d5a', marginBottom: '0.8rem' }}>
              Honoraires
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#1a2535', marginBottom: '1.8rem', lineHeight: 1.22,
            }}>
              Clarté et transparence
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#5a6a7e', marginBottom: '2.2rem' }}>
              Une convention d'honoraires est systématiquement remise avant toute intervention. Les modalités de facturation et le montant prévisionnel sont définis ensemble, sans ambiguïté.
            </p>
            <a href="mailto:lemeillat.avocat@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#1b2d4e', color: '#f5f2ec',
              padding: '0.9rem 2.2rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              marginRight: '0.75rem',
            }}>
              Écrire
            </a>
            <a href="tel:+33764095959" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(26,37,53,0.25)', color: '#1a2535',
              padding: '0.9rem 2.2rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Appeler
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {MODES.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '2px', background: '#b89d5a', flexShrink: 0, marginTop: '4px', minHeight: '3rem', opacity: 0.5 }} />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 400, color: '#1a2535', marginBottom: '0.6rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.78, color: '#5a6a7e' }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
