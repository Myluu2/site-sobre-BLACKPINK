function pesquisar() {
    console.log=app.js

    let section = document.getElementById
    ("resultados-pesquisa");
    console.log(section);

    let resultados = "" 

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) ||
            descricao.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href='${dado.link}' target="_blank"> + informações</a>
                </div>
            `
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
}