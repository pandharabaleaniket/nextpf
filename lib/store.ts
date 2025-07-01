import { atom } from 'jotai';

/**
 * Global state management using Jotai
 * Manages sidebar collapse state and theme preferences
 */

// Sidebar state atom - controls whether sidebar is collapsed
export const sidebarCollapsedAtom = atom<boolean>(false);

// Loading state atom - for global loading indicators
export const loadingAtom = atom<boolean>(false);

// User profile atom - stores user information
export const userProfileAtom = atom<{
  name: string;
  email: string;
  avatar?: string;
} | null>({
  name: 'John Doe',
  email: 'john@example.com',
  avatar: undefined
});