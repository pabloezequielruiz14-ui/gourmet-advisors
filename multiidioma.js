// Estructura básica multiidioma con i18next, incluyendo francés, italiano y portugués
i18next.init({
  lng: 'es', // Idioma inicial
  resources: {
    es: { translation: {
      inicio: "Inicio",
      servicios: "Servicios",
      testimonios: "Testimonios",
      galeria: "Galería",es: { translation: {
  serv_title: "Nuestros Asesoramientos",
  testi_title: "Testimonios",
  galeria_title: "Galería Gourmet",
  blog_title: "Últimos Consejos",
  contacto_title: "Contáctanos",
  // ...
}},
// Inicialización de i18next con español, inglés, francés, italiano y portugués
i18next.init({
  lng: 'es',
  resources: {
    es: { translation: {
      // NAVBAR
      inicio: "Inicio",
      servicios: "Servicios",
      testimonios: "Testimonios",
      galeria: "Galería",
      blog: "Blog",
      recetas: "Recetas",
      evento: "Evento Especial",
      contacto: "Contacto",
      // HERO
      hero_title: "Asesoramientos Gastronómicos de Lujo",
      hero_desc: "Descubre consejos expertos para elevar tu experiencia culinaria al siguiente nivel.",
      btn_serv: "Explora Nuestros Servicios",
      // SERVICIOS
      serv_title: "Nuestros Asesoramientos",
      serv_card_1_title: "Consultoría Culinaria",
      serv_card_1_txt: "Asesoramiento personalizado para chefs y amantes de la cocina, llevamos tu menú y técnica al máximo nivel.",
      serv_card_2_title: "Menús Personalizados",
      serv_card_2_txt: "Diseño de menús exclusivos para celebraciones, empresas o tu restaurante. Creatividad y balance en cada plato.",
      serv_card_3_title: "Consejos Saludables",
      serv_card_3_txt: "Recomendaciones y platos para una vida más sana, sin perder el sabor ni la experiencia gourmet.",
      // TESTIMONIOS
      testi_title: "Testimonios",
      testi_1_txt: "“¡La asesoría de Gourmet Advisors cambió completamente el éxito de mi restaurante!”",
      testi_1_autor: "Chef Martín Ruiz",
      testi_2_txt: "“Los menús personalizados fueron el centro de atención de nuestro evento corporativo.”",
      testi_2_autor: "Empresa Sabor S.A.",
      testi_3_txt: "“Con los consejos saludables logré mejorar mis hábitos y disfrutar más la cocina.”",
      testi_3_autor: "Lucía Paredes, clienta",
      // GALERÍA
      galeria_title: "Galería Gourmet",
      // BLOG
      blog_title: "Últimos Consejos",
      blog_btn_1: "Leer Más",
      blog_btn_2: "Leer Más",
      // CONTACTO
      contacto_title: "Contáctanos"
    }},
    en: { translation: {
      inicio: "Home",
      servicios: "Services",
      testimonios: "Testimonials",
      galeria: "Gallery",
      blog: "Blog",
      recetas: "Recipes",
      evento: "Special Event",
      contacto: "Contact",
      hero_title: "Luxury Gastronomic Consulting",
      hero_desc: "Discover expert tips to elevate your culinary experience.",
      btn_serv: "Explore Our Services",
      serv_title: "Our Consulting Services",
      serv_card_1_title: "Culinary Consulting",
      serv_card_1_txt: "Personalized advice for chefs and cooking enthusiasts, we take your menu and technique to the highest level.",
      serv_card_2_title: "Personalized Menus",
      serv_card_2_txt: "Exclusive menu design for events, companies or your restaurant. Creativity and balance in every dish.",
      serv_card_3_title: "Healthy Tips",
      serv_card_3_txt: "Recommendations and dishes for a healthier life, without losing flavor or gourmet experience.",
      testi_title: "Testimonials",
      testi_1_txt: "“Gourmet Advisors consulting completely changed my restaurant's success!”",
      testi_1_autor: "Chef Martín Ruiz",
      testi_2_txt: "“Personalized menus were the highlight of our corporate event.”",
      testi_2_autor: "Sabor S.A. Company",
      testi_3_txt: "“With healthy tips I improved my habits and enjoy cooking more.”",
      testi_3_autor: "Lucía Paredes, client",
      galeria_title: "Gourmet Gallery",
      blog_title: "Latest Tips",
      blog_btn_1: "Read More",
      blog_btn_2: "Read More",
      contacto_title: "Contact Us"
    }},
    fr: { translation: {
      inicio: "Accueil",
      servicios: "Services",
      testimonios: "Témoignages",
      galeria: "Galerie",
      blog: "Blog",
      recetas: "Recettes",
      evento: "Événement spécial",
      contacto: "Contact",
      hero_title: "Conseils Gastronomiques de Luxe",
      hero_desc: "Découvrez des conseils d'experts pour améliorer votre expérience culinaire.",
      btn_serv: "Découvrez Nos Services",
      serv_title: "Nos Conseils",
      serv_card_1_title: "Consultation Culinaire",
      serv_card_1_txt: "Conseils personnalisés pour chefs et passionnés de cuisine. Nous sublimons votre menu et votre technique.",
      serv_card_2_title: "Menus Personnalisés",
      serv_card_2_txt: "Conception de menus exclusifs pour événements, entreprises ou restaurant. Créativité et équilibre dans chaque plat.",
      serv_card_3_title: "Conseils Santé",
      serv_card_3_txt: "Recommandations et plats pour une vie plus saine, sans perdre la saveur ni l'expérience gastronomique.",
      testi_title: "Témoignages",
      testi_1_txt: "« Les conseils de Gourmet Advisors ont bouleversé le succès de mon restaurant ! »",
      testi_1_autor: "Chef Martín Ruiz",
      testi_2_txt: "« Les menus personnalisés ont été la pièce maîtresse de notre événement d'entreprise. »",
      testi_2_autor: "Entreprise Sabor S.A.",
      testi_3_txt: "« Grâce aux conseils santé, j'ai amélioré mes habitudes et je profite davantage de la cuisine. »",
      testi_3_autor: "Lucía Paredes, cliente",
      galeria_title: "Galerie Gastronomique",
      blog_title: "Derniers Conseils",
      blog_btn_1: "Lire Plus",
      blog_btn_2: "Lire Plus",
      contacto_title: "Contactez-nous"
    }},
    it: { translation: {
      inicio: "Home",
      servicios: "Servizi",
      testimonios: "Testimonianze",
      galeria: "Galleria",
      blog: "Blog",
      recetas: "Ricette",
      evento: "Evento Speciale",
      contacto: "Contatto",
      hero_title: "Consulenza Gastronomica di Lusso",
      hero_desc: "Scopri i consigli degli esperti per elevare la tua esperienza culinaria.",
      btn_serv: "Esplora i Nostri Servizi",
      serv_title: "I Nostri Consigli",
      serv_card_1_title: "Consulenza Culinaria",
      serv_card_1_txt: "Consulenza personalizzata per chef e amanti della cucina. Portiamo il tuo menu e la tua tecnica al massimo livello.",
      serv_card_2_title: "Menu Personalizzati",
      serv_card_2_txt: "Design di menu esclusivi per eventi, aziende o il tuo ristorante. Creatività ed equilibrio in ogni piatto.",
      serv_card_3_title: "Consigli Salutari",
      serv_card_3_txt: "Raccomandazioni e piatti per una vita più sana, senza perdere sapore né esperienza gourmet.",
      testi_title: "Testimonianze",
      testi_1_txt: "“La consulenza Gourmet Advisors ha cambiato il successo del mio ristorante!”",
      testi_1_autor: "Chef Martín Ruiz",
      testi_2_txt: "“I menu personalizzati sono stati il centro del nostro evento aziendale.”",
      testi_2_autor: "Azienda Sabor S.A.",
      testi_3_txt: "“Con i consigli salutari ho migliorato le mie abitudini e apprezzo di più la cucina.”",
      testi_3_autor: "Lucía Paredes, cliente",
      galeria_title: "Galleria Gourmet",
      blog_title: "Ultimi Consigli",
      blog_btn_1: "Leggi di più",
      blog_btn_2: "Leggi di più",
      contacto_title: "Contattaci"
    }},
    pt: { translation: {
      inicio: "Início",
      servicios: "Serviços",
      testimonios: "Depoimentos",
      galeria: "Galeria",
      blog: "Blog",
      recetas: "Receitas",
      evento: "Evento Especial",
      contacto: "Contato",
      hero_title: "Consultoria Gastronômica de Luxo",
      hero_desc: "Descubra dicas de especialistas para aprimorar sua experiência culinária.",
      btn_serv: "Conheça Nossos Serviços",
      serv_title: "Nossas Consultorias",
      serv_card_1_title: "Consultoria Culinária",
      serv_card_1_txt: "Consultoria personalizada para chefs e amantes da culinária, levamos seu menu e técnica ao máximo nível.",
      serv_card_2_title: "Menus Personalizados",
      serv_card_2_txt: "Criação de menus exclusivos para eventos, empresas ou seu restaurante. Criatividade e equilíbrio em cada prato.",
      serv_card_3_title: "Dicas Saudáveis",
      serv_card_3_txt: "Recomendações e pratos para uma vida mais saudável, sem perder o sabor nem a experiência gourmet.",
      testi_title: "Depoimentos",
      testi_1_txt: "“A consultoria da Gourmet Advisors mudou completamente o sucesso do meu restaurante!”",
      testi_1_autor: "Chef Martín Ruiz",
      testi_2_txt: "“Os menus personalizados foram o destaque do nosso evento corporativo.”",
      testi_2_autor: "Empresa Sabor S.A.",
      testi_3_txt: "“Com as dicas saudáveis, melhorei meus hábitos e aproveito mais a culinária.”",
      testi_3_autor: "Lucía Paredes, cliente",
      galeria_title: "Galeria Gourmet",
      blog_title: "Últimas Dicas",
      blog_btn_1: "Leia Mais",
      blog_btn_2: "Leia Mais",
      contacto_title: "Fale Conosco"
    }}
  }
}, function(err, t) {
  updateTexts();
});

function updateTexts() {
  // Navbar
  document.getElementById('nav-inicio').textContent = i18next.t('inicio');
  document.getElementById('nav-servicios').textContent = i18next.t('servicios');
  document.getElementById('nav-testimonios').textContent = i18next.t('testimonios');
  document.getElementById('nav-galeria').textContent = i18next.t('galeria');
  document.getElementById('nav-blog').textContent = i18next.t('blog');
  document.getElementById('nav-recetas').textContent = i18next.t('recetas');
  document.getElementById('nav-evento').textContent = i18next.t('evento');
  document.getElementById('nav-contacto').textContent = i18next.t('contacto');
  // HERO
  document.getElementById('hero_title').textContent = i18next.t('hero_title');
  document.getElementById('hero_desc').textContent = i18next.t('hero_desc');
  document.getElementById('btn_serv').textContent = i18next.t('btn_serv');
  // Servicios
  document.getElementById('serv_title').textContent = i18next.t('serv_title');
  document.getElementById('serv_card_1_title').textContent = i18next.t('serv_card_1_title');
  document.getElementById('serv_card_1_txt').textContent = i18next.t('serv_card_1_txt');
  document.getElementById('serv_card_2_title').textContent = i18next.t('serv_card_2_title');
  document.getElementById('serv_card_2_txt').textContent = i18next.t('serv_card_2_txt');
  document.getElementById('serv_card_3_title').textContent = i18next.t('serv_card_3_title');
  document.getElementById('serv_card_3_txt').textContent = i18next.t('serv_card_3_txt');
  // Testimonios
  document.getElementById('testi_title').textContent = i18next.t('testi_title');
  document.getElementById('testi_1_txt').textContent = i18next.t('testi_1_txt');
  document.getElementById('testi_1_autor').textContent = i18next.t('testi_1_autor');
  document.getElementById('testi_2_txt').textContent = i18next.t('testi_2_txt');
  document.getElementById('testi_2_autor').textContent = i18next.t('testi_2_autor');
  document.getElementById('testi_3_txt').textContent = i18next.t('testi_3_txt');
  document.getElementById('testi_3_autor').textContent = i18next.t('testi_3_autor');
  // Galería
  document.getElementById('galeria_title').textContent = i18next.t('galeria_title');
  // Blog
  document.getElementById('blog_title').textContent = i18next.t('blog_title');
  document.getElementById('blog_btn_1').textContent = i18next.t('blog_btn_1');
  document.getElementById('blog_btn_2').textContent = i18next.t('blog_btn_2');
  // Contacto
  document.getElementById('contacto_title').textContent = i18next.t('contacto_title');
}

// Botones para cambiar idioma
document.getElementById('btn-es').onclick = () => { i18next.changeLanguage('es', updateTexts); };
document.getElementById('btn-en').onclick = () => { i18next.changeLanguage('en', updateTexts); };
document.getElementById('btn-fr').onclick = () => { i18next.changeLanguage('fr', updateTexts); };
document.getElementById('btn-it').onclick = () => { i18next.changeLanguage('it', updateTexts); };
document.getElementById('btn-pt').onclick = () => { i18next.changeLanguage('pt', updateTexts); };
en: { translation: {
  serv_title: "Our Consulting Services",
  testi_title: "Testimonials",
  galeria_title: "Gourmet Gallery",
  blog_title: "Latest Tips",
  contacto_title: "Contact Us",
  // ...
}},
es: { translation: {
  // ... títulos
  serv_card_1_title: "Consultoría Culinaria",
  serv_card_1_txt: "Asesoramiento personalizado para chefs y amantes de la cocina, llevamos tu menú y técnica al máximo nivel.",
  serv_card_2_title: "Menús Personalizados",
  serv_card_2_txt: "Diseño de menús exclusivos para celebraciones, empresas o tu restaurante. Creatividad y balance en cada plato.",
  serv_card_3_title: "Consejos Saludables",
  serv_card_3_txt: "Recomendaciones y platos para una vida más sana, sin perder el sabor ni la experiencia gourmet.",
  testi_1_txt: "“¡La asesoría de Gourmet Advisors cambió completamente el éxito de mi restaurante!”",
  testi_1_autor: "Chef Martín Ruiz",
  testi_2_txt: "“Los menús personalizados fueron el centro de atención de nuestro evento corporativo.”",
  testi_2_autor: "Empresa Sabor S.A.",
  testi_3_txt: "“Con los consejos saludables logré mejorar mis hábitos y disfrutar más la cocina.”",
  testi_3_autor: "Lucía Paredes, clienta",
  blog_btn_1: "Leer Más",
  blog_btn_2: "Leer Más",
  // ... etc ...
}},
en: { translation: {
  // ... títulos
  serv_card_1_title: "Culinary Consulting",
  serv_card_1_txt: "Personalized advice for chefs and cooking lovers, we take your menu and technique to the top level.",
  serv_card_2_title: "Personalized Menus",
  serv_card_2_txt: "Exclusive menu design for events, companies or your restaurant. Creativity and balance in each dish.",
  serv_card_3_title: "Healthy Tips",
  serv_card_3_txt: "Recommendations for a healthier life, without losing flavor or gourmet experience.",
  testi_1_txt: "“Gourmet Advisors consulting completely changed my restaurant's success!”",
  testi_1_autor: "Chef Martín Ruiz",
  testi_2_txt: "“Personalized menus were the highlight of our corporate event.”",
  testi_2_autor: "Sabor S.A. Company",
  testi_3_txt: "“With healthy tips I improved my habits and enjoy cooking more.”",
  testi_3_autor: "Lucía Paredes, client",
  blog_btn_1: "Read More",
  blog_btn_2: "Read More",
  // ... etc ...
}},
// Servicios
document.getElementById('serv_card_1_title').textContent = i18next.t('serv_card_1_title');
document.getElementById('serv_card_1_txt').textContent = i18next.t('serv_card_1_txt');
document.getElementById('serv_card_2_title').textContent = i18next.t('serv_card_2_title');
document.getElementById('serv_card_2_txt').textContent = i18next.t('serv_card_2_txt');
document.getElementById('serv_card_3_title').textContent = i18next.t('serv_card_3_title');
document.getElementById('serv_card_3_txt').textContent = i18next.t('serv_card_3_txt');
// Testimonios
document.getElementById('testi_1_txt').textContent = i18next.t('testi_1_txt');
document.getElementById('testi_1_autor').textContent = i18next.t('testi_1_autor');
document.getElementById('testi_2_txt').textContent = i18next.t('testi_2_txt');
document.getElementById('testi_2_autor').textContent = i18next.t('testi_2_autor');
document.getElementById('testi_3_txt').textContent = i18next.t('testi_3_txt');
document.getElementById('testi_3_autor').textContent = i18next.t('testi_3_autor');
// Botones Blog
document.getElementById('blog_btn_1').textContent = i18next.t('blog_btn_1');
document.getElementById('blog_btn_2').textContent = i18next.t('blog_btn_2');
// ... agrega para FR, IT, PT
// ...agrega para FR, IT, PT...
      blog: "Blog",
      recetas: "Recetas",
      evento: "Evento Especial",
      contacto: "Contacto",
      hero_title: "Asesoramientos Gastronómicos de Lujo",
      hero_desc: "Descubre consejos expertos para elevar tu experiencia culinaria al siguiente nivel.",
      btn_serv: "Explora Nuestros Servicios"
    }},
    en: { translation: {
      inicio: "Home",
      servicios: "Services",
      testimonios: "Testimonials",
      galeria: "Gallery",
      blog: "Blog",
      recetas: "Recipes",
      evento: "Special Event",
      contacto: "Contact",
      hero_title: "Luxury Gastronomic Consulting",
      hero_desc: "Discover expert tips to elevate your culinary experience.",
      btn_serv: "Explore Our Services"
    }},
    fr: { translation: {
      inicio: "Accueil",
      servicios: "Services",
      testimonios: "Témoignages",
      galeria: "Galerie",
      blog: "Blog",
      recetas: "Recettes",
      evento: "Événement Spécial",
      contacto: "Contact",
      hero_title: "Conseils Gastronomiques de Luxe",
      hero_desc: "Découvrez des conseils d'experts pour améliorer votre expérience culinaire.",
      btn_serv: "Découvrez Nos Services"
    }},
    it: { translation: {
      inicio: "Home",
      servicios: "Servizi",
      testimonios: "Testimonianze",
      galeria: "Galleria",
      blog: "Blog",
      recetas: "Ricette",
      evento: "Evento Speciale",
      contacto: "Contatto",
      hero_title: "Consulenza Gastronomica di Lusso",
      hero_desc: "Scopri i consigli degli esperti per elevare la tua esperienza culinaria.",
      btn_serv: "Esplora i Nostri Servizi"
    }},
    pt: { translation: {
      inicio: "Início",
      servicios: "Serviços",
      testimonios: "Depoimentos",
      galeria: "Galeria",
      blog: "Blog",
      recetas: "Receitas",
      evento: "Evento Especial",
      contacto: "Contato",
      hero_title: "Consultoria Gastronômica de Luxo",
      hero_desc: "Descubra dicas de especialistas para elevar sua experiência culinária.",
      btn_serv: "Conheça Nossos Serviços"
    }}
  }
}, function(err, t) {
  updateTexts();
});
document.getElementById('serv_title').textContent = i18next.t('serv_title');
document.getElementById('testi_title').textContent = i18next.t('testi_title');
document.getElementById('galeria_title').textContent = i18next.t('galeria_title');
document.getElementById('blog_title').textContent = i18next.t('blog_title');
document.getElementById('contacto_title').textContent = i18next.t('contacto_title');

function updateTexts() {
  document.getElementById('nav-inicio').textContent = i18next.t('inicio');
  document.getElementById('nav-servicios').textContent = i18next.t('servicios');
  document.getElementById('nav-testimonios').textContent = i18next.t('testimonios');
  document.getElementById('nav-galeria').textContent = i18next.t('galeria');
  document.getElementById('nav-blog').textContent = i18next.t('blog');
  document.getElementById('nav-recetas').textContent = i18next.t('recetas');
  document.getElementById('nav-evento').textContent = i18next.t('evento');
  document.getElementById('nav-contacto').textContent = i18next.t('contacto');
  
  document.getElementById('hero_title').textContent = i18next.t('hero_title');
  document.getElementById('hero_desc').textContent = i18next.t('hero_desc');
  document.getElementById('btn_serv').textContent = i18next.t('btn_serv');
}

// Botones para cambiar idioma
document.getElementById('btn-es').onclick = () => { i18next.changeLanguage('es', updateTexts); };
document.getElementById('btn-en').onclick = () => { i18next.changeLanguage('en', updateTexts); };
document.getElementById('btn-fr').onclick = () => { i18next.changeLanguage('fr', updateTexts); };
document.getElementById('btn-it').onclick = () => { i18next.changeLanguage('it', updateTexts); };
document.getElementById('btn-pt').onclick = () => { i18next.changeLanguage('pt', updateTexts); };// Estructura básica multiidioma con i18next
i18next.init({
  lng: 'es', // Idioma inicial
  resources: {
    es: { translation: {
      inicio: "Inicio",
      servicios: "Servicios",
      testimonios: "Testimonios",
      galeria: "Galería",
      blog: "Blog",
      recetas: "Recetas",
      evento: "Evento Especial",
      contacto: "Contacto",
      hero_title: "Asesoramientos Gastronómicos de Lujo",
      hero_desc: "Descubre consejos expertos para elevar tu experiencia culinaria al siguiente nivel.",
      btn_serv: "Explora Nuestros Servicios"
      // ... agrega más textos ...
    }},
    en: { translation: {
      inicio: "Home",
      servicios: "Services",
      testimonios: "Testimonials",
      galeria: "Gallery",
      blog: "Blog",
      recetas: "Recipes",
      evento: "Special Event",
      contacto: "Contact",
      hero_title: "Luxury Gastronomic Consulting",
      hero_desc: "Discover expert tips to elevate your culinary experience.",
      btn_serv: "Explore Our Services"
      // ... agrega más textos ...
    }}
    // Agrega otros idiomas si deseas
  }
}, function(err, t) {
  updateTexts();
});

function updateTexts() {
  document.getElementById('nav-inicio').textContent = i18next.t('inicio');
  document.getElementById('nav-servicios').textContent = i18next.t('servicios');
  document.getElementById('nav-testimonios').textContent = i18next.t('testimonios');
  document.getElementById('nav-galeria').textContent = i18next.t('galeria');
  document.getElementById('nav-blog').textContent = i18next.t('blog');
  document.getElementById('nav-recetas').textContent = i18next.t('recetas');
  document.getElementById('nav-evento').textContent = i18next.t('evento');
  document.getElementById('nav-contacto').textContent = i18next.t('contacto');
  
  document.getElementById('hero_title').textContent = i18next.t('hero_title');
  document.getElementById('hero_desc').textContent = i18next.t('hero_desc');
  document.getElementById('btn_serv').textContent = i18next.t('btn_serv');
  // ... más textos a cambiar ...
}

// Botones para cambiar idioma
document.getElementById('btn-es').onclick = () => { i18next.changeLanguage('es', updateTexts); };
document.getElementById('btn-en').onclick = () => { i18next.changeLanguage('en', updateTexts); };