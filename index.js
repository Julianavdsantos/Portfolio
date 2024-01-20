document.addEventListener("DOMContentLoaded", function () {
    debugger;

    // Adicione um evento de clique para cada linha da tabela
    var rows = document.querySelectorAll('tbody tr');

    rows.forEach(function (row) {
        row.addEventListener('click', function () {
            // Obtenha as informações do projeto da linha clicada
            var projectInfo = getProjectInfo(row);

            // Atualize a descrição com base nas informações do projeto
            updateDescription(projectInfo);
        });
    });

    // Função para obter informações do projeto a partir da linha clicada
    function getProjectInfo(row) {
        var title = row.querySelector('.project-title').textContent;
        var description = row.querySelector('.project-description').textContent;

        return {
            title: title,
            description: description
        };
    }

    // Função para atualizar a descrição
    function updateDescription(project) {
        var imgElement = document.querySelector('#right-menu img');
        // Atualize a imagem conforme necessário
        // imgElement.src = 'https://example.com/project-image.jpg';

        var pElement = document.querySelector('#right-menu p');
        pElement.textContent = project.description;

        // Atualize a lista de itens
        var itemList = '<ul>';
        // Adicione itens conforme necessário
        itemList += '<li>' + project.title + '</li>';
        itemList += '<li>Outro item</li>';
        itemList += '</ul>';

        var divElement = document.querySelector('#right-menu div');
        divElement.innerHTML = itemList;
    }
});
