/**
 * All of the following code is taken and slight modified from:
 * https://developers.google.com/web/fundamentals/primers/service-workers/
 */

/**
 * URLs/files to cache
 */
const CACHE_NAME = 'restaurant-reviews-cache-v2';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
  '/data/restaurants.json',
  '/images-resized/1-400.jpg',
  '/images-resized/2-400.jpg',
  '/images-resized/3-400.jpg',
  '/images-resized/4-400.jpg',
  '/images-resized/5-400.jpg',
  '/images-resized/6-400.jpg',
  '/images-resized/7-400.jpg',
  '/images-resized/8-400.jpg',
  '/images-resized/9-400.jpg',
  '/images-resized/10-400.jpg'
];

/**
 * Install the service worker.
 * After the installation phase, open the cache, cache desired files and determine
 * whether the required assets got cached or not.
 */
self.addEventListener('install', function(event) {
  // Wait until the service worker has finished installing before opening and
  // adding the cache.
  event.waitUntil(
    // Open the cache (CACHE_NAME)
    caches.open(CACHE_NAME)
      // Then add the desired urls to cache if they aren't already added
      .then(function(cache) {
        console.log('Opened cache');
        // Add all the urls in URLS_TO_CACHE to CACHE_NAME
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch(function(error) {
        console.log('Install/cache adding failed: ', error)
      })
  );
});