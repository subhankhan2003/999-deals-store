import { Wallet, Truck, Tag, Package, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Cash on Delivery',
    description: 'Pay when you receive your order',
  },
  {
    icon: Truck,
    title: 'All Over Pakistan',
    description: 'Delivery to every city',
  },
  {
    icon: Tag,
    title: 'Heavy Discounts',
    description: 'Up to 80% off on products',
  },
  {
    icon: Package,
    title: 'Fresh Stock Daily',
    description: 'New products every day',
  },
  {
    icon: TrendingUp,
    title: 'Viral Products',
    description: 'Best selling trending items',
  },
  {
    icon: Shield,
    title: '100% Authentic',
    description: 'Quality guaranteed products',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111111] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#ffd700] opacity-5 rounded-full blur-3xl top-1/2 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#ff1f3d] opacity-5 rounded-full blur-3xl top-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Why Choose <span className="text-[#ffd700]">999Deals</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your trusted partner for viral products and unbeatable deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#ff1f3d] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff1f3d]/20"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff1f3d]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff1f3d] to-[#ff4458] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#ff1f3d]/30">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ffd700] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#ff1f3d] to-[#ffd700] group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#ff1f3d]/10 via-[#ffd700]/10 to-[#ff1f3d]/10 border border-[#ff1f3d]/30 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Join <span className="text-[#ffd700]">5000+</span> Happy Customers
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Experience the best online shopping in Pakistan with guaranteed quality and amazing deals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <span className="text-[#ffd700] font-bold">⭐ 4.8/5 Rating</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <span className="text-[#ffd700] font-bold">🚀 Fast Delivery</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <span className="text-[#ffd700] font-bold">✓ Verified Store</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
