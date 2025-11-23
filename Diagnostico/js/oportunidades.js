function atualizarResumoJornada() {
    const profissao = lerDados('profissaoSelecionada');
    const horasRecomendadas = lerDados('horasRecomendadas');
    const horasPorSemana = lerDados('horasPorSemana');
    const semanasEstimadas = lerDados('semanasEstimadas');

    if (profissao) {
        document.getElementById('resumoProfissao').textContent = profissao;
    } else {
        document.getElementById('resumoProfissao').textContent = 'Não informado';
    }

    if (horasRecomendadas) {
        document.getElementById('resumoHoras').textContent = `${horasRecomendadas} horas`;
    } else {
        document.getElementById('resumoHoras').textContent = '-';
    }

    if (horasPorSemana) {
        document.getElementById('resumoHorasSemana').textContent = `${horasPorSemana} horas/semana`;
    } else {
        document.getElementById('resumoHorasSemana').textContent = '-';
    }

    if (semanasEstimadas) {
        document.getElementById('resumoSemanas').textContent = `${semanasEstimadas} semanas`;
    } else {
        document.getElementById('resumoSemanas').textContent = '-';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    atualizarResumoJornada();
});

