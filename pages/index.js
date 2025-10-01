import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] text-[#0A1A2F] font-sans">
      <section className="h-screen flex flex-col justify-center items-center bg-[#0A1A2F] text-white text-center p-8">
        <h1 className="text-4xl md:text-6xl font-serif text-[#CBA135]">Custom Homes & Community Development in Lafayette Parish</h1>
        <button className="mt-6 bg-[#CBA135] text-[#0A1A2F] px-6 py-3 rounded-lg font-bold hover:opacity-90">
          Let’s Build Together
        </button>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-serif mb-4">About</h2>
        <p className="text-lg text-[#444] mb-6">
          Build337 is dedicated to creating exceptional custom homes and planned communities.
          Blending timeless design with modern amenities in Lafayette Parish’s most sought-after locations.
        </p>
        <Image src="/lafayette-map.jpg" alt="Lafayette Parish Map" width={600} height={400} className="rounded-lg shadow-lg" />
      </section>

      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-serif mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Image src="/sample-home.jpg" alt="Custom Home" width={600} height={400} className="rounded-lg shadow-lg" />
          <Image src="/sample-community.jpg" alt="Community Development" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="text-center py-20 bg-[#0A1A2F] text-white">
        <h2 className="text-4xl font-serif mb-6">Invest. Partner. Build.</h2>
        <a href="mailto:hello@build337.com" className="bg-[#CBA135] text-[#0A1A2F] px-8 py-4 rounded-lg font-bold hover:opacity-90">
          Get in Touch
        </a>
      </section>
    </div>
  )
}
