import React from 'react';
import { ChatBubbleIcon } from './Icons';

interface ChatIconProps {
  onClick: () => void;
}

export default function ChatIcon({ onClick }: ChatIconProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-300"
      aria-label="Open Chat"
    >
      <ChatBubbleIcon />
    </button>
  );
}