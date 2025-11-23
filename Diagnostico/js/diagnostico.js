const dadosProfissoes = {
  "Desenvolvedor Front-end": {
    risco: 42,
    nivel: "MÉDIO",
    tags: [
      "Estou começando na área (Júnior)",
      "Tenho experiência intermediária (Pleno)",
      "Sou experiente na área (Sênior)",
      "Trabalho com desenvolvimento web",
      "Tenho interesse em UI/UX Design",
      "Quero focar em performance e otimização",
      "Interesse em integração com IA",
    ],
    dificuldade: 3,
    tendencia:
      "Risco médio de automação. A demanda por desenvolvedores front-end continua alta, mas é importante evoluir para habilidades mais avançadas como arquitetura de componentes, acessibilidade e integração com IA generativa.",
    skillsFuturas: [
      "Arquitetura de componentes",
      "Acessibilidade",
      "Otimização de performance",
      "Integração com IA generativa no front-end",
      "Design systems",
    ],
    novasRotas: [
      "Desenvolvedor Full Stack",
      "Engenheiro de Interface (UI Engineer)",
      "Front-end IA (IA-assisted front-end dev)",
      "Especialista em Web Performance",
      "Tech Lead Front-end",
      "Arquiteto Front-end",
      "Product Manager (foco em produtos digitais)",
    ],
    recomendacoes: [
      "React/Vue/Svelte (conceitos, não framework específico)",
      "TypeScript",
      "APIs REST e GraphQL",
      "Web Components",
      "Automatização com IA (Copilot / Cursor)",
    ],
    ferramentas: ["Figma", "VSCode", "Git", "Lighthouse", "Chrome DevTools"],
    horasRecomendadas: 120,
    imagem:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
  },
  "Desenvolvedor Back-end": {
    risco: 39,
    nivel: "MÉDIO",
    tags: [
      "Desenvolvo APIs RESTful",
      "Trabalho com arquitetura de servidores",
      "Tenho experiência com Cloud Computing",
      "Foco em segurança e autenticação",
      "Interesse em microsserviços",
      "Quero aprender DevOps",
      "Tenho interesse em integração com IA server-side",
    ],
    dificuldade: 4,
    tendencia:
      "Risco médio. A automação está impactando tarefas rotineiras, mas a demanda por arquitetos de sistemas e desenvolvedores especializados continua crescendo.",
    skillsFuturas: [
      "Arquitetura limpa",
      "Microsserviços",
      "Segurança e autenticação",
      "DevOps básico",
      "Integração de IA server-side",
    ],
    novasRotas: [
      "Engenheiro Full Stack",
      "Engenheiro de Software IA",
      "Engenheiro de Plataforma",
      "Engenheiro de Segurança",
      "Arquiteto de Sistemas",
      "Tech Lead Back-end",
      "Especialista em Cloud Architecture",
    ],
    recomendacoes: [
      "Node / Python / Go",
      "Bancos SQL e NoSQL",
      "Filas (RabbitMQ, Kafka)",
      "Testes automatizados",
      "Infra como código",
    ],
    ferramentas: ["Docker", "Postman", "GitHub Actions"],
    horasRecomendadas: 150,
    imagem:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  },
  "Desenvolvedor Full Stack": {
    risco: 21,
    nivel: "BAIXO",
    tags: [
      "Trabalho tanto no front-end quanto back-end",
      "Prefiro ser generalista e versátil",
      "Tenho experiência em front-end",
      "Tenho experiência em back-end",
      "Quero evoluir para Tech Lead",
      "Interesse em arquitetura distribuída",
      "Foco em desenvolvimento Cloud-first",
    ],
    dificuldade: 4,
    tendencia:
      "Baixo risco de automação. Profissionais full stack são altamente valorizados por sua versatilidade e capacidade de trabalhar em todo o stack tecnológico.",
    skillsFuturas: [
      "AI-driven development",
      "Arquitetura distribuída",
      "Cloud-first",
      "Design + dados",
    ],
    novasRotas: [
      "Tech Lead",
      "Engenheiro de Plataforma",
      "Engenheiro de Soluções",
      "CTO early-stage",
      "Arquiteto de Software",
      "Engineering Manager",
      "Product Manager Técnico",
    ],
    recomendacoes: [
      "Infra, DevOps e CI/CD",
      "UX fundamentals",
      "Containers e escalabilidade",
    ],
    ferramentas: [],
    horasRecomendadas: 100,
    imagem:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  "Desenvolvedor Mobile": {
    risco: 50,
    nivel: "MÉDIO",
    tags: [
      "Desenvolvo para iOS (Swift)",
      "Desenvolvo para Android (Kotlin/Java)",
      "Uso Flutter para desenvolvimento multiplataforma",
      "Tenho interesse em apps com IA integrada",
      "Foco em otimização de bateria e performance",
      "Quero trabalhar com animações avançadas",
      "Interesse em arquiteturas MVVM/Clean",
    ],
    dificuldade: 3.5,
    tendencia:
      "Risco médio-alto. A automação de desenvolvimento mobile está crescendo, mas apps com IA integrada e otimizações avançadas continuam demandando profissionais especializados.",
    skillsFuturas: [
      "Apps com IA integrada",
      "Otimização de consumo de energia/bateria",
      "Animações avançadas",
      "Arquiteturas MVVM / Clean",
    ],
    novasRotas: [
      "Engenheiro Mobile Avançado",
      "Engenheiro de Produtos Mobile",
      "Desenvolvedor XR/AR/VR",
      "Tech Lead Mobile",
      "Arquiteto Mobile",
      "Especialista em Mobile Performance",
      "Product Manager Mobile",
    ],
    recomendacoes: [
      "Flutter / Kotlin / Swift",
      "Publicação em lojas",
      "Testes mobile",
    ],
    ferramentas: [],
    horasRecomendadas: 130,
    imagem:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  "Engenheiro de Dados": {
    risco: 30,
    nivel: "BAIXO-MÉDIO",
    tags: [
      "Trabalho com ETL (Extract, Transform, Load)",
      "Construo pipelines de dados",
      "Tenho experiência com Big Data",
      "Interesse em DataOps",
      "Quero trabalhar com pipelines de IA",
      "Foco em dados em tempo real",
      "Tenho interesse em governança de dados",
    ],
    dificuldade: 4,
    tendencia:
      "Risco baixo-médio. A demanda por engenheiros de dados continua alta com o crescimento exponencial de dados e necessidade de pipelines eficientes.",
    skillsFuturas: [
      "DataOps",
      "Pipelines com IA",
      "Engenharia de dados em tempo real",
      "Governança e qualidade",
    ],
    novasRotas: [
      "Engenheiro de Machine Learning",
      "Arquiteto de Dados",
      "Cientista de Dados",
      "Especialista em DataOps",
      "Engenheiro de Big Data",
      "Arquiteto de Soluções de Dados",
      "Data Product Manager",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 140,
    imagem:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  "Cientista de Dados": {
    risco: 60,
    nivel: "MÉDIO-ALTO",
    tags: [
      "Tenho formação em Estatística",
      "Trabalho com Machine Learning tradicional",
      "Desenvolvo e treino modelos de ML",
      "Quero migrar para IA Generativa",
      "Interesse em Prompt Engineering",
      "Foco em LLMOps",
      "Quero trabalhar com modelos personalizados",
    ],
    dificuldade: 5,
    tendencia:
      "Risco médio-alto devido à IA generativa. Cientistas de dados precisam evoluir para trabalhar com modelos generativos e LLMs, não apenas modelos tradicionais.",
    skillsFuturas: [
      "IA generativa aplicada",
      "Prompt Engineering",
      "Modelos personalizados",
      "LLMOps",
    ],
    novasRotas: [
      "Engenheiro de IA",
      "Especialista em LLMs",
      "AI Product Manager",
      "Engenheiro de Machine Learning",
      "Arquiteto de IA",
      "Especialista em LLMOps",
      "Data Scientist Senior",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 180,
    imagem:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
  },
  "Engenheiro de Machine Learning": {
    risco: 18,
    nivel: "BAIXO",
    tags: [
      "Construo sistemas de ML em produção",
      "Trabalho com pipelines de ML",
      "Tenho experiência com MLOps",
      "Quero focar em fine-tuning de LLMs",
      "Interesse em RAG (Retrieval Augmented Generation)",
      "Trabalho com ML distribuído",
      "Foco em infraestrutura de IA",
    ],
    dificuldade: 5,
    tendencia:
      "Baixo risco. Engenheiros de ML são essenciais para construir e manter sistemas de IA em produção, uma área em constante crescimento.",
    skillsFuturas: [
      "Fine-tuning de LLMs",
      "RAG",
      "ML distribuído",
      "Infra de IA",
    ],
    novasRotas: [
      "Engenheiro de IA Senior",
      "Especialista em LLMOps",
      "Pesquisador aplicado",
      "Engenheiro de IA / LLM Engineer",
      "AI Architect",
      "MLOps Lead",
      "Research Engineer",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 200,
    imagem:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
  },
  "Engenheiro de IA / LLM Engineer": {
    risco: 11,
    nivel: "BAIXO",
    tags: [
      "Trabalho com IA Generativa",
      "Especializado em LLMs (Large Language Models)",
      "Quero me tornar AI Architect",
      "Interesse em segurança e alinhamento de modelos",
      "Foco em RAG avançado",
      "Trabalho com agentes autônomos",
      "Quero evoluir para AI Research Engineer",
    ],
    dificuldade: 5,
    tendencia:
      "Muito baixo risco. Esta é uma das profissões mais future-proof, com demanda crescente e escassez de profissionais qualificados.",
    skillsFuturas: [
      "Fine-tuning eficiente",
      "Segurança e alinhamento de modelos",
      "RAG avançado",
      "Agentes autônomos",
    ],
    novasRotas: [
      "AI Architect",
      "AI Research Engineer",
      "AI Product Owner",
      "Head of AI",
      "Principal AI Engineer",
      "AI Solutions Architect",
      "Research Scientist",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 220,
    imagem:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  },
  "DevOps / SRE": {
    risco: 29,
    nivel: "BAIXO-MÉDIO",
    tags: [
      "Trabalho com CI/CD pipelines",
      "Gerencio infraestrutura",
      "Tenho experiência com Cloud",
      "Quero trabalhar com infra gerenciada por IA",
      "Foco em observabilidade inteligente",
      "Interesse em resiliência distribuída",
      "Quero evoluir para Arquiteto Cloud",
    ],
    dificuldade: 4.5,
    tendencia:
      "Risco baixo-médio. A automação está presente na área, mas profissionais DevOps/SRE são essenciais para manter infraestruturas complexas e resilientes.",
    skillsFuturas: [
      "Infra gerenciada por IA",
      "Observabilidade inteligente",
      "Resiliência distribuída",
    ],
    novasRotas: [
      "Engenheiro de Plataforma",
      "Arquiteto Cloud",
      "SRE Senior",
      "DevOps Lead",
      "Cloud Architect",
      "Infrastructure Engineer",
      "Site Reliability Engineering Manager",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 160,
    imagem:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  },
  "QA / Analista de Testes": {
    risco: 70,
    nivel: "ALTO",
    tags: [
      "Realizo testes manuais",
      "Trabalho com automação de testes",
      "Quero migrar para QA Automation",
      "Interesse em testes com IA",
      "Foco em testes em pipelines complexos",
      "Quero evoluir para Engenheiro de Qualidade",
      "Interesse em DevOps/CI",
    ],
    dificuldade: 2.5,
    tendencia:
      "Alto risco devido à automação crescente de testes. Profissionais precisam evoluir para automação avançada e integração com IA.",
    skillsFuturas: [
      "Testes com IA",
      "Automação avançada",
      "Testes em pipelines complexos",
    ],
    novasRotas: [
      "QA Automation Engineer",
      "Engenheiro de Qualidade",
      "DevOps/CI Engineer",
      "Test Automation Lead",
      "Quality Assurance Manager",
      "SDET (Software Development Engineer in Test)",
      "Performance Test Engineer",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 110,
    imagem:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
  },
  "Engenheiro de Software (Generalista)": {
    risco: 12,
    nivel: "BAIXO",
    tags: [
      "Trabalho com desenvolvimento de software",
      "Tenho experiência em arquitetura de sistemas",
      "Sou desenvolvedor sênior",
      "Quero focar em arquitetura distribuída",
      "Interesse em Design Orientado a Domínio",
      "Foco em integração de IA em sistemas",
      "Quero evoluir para Arquiteto de Software",
    ],
    dificuldade: 4,
    tendencia:
      "Muito baixo risco. Engenheiros de software generalistas com experiência em arquitetura são altamente valorizados e difíceis de automatizar.",
    skillsFuturas: [
      "Arquitetura distribuída",
      "Design orientado a domínio",
      "IA integrada em sistemas",
    ],
    novasRotas: [
      "Arquiteto de Software",
      "Tech Lead",
      "Engineering Manager",
      "Principal Engineer",
      "Solutions Architect",
      "CTO",
      "Technical Consultant",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 90,
    imagem:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
  },
  "Arquiteto de Software": {
    risco: 8,
    nivel: "BAIXO",
    tags: [
      "Projeto arquiteturas de sistemas",
      "Trabalho com sistemas Cloud",
      "Quero focar em arquitetura para IA",
      "Interesse em sistemas tolerantes a falhas",
      "Foco em governança de dados",
      "Trabalho com microfrontends/microsserviços",
      "Quero evoluir para Arquiteto Enterprise",
    ],
    dificuldade: 5,
    tendencia:
      "Muito baixo risco. Arquitetos de software são essenciais para projetar sistemas complexos e escaláveis, uma função difícil de automatizar.",
    skillsFuturas: [
      "Arquitetura para IA",
      "Sistemas tolerantes a falhas",
      "Governança de dados",
      "Microfrontends / microsserviços",
    ],
    novasRotas: [
      "Arquiteto Enterprise",
      "Principal Architect",
      "CTO",
      "Head of Engineering",
      "Solutions Architect Senior",
      "Technical Director",
      "Consultor de Arquitetura",
    ],
    recomendacoes: [],
    ferramentas: [],
    horasRecomendadas: 80,
    imagem:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  },
};

function obterCorRisco(risco) {
  if (risco >= 70) return "bg-danger";
  if (risco >= 40) return "bg-warning";
  return "bg-success";
}

function renderizarGridProfissoes() {
  const gridContainer = document.getElementById("gridProfissoes");
  gridContainer.innerHTML = "";

  Object.keys(dadosProfissoes).forEach((profissao) => {
    const dados = dadosProfissoes[profissao];

    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 col-xl-3";

    const card = document.createElement("div");
    card.className = "card profissao-card h-100 shadow-sm";
    card.style.cursor = "pointer";
    card.dataset.profissao = profissao;

    // Imagem
    const img = document.createElement("img");
    img.src = dados.imagem;
    img.className = "card-img-top";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    img.alt = profissao;

    // Card body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column";

    const title = document.createElement("h5");
    title.className = "card-title fw-bold mb-3";
    title.textContent = profissao;

    const riscoBadge = document.createElement("div");
    riscoBadge.className = "mt-auto";
    const riscoSpan = document.createElement("span");
    riscoSpan.className = `badge ${
      dados.risco >= 70
        ? "bg-danger"
        : dados.risco >= 40
        ? "bg-warning"
        : "bg-success"
    }`;
    riscoSpan.textContent = `Risco: ${dados.risco}%`;
    riscoBadge.appendChild(riscoSpan);

    const dificuldadeSpan = document.createElement("span");
    dificuldadeSpan.className = "badge bg-info ms-2";
    dificuldadeSpan.textContent = `Dificuldade: ${dados.dificuldade}/5`;
    riscoBadge.appendChild(dificuldadeSpan);

    cardBody.appendChild(title);
    cardBody.appendChild(riscoBadge);

    card.appendChild(img);
    card.appendChild(cardBody);

    card.addEventListener("click", function () {
      document.querySelectorAll(".profissao-card").forEach((c) => {
        c.classList.remove("border-primary", "border-3");
      });

      this.classList.add("border-primary", "border-3");

      mostrarQuizTags(profissao);
    });

    col.appendChild(card);
    gridContainer.appendChild(col);
  });
}

let profissaoSelecionada = null;
let tagsSelecionadas = [];

function mostrarQuizTags(profissao) {
  profissaoSelecionada = profissao;
  tagsSelecionadas = [];

  const dados = dadosProfissoes[profissao];
  if (!dados || !dados.tags || dados.tags.length === 0) {
    renderizarResultado(profissao);
    return;
  }

  document.getElementById("resultadoDiagnostico").classList.add("d-none");

  const quizTagsDiv = document.getElementById("quizTags");
  quizTagsDiv.classList.remove("d-none");

  const tagsContainer = document.getElementById("tagsContainer");
  tagsContainer.innerHTML = "";

  dados.tags.forEach((tag, index) => {
    const tagOption = document.createElement("div");
    tagOption.className = "tag-option";
    tagOption.textContent = tag;
    tagOption.dataset.tag = index.toString();
    tagOption.dataset.tagText = tag;

    tagOption.addEventListener("click", function () {
      this.classList.toggle("selected");
      const tagIndex = this.dataset.tag;
      const tagText = this.dataset.tagText;

      if (this.classList.contains("selected")) {
        if (!tagsSelecionadas.includes(tagText)) {
          tagsSelecionadas.push(tagText);
        }
      } else {
        tagsSelecionadas = tagsSelecionadas.filter((t) => t !== tagText);
      }
    });

    tagsContainer.appendChild(tagOption);
  });

  setTimeout(() => {
    quizTagsDiv.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

function renderizarResultado(profissao) {
  const dados = dadosProfissoes[profissao];
  if (!dados) return;

  const resultadoDiv = document.getElementById("resultadoDiagnostico");
  resultadoDiv.classList.remove("d-none");

  const riscoTexto = document.getElementById("riscoTexto");
  riscoTexto.textContent = `Risco: ${dados.risco}% – Nível ${dados.nivel}`;
  riscoTexto.className = `fw-bold ${
    dados.risco >= 70
      ? "text-danger"
      : dados.risco >= 40
      ? "text-warning"
      : "text-success"
  }`;

  const riscoBarra = document.getElementById("riscoBarra");
  riscoBarra.style.width = `${dados.risco}%`;
  riscoBarra.className = `progress-bar ${obterCorRisco(dados.risco)}`;
  riscoBarra.setAttribute("aria-valuenow", dados.risco);
  riscoBarra.setAttribute("aria-valuemin", 0);
  riscoBarra.setAttribute("aria-valuemax", 100);

  document.getElementById("tendenciaTexto").textContent = dados.tendencia;

  const skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = "";
  dados.skillsFuturas.forEach((skill) => {
    const badge = document.createElement("span");
    badge.className = "badge bg-primary p-2 me-2 mb-2";
    badge.textContent = skill;
    skillsContainer.appendChild(badge);
  });

  const rotasContainer = document.getElementById("rotasContainer");
  rotasContainer.innerHTML = "";
  if (dados.novasRotas && dados.novasRotas.length > 0) {
    dados.novasRotas.forEach((rota) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = `<strong>→</strong> ${rota}`;
      rotasContainer.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.className = "list-group-item text-muted";
    li.textContent = "Nenhuma rota de migração específica definida.";
    rotasContainer.appendChild(li);
  }

  document.getElementById("btnGerarPlano").dataset.profissao = profissao;

  setTimeout(() => {
    resultadoDiv.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

document.addEventListener("DOMContentLoaded", function () {
  renderizarGridProfissoes();

  const btnGerarPlano = document.getElementById("btnGerarPlano");
  const btnContinuarQuiz = document.getElementById("btnContinuarQuiz");
  const btnVoltarQuiz = document.getElementById("btnVoltarQuiz");

  btnContinuarQuiz.addEventListener("click", function () {
    if (!profissaoSelecionada) {
      alert("Por favor, selecione uma profissão primeiro.");
      return;
    }

    document.getElementById("quizTags").classList.add("d-none");

    renderizarResultado(profissaoSelecionada);
  });

  btnVoltarQuiz.addEventListener("click", function () {
    document.getElementById("quizTags").classList.add("d-none");

    document.querySelectorAll(".profissao-card").forEach((c) => {
      c.classList.remove("border-primary", "border-3");
    });

    profissaoSelecionada = null;
    tagsSelecionadas = [];
  });

  btnGerarPlano.addEventListener("click", function () {
    const profissao = this.dataset.profissao || profissaoSelecionada;

    if (!profissao) {
      alert("Por favor, selecione uma profissão primeiro.");
      return;
    }

    const dados = dadosProfissoes[profissao];

    salvarDados("profissaoSelecionada", profissao);
    salvarDados("horasRecomendadas", dados.horasRecomendadas.toString());
    salvarDados("riscoAutomatizacao", dados.risco.toString());
    salvarDados("nivelRisco", dados.nivel);

    if (tagsSelecionadas.length > 0) {
      salvarDados("tagsSelecionadas", JSON.stringify(tagsSelecionadas));
    }

    window.location.href = "plano.html";
  });
});
