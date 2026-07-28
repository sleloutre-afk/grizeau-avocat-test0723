export default function Cabinet() {
  return (
    <section id="cabinet" style={{ padding: '7rem 0', background: '#f5f2ec' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-1.5rem', left: '-1.5rem',
              width: '180px', height: '180px',
              background: 'rgba(184,157,90,0.08)',
            }} />
            <img
              src="/alix.png"
              alt="Maître Alix Grizeau Le Meillat, avocate en droit des affaires à Bordeaux"
              style={{
                position: 'relative', width: '100%', maxWidth: '460px',
                display: 'block', objectFit: 'cover',
                aspectRatio: '4/5',
              }}
            />
          </div>

          {/* Bio */}
          <div style={{ paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b89d5a', marginBottom: '1.2rem' }}>
              Le cabinet
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 400, color: '#1a2535', lineHeight: 1.2, marginBottom: '2rem',
            }}>
              Maître Alix Grizeau<br />Le Meillat
            </h2>

            <div style={{ width: '36px', height: '2px', background: '#b89d5a', marginBottom: '2rem' }} />

            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#5a6a7e', marginBottom: '1.5rem' }}>
              Avocate au Barreau de Bordeaux depuis 2018, Maître Grizeau Le Meillat exerce exclusivement en droit des affaires. Son cabinet accompagne les dirigeants, les entrepreneurs et les entreprises — de la création à la cession, du conseil préventif au contentieux.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#5a6a7e', marginBottom: '1.5rem' }}>
              Forte d'une pratique rigoureuse du droit des sociétés et du droit commercial, elle intervient aussi bien pour structurer des opérations complexes — fusions, augmentations de capital, pactes d'associés — que pour défendre les intérêts de ses clients devant les juridictions commerciales bordelaises.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#5a6a7e', marginBottom: '2.4rem' }}>
              Son cabinet propose des consultations en présentiel, par vidéo ou par téléphone, pour s'adapter aux contraintes des chefs d'entreprise. Une approche directe, réactive, sans détours inutiles.
            </p>

            <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontStyle: 'italic', color: '#1a2535' }}>2018</p>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,37,53,0.45)', marginTop: '0.3rem' }}>Serment</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontStyle: 'italic', color: '#1a2535' }}>Bordeaux</p>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(26,37,53,0.45)', marginTop: '0.3rem' }}>Gironde · 33000</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
