# 📘 **SkillPath — Global Solution FIAP (1º Semestre)**

**SkillPath** é um MVP interativo desenvolvido para o desafio **Global Solution 2025/2 – O Futuro do Trabalho**, proposto pela **FIAP**.  
O objetivo é criar uma solução digital que apoie pessoas em risco de automação, promovendo **requalificação**, **inclusão produtiva** e **educação de qualidade**, alinhada aos **ODS 4, 8, 9 e 10 da ONU**.

SkillPath ajuda trabalhadores a **diagnosticar o risco de automação da profissão atual**, identificar **possíveis rotas de migração profissional**, visualizar as **habilidades futuras necessárias** e gerar um **plano personalizado de requalificação** usando apenas **HTML, CSS (Bootstrap) e JavaScript puro**, conforme as regras do desafio.

---

# 🚀 **1. Objetivo do Projeto**

Com as rápidas mudanças impostas por IA, automação e tecnologias emergentes, milhões de pessoas podem perder seus empregos até 2030. Ao mesmo tempo, novas carreiras estão surgindo — mas exigem novas habilidades.

**SkillPath** nasce para reduzir essa lacuna:

✔ Mostrar **como e por que** profissões estão mudando  
✔ Ajudar o usuário a entender **seu risco de automação**  
✔ Sugerir **transições possíveis** para novas carreiras  
✔ Criar **planos de estudo personalizados**  
✔ Democratizar o acesso ao conhecimento  
✔ Apoiar **jovens, trabalhadores vulneráveis e profissionais em transição**

---

# 🌍 **2. O Problema**

Com base em dados da ONU, OIT e WEF:

- **23% das profissões mudarão radicalmente até 2027**
- **25% das ocupações têm risco substancial de automação**
- Grupos mais afetados:  
  **jovens, mulheres e trabalhadores com baixa escolaridade**
- A tecnologia evolui **mais rápido que a requalificação**
- Trabalhadores não sabem:
  - qual carreira seguir  
  - quanto tempo levaria para migrar  
  - quais habilidades são essenciais  
  - se sua profissão está ameaçada

SkillPath responde a todas essas dúvidas.

---

# 💡 **3. A Solução: SkillPath**

Um **Mapa Inteligente de Requalificação Profissional**, composto por 4 telas principais:

---

# 🖥️ **4. Telas do MVP**

## 🔹 **Tela 1 — Home / Contexto**
Apresenta:
- O problema do futuro do trabalho  
- Por que isso importa  
- Conexão com os ODS  
- Botão: **"Descobrir minha rota"** → Tela 2  

---

## 🔹 **Tela 2 — Diagnóstico da Profissão**

O usuário escolhe sua profissão em um dropdown.

O JS exibe:

### ✔ Risco de automação (barra animada)  
Exemplo:
```js
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
  tendencia: "Risco médio. A automação está impactando tarefas rotineiras, mas a demanda por arquitetos de sistemas e desenvolvedores especializados continua crescendo.",
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
  imagem: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
}
```

### ✔ Novas rotas possíveis  
Exemplo:
- Suporte remoto  
- Atendimento digital  
- Agente de IA  
- Backoffice  

### ✔ Competências futuras  
- IA básica  
- Dados  
- Comunicação  
- Pensamento crítico  
- Criatividade  

Botão: **“Gerar plano”**  
→ leva para **Tela 3** via localStorage.

---

## 🔹 **Tela 3 — Plano Personalizado de Requalificação**

Usuário informa:

**“Quantas horas por semana você pode estudar?”**

JS calcula automaticamente:

- Tempo total necessário  
- Quantas semanas  
- Um cronograma detalhado (ex.: semanas 1–12)

Botões:
- **Baixar plano (.txt)**  
- **Ver oportunidades & comunidades**

---

## 🔹 **Tela 4 — Oportunidades & Comunidade**

A tela final apresenta:

### 🔸 Onde estudar
- Cursos gratuitos  
- ONGs  
- Comunidades de estudo  

### 🔸 Novos modelos de trabalho
- Remoto  
- Híbrido  
- Economia de plataforma  

### 🔸 Sua jornada
Mostra resumo gerado automaticamente:
- Profissão atual  
- Profissão destino  
- Tempo de transição  
- Skills adquiridas  

### 🔸 ODS conectados
- **ODS 4** — Educação de Qualidade  
- **ODS 8** — Trabalho Decente  
- **ODS 9** — Inovação  
- **ODS 10** — Redução das Desigualdades  

---

# 🛠️ **5. Tecnologias Utilizadas**

| Tecnologia | Uso |
|-----------|-----|
| **HTML5** | Estrutura do MVP |
| **CSS3 + Bootstrap** | Layout responsivo e componente visual |
| **JavaScript puro** | Animações, cálculos, simulações, localStorage |
| **Vercel** | Deploy |

Nenhuma tecnologia além do conteúdo permitido pela FIAP foi utilizada.

---

# 📁 **6. Estrutura de Pastas**

```
/SkillPath
  index.html | # Redirecionamento
  global.css
  README.md

  /Home | # Tela 1
    home.html
    home.css
    home.js

  /Diagnostico | # Tela 2
    diagnostico.html
    /css
        style.css
    /js
        comun.js
        diagnostico.js
        oportunidades.js
        plano.js

  /Plano | # Tela 3
    plano.html
    plano.css
    plano.js

  /Oportunidades | # Tela 4
    oportunidades.html
    oportunidades.css
    /scripts
        comun.js
        oportunities.js
```

---

# 📦 **7. Como Rodar o Projeto Localmente**

1. Baixe ou clone o repositório:
```bash
git clone https://github.com/Pedro-Panstein/Global-solution-Semestre-1
```

2. Abra o arquivo `index.html` no navegador.

3. Navegue entre as telas clicando nos botões.

4. Para testar o fluxo completo:
- escolha uma profissão  
- veja o risco  
- gere o plano  
- calcule o cronograma  
- explore as oportunidades  

---

# 🚀 **8. Deploy**

O deploy está publicado no serviço da:

- **Vercel**

https://skillpath-gs1.vercel.app

---

# 🎥 **9. Vídeo Pitch (3 minutos)**

O apresenta:

- O problema  
- A solução  
- Demonstração das telas  
- Como o MVP ajuda pessoas reais  
- O impacto social + conexão com ODS  

Link para o vídeo

["link aqui"](https://youtu.be/gtHxzJdHlN8)

---

# 🏆 **10. Por que o SkillPath é uma solução forte**

✔ Alinhado 100% ao tema “Futuro do Trabalho”  
✔ Focado em inclusão produtiva  
✔ Conexão direta com ODS exigidos  
✔ Simples, intuitivo, bonito e interativo  
✔ Resolvido com HTML + CSS + Bootstrap + JS puro  
✔ Forte impacto social e educacional  
✔ Útil para trabalhadores reais  

---

# 👨‍💻 **11. Integrantes do Grupo**

- Arthur Carlson de Souza Barbosa
- Filipe Ferraz Alves
- Pedro Henrique Panstein
- Jorge Kenned Ferreira dos Santos
