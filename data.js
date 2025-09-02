// Banco de dados das tarefas dos alunos
const alunos = [
    {
        nome: "Carlos",
        tarefas: [
            
            { titulo: "Video: Curriculo", descricao: "https://www.youtube.com/watch?v=q652jp6YVqk&pp=ygUNY3VycmljdWxvIGRldg%3D%3D", status: "pendente", pontos: 1 },
        ]
    },
    {
        nome: "Felipe",
        tarefas: [
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "FeedBack 02/09/25", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Site portfólio no GitHub", descricao: "", status: "pendente", pontos: 2 },
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Dailly 02/09/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Portifolio", descricao: "https://www.youtube.com/watch?v=Vr3hWm7My24", status: "finalizado", pontos: 2 },
            { titulo: "FeedBack 26/08/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Fazer Curriculo", descricao: "Canvas.com", status: "finalizado", pontos: 2 },
            { titulo: "Dailly 26/08/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Curriculo", descricao: "https://www.youtube.com/watch?v=q652jp6YVqk&pp=ygUNY3VycmljdWxvIGRldg%3D%3D", status: "finalizado", pontos: 1 },
            { titulo: "FeedBack 19/08/25", descricao: "", status: "finalizado", pontos: 1 },
        ]
    },
    {
        nome: "Eduardo",
        tarefas: [
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "FeedBack 02/09/25", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Site portfólio no GitHub", descricao: "", status: "pendente", pontos: 2 },
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Dailly 02/09/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Curriculo", descricao: "https://www.youtube.com/watch?v=q652jp6YVqk&pp=ygUNY3VycmljdWxvIGRldg%3D%3D", status: "pendente", pontos: 1 },
            { titulo: "FeedBack 19/08/25", descricao: "", status: "finalizado", pontos: 1 },
        ]
    }
    ,
    {
        nome: "Vitor",
        tarefas: [
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "FeedBack 02/09/25", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Site portfólio no GitHub", descricao: "", status: "pendente", pontos: 2 },
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Dailly 02/09/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Portifolio", descricao: "https://www.youtube.com/watch?v=Vr3hWm7My24", status: "finalizado", pontos: 2 },
            { titulo: "FeedBack 26/08/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Fazer Curriculo", descricao: "Canvas.com", status: "finalizado", pontos: 2 },
            { titulo: "Dailly 26/08/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Curriculo", descricao: "https://www.youtube.com/watch?v=q652jp6YVqk&pp=ygUNY3VycmljdWxvIGRldg%3D%3D", status: "finalizado", pontos: 1 },
            { titulo: "FeedBack 19/08/25", descricao: "", status: "finalizado", pontos: 1 },
        ]
    },
    {
        nome: "Arthur",
        tarefas: [
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "FeedBack 02/09/25", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Site portfólio no GitHub", descricao: "", status: "pendente", pontos: 2 },
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Dailly 02/09/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Portifolio", descricao: "https://www.youtube.com/watch?v=Vr3hWm7My24", status: "finalizado", pontos: 2 },
            { titulo: "Fazer Curriculo", descricao: "Canvas.com", status: "finalizado", pontos: 2 },
            { titulo: "Dailly 26/08/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Curriculo", descricao: "https://www.youtube.com/watch?v=q652jp6YVqk&pp=ygUNY3VycmljdWxvIGRldg%3D%3D", status: "finalizado", pontos: 1 },
            { titulo: "FeedBack 19/08/25", descricao: "", status: "finalizado", pontos: 1 },
        ]
    }
    ,
    {
        nome: "Luis",
        tarefas: [
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "FeedBack 02/09/25", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Site portfólio no GitHub", descricao: "", status: "pendente", pontos: 2 },
            { titulo: "Feedback sobre o portfólio", descricao: "", status: "pendente", pontos: 1 },
            { titulo: "Dailly 02/09/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Portifolio", descricao: "https://www.youtube.com/watch?v=Vr3hWm7My24", status: "finalizado", pontos: 2 },
            { titulo: "FeedBack 26/08/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Fazer Curriculo", descricao: "Canvas.com", status: "finalizado", pontos: 2 },
            { titulo: "Dailly 26/08/25", descricao: "", status: "finalizado", pontos: 1 },
            { titulo: "Video: Curriculo", descricao: "https://www.youtube.com/watch?v=q652jp6YVqk&pp=ygUNY3VycmljdWxvIGRldg%3D%3D", status: "finalizado", pontos: 1 },
            { titulo: "FeedBack 19/08/25", descricao: "", status: "finalizado", pontos: 1 },
        ]
    }
];
