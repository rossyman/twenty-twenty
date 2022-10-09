import Store from 'electron-store';
import { TwentyTwentyStore } from '../interfaces/store';

export const STORE_KEY = 'enabled';
export const store = new Store<TwentyTwentyStore>();
