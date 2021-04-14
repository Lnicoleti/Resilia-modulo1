function begin() {

    remover("result");

    var teste2 = document.createElement("p");
    teste2.innerText =
         "Após a escolha de trabalhar junto com você passaram-se anos e Naruto pediu para poder treinar com seu irmão e que ele se tornasse seu mentor, mesmo muito ocupado seu irmão Obito começou a instruir seu irmão mais novo e Naruto fez uma promessa que um dia se tornaria melhor lutador que seu irmão e que o desafiaria para uma luta, clique em OK para prosseguir";

    document.getElementById("divResultado").appendChild(teste2);
    teste2.setAttribute("id", "result");

    remover("btn");
    remover("btn-2");
    createButton()


}