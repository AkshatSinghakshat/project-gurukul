function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Gurukul Management System
        </h1>

        <p className="text-xl mb-8">
          Student • Teacher • Admin Portal
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;