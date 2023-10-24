document.addEventListener("DOMContentLoaded", function () {
    var tabela = document.getElementById("tabela");
    var imagem = document.getElementById("imagem");

    tabela.addEventListener("click", function (event) {
        if (event.target && event.target.getAttribute("data-nome")) {
            var nomeArtista = event.target.getAttribute("data-nome");

            // Atualizar a imagem com base no nome do artista
            imagem.src = nomeArtista + ".jpg"; // Substitua pelo caminho correto da imagem
        }
    });
});
