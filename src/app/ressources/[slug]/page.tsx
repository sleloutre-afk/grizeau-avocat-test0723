import { ARTICLES, getArticle } from '@/lib/articles'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <main style={{ minHeight: '100vh', background: '#f5f2ec' }}>
      <div style={{ background: '#1b2d4e', padding: '9rem 0 4rem' }}>
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/ressources" style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            &larr; Ressources
          </Link>
          <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(184,157,90,0.70)', marginBottom: '0.8rem' }}>
            {article.date}
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', fontWeight: 400, color: '#f5f2ec', lineHeight: 1.22 }}>
            {article.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6" style={{ padding: '4rem 1.5rem 6rem' }}>
        <div
          style={{ fontSize: '0.95rem', lineHeight: 1.88, color: '#1a2535' }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#ede8df', borderLeft: '3px solid #b89d5a' }}>
          <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#1a2535', marginBottom: '0.6rem' }}>
            Une question juridique pour votre entreprise ?
          </p>
          <p style={{ fontSize: '0.85rem', color: '#5a6a7e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Maître Grizeau Le Meillat reçoit au cabinet, par vidéo ou par téléphone. Prenez contact pour une première consultation.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:+33764095959" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#1b2d4e', color: '#f5f2ec',
              padding: '0.8rem 2rem', textDecoration: 'none',
              fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Appeler
            </a>
            <a href="mailto:lemeillat.avocat@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(26,37,53,0.25)', color: '#1a2535',
              padding: '0.8rem 2rem', textDecoration: 'none',
              fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Écrire
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
