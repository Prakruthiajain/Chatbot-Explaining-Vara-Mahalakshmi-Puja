import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import HistoryScreen from './components/HistoryScreen';
import Chatbot from './components/Chatbot';
import ChatIcon from './components/ChatIcon';
import { Screen } from './types';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <HomeScreen setScreen={setScreen} />;
      case 'history':
        return <HistoryScreen setScreen={setScreen} />;
      default:
        return <HomeScreen setScreen={setScreen} />;
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-yellow-100 via-red-50 to-yellow-100 text-stone-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/leaves.png')"}}
      ></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        {renderScreen()}
      </div>
      <div className="relative z-20">
        {!isChatOpen && <ChatIcon onClick={() => setIsChatOpen(true)} />}
        <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </main>
  );
}