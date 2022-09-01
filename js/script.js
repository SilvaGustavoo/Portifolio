function sql(){
    document.getElementById("sql_sombra").style="filter: opacity(1) blur(60px)";

    document.getElementById("article_sombra").style="filter: opacity(1) blur(70px); background: white";

    document.getElementById("habilidades").style="background: black;";

    document.getElementById("tecnologia").innerText="SQL";

    document.getElementById("description_tec").innerText="Modelos Conceituais e Realacionais tenho um breve conhecimento. Fiz uso do Mysql Workbench, nada profissional...<br>Se quiser acessar meus projetos e criações clique na imagem e veja meu repositório !!";

    if (window.matchMedia("(max-width: 480px)").matches) {
        document.getElementById("description_tec").style="margin-top: 50px;"
    } else {
        document.getElementById("description_tec").style="margin-top: 30px;line-height: normal;";
    }

    document.getElementById("article").style="color: black";

    document.getElementById("html_sombra").style="filter: opacity(0);";

    document.getElementById("scrum_sombra").style="filter: opacity(0);";

    document.getElementById("css_sombra").style="filter: opacity(0);";

    document.getElementById("html").style="filter:saturate(0%) brightness(10%);";

    document.getElementById("scrum").style="filter:saturate(0%) brightness(10%);";

    document.getElementById("css").style="filter:saturate(0%) brightness(10%);";

}

function html() {
    document.getElementById("html_sombra").style="filter: opacity(1) blur(70px)"

    document.getElementById("habilidades").style="background: #522301"

    document.getElementById("html").style="filter: saturate(100%) brightness(100%);"

    document.getElementById("article_sombra").style="filter: opacity(1) blur(70px); background: #E26620";

    document.getElementById("tecnologia").innerText="<HTML>"

    document.getElementById("description_tec").innerText="Tenho conhecimentos da base do html, como sua estrutura semantica recomendada e tambem sobre o uso de suas tags para elaboração de tabelas e formularios. "

    if (window.matchMedia("(max-width: 480px)").matches) {
        document.getElementById("description_tec").style="margin-top: 50px;"
    } else {
        document.getElementById("description_tec").style="margin-top: 30px;line-height: normal;";
    }

    document.getElementById("article").style="color: white;"

    document.getElementById("sql_sombra").style="filter: opacity(0);"

    document.getElementById("css_sombra").style="filter: opacity(0);"

    document.getElementById("scrum_sombra").style="filter: opacity(0);"

    document.getElementById("sql", "css", "scrum").style="filter:saturate(0%) brightness(10%);"

    document.getElementById("css").style="filter:saturate(0%) brightness(10%);"

    document.getElementById("scrum").style="filter:saturate(0%) brightness(10%);"

}

function scrum() {
    document.getElementById("scrum_sombra").style="filter: opacity(1) blur(70px)";

    document.getElementById("habilidades").style="background: #388585;"

    document.getElementById("article_sombra").style="filter: opacity(1) blur(70px); background: #78F2F2";

    document.getElementById("scrum").style="filter:saturate(100%) brightness(100%);";

    document.getElementById("tecnologia").innerText="Scrum";

    document.getElementById("description_tec").innerText="como realizar muito mais tarefas em menos tempo? Scrum me ensinou isso, aderir essa metodologia na vida profissional e pessoal é uma escolha da qual não tem volta!! Tenho conhecimentos tambem em Kanban e outras"

    if (window.matchMedia("(max-width: 480px)").matches) {
        document.getElementById("description_tec").style="margin-top: 50px;"
    } else {
        document.getElementById("description_tec").style="margin-top: 30px;line-height: normal;";
    }

    document.getElementById("article").style=""

    /* remover o fundo e a cor das outras tecnologias */

    document.getElementById("css_sombra").style="filter: opacity(0);";
    document.getElementById("html_sombra").style="filter: opacity(0);";
    document.getElementById("sql_sombra").style="filter: opacity(0);";

    document.getElementById("css").style="filter:saturate(0%) brightness(10%);";

    document.getElementById("sql").style="filter:saturate(0%) brightness(10%);";

    document.getElementById("html").style="filter: brightness(10%) saturate(0%);";
}


function css() {
    document.getElementById("css_sombra").style="filter: opacity(1) blur(50px)";

    document.getElementById("habilidades").style="background: #002F64;"

    document.getElementById("article_sombra").style="background: #035BC1; filter: opacity(1) blur(50px)";

    document.getElementById("css").style="filter: brightness(100%) saturate(100%);"

    document.getElementById("tecnologia").innerText="CSS";

    document.getElementById("description_tec").innerText="Conhecimentos em estilização se estende em desenvolvimento de paginas responsivas e divertidas com auxilio aplicativos, como Figma ou Marvel."

    if (window.matchMedia("(max-width: 480px)").matches) {
        document.getElementById("description_tec").style="margin-top: 50px;"
    } else {
        document.getElementById("description_tec").style="margin-top: 30px;line-height: normal;";
    }

    document.getElementById("article").style="color: white;";

    /* remover o fundo e a cor das outras tecnologias */

    document.getElementById("scrum_sombra").style="filter: opacity(0);";
    document.getElementById("html_sombra").style="filter: opacity(0);";
    document.getElementById("sql_sombra").style="filter: opacity(0);";

    document.getElementById("scrum").style="filter:saturate(0%) brightness(10%);";

    document.getElementById("sql").style="filter:saturate(0%) brightness(10%);";

    document.getElementById("html").style="filter: brightness(10%) saturate(0%);";
}