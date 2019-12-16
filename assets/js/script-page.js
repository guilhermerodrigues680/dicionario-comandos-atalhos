/*
* Esta função faz um request na API do github e recebe o conteudo da pasta 'pages'
* Em seguida filtra os nomes dos arquivos e cria um link para cada pagina.
*/
function loadPages() {
    var xhttp = new XMLHttpRequest();
    const apiRoot = "https://api.github.com/";
    const apiUrl  = "repos/guilhermerodrigues680/dicionario-comandos-atalhos/contents/pages?ref=gh-pages";
    const url = apiRoot + apiUrl;

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) { // Checa se readyState == 4 (Operação Concluída) e se retornou status 200 (código HTTP 200 OK)

            var res = JSON.parse(this.responseText); // Converte a resposta de texto para objeto JSON
            const dropdownButton = document.querySelector("#div-dropdown-pages"); // DOM da div com dropdown

            res.forEach(element => { // Laço para cada elemento da resposta
                let a = document.createElement('a'); // Cria um elemento a (<a></a>)
                a.classList.add('dropdown-item'); // Adiciona ao elemento a classe dropdown-item
                a.href = '/dicionario-comandos-atalhos/pages/' + element.name.split(".")[0] + '.html'; // Cria a referencia para a pagina, substituido a extensao para .html
                a.appendChild(document.createTextNode(element.name)); // Adiciona texto ao elemento a
                
                dropdownButton.appendChild(a); // Adiciona o elemento a ao dropdownButton
            });

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadPages(); // Chama a função loadPages ao carregar o script
