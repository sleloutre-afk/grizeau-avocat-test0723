export default function Citation() {
  return (
    <section style={{ padding: '7rem 0', background: '#1b2d4e' }}>
      <div className="max-w-6xl mx-auto px-6" style={{ textAlign: 'center' }}>

        <div style={{ fontSize: '4rem', color: 'rgba(184,157,90,0.40)', lineHeight: 1, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>
          &ldquo;
        </div>
        <p style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'rgba(245,242,236,0.88)',
          lineHeight: 1.72,
          maxWidth: '680px',
          margin: '0 auto 2rem',
        }}>
          En droit des affaires, anticiper coûte toujours moins cher que subir. Mon rôle est d'être l'alliée juridique des dirigeants : présente en amont pour sécuriser, résolue en contentieux pour défendre.
        </p>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(184,157,90,0.70)' }}>
          Maître Alix Grizeau Le Meillat
        </p>

      </div>
    </section>
  )
}
