// src/app/page.js
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Hero Section */}
      <section className="text-center p-6 rounded-lg bg-white shadow-lg max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to BulkDelete</h1>
        <p className="text-gray-600 mb-6">Mass delete entire CMS collections with one click.</p>

        {/* CTA Button - Corrected Link Usage */}
        <Link href="/form" legacyBehavior>
          <a className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </a>
        </Link>
      </section>
    </main>
  );
}
