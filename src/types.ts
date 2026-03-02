export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Starters' | 'Main Course' | 'Thali' | 'Desserts' | 'Beverages';
  image?: string;
  isSpecial?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Special Mutton Thali',
    description: 'Authentic Gavran Mutton, Rassa, Sukka, Alni, 2 Bhakri/Chapati, Rice, and Solkadhi.',
    price: '₹450',
    category: 'Thali',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Chicken Sukka',
    description: 'Dry chicken cooked in traditional Malvani spices and fresh coconut.',
    price: '₹280',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Pithla Bhakri',
    description: 'Gram flour curry served with hot Jowar/Bajra Bhakri and Thecha.',
    price: '₹180',
    category: 'Main Course',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Solkadhi',
    description: 'Refreshing drink made from Kokum and coconut milk.',
    price: '₹60',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Puran Poli',
    description: 'Sweet flatbread stuffed with lentil and jaggery filling.',
    price: '₹120',
    category: 'Desserts',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=800'
  }
];
