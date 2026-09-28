import {create} from 'zustand'; 

interface UseUsernameStore {
    username: string; 
    setUsername: () => void; 
    setUsernameValue: (newUsername: string) => void; 
}

export const useUsernameStore = create<UseUsernameStore>((set) => ({
    username: '', 
    setUsername: () => set(() => ({username: 'bebasss'})),
    setUsernameValue: (newUsername) => set(() => ({
        username: newUsername
    }))
}));