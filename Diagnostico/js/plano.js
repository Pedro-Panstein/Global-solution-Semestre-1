function renderizarTimeline(semanas) {
    const timelineContainer = document.getElementById('timelineContainer');
    timelineContainer.innerHTML = '';

    const fases = [
        {
            nome: 'Fase 1: Fundamentos digitais',
            porcentagem: 25,
            descricao: 'Aprenda os conceitos básicos da área escolhida, ferramentas essenciais e fundamentos teóricos necessários para avançar.'
        },
        {
            nome: 'Fase 2: Ferramentas específicas',
            porcentagem: 25,
            descricao: 'Domine as ferramentas e tecnologias específicas da nova área, com foco em aplicações práticas e casos de uso reais.'
        },
        {
            nome: 'Fase 3: Projetos práticos e portfólio',
            porcentagem: 25,
            descricao: 'Desenvolva projetos reais para construir seu portfólio, aplicar conhecimentos e demonstrar suas habilidades ao mercado.'
        },
        {
            nome: 'Fase 4: Preparação para o mercado',
            porcentagem: 25,
            descricao: 'Prepare-se para entrevistas, desenvolva seu perfil profissional, construa networking e busque oportunidades de trabalho.'
        }
    ];

    fases.forEach((fase, index) => {
        const semanasFase = Math.ceil((semanas * fase.porcentagem) / 100);
        
        const card = document.createElement('div');
        card.className = 'card mb-3 border-start border-primary border-4';
        card.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="card-title mb-0 fw-bold">${fase.nome}</h6>
                    <span class="badge bg-primary">~${semanasFase} semanas</span>
                </div>
                <p class="card-text text-muted mb-0">${fase.descricao}</p>
            </div>
        `;
        timelineContainer.appendChild(card);
    });
}

function baixarPlanoTxt() {
    const profissao = lerDados('profissaoSelecionada') || 'Não informado';
    const horasRecomendadas = lerDados('horasRecomendadas') || '0';
    const horasSemana = document.getElementById('horasSemana').value || '0';
    const semanas = Math.ceil(Number(horasRecomendadas) / Number(horasSemana)) || 0;

    const conteudo = `
═══════════════════════════════════════════════════════
    PLANO DE REQUALIFICAÇÃO - SKILLPATH
═══════════════════════════════════════════════════════

Profissão Atual: ${profissao}
Horas Totais Recomendadas: ${horasRecomendadas} horas
Horas por Semana: ${horasSemana} horas
Tempo Estimado: ${semanas} semanas

═══════════════════════════════════════════════════════
    TRILHA DE REQUALIFICAÇÃO
═══════════════════════════════════════════════════════

FASE 1: FUNDAMENTOS DIGITAIS (~${Math.ceil(semanas * 0.25)} semanas)
Aprenda os conceitos básicos da área escolhida, ferramentas essenciais e fundamentos teóricos necessários para avançar.

FASE 2: FERRAMENTAS ESPECÍFICAS (~${Math.ceil(semanas * 0.25)} semanas)
Domine as ferramentas e tecnologias específicas da nova área, com foco em aplicações práticas e casos de uso reais.

FASE 3: PROJETOS PRÁTICOS E PORTFÓLIO (~${Math.ceil(semanas * 0.25)} semanas)
Desenvolva projetos reais para construir seu portfólio, aplicar conhecimentos e demonstrar suas habilidades ao mercado.

FASE 4: PREPARAÇÃO PARA O MERCADO (~${Math.ceil(semanas * 0.25)} semanas)
Prepare-se para entrevistas, desenvolva seu perfil profissional, construa networking e busque oportunidades de trabalho.

═══════════════════════════════════════════════════════
    DICAS IMPORTANTES
═══════════════════════════════════════════════════════

• Mantenha consistência nos estudos
• Pratique regularmente com projetos reais
• Participe de comunidades e grupos de estudo
• Construa um portfólio sólido
• Busque feedback de profissionais da área
• Mantenha-se atualizado com as tendências do mercado

═══════════════════════════════════════════════════════
    Gerado em: ${new Date().toLocaleDateString('pt-BR')}
    SkillPath - Reimaginando o futuro do trabalho
═══════════════════════════════════════════════════════
    `;

    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `plano-requalificacao-${profissao.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', function() {
    const profissao = lerDados('profissaoSelecionada');
    const horasRecomendadas = lerDados('horasRecomendadas');

    if (!profissao || !horasRecomendadas) {
        document.getElementById('mensagemErro').classList.remove('d-none');
    } else {
        document.getElementById('cabecalhoPlano').classList.remove('d-none');
        document.getElementById('profissaoAtual').textContent = profissao;
        document.getElementById('textoRecomendacao').textContent = 
            `Com base no risco de automação, sugerimos uma carga de ${horasRecomendadas} horas de estudo para migrar para uma nova área.`;

        const btnCalcular = document.getElementById('btnCalcular');
        btnCalcular.addEventListener('click', function() {
            const horasSemanaInput = document.getElementById('horasSemana');
            const horasSemana = Number(horasSemanaInput.value);

            if (!horasSemana || horasSemana <= 0) {
                alert('Por favor, informe um número válido de horas por semana.');
                return;
            }

            const semanas = Math.ceil(Number(horasRecomendadas) / horasSemana);

            document.getElementById('textoSemanas').textContent = 
                `Com ${horasSemana} horas por semana, você levará aproximadamente ${semanas} semanas para completar a transição.`;

            renderizarTimeline(semanas);

            document.getElementById('resultadoCronograma').classList.remove('d-none');

            salvarDados('horasPorSemana', horasSemana.toString());
            salvarDados('semanasEstimadas', semanas.toString());

            document.getElementById('resultadoCronograma').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

        const btnBaixarPlano = document.getElementById('btnBaixarPlano');
        btnBaixarPlano.addEventListener('click', function() {
            const horasSemana = document.getElementById('horasSemana').value;
            if (!horasSemana || Number(horasSemana) <= 0) {
                alert('Por favor, calcule o cronograma primeiro.');
                return;
            }
            baixarPlanoTxt();
        });

        const btnVerOportunidades = document.getElementById('btnVerOportunidades');
        btnVerOportunidades.addEventListener('click', function() {
            window.location.href = 'oportunidades.html';
        });
    }
});