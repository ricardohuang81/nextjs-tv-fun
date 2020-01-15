import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <style jsx>{`
        a {
          font-family: monospace;
          font-size: 16px;
          color: #7B68EE;
        }
      `}</style>
    </div>
  )
}

// export default Header