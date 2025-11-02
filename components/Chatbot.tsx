import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from '../types';
import { SYSTEM_PROMPT } from '../constants';
import { CloseIcon, SendIcon } from './Icons';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const initChat = () => {
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
          const chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
              systemInstruction: SYSTEM_PROMPT,
            },
          });
          setChat(chatSession);
          setMessages([
            {
              role: 'model',
              content: '🌸 Namaskara! 🙏\nWelcome to the Vara Mahalakshmi Karnataka Bot 🟥🟨\nI’m your friendly spiritual guide, dedicated to guiding you through the beautiful Vara Mahalakshmi Puja—its story, rituals, and meaning.\nShall we begin your divine journey? 🪷\n\nWhat would you like to know about the Vara Mahalakshmi Puja today?',
            },
          ]);
        } catch (error) {
            console.error("Failed to initialize Gemini AI:", error);
             setMessages([
            {
              role: 'model',
              content: 'Sorry, I am unable to connect right now. Please check the API key configuration.',
            },
          ]);
        }
      };
      initChat();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: messageText });
      const text = response.text;
      const modelMessage: Message = { role: 'model', content: text };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'model',
        content: "I'm sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
    setInput('');
  };

  if (!isOpen) return null;

  const showSuggestions = messages.length === 1 && messages[0].role === 'model';
  const suggestions = [
    "Tell me the story behind the puja.",
    "What items are needed for the puja?",
    "When is the festival celebrated?",
    "ಪೂಜೆಯ ವಿಧಾನ ತಿಳಿಸಿ.", // "Explain the puja method." in Kannada
  ];

  return (
    <div className="fixed bottom-6 right-6 md:bottom-24 md:right-8 z-50 w-[calc(100%-3rem)] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 animate-fade-in-up">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b bg-red-50 rounded-t-2xl">
        <div className="flex items-center space-x-3">
            <img src="https://i.ibb.co/mH213F9/varalakshmi.jpg" alt="Vara Mahalakshmi" className="w-10 h-10 rounded-full object-cover border-2 border-red-200" />
            <h2 className="font-semibold text-lg text-red-900">Vara Mahalakshmi Bot</h2>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Close chat">
          <CloseIcon />
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-yellow-50/50">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl overflow-hidden shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-red-600 text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {/* ✅ Working Lakshmi image */}
              {msg.imageUrl && (
                <img 
                  src="https://imgk.timesnownews.com/story/Varalakshmi_Vratham_puja.jpg?tr=w-1200,h-900"
                  alt="Goddess Lakshmi"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              )}

              <div className="px-4 py-2">
                <p className="text-sm whitespace-pre-wrap">
                  {msg.content}
                </p>
              </div>
            </div>
          </div>
        ))}

        {showSuggestions && (
            <div className="px-4 pt-2 pb-2 animate-fade-in-up">
              <div className="flex flex-wrap gap-2 justify-start">
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInput(q);
                      sendMessage(q);
                      setInput('');
                    }}
                    disabled={isLoading}
                    className="px-3 py-1.5 bg-red-100/50 border border-red-200 text-red-900 rounded-full text-sm hover:bg-red-100 disabled:opacity-50 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
        )}

        {isLoading && (
          <div className="p-4 flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleFormSubmit} className="p-4 border-t bg-white rounded-b-2xl">
        <div className="flex items-center bg-gray-100 rounded-full px-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the puja..."
            className="flex-1 w-full bg-transparent p-3 text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="p-2 text-white bg-red-600 rounded-full disabled:bg-red-300 hover:bg-red-700 transition-colors">
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
