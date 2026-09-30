// Retired: ShowPoint's single site-wide worker (/sw.js) replaces this one.
// This version removes itself so the site-wide worker takes over on the next load.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.registration.unregister()));
