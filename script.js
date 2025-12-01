const projetos = [
    // Exemplo (vou substituir pelos seus depois)
    {
        nome: "Quiz",
        descricao: "Um quiz simples do Internacional.",
        link: "https://github.com/zangeoy2k/quiz"
    },
    {
        nome: "BuscaCEP",
        descricao: "Busque um endereço quando quiser.",
        link: "https://github.com/zangeoy2k/buscaCEP"
    },
    {
    nome: "Cardápio",
        descricao: "Feito para quando a fome bater.",
        link: "https://github.com/zangeoy2k/cardapio"
    },
    {
    nome: "Star Wars",
        descricao: "Site oficial do filme Star Wars.",
        link: "https://github.com/zangeoy2k/star-wars"
    },
    {
    nome: "ToDo",
        descricao: "Organize sua vida através dessa lista de tarefas.",
        link: "https://github.com/zangeoy2k/ToDo"
    }
];

// Renderização automática
const container = document.getElementById("projetos");

projetos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <a href="${p.link}" target="_blank">Visitar site →</a>
    `;

    container.appendChild(card);
});
