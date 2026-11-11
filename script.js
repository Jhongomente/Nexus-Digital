const translations = {
  pt: {
    navServices:"Serviços",navWork:"Projetos",navProcess:"Processo",navContact:"Contato",navCta:"Começar projeto",
    eyebrow:"ESTRATÉGIA DIGITAL · DESIGN · TECNOLOGIA",heroTitle:'Seu próximo nível<br>começa <span class="green">online.</span>',heroLead:"Criamos experiências digitais que apresentam seu negócio com clareza, personalidade e foco em resultados.",heroButton:"Vamos conversar",heroLink:"Explorar projetos",heroFoot:"SOLUÇÕES DIGITAIS PARA NEGÓCIOS EM MOVIMENTO",
    servicesEyebrow:"O QUE FAZEMOS",servicesTitle:'Ideias que viram<br><span class="muted">experiências digitais.</span>',servicesIntro:"Do primeiro clique à presença digital completa, criamos soluções pensadas para a realidade de cada negócio.",
    service1:"Sites profissionais",service1d:"Uma presença online moderna, rápida e preparada para apresentar sua marca.",service2:"Landing pages",service2d:"Páginas objetivas para divulgar ofertas, serviços e campanhas.",service3:"Lojas virtuais",service3d:"Experiências de compra organizadas para mostrar produtos e facilitar pedidos.",service4:"Sistemas e ferramentas",service4d:"Ferramentas digitais sob medida para simplificar tarefas e processos.",service5:"Aplicações digitais",service5d:"Conceitos e aplicações web para necessidades específicas do seu projeto.",serviceNote:"Uma solução<br>para cada desafio.",serviceNoted:"Cada projeto começa entendendo o que seu negócio realmente precisa.",
    workEyebrow:"CONCEITOS DE PORTFÓLIO",workTitle:'Design com<br><span class="muted">intenção.</span>',workIntro:"Estudos demonstrativos de direção visual. Novos projetos reais serão adicionados conforme forem desenvolvidos com clientes.",concept:"CONCEITO DEMONSTRATIVO",coffeeDesc:"Direção visual para cafeteria: identidade acolhedora, cardápio em destaque e contato simplificado.",moveDesc:"Conceito para academia: comunicação energética, apresentação de planos e chamada para conhecer o espaço.",portfolioNote:"Os projetos acima são conceitos fictícios para demonstrar possibilidades — não são clientes ou trabalhos contratados.",
    processEyebrow:"COMO TRABALHAMOS",processTitle:'Simples do início<br><span class="muted">ao lançamento.</span>',processIntro:"Um processo direto, com comunicação clara em cada etapa.",step1:"Entendimento",step1d:"Conhecemos seu negócio, seus objetivos e o que precisa ser resolvido.",step2:"Planejamento",step2d:"Definimos estrutura, conteúdo, referências e escopo antes de desenvolver.",step3:"Criação",step3d:"Desenvolvemos, revisamos e ajustamos a solução com você.",step4:"Publicação",step4d:"Após aprovação e testes, colocamos o projeto no ar.",
    contactEyebrow:"VAMOS TIRAR SUA IDEIA DO PAPEL?",contactTitle:'O próximo passo<br>é <span class="green">começar.</span>',contactLead:"Conte um pouco sobre seu negócio e o que você gostaria de construir. Vamos conversar.",contactSmall:"ATENDIMENTO SOB CONSULTA · BRASIL E EXTERIOR",footerLine:"BUILD WHAT'S NEXT.",backTop:"VOLTAR AO TOPO ↑"
  },
  en: {
    navServices:"Services",navWork:"Projects",navProcess:"Process",navContact:"Contact",navCta:"Start a project",
    eyebrow:"DIGITAL STRATEGY · DESIGN · TECHNOLOGY",heroTitle:'Your next level<br>starts <span class="green">online.</span>',heroLead:"We create digital experiences that present your business with clarity, personality and a focus on results.",heroButton:"Let's talk",heroLink:"Explore projects",heroFoot:"DIGITAL SOLUTIONS FOR BUSINESSES ON THE MOVE",
    servicesEyebrow:"WHAT WE DO",servicesTitle:'Ideas turned into<br><span class="muted">digital experiences.</span>',servicesIntro:"From the first click to a complete digital presence, we create solutions designed around each business.",
    service1:"Professional websites",service1d:"A modern, fast online presence built to showcase your brand.",service2:"Landing pages",service2d:"Focused pages to promote offers, services and campaigns.",service3:"Online stores",service3d:"Organized shopping experiences to showcase products and simplify orders.",service4:"Systems & tools",service4d:"Custom digital tools to simplify tasks and workflows.",service5:"Digital applications",service5d:"Web concepts and applications for your project's specific needs.",serviceNote:"One solution<br>for every challenge.",serviceNoted:"Every project starts by understanding what your business really needs.",
    workEyebrow:"PORTFOLIO CONCEPTS",workTitle:'Design with<br><span class="muted">intention.</span>',workIntro:"Visual direction studies. Real client projects will be added as they are developed.",concept:"DEMO CONCEPT",coffeeDesc:"Visual direction for a coffee shop: welcoming identity, featured menu and simple contact.",moveDesc:"Gym concept: energetic communication, membership plans and a clear invitation to visit.",portfolioNote:"The projects above are fictional concepts to demonstrate possibilities — they are not clients or commissioned work.",
    processEyebrow:"HOW WE WORK",processTitle:'Simple from start<br><span class="muted">to launch.</span>',processIntro:"A straightforward process, with clear communication at every step.",step1:"Discovery",step1d:"We learn about your business, goals and what needs to be solved.",step2:"Planning",step2d:"We define structure, content, references and scope before development.",step3:"Creation",step3d:"We build, review and refine the solution with you.",step4:"Launch",step4d:"After approval and testing, we publish the project.",
    contactEyebrow:"LET'S BRING YOUR IDEA TO LIFE.",contactTitle:'The next step<br>is to <span class="green">begin.</span>',contactLead:"Tell us a little about your business and what you'd like to build. Let's talk.",contactSmall:"AVAILABLE BY INQUIRY · BRAZIL & WORLDWIDE",footerLine:"BUILD WHAT'S NEXT.",backTop:"BACK TO TOP ↑"
  }
};
let language = "pt";
const langSwitch = document.getElementById("langSwitch");
langSwitch.addEventListener("click", () => {
  language = language === "pt" ? "en" : "pt";
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  langSwitch.textContent = language === "pt" ? "EN" : "PT";
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.textContent = opened ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();