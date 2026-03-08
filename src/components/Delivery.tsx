import { MapPin, Package, Truck, CheckCircle, Phone, MessageCircle } from 'lucide-react';

const deliverySteps = [
  {
    icon: Package,
    title: 'Place Your Order',
    description: 'Select your products and place order via WhatsApp',
  },
  {
    icon: CheckCircle,
    title: 'Order Confirmed',
    description: 'We confirm your order and prepare it for shipping',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Your order is delivered to your doorstep',
  },
  {
    icon: CheckCircle,
    title: 'Cash on Delivery',
    description: 'Pay when you receive your package',
  },
];

const contactNumbers = [
  '03120592935',
  '03337336655',
  '03165600785',
];

const Delivery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111111] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#ff1f3d] opacity-5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffd700]/10 border border-[#ffd700] rounded-full px-6 py-2 mb-6">
            <Truck className="w-5 h-5 text-[#ffd700]" />
            <span className="text-[#ffd700] font-bold">Nationwide Delivery</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Fast Delivery Across <span className="text-[#ff1f3d]">Pakistan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver to every corner of Pakistan with Cash on Delivery option
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {deliverySteps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff1f3d] transition-all duration-500 hover:scale-105 text-center h-full flex flex-col items-center justify-center"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff1f3d] to-[#ffd700] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>

                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#ffd700] rounded-full flex items-center justify-center font-black text-[#111111] shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {index < deliverySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-[#ff1f3d] to-[#ffd700]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#ff1f3d] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff1f3d] to-[#ffd700] rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">
                Delivery Coverage
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                'Delivery to all major cities',
                'Remote areas covered',
                'Track your order status',
                '2-5 days delivery time',
                'Cash on Delivery available',
                'Free delivery on orders above Rs. 2000',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-6 h-6 bg-[#ffd700] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#111111]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#ff1f3d]/20 to-[#ffd700]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#ff1f3d] hover:border-[#ffd700] transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#ff1f3d] rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">
                Contact Us
              </h3>
            </div>

            <p className="text-gray-300 mb-6">
              Have questions? Get in touch with our customer support team via WhatsApp or call us directly.
            </p>

            <div className="space-y-4">
              {contactNumbers.map((number, index) => (
                <a
                  key={index}
                  href={`tel:${number}`}
                  className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-[#ffd700]"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700] to-[#ff1f3d] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">
                    {number}
                  </span>
                </a>
              ))}

              <a
                href={`https://wa.me/${contactNumbers[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Delivery;
