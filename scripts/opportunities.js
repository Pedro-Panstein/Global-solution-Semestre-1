function refreshInfos() {
    const workInfo = lerDados('profissaoSelecionada');
    const recommendedHoursInfo = lerDados('horasRecomendadas');
    const weeklyHoursInfo = lerDados('horasPorSemana');
    const weeksCountInfo = lerDados('semanasEstimadas');

    if (workInfo) {
        document.getElementById('workInfo').textContent = workInfo;
    } else {
        document.getElementById('workInfo').textContent = 'Não informado';
    }

    if (recommendedHoursInfo) {
        document.getElementById('recommendedHoursInfo').textContent = `${recommendedHoursInfo} horas`;
    } else {
        document.getElementById('recommendedHoursInfo').textContent = '-';
    }

    if (weeklyHoursInfo) {
        document.getElementById('weeklyHoursInfo').textContent = `${weeklyHoursInfo} horas/semana`;
    } else {
        document.getElementById('weeklyHoursInfo').textContent = '-';
    }

    if (weeksCountInfo) {
        document.getElementById('weeksCountInfo').textContent = `${weeksCountInfo} semanas`;
    } else {
        document.getElementById('weeksCountInfo').textContent = '-';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    refreshInfos();
});

