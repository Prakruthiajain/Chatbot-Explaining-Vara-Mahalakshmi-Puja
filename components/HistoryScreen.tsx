import React from 'react';
import { Screen } from '../types';

interface HistoryScreenProps {
  setScreen: (screen: Screen) => void;
}

export default function HistoryScreen({ setScreen }: HistoryScreenProps) {
  return (
    <div className="w-full max-w-4xl bg-red-50/60 backdrop-blur-lg rounded-2xl shadow-lg border border-red-200 p-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 text-center">History, Legends & Rituals</h1>
        
        <div className="space-y-8 text-base md:text-lg text-stone-700/90 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-red-900 mb-3">The Story of Charumathi</h2>
            <p>The origin of the Vara Mahalakshmi Puja is found in the Skanda Purana. According to the legend, Goddess Parvati once asked Lord Shiva about a vrata (vow) that would grant women worldly prosperity and happiness.</p>
            <p className="mt-2">Lord Shiva then narrated the story of a devout woman named <span className="font-semibold text-red-800">Charumathi</span>, who lived in the ancient town of Kundinapura. Impressed by her piety, Goddess Mahalakshmi appeared in her dream and instructed her to perform a special puja on the Friday preceding the full moon in the month of Shravana. When Charumathi performed the puja with other women, they were all blessed with immense wealth and happiness.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-red-900 mb-3">Step-by-Step Puja Vidhana 🪔</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Clean and Decorate:</strong> The home is cleaned thoroughly, and the entrance is decorated with mango leaves and colourful rangoli (kolams).</li>
              <li><strong>Set up the Kalasha:</strong> A sacred pot (Kalasha), symbolizing the Goddess, is filled with rice, water, and coins, and topped with mango leaves and a coconut. It's often adorned with a saree and jewelry.</li>
              <li><strong>Offerings:</strong> Fresh flowers, fruits, and special sweets are offered to the Goddess with devotion. 🍎🍬🌺</li>
              <li><strong>Sacred Thread:</strong> A yellow thread with nine knots is sanctified and tied around the right wrist of the women performing the puja.</li>
              <li><strong>Chant Mantras & Aarti:</strong> Devotional songs and mantras are chanted, followed by the Aarti (waving of camphor flame) to seek divine blessings. 🙏</li>
            </ol>
          </section>
          
          <section>
             <h2 className="text-2xl font-semibold text-red-900 mb-3">Festive Foods (Prasadam)</h2>
             <p>Popular prasadam prepared for this festival includes sweet dishes like Payasam (Kheer), Obbattu or Holige (sweet flatbread), and savory items like Puliyogare (tamarind rice) and Chitranna (lemon rice).</p>
          </section>

          <div className="text-center bg-yellow-100/50 p-4 rounded-lg border border-yellow-300">
            <p className="font-semibold text-red-800">Let’s celebrate Karnataka’s spiritual and cultural beauty together! ❤️💛🪷</p>
          </div>

        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setScreen('home')}
            className="bg-gradient-to-r from-yellow-500 to-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            &larr; Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}