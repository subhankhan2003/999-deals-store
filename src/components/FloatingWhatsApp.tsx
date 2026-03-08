import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '03120592935';

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 animate-slideUp">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900">999Deals</h3>
                <p className="text-sm text-gray-600">
                  Typically replies instantly
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                Hi there! 👋
                <br />
                <br />
                How can we help you today?
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold py-3 rounded-lg text-center hover:bg-[#128C7E] transition-colors duration-300"
            >
              Start Chat
            </a>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          <MessageCircle className="w-8 h-8 text-white relative z-10" />

          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#ff1f3d] rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;
