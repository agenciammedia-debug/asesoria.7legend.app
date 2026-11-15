window.CFG = {
  WEBHOOK_URL: "https://n8n-n8n.nl4pe6.easypanel.host/webhook/mora-diagnostico",
  API_URL: "https://script.google.com/macros/s/AKfycbwE094maJ4vFxjeVaZzlA8XoIicgRS8I4bw0qozweJJaycad2-s-MgfpcBEtctb2FyunQ/exec",
  WHATSAPP: "51987968939",
  PIXEL_ID: "988107217179544",   // Píxel "7Legend Asesorías" (solo para asesoria.7legend.app)
  CLARITY_ID: "zdqwglhr8q",              // ID del proyecto de Microsoft Clarity (déjalo vacío para desactivarlo)
  PRECIO: 49,
  LEGAL: { titular: "Carlos Moreno Carrasco", ruc: "10444594794", domicilio: "Calle Ramón Ribeyro 990 - Barranco, Lima", correo: "7legend.app@gmail.com", marca: "7Legend" },
  RESERVA_URL: "reservar.html",
  // Cómo se cobra la asesoría: "llamada" (agenda gratis y paga en la llamada) o "adelantado" (paga al reservar)
  COBRO: "llamada",
  // Sección "Quién te atiende" (deja un dato vacío "" para ocultarlo)
  YO: {
    nombre: "Carlos Moreno",
    cargo: "Fundador de 7Legend",
    foto: "carlos-moreno.jpg",
    inversion: "S/ 250,000+",          // invertidos en Meta
    clientes: "",                       // clientes high ticket cerrados (más de US$500) → ej: "296+"
    negocios: [
      { nombre: "Essence Studio", detalle: "Salón de belleza · 2 sedes (Surco y Miraflores)", link: "https://www.instagram.com/essence.studio_pe/" },
      { nombre: "MMedia Perú", detalle: "Growth partner para negocios en Latinoamérica", link: "https://www.mmediaperu.com" }
    ],
    conferencia: "conferencia.jpg",
    video: "https://drive.google.com/file/d/1i1hAbcL6oqANSSs6PS20ojoQjhHl0pwE/preview"
  }
};
