export type Screen = 'home' | 'history';

export interface Message {
  role: 'user' | 'model';
  content: string;
  imageUrl?: string;
}