export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-blue-800 text-white text-center p-8">
        <h1 className="text-4xl md:text-6xl font-serif text-yellow-400">
          Custom Homes & Community Development in Lafayette Parish
        </h1>
        <button className="mt-6 bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-bold hover:opacity-90">
          Let’s Build Together
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-serif mb-4">About</h2>
        <p className="text-lg text-gray-700 mb-6">
          Build337 is dedicated to creating exceptional custom homes and planned communities.
          Blending timeless design with modern amenities in Lafayette Parish’s most sought–after locations.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-serif mb-8">Projects</h2>
        <p className="text-gray-600">
          Example projects will be displayed here once images are added.
        </p>
      </section>

      {/* Contact Section */}
      <section className="text-center py-20 bg-blue-800 text-white">
        <h2 className="text-4xl font-serif mb-6">Invest. Partner. Build.</h2>
        <a
          href="mailto:hello@build337.com"
          className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold hover:opacity-90"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
