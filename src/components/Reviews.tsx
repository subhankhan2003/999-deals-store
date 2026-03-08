import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ayesha Khan',
    location: 'Lahore',
    rating: 5,
    review:
      'I ordered from 999Deals and received my parcel in 2 days. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '2 days ago',
  },
  {
    id: 2,
    name: 'Muhammad Ali',
    location: 'Karachi',
    rating: 5,
    review:
      'Products are exactly as shown in the video. Amazing quality and best prices!',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '5 days ago',
  },
  {
    id: 3,
    name: 'Fatima Ahmed',
    location: 'Islamabad',
    rating: 5,
    review:
      'Best place to find trending products in Pakistan. Fast delivery and great customer service.',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '1 week ago',
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#ffd700] opacity-5 rounded-full blur-3xl top-1/4 left-1/3 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            What Our <span className="text-[#ffd700]">Customers Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#ffd700] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ffd700]/20 relative"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#ff1f3d] to-[#ffd700] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#ff1f3d] shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#ffd700] rounded-full flex items-center justify-center border-2 border-[#111111]">
                    <span className="text-xs">✓</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ffd700] transition-colors">
                    {review.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{review.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'fill-[#ffd700] text-[#ffd700]'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                "{review.review}"
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{review.date}</span>
                <span className="text-[#ffd700] font-bold">Verified Purchase</span>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff1f3d] via-[#ffd700] to-[#ff1f3d] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-4xl font-black text-[#ffd700] mb-1">4.8</div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#ffd700] text-[#ffd700]"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>

            <div className="w-px h-16 bg-white/20"></div>

            <div className="text-center">
              <div className="text-4xl font-black text-[#ffd700] mb-1">5000+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>

            <div className="w-px h-16 bg-white/20"></div>

            <div className="text-center">
              <div className="text-4xl font-black text-[#ffd700] mb-1">98%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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

export default Reviews;
