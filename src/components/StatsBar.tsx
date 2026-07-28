const STATS = [
  { value: '2018', label: 'Prestation de serment' },
  { value: 'Case 132', label: 'Barreau de Bordeaux' },
  { value: 'Affaires', label: 'Spécialisation exclusive' },
  { value: 'Visio & Tél', label: 'Consultations à distance' },
]

export default function StatsBar() {
  return (
    <div style={{ background: '#ede8df', borderTop: '1px solid #d5cfc5', borderBottom: '1px solid #d5cfc5' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '1.8rem 1.2rem',
              borderRight: i < 3 ? '1px solid #d5cfc5' : 'none',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontStyle: 'italic', color: '#1a2535', marginBottom: '0.3rem' }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(26,37,53,0.50)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
