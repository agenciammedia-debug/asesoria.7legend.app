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
  // ── Sección de confianza (resultado del diagnóstico y landing) ──
  // Los datos con "ejemplo" solo se ven en la vista previa (?vista=resultado), nunca en la página real.
  // Para publicarlos, escribe tu dato real en "valor" / "texto" y borra la línea "ejemplo".
  YO: {
    nombre: "Carlos Moreno",
    cargo: "Fundador de 7Legend",
    foto: "carlos-moreno.jpg",
    bio: "Vendo con anuncios todos los días en mis propios negocios. En la asesoría no te doy teoría: te enseño lo que a mí me funciona, aplicado a tus números reales.",
    numeros: [
      { valor: "S/ 250,000+", texto: "invertidos en anuncios de Meta" },
      { valor: "", ejemplo: "300+", texto: "clientes high ticket cerrados (más de US$500)" },
      { valor: "2", texto: "negocios propios que funcionan con este método" },
      { valor: "", ejemplo: "8 años", texto: "vendiendo con anuncios" }
    ],
    negocios: [
      { nombre: "Essence Studio", detalle: "Salón de belleza con 2 sedes en Surco y Miraflores. Toda su captación viene de anuncios y WhatsApp.", foto: "" },
      { nombre: "MMedia Perú", detalle: "Growth partner para negocios en Latinoamérica: anuncios, ventas y seguimiento.", foto: "" }
    ],
    video: "https://drive.google.com/file/d/1i1hAbcL6oqANSSs6PS20ojoQjhHl0pwE/preview",
    testimonios: [
      { ejemplo: true, texto: "Pensé que mis anuncios no funcionaban. En la asesoría vimos que el problema era cómo respondía. Ese mismo mes cerré el doble.", nombre: "Lucía R.", negocio: "Clínica estética · Lima", foto: "" },
      { ejemplo: true, texto: "Me ordenó todo: qué responder, cuándo hacer seguimiento y a quién priorizar. Dejé de perder clientes que ya me habían escrito.", nombre: "Jorge M.", negocio: "Inmobiliaria · Arequipa", foto: "" },
      { ejemplo: true, texto: "Lo mejor fue que trabajó con mis chats reales. Salí con un plan claro y lo apliqué al día siguiente.", nombre: "Andrea P.", negocio: "Tienda de ropa · Trujillo", foto: "" }
    ],
    conferencia: { foto: "conferencia.jpg", texto: "Dando una conferencia sobre ventas de alto ticket." }
  }
};
