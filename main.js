if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log(`ServiceWorker registration Successful with scope: ${registration.scope}`);
      })
      .catch((err) => {
        console.error('ServiceWorker registration failed');
      });
  });
};
