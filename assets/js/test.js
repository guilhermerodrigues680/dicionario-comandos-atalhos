function loadPages() {
    var xhttp = new XMLHttpRequest();
    const apiRoot = "https://api.github.com/";
    const apiUrl  = "repos/guilhermerodrigues680/dicionario-comandos-atalhos/contents/pages?ref=gh-pages";
    const url = apiRoot + apiUrl;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            const div = document.querySelector("#main-div");
            const dropdownButton = document.querySelector("#dropdown-button");

            // console.log(res);

            div.innerHTML = "<h2>Pages:</h2>";

            res.forEach(element => {
                // console.log(element.name);
                div.innerHTML = div.innerHTML + '<p><a href=\"/dicionario-comandos-atalhos/pages/' + element.name.split(".")[0] + '.html\">' + element.name + '</a></p>';
                
                let a = document.createElement("a");
                a.href = '/dicionario-comandos-atalhos/pages/' + element.name.split(".")[0] + '.html';
                a.appendChild(document.createTextNode("Hello World"));
                
                dropdownButton.appendChild(a);
            });
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

loadPages();
