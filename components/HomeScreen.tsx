import React from 'react';
import { Screen } from '../types';
import { KarnatakaFlagIcon } from './Icons';

interface HomeScreenProps {
  setScreen: (screen: Screen) => void;
}

export default function HomeScreen({ setScreen }: HomeScreenProps) {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://www.lifecraftdaily.com/wp-content/uploads/2024/08/Varamahalakshmi-Puja-Decoration-Ideas.jpg')",
      }}
    >
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-yellow-400/50 p-8 text-center animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <img
            src="https://imgk.timesnownews.com/story/Varalakshmi_Vratham_puja.jpg?tr=w-1200,h-900"
            alt="Goddess Mahalakshmi"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-md object-cover"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-200 mb-4 drop-shadow-md">
            Vara Mahalakshmi Puja
          </h1>
          <h2 className="text-xl md:text-2xl text-yellow-300 mb-6 flex items-center justify-center gap-2">
            <KarnatakaFlagIcon />
            <span>Embracing Karnataka's Devotional Traditions</span>
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
            Welcome! This sacred festival is dedicated to Goddess Mahalakshmi,
            the bestower of wealth, prosperity, and well-being. In Karnataka,
            married women perform this puja with immense faith and devotion,
            inviting the divine presence of the Goddess into their homes to
            bless their families.
          </p>
          <button
            onClick={() => setScreen('history')}
            className="bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Puja Story & Rituals
          </button>
        </div>
      </div>
    </div>
  );
}
