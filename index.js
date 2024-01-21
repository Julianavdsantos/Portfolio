document.addEventListener("DOMContentLoaded", function () {
    debugger
    var linhas = document.getElementById("tabela").getElementsByTagName("tr");
    var menuProjeto = document.getElementById("right-menu");
    var centerDiv = document.getElementById("center-div");
  
    for (var i = 0; i < linhas.length; i++) {
        linhas[i].addEventListener("click", function () {
            
            var projectId = this.getAttribute("data-project-id");

            switch (projectId) {
                case "1":
                    var textoProjeto1 =  "<div class='detalherProjeto'><h2>Api Star Wars</h2>" +
                         "<p>Projeto em C# ASP.NET MVC para uma aplicação web que consome a API pública Star Wars (SWAPI), " +
                        " fornecendo detalhes expandidos ao clicar em filmes, planetas ou veículos específicos.</p>" +
                        "<ul>" +
                        "<li> Uso de injeção de dependência no serviço</li>" +
                        "<li>Padrão MVC " +
                        "<li>Tratamento de erros</li>" +
                        "<li>Consumo de API Externa</li>" +
                        "</ul></div>" + "<a href='https://github.com/Julianavdsantos/ApiC-MVC2' target='_blank'>Acesso o código do projeto</a>" + '<img src="starWars2.png">';
                   menuProjeto.innerHTML = textoProjeto1;

                    break;
                case "2":
                    var textoProjeto2 = "<div class='detalherProjeto'><h2>CRUD Despesas</h2>" +
                       "<p>Crud de controle de despesas pessoais. (Em aperfeiçoamento - objeto de estudo)" +
                        "<ul>" +
                        "<li>API RESTFUL, para recuperar informações sobre categorias</li>" +
                        "<li>Utiliza Entity Framework, para garantir persistência confiável dos dados</li>" +
                        "<li>Gráficos visuais mostram despesas por categoria e comparação entre receitas e despesas ao longo do tempo.</li>" +
                        "</ul></div>" +
                        "<a href='https://github.com/Julianavdsantos/SeuRepositorioAqui' target='_blank'>Acesse o código do projeto</a>"+ '<img src="finanças2.png">';

menuProjeto.innerHTML = textoProjeto2;

                    break;
                case "3":
                    var textoProjeto3 = "<div class='detalherProjeto'><h2>Web Sit</h2>" +
                        " Este projeto foi elaborado com o objetivo de promover o trabalho de uma cantora pioneira como mulher nas rodas de Samba de BH/Mg,"+ 
                        " Destacando não apenas sua incrível trajetória musical, mas também as canções inesquecíveis que compõem o rico repertório dessa artista dedicada. </p></div>" +
                        "<a href='https://jussarapretta.com/' target='_blank'>Acesse o código do projeto</a>"+ '<img src="webSite.png">';
                    menuProjeto.innerHTML = textoProjeto3;
                    break;
                case "4":
                    var textoProjeto4 = "<div class='detalherProjeto'><h2>Registro Patrimônial-UFMG</h2>" +
                        " Sistema de registro patrimonial através de leitura de códigos de barras, permitindo " +
                        " classificação por departamento e exportação de planilhas. Apesar da simplicidade, o " +
                        "projeto resultou em eficiência, reduzindo pela metade o tempo de execução do "+
                        "processo de trabalho. Desenvolvido sem fins lucrativos, serviu como objeto de estudo.</div>"+

                        "<a href='https://github.com/Julianavdsantos/codeCaptura/' target='_blank'>Acesse o código do projeto</a>"+ '<img src="registrodePatrimonio.png">';
                        
                        menuProjeto.innerHTML = textoProjeto4;
                    break;
                case "5":
                    var textoProjeto5="<div class='detalherProjeto'><h2>Gerador de Números</h2>" +
                    "Este projeto é uma aplicação web simples e intuitiva que permite a geração de números aleatórios com base nos parâmetros fornecidos pelo usuário,"+ 
                    " oferecendo uma ferramenta eficaz para escolha de números em jogos </div> "+
                    "<a href='https://github.com/Julianavdsantos/Sorte-aqui' target='_blank'>Acesse o código do projeto</a>"+ '<img src="geradordeNumeros.png">';
                       menuProjeto.innerHTML = textoProjeto5;

                      

                    break;
                 
          
            }

         

           centerDiv.style.marginLeft = "150px";
            centerDiv.style.borderRadius = "10px";
            centerDiv.style.marginRight = "320px";
           centerDiv.style.width = "calc(100% - 500px)";
            centerDiv.style.height = "100vh";


          
            menuProjeto.classList.remove("disabled");



        });
    }
});
