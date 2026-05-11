import {create} from 'zustand';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (newItem: CartItem) => void;
    removeItem: (id: number) => void;
    updateItem: (id: number, updatedItem: Partial<CartItem>) => void;
}

export const useCartStore = create<CartStore>((set) => ({
    items: [],
    addItem: (newItem) => set((state) => ({
        items: [...state.items, newItem]
    })),
    removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
    })),
    updateItem: (id, updatedItem) => set((state) => ({
        items: state.items.map(item => item.id === id ? { ...item, ...updatedItem } : item)
    })),
}));
