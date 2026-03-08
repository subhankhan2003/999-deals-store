import { ShoppingCart, Star, Zap } from 'lucide-react';

const products = [
  {
    id: 1,
    image: '/images/products/post1.JPG',
    title: 'Eid Mubarak Gift Bags',
    description: 'Premium decorative Eid gift bags with beautiful floral designs',
    price: '999',
    originalPrice: '1999',
    discount: '50% OFF',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    image: '/images/products/post2.JPG',
    title: 'Red Cherry Eyelashes Pack',
    description: '5 pairs of premium false eyelashes with applicator tools',
    price: '999',
    originalPrice: '2499',
    discount: '60% OFF',
    rating: 4.9,
    reviews: 456,
  },
  {
    id: 3,
    image: '/images/products/post3.JPG',
    title: 'Complete Makeup Palette Set',
    description: 'Professional makeup palette with lipsticks and cosmetics',
    price: '999',
    originalPrice: '3999',
    discount: '75% OFF',
    rating: 4.7,
    reviews: 389,
  },
  {
    id: 4,
    image: '/images/products/post4.JPG',
    title: 'Premium Cosmetics Bundle',
    description: 'Complete makeup kit with foundation, lipsticks, and nail polish',
    price: '999',
    originalPrice: '4500',
    discount: '78% OFF',
    rating: 4.9,
    reviews: 512,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmYxZjNkIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ff1f3d]/10 border border-[#ff1f3d] rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-[#ff1f3d] animate-pulse" />
            <span className="text-[#ff1f3d] font-bold">Viral Products</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Trending <span className="text-[#ff1f3d]">Products</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get the most viral products at unbeatable prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff1f3d] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff1f3d]/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-[#ffd700] text-[#111111] px-3 py-1 rounded-full text-sm font-black shadow-lg">
                  {product.discount}
                </div>
              </div>

              <div className="absolute top-4 left-4 z-10">
                <div className="bg-[#ff1f3d] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  VIRAL
                </div>
              </div>

              <div className="aspect-square overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#ffd700] text-[#ffd700]'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff1f3d] transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-black text-[#ff1f3d]">
                    Rs. {product.price}
                  </div>
                  <div className="text-gray-500 line-through text-lg">
                    Rs. {product.originalPrice}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#ff1f3d] to-[#ff4458] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#ff1f3d]/50 transition-all duration-300 group-hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#ff1f3d]/0 to-[#ff1f3d]/0 group-hover:from-[#ff1f3d]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-transparent border-2 border-[#ffd700] text-[#ffd700] font-bold rounded-full text-lg hover:bg-[#ffd700] hover:text-[#111111] transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default ProductsSection;
