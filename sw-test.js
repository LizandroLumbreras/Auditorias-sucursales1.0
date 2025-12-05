self.addEventListener("install", () => {
    console.log("Service Worker instalado correctamente 🎉");
});

self.addEventListener("activate", () => {
    console.log("Service Worker activado!");
});
