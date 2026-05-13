import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    user: { id: number; name: string } | null;
    login: (user: { id: number; name: string }) => void;
    logout: () => void;
    getUserName: () => string | null;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            isAuthenticated: false,
            user: null,
            login: (user) => set({ isAuthenticated: true, user }),
            logout: () => set({ isAuthenticated: false, user: null }),
            getUserName: () => get().user?.name || null
        }),
        {
            name : 'auth-storage', 
            partialize: (state) => ({ isAuthenticated: state.isAuthenticated, user: state.user }),
        }
    )
);