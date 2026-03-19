self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado exitosamente');
});

self.addEventListener('fetch', (e) => {
    // Este código vacío es suficiente para engañar al navegador 
    // y que reconozca que la app cumple los requisitos de instalación.
});