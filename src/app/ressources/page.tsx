import Link from 'next/link'
import { ARTICLES } from '@/lib/articles'

export default function RessourcesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f2ec' }}>
      <div style={{ background: '#1b2d4e', padding: '9rem 0 4rem' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(184,157,90,0.70)', marginBottom: '0.8rem' }}>
            Ressources
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#f5f2ec' }}>
            Mieux piloter votre entreprise
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6" style={{ padding: '5rem 1.5rem' }}>
        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none' }}>
              <article className="card-hover" style={{ background: '#ede8df', padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(26,37,53,0.40)', marginBottom: '1rem' }}>
                  {a.date}
                </p>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#1a2535', lineHeight: 1.42, marginBottom: '1rem', flexGrow: 1 }}>
                  {a.title}
                </h2>
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
    </main>
  )
}
