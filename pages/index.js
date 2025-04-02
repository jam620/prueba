import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Next.js 12.2 Vulnerability PoC</h1>
      <p>This is a simple proof of concept application running Next.js 12.2</p>
      <div style={{ marginTop: '20px' }}>
        <Link href="/login">
          <a style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            Go to Login
          </a>
        </Link>
      </div>
    </div>
  )
} 