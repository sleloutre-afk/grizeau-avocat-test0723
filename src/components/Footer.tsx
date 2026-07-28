import { Monogram } from './Navbar'

export default function Footer() {
  return (
    <footer style={{ background: '#142240', color: 'rgba(245,242,236,0.65)', padding: '4rem 0 2.5rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem', marginBottom: '3.5rem' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.2rem' }}>
              <Monogram size={36} color="rgba(245,242,236,0.50)" strokeWidth={1.0} />
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.85rem', color: 'rgba(245,242,236,0.80)', margin: 0 }}>Alix Grizeau Le Meillat</p>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(184,157,90,0.65)', margin: 0 }}>Avocate · Bordeaux</p>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.78, color: 'rgba(245,242,236,0.42)', maxWidth: '280px' }}>
              Avocate au Barreau de Bordeaux depuis 2018. Droit des sociétés, droit commercial, recouvrement de créances.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.30)', marginBottom: '1.2rem' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {['#cabinet', '#domaines', '#honoraires', '#ressources', '#contact'].map((href) => (
                <a key={href} href={href} style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.55)', textDecoration: 'none' }}>
                  {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.30)', marginBottom: '1.2rem' }}>
              Cabinet
            </p>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.78, color: 'rgba(245,242,236,0.42)', marginBottom: '1rem' }}>
              34 rue de Belfort<br />33000 Bordeaux
            </p>
            <a href="tel:+33764095959" style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.55)', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}>07 64 09 59 59</a>
            <a href="mailto:lemeillat.avocat@gmail.com" style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.55)', textDecoration: 'none', display: 'block', marginBottom: '1.5rem' }}>lemeillat.avocat@gmail.com</a>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="tel:+33764095959" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid rgba(245,242,236,0.20)', color: 'rgba(245,242,236,0.65)',
                padding: '0.55rem 1.2rem', textDecoration: 'none',
                fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                Appeler
              </a>
              <a href="mailto:lemeillat.avocat@gmail.com" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid rgba(245,242,236,0.20)', color: 'rgba(245,242,236,0.65)',
                padding: '0.55rem 1.2rem', textDecoration: 'none',
                fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                Écrire
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(245,242,236,0.10)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.68rem', color: 'rgba(245,242,236,0.28)' }}>
            &copy; {new Date().getFullYear()} Maître Alix Grizeau Le Meillat — Avocate au Barreau de Bordeaux
          </p>
          <p style={{ fontSize: '0.68rem', color: 'rgba(245,242,236,0.20)' }}>
            Membre du Barreau de Bordeaux — Case 132
          </p>
        </div>

      </div>
    </footer>
  )
}
