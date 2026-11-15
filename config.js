window.CFG = {
  WEBHOOK_URL: "https://n8n-n8n.nl4pe6.easypanel.host/webhook/mora-diagnostico",
  API_URL: "https://script.google.com/macros/s/AKfycbwE094maJ4vFxjeVaZzlA8XoIicgRS8I4bw0qozweJJaycad2-s-MgfpcBEtctb2FyunQ/exec",
  WHATSAPP: "51987968939",
  PIXEL_ID: "988107217179544",   // Píxel "7Legend Asesorías" (solo para asesoria.7legend.app)
  CLARITY_ID: "zdqwglhr8q",              // ID del proyecto de Microsoft Clarity (déjalo vacío para desactivarlo)
  PRECIO: 49,
  LEGAL: { titular: "Carlos Moreno Carrasco", ruc: "10444594794", domicilio: "Calle Ramón Ribeyro 990 - Barranco, Lima", correo: "7legend.app@gmail.com", marca: "7Legend" },
  RESERVA_URL: "reservar.html",
  // Cómo se cobra la asesoría: "llamada" (reserva sin pagar y paga en la videollamada) o "adelantado" (paga al reservar)
  COBRO: "llamada",
  // ── Sección de confianza (resultado del diagnóstico y landing) ──
  // Los datos con "ejemplo" solo se ven en la vista previa (?vista=resultado), nunca en la página real.
  // Para publicarlos, escribe tu dato real en "valor" / "texto" y borra la línea "ejemplo".
  YO: {
    nombre: "Carlos Moreno",
    cargo: "Fundador de 7Legend",
    foto: "carlos-moreno.jpg",
    bio: "No soy un curso ni un bot. Soy empresario y aplico estos canales de venta todos los días en mis propios negocios. En la asesoría te enseño lo que a mí me funciona, con tus números reales.",
    numeros: [
      { valor: "S/ 250,000+", texto: "invertidos en anuncios de Meta" },
      { valor: "+300", texto: "clientes high ticket cerrados (+US$500)" },
      { valor: "2", texto: "negocios propios que funcionan así" },
      { valor: "+8 años", texto: "escalando mis propios negocios" }
    ],
    // Al tocar un negocio se abre una ventana (sin salir de la página) con:
    //  - captura: screenshot del feed (se ve en miniatura y grande al abrir)
    //  - usuario: cómo encontrarlo (solo texto, no es enlace)
    //  - pie: texto opcional debajo de la descripción en la tarjeta
    //  - fotos: imágenes que subas a GitHub (ej: "essence-1.jpg")
    //  - posts: enlaces de publicaciones de Instagram (ej: "https://www.instagram.com/p/ABC123/"); se ven en vivo dentro de la ventana
    // Usa **texto** para poner en negrita.
    negocios: [
      { nombre: "Essence Studio", detalle: "Estudio de uñas con **sedes en Surco y Miraflores**. Todas sus clientas llegan por anuncios y por la automatización con Mora AI.",
        usuario: "Instagram: @essence.studio_pe", captura: "essence-feed.jpg", fotos: [], posts: [] },
      { nombre: "MMedia Perú", detalle: "**Growth partner para especialistas en Latinoamérica**: anuncios, automatización, CRM y ventas.",
        usuario: "mmediaperu.com", pie: "www.mmediaperu.com", captura: "mmedia-feed.jpg", fotos: [], posts: [] }
    ],
    video: "testimonios.mp4",          // video subido a GitHub (o un enlace /preview de Google Drive)
    video_portada: "testimonios.jpg",  // imagen que se ve antes de darle play
    video_duracion: "3:10",
    video_frase: "Hemos cumplido todos los objetivos a cabalidad.",  // frase real dicha en el video
    video_autor: "Johan B., implantólogo · y 3 clientes más",

    testimonios: [
      { texto: "Pensé que mis anuncios no funcionaban. En la asesoría vimos que el problema era lo que pasaba después del anuncio. Ese mismo mes cerré el doble.", nombre: "Johan B.", negocio: "Implantólogo · Bogotá", foto: "" },
      { texto: "Me ordenó todo: qué responder, cuándo hacer seguimiento y a quién priorizar. Dejé de perder clientes.", nombre: "Daniel G.", negocio: "Inmobiliaria · Arequipa", foto: "" },
      { texto: "Salí con un plan claro, lo apliqué y dejé de perder clientes.", nombre: "Andrea P.", negocio: "Centro Estético · Trujillo", foto: "" }
    ],
    conferencia: { foto: "conferencia.jpg", texto: "Dando una conferencia sobre ventas de alto ticket." }
  }
};
