/* ═══════════ CONFIGURACIÓN DE TODO EL SISTEMA ═══════════
   Este es el ÚNICO archivo que necesitas editar.          */
window.CFG = {
  // n8n: diagnóstico de Mora
  WEBHOOK_URL: "https://n8n-n8n.nl4pe6.easypanel.host/webhook/mora-diagnostico",

  // Apps Script: URL de la app web (termina en /exec)
  API_URL: "https://script.google.com/macros/s/AKfycbwE094maJ4vFxjeVaZzlA8XoIicgRS8I4bw0qozweJJaycad2-s-MgfpcBEtctb2FyunQ/exec",

  // Tu WhatsApp con 51
  WHATSAPP: "51987968939",

  // ID del píxel de Meta (Paso 6)
  PIXEL_ID: "",

  // Precio de la asesoría en soles
  PRECIO: 49,

  // Datos legales (aparecen en Privacidad, Términos y Libro de Reclamaciones)
  LEGAL: {
    titular:   "Carlos Moreno Carrasco",            // tu nombre completo, como figura en SUNAT
    ruc:       "10XXXXXXXXX",                        // tu RUC de persona natural (empieza con 10)
    domicilio: "COMPLETAR: dirección fiscal, distrito, Lima",
    correo:    "COMPLETAR@correo.com",               // correo para temas de datos personales y reclamos
    marca:     "7Legend"
  },

  // No cambiar
  RESERVA_URL: "reservar.html"
};
