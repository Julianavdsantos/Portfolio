var ProjetoApp = (function () {
    var linhas, menuProjeto, centerDiv, closeButton, theadCollection;

    function inicializar() {
        linhas = document.getElementById("tabela").getElementsByTagName("tr");
        menuProjeto = document.getElementById("right-menu");
        centerDiv = document.getElementById("center-div");
        closeButton = document.getElementsByClassName("closeButton");
        theadCollection = document.getElementById("tabela").getElementsByTagName("thead");

        configurarEventos();
    }

    function exibirDetalhesProjeto(projectId) {
        var textoProjeto;

        switch (projectId) {
            case "1":
                textoProjeto = "<div class='detalherProjeto'><button class='closeButton'>x</h1></button>" +"<h2>Api Star Wars</h2>"  +
                "<p>Projeto em C# ASP.NET MVC para uma aplicação web que consome a API pública Star Wars (SWAPI), " +
               " fornecendo detalhes expandidos ao clicar em filmes, planetas ou veículos específicos.</p>" +
               "<ul>" +
               "<li> Uso de injeção de dependência no serviço</li>" +
               "<li>Padrão MVC " +
               "<li>Tratamento de erros</li>" +
               "<li>Consumo de API Externa</li>" +
               "</ul></div>" + "<a href='https://github.com/Julianavdsantos/ApiC-MVC2' target='_blank'>Acesse o código do projeto</a>" + '<img src="starWars2.png">';
                  
                break;
            case "2":
                textoProjeto = "<div class='detalherProjeto'><button class='closeButton'>X</h1></button>" +"<h2>Portifólio</h2>" +
                "<p>Este projeto consiste em um portfólio que destaca alguns dos projetos que desenvolvi, " +
                 "<ul>"  +
                 "<li> Uso HTML, CSS e JavaScript</li>" +
                 "<li>Padrão de design 'Revealing Module Pattern'</li>" +
                 "<li> Bootstrap</li>" +
                 "</ul></div>" +
                 "<a href='hhttps://github.com/Julianavdsantos/Portfolio' target='_blank'>Acesse o código do projeto</a>"+ '<img src="foto potifolio.png">';
                break;
            case "3":
                textoProjeto = "<div class='detalherProjeto'><button class='closeButton'>X</h1></button>" +"<h2>Web Sit</h2>" +
                " Este projeto foi elaborado com o objetivo de promover o trabalho de uma cantora pioneira como mulher nas rodas de Samba de BH/Mg, Jussara Pretta,"+ 
                " Destacando não apenas sua incrível trajetória musical, mas também as canções inesquecíveis que compõem o rico repertório dessa artista dedicada. </p></div>" +
                "<a href='https://jussarapretta.com/' target='_blank'>https://jussarapretta.com/</a>"+ '<img src="webSite.png">';
                break;
            case "4":
                textoProjeto = "<div class='detalherProjeto'><button class='closeButton'>X</h1></button>" +"<h2>Registro Patrimônial-UFMG</h2>" +
                " Sistema de registro patrimonial através de leitura de códigos de barras, permitindo " +
                " classificação por departamento e exportação de planilhas. Apesar da simplicidade, o " +
                "projeto resultou em eficiência, reduzindo pela metade o tempo de execução do "+
                "processo de trabalho. Desenvolvido sem fins lucrativos, serviu como objeto de estudo.</div>"+

                "<a href='https://github.com/Julianavdsantos/codeCaptura/' target='_blank'>Acesse o código do projeto</a>"+ '<img src="registrodePatrimonio.png">';
                break;
            case "5":
                textoProjeto = "<div class='detalherProjeto'><button class='closeButton'>X</h1></button>" +"<h2>Gerador de Números</h2>" +
                "Este projeto é uma aplicação web simples e intuitiva que permite a geração de números aleatórios com base nos parâmetros fornecidos pelo usuário,"+ 
                " oferecendo uma ferramenta eficaz para escolha de números em jogos </div> "+
                "<a href='https://github.com/Julianavdsantos/Sorte-aqui' target='_blank'>Acesse o código do projeto</a>"+ '<img src="geradordeNumeros.png">';
                break;
        }

        menuProjeto.innerHTML = textoProjeto;
    }

    function configurarEventos() {
        for (var i = 0; i < linhas.length; i++) {
            linhas[i].addEventListener("click", function (event) {
                var projectId = this.getAttribute("data-project-id");

                if (event.target.tagName.toLowerCase() === 'th') {
                    return;
                }

                exibirDetalhesProjeto(projectId);
                centralizarDiv();
                menuProjeto.classList.remove("disabled");
                configurarBotaoFechar();
            });
        }
    }

    function centralizarDiv() {
        centerDiv.style.marginLeft = "150px";
        centerDiv.style.borderRadius = "10px";
        centerDiv.style.marginRight = "320px";
        centerDiv.style.width = "calc(100% - 500px)";
        centerDiv.style.height = "100vh";
    }

    function configurarBotaoFechar() {
        var closeButton = document.querySelector(".closeButton");
        closeButton.addEventListener("click", function () {
            menuProjeto.classList.add("disabled");
            resetarCentralDiv();
        });
    }

    function resetarCentralDiv() {
        centerDiv.style.height = "100vh";
        centerDiv.style.marginLeft = "10%";
        centerDiv.style.width = "88%";
    }

    return {
        inicializar: inicializar
    };
})();

document.addEventListener("DOMContentLoaded", function () {
    ProjetoApp.inicializar();
});
