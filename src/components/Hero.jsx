import heroImage from "../assets/hero.png"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-12 py-16"
    >
      <div className="max-w-xl text-center md:text-left">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I&apos;m <span className="text-cyan-400">Sai Ganesh</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Frontend Developer | React Developer
        </p>

        <a
          href="#projects"
          className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          View Projects
        </a>
      </div>

      <div className="w-full max-w-sm md:max-w-md">
        <img
          src={heroImage}
          alt="Sai Ganesh portfolio illustration"
          className="w-full rounded-3xl shadow-2xl shadow-cyan-500/20 object-cover"
        />
      </div>
    </section>
  )
}

export default Hero
