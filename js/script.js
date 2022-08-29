function sql(){
    document.getElementById("sql_sombra").style="filter: opacity(1) blur(50px)";

    document.getElementById("article_sombra").style="filter: opacity(1) blur(70px); background: white";

    document.getElementById("habilidades").style="background: black;";

    document.getElementById("tecnologia").innerText="SQL";

    document.getElementById("description_tec").innerText="Modelos Conceituais e Realacionais tenho um breve conhecimento. Fiz uso do Mysql Workbench, nada profissional...<br>Se quiser acessar meus projetos e criações clique na imagem e veja meu repositório !!"

    document.getElementById("description_tec").style="    margin-top: 30px;margin-left: 100px;width: 400px;line-height: normal;font-size: 20px; "

    document.getElementById("article").style="width: 900px;"

    document.getElementById("html_sombra", "scrum_sombra", "css_sombra").style="filter: opacity(0);"

    document.getElementById("html", "css", "scrum").style="filter:saturate(0%) brightness(10%);"

}

function html() {
    document.getElementById("html_sombra").style="filter: opacity(1) blur(70px)"

    document.getElementById("habilidades").style="background: #522301"

    document.getElementById("html").style="filter: saturate(100%) brightness(100%);"

    document.getElementById("article_sombra").style="filter: opacity(1) blur(70px); background: #E26620";

    document.getElementById("tecnologia").innerText="<HTML>"

    document.getElementById("description_tec").innerText="Tenho conhecimentos da base do html, como sua estrutura semantica recomendada e tambem sobre o uso de suas tags para elaboração de tabelas e formularios. "

    document.getElementById("description_tec").style="    margin-top: 30px;margin-left: 100px;width: 400px;line-height: normal;font-size: 20px; "

    document.getElementById("article").style="width: 900px; color: white;"

    document.getElementById("sql_sombra", "scrum_sombra", "css_sombra").style="filter: opacity(0);"

    document.getElementById("sql", "css", "scrum").style="filter:saturate(0%) brightness(10%);"

}

function scrum() {
    document.getElementById("scrum_sombra").style="filter: opacity(1) blur(70px)";

    document.getElementById("habilidades").style="background: #388585;"

    document.getElementById("article_sombra").style="filter: opacity(1) blur(70px); background: #78F2F2";

    document.getElementById("tecnologia").innerText="Scrum";

    document.getElementById("description_tec").innerText="como realizar muito mais tarefas em menos tempo? Scrum me ensinou isso, aderir essa metodologia na vida profissional e pessoal é uma escolha da qual não tem volta!! Tenho conhecimentos tambem em Kanban e outras"

    document.getElementById("description_tec").style="    margin-top: 30px;margin-left: 100px;width: 400px;line-height: normal;font-size: 20px; "

    document.getElementById("article").style="width: 900px;"

    document.getElementById("html_sombra", "sql_sombra", "css_sombra").style="filter: opacity(0);"

    document.getElementById("html", "css", "sql").style="filter:saturate(0%) brightness(10%);"
}
