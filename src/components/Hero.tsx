import { Monogram } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', background: '#142240' }}>
      <img
        src="/hero.png"
        alt=""
        aria-hidden
        className="ken-burns"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(20,34,64,0.95) 0%, rgba(20,34,64,0.80) 52%, rgba(20,34,64,0.48) 100%)',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#b89d5a' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(245,242,236,0.65)', textTransform: 'uppercase' }}>
              Avocate au Barreau de Bordeaux
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', margin: '0 0 1.8rem' }}>
            <Monogram size={108} color="rgba(245,242,236,0.80)" strokeWidth={1.0} />
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              fontWeight: 400, color: '#f5f2ec',
              lineHeight: 1.18, margin: 0,
            }}>
              Alix Grizeau<br />Le Meillat
            </h1>
          </div>

          <p style={{
            fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)',
            color: 'rgba(245,242,236,0.65)',
            lineHeight: 1.78, margin: '0 0 0.6rem',
          }}>
            Droit des sociétés · Droit commercial · Recouvrement
          </p>
          <p style={{
            fontSize: 'clamp(0.78rem, 1.2vw, 0.88rem)',
            color: 'rgba(245,242,236,0.42)',
            lineHeight: 1.78, margin: '0 0 2.8rem',
          }}>
            Conseil & contentieux pour les entrepreneurs et les entreprises
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+33764095959" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#b89d5a', color: '#f5f2ec',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Appeler
            </a>
            <a href="mailto:lemeillat.avocat@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(245,242,236,0.30)', color: 'rgba(245,242,236,0.75)',
              padding: '1rem 2.4rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Écrire
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
