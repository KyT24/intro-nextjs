import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStore {
  username: string;
  email: string;
  objectId: string; 
  setAuth: (username: string, email: string, objectId: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      username: '',
      email: '',
      objectId: '', 

      setAuth: (username, email, objectId) =>
        set({
          username,
          email,
          objectId
        }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({token: state?.objectId})
    },
  ),
);