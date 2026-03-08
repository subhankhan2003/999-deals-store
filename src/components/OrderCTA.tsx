import { MessageCircle, Facebook, Zap, ArrowRight } from 'lucide-react';

const OrderCTA = () => {
  const whatsappNumber = '03120592935';
  const facebookUrl = 'https://facebook.com';

  return (
    <section className="py-20 bg-gradient-to-br from-[#111111] via-[#1a0a0a] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmMWYzZCIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-50"></div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#ffd700] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#ff1f3d] via-[#ff2f4d] to-[#ff1f3d] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#ff1f3d]/50 border-4 border-[#ffd700] relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhcmJ1cnN0IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTUwIDUwbDEwLTMwIDEwIDMwIDMwIDEwLTMwIDEwLTEwIDMwLTEwLTMwLTMwLTEweiIgZmlsbD0iI2ZmZDcwMCIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXJidXJzdCkiLz48L3N2Zz4=')] opacity-20"></div>

            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(8)].map((_, i) => (
                <Zap
                  key={i}
                  className="absolute text-[#ffd700] opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${20 + Math.random() * 30}px`,
                    height: `${20 + Math.random() * 30}px`,
                    animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 text-center">
              <div className="inline-flex items-center gap-2 bg-[#ffd700] text-[#111111] px-6 py-3 rounded-full mb-8 font-black text-sm md:text-base animate-bounce shadow-lg">
                <Zap className="w-5 h-5" />
                LIMITED STOCK ALERT
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                Grab Your Deal
                <br />
                Before Stock Runs Out!
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Don't miss out on these viral products at unbeatable prices.
                <br className="hidden md:block" />
                Order now and get fast delivery across Pakistan!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 bg-[#25D366] text-white font-black rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-[#25D366]/50 flex items-center gap-3 overflow-hidden w-full sm:w-auto justify-center"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] group-hover:scale-110 transition-transform duration-300"></span>
                  <MessageCircle className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Order on WhatsApp</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 bg-[#1877F2] text-white font-black rounded-full text-lg md:text-xl transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-[#1877F2]/50 flex items-center gap-3 overflow-hidden w-full sm:w-auto justify-center"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1877F2] to-[#0C5CBF] group-hover:scale-110 transition-transform duration-300"></span>
                  <Facebook className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Message on Facebook</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-white text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-[#ffd700] rounded-full animate-pulse"></div>
                  <span className="font-bold">200+ Orders Today</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-[#ffd700] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="font-bold">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-[#ffd700] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="font-bold">Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">Trusted by 5000+ customers across Pakistan</p>
            <div className="flex justify-center items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-[#ffd700] rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </section>
  );
};

export default OrderCTA;
