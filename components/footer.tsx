import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <Link href="/about" className="block retro-link">ABOUT US</Link>
          <Link href="/contact" className="block retro-link">CONTACT</Link>
          <Link href="/faq" className="block retro-link">FAQ</Link>
        </div>
        <div className="space-y-2">
          <a href="https://github.com/redwoodlabs" target="_blank" rel="noopener noreferrer" className="block retro-link">GITHUB</a>
          <a href="https://twitter.com/redwoodlabs" target="_blank" rel="noopener noreferrer" className="block retro-link">TWITTER</a>
          <a href="https://discord.gg/redwoodlabs" target="_blank" rel="noopener noreferrer" className="block retro-link">DISCORD</a>
        </div>
      </div>
      <div className="mt-8 text-center retro-text">
        © 2025 RED WOOD LABS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}

