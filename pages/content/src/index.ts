import { toggleTheme } from '@src/toggleTheme';

console.log('content script loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});

void toggleTheme();
