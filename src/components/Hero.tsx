import { ShoppingBag, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#ff1f3d] opacity-10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#ffd700] opacity-10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="floating-particles absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#ffd700] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-8 inline-block">
          <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff1f3d] to-[#ffd700] animate-gradient">
            999Deals
          </div>
          <div className="h-1 bg-gradient-to-r from-[#ff1f3d] to-[#ffd700] mt-4 rounded-full"></div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Pakistan's Viral
          <br />
          <span className="text-[#ff1f3d]">Deals Store</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover trending products at unbelievable prices.
          <br />
          Limited stock deals delivered all across Pakistan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-[#ff1f3d] text-white font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff1f3d]/50">
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Shop Trending Deals
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff1f3d] to-[#ff4458] transition-transform duration-300 group-hover:scale-110"></div>
          </button>

          <button className="group px-8 py-4 bg-transparent border-2 border-[#ffd700] text-[#ffd700] font-bold rounded-full text-lg transition-all duration-300 hover:bg-[#ffd700] hover:text-[#111111] hover:scale-105 hover:shadow-2xl hover:shadow-[#ffd700]/50">
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Product Videos
            </span>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '5000+', label: 'Happy Customers' },
            { number: '999', label: 'Starting Price' },
            { number: '24/7', label: 'Support' },
            { number: '100%', label: 'Quality Guaranteed' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff1f3d] transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-black text-[#ffd700] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#ff1f3d] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#ff1f3d] rounded-full animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
