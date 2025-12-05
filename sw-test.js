/* ============================================================
   SERVICE WORKER PARA NOTIFICACIONES PUSH
   Proyecto: Auditorías
   Archivo oficial: sw-test.js
   ============================================================ */

self.addEventListener("install", (event) => {
  console.log("SW instalado correctamente");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("SW activado");
  return self.clients.claim();
});

/* ============================
   RECEPCIÓN DE PUSH
============================ */
self.addEventListener("push", (event) => {
  console.log("Push recibido:", event.data?.text());

  let data = {};
  try {
    data = event.data.json();
  } catch (e) {
    data = { title: "Notificación", body: event.data?.text() };
  }

  const title = data.title || "Nueva notificación";
  const options = {
    body: data.body || "",
    icon: "logo_proveedora.webp",
    badge: "logo_proveedora.webp",
    vibrate: [200, 100, 200],
    data: data,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

/* ============================
   CLICK EN LA NOTIFICACIÓN
============================ */
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url = data?.url || "/Auditorias-sucursales1.0/";

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clis) => {
      for (const client of clis) {
        if (client.url === url && "focus" in client) return client.focus();
      }
      return clients.openWindow(url);
    })
  );
});
