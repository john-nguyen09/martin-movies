import axios from 'axios';
import { API_URL } from './config';

export const ajax = axios.create({
  baseURL: API_URL,
});

export const cache = {
  set(key, value, durationMs = 30 * 60 * 1000) {
    const expiresAt = Date.now() + durationMs;
    localStorage.setItem(
      key,
      JSON.stringify({
        expiresAt,
        value,
      }),
    );
  },
  get(key) {
    const now = Date.now();
    let item = localStorage.getItem(key);
    if (item === null) {
      return null;
    }
    item = JSON.parse(item);
    if (now >= item.expiresAt) {
      return null;
    }
    return item.value;
  },
};
