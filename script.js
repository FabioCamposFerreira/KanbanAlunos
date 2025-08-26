// Aplicação Kanban - JavaScript puro
class KanbanApp {
    constructor() {
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalClose = document.getElementById('modalClose');
        this.kanbanBoard = document.getElementById('kanbanBoard');
        
        this.init();
    }

    init() {
        this.renderBoard();
        this.setupEventListeners();
    }

    // Calcula automaticamente os pontos dos alunos
    calcularPontosAluno(aluno) {
        return aluno.tarefas
            .filter(tarefa => tarefa.status === "finalizado")
            .reduce((total, tarefa) => total + tarefa.pontos, 0);
    }

    // Gera o HTML da coluna do aluno
    createStudentColumn(aluno, index) {
        const pontosFinalizados = this.calcularPontosAluno(aluno);
        const primeiraLetra = aluno.nome.charAt(0).toUpperCase();

        return `
            <div class="student-column">
                <div class="student-header">
                    <div class="student-info">
                        <div class="student-avatar">${primeiraLetra}</div>
                        <h2 class="student-name">${aluno.nome}</h2>
                    </div>
                    <div class="points-badge">
                        <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>${pontosFinalizados}</span>
                    </div>
                </div>
                <div class="tasks-container">
                    ${aluno.tarefas.map((tarefa, tarefaIndex) => this.createTaskCard(tarefa, index, tarefaIndex)).join('')}
                </div>
            </div>
        `;
    }

    // Gera o HTML do card da tarefa
    createTaskCard(tarefa, alunoIndex, tarefaIndex) {
        const statusClass = tarefa.status === "finalizado" ? "completed" : "pending";
        
        return `
            <div class="task-card" data-aluno="${alunoIndex}" data-tarefa="${tarefaIndex}">
                <div class="task-content">
                    <h3 class="task-title">${tarefa.titulo}</h3>
                    <p class="task-description">${tarefa.descricao}</p>
                </div>
                <div class="task-points ${statusClass}">${tarefa.pontos}</div>
            </div>
        `;
    }

    // Renderiza o board completo
    renderBoard() {
        const boardHTML = alunos.map((aluno, index) => this.createStudentColumn(aluno, index)).join('');
        this.kanbanBoard.innerHTML = boardHTML;
    }

    // Configura os event listeners
    setupEventListeners() {
        // Event listener para os cards de tarefa
        this.kanbanBoard.addEventListener('click', (e) => {
            const taskCard = e.target.closest('.task-card');
            if (taskCard) {
                const alunoIndex = parseInt(taskCard.dataset.aluno);
                const tarefaIndex = parseInt(taskCard.dataset.tarefa);
                const tarefa = alunos[alunoIndex].tarefas[tarefaIndex];
                this.openModal(tarefa);
            }
        });

        // Event listener para fechar o modal
        this.modalClose.addEventListener('click', () => {
            this.closeModal();
        });

        // Event listener para fechar modal clicando no overlay
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });

        // Event listener para fechar modal com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalOverlay.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    // Abre o modal com os detalhes da tarefa
    openModal(tarefa) {
        document.getElementById('modalTitle').textContent = tarefa.titulo;
        document.getElementById('modalDescription').textContent = tarefa.descricao;
        
        const statusBadge = document.getElementById('modalStatus');
        const statusText = tarefa.status === "finalizado" ? "Finalizado" : "Pendente";
        const statusClass = tarefa.status === "finalizado" ? "completed" : "pending";
        
        statusBadge.textContent = statusText;
        statusBadge.className = `status-badge ${statusClass}`;
        
        const pointsCircle = document.getElementById('modalPoints');
        pointsCircle.textContent = tarefa.pontos;
        pointsCircle.className = `points-circle ${statusClass}`;
        
        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Fecha o modal
    closeModal() {
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Atualiza os pontos automaticamente quando os dados mudam
    atualizarPontos() {
        this.renderBoard();
    }
}

// Inicializa a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.kanbanApp = new KanbanApp();
});

// Função global para facilitar testes e atualizações
function adicionarTarefa(nomeAluno, novaTarefa) {
    const aluno = alunos.find(a => a.nome === nomeAluno);
    if (aluno) {
        aluno.tarefas.push(novaTarefa);
        window.kanbanApp.atualizarPontos();
        console.log(`Tarefa adicionada para ${nomeAluno}:`, novaTarefa);
    }
}

function alterarStatusTarefa(nomeAluno, indiceTarefa, novoStatus) {
    const aluno = alunos.find(a => a.nome === nomeAluno);
    if (aluno && aluno.tarefas[indiceTarefa]) {
        aluno.tarefas[indiceTarefa].status = novoStatus;
        window.kanbanApp.atualizarPontos();
        console.log(`Status da tarefa ${indiceTarefa} de ${nomeAluno} alterado para: ${novoStatus}`);
    }
}