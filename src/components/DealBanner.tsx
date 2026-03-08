import { Zap, Clock, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

const DealBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#111111] via-[#1a0505] to-[#111111] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMWYzZCIgb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Zap className="w-6 h-6 text-[#ffd700] opacity-40" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-[#ff1f3d] via-[#ff3344] to-[#ff1f3d] rounded-3xl overflow-hidden shadow-2xl shadow-[#ff1f3d]/50 border-4 border-[#ffd700]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InN0YXJzIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiNmZmQ3MDAiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[#ffd700] text-[#111111] px-6 py-3 rounded-full mb-6 animate-pulse shadow-lg">
              <Flame className="w-6 h-6" />
              <span className="font-black text-lg">FLASH SALE LIVE NOW</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl">
              Limited Time Offer
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Grab your favorite products before they're gone!
            </p>

            <div className="flex justify-center gap-4 mb-8">
              {[
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white/20 backdrop-blur-sm border-2 border-[#ffd700] rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-2xl">
                    <div className="text-4xl md:text-6xl font-black text-[#ffd700] drop-shadow-lg">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-white font-bold mt-2 text-sm md:text-base">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="px-8 py-4 bg-[#ffd700] text-[#111111] font-black rounded-full text-lg hover:bg-white transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-[#ffd700]/50 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Shop Now & Save Big
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 border-2 border-white/50">
                View All Deals
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Clock className="w-4 h-4" />
                <span className="font-bold text-sm">Limited Stock</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Flame className="w-4 h-4" />
                <span className="font-bold text-sm">100+ Sold Today</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Zap className="w-4 h-4" />
                <span className="font-bold text-sm">Up to 80% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default DealBanner;
