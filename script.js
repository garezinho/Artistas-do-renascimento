function mudarCaracteristicas(nome, imagemURL) {
    var caracteristicas = document.getElementById("caracteristicas");
    var imagem = document.getElementById("imagem");


    caracteristicas.innerHTML = "";


    imagem.src = imagemURL;


    switch (nome) {
        case "Albrecht Dürer":
            mudarCaracteristica1();
            break;
        case "Leonardo da Vinci":
            mudarCaracteristica2();
            break;
        default:
            imagem.src = "imagem-default.jpg"; 
            caracteristicas.innerHTML = "Nome não encontrado.";
    }
}

function mudarCaracteristica1() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Andrea del Verrocchio foi um renomado artista italiano do Renascimento, nascido em 1435 e falecido em 1488. Ele foi um mestre polivalente, trabalhando como escultor, pintor e ourives, e é conhecido por sua influência na formação de muitos artistas talentosos da época, incluindo Leonardo da Vinci. <br> <br> Verrocchio é famoso por suas esculturas de bronze, como o 'David' e o 'Colleoni', que são exemplos notáveis de realismo e detalhamento anatômico. Ele também é lembrado por sua habilidade em criar obras de arte que capturam expressões humanas emocionais em suas pinturas e esculturas.";
}

function mudarCaracteristica2() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Leonardo da Vinci foi uma das figuras mais destacadas do Renascimento italiano, atuando como pintor, escultor, cientista, inventor, arquiteto e muito mais. Ele nasceu em Vinci, Itália, em 1452, e faleceu em 1519 em Amboise, França. <br> <br> Leonardo é amplamente considerado um dos maiores gênios da história da humanidade devido à sua diversificada gama de talentos e realizações. \n\n Leonardo é conhecido por obras-primas da pintura, como 'Mona Lisa' e 'A Última Ceia'. Sua habilidade em criar retratos altamente detalhados e expressivos é lendária, e suas obras são famosas por seu realismo e uso inovador da técnica sfumato.";
}
function mudarCaracteristica3() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Giotto di Bondone foi um pintor e arquiteto italiano do final do século XIII e início do século XIV, frequentemente considerado um dos pioneiros do Renascimento italiano. Ele viveu aproximadamente de 1267 a 1337 e é conhecido por suas contribuições significativas para a evolução da arte ocidental, especialmente na pintura. <br> <br>Giotto é famoso por suas pinturas murais, que são notáveis por sua representação mais realista e tridimensional das figuras e cenas religiosas, em contraste com as convenções mais estilizadas e planas da arte medieval que o precedeu. Algumas de suas obras mais célebres incluem os afrescos da Capela Scrovegni, em Pádua, que retratam cenas da vida de Cristo e da Virgem Maria.";
}
function mudarCaracteristica4() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Giorgione, cujo nome verdadeiro era Giorgio Barbarelli da Castelfranco, foi um proeminente pintor italiano do Alto Renascimento. Ele viveu por volta de 1477 a 1510 e é conhecido por sua influência na transição do estilo artístico da Alta Renascença, especialmente em Veneza, onde ele trabalhou. <br> <br>Embora tenha falecido jovem, Giorgione deixou uma marca significativa na história da arte. Suas obras muitas vezes incorporavam temas poéticos e misteriosos, e ele era conhecido por sua habilidade em capturar nuances emocionais e paisagens encantadoras em suas pinturas. <br. <br> Alguns dos trabalhos mais conhecidos de Giorgione incluem 'A Tempestade' e 'O Adormecido', que são notáveis por sua atmosfera evocativa e representação de elementos naturais e humanos de maneira sutil e misteriosa.";
}
function mudarCaracteristica5() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Fra Angelico, cujo nome de nascimento era Guido di Pietro, foi um monge e pintor italiano do início do Renascimento. Ele viveu de aproximadamente 1395 a 1455 e é conhecido por sua devoção religiosa e sua habilidade em criar pinturas sacras de beleza sublime. <br> <br> Algumas de suas pinturas mais famosas incluem 'Anunciação', 'A Adoração dos Magos' e 'O Juízo Final'. Suas obras são notáveis por sua representação detalhada de figuras religiosas, cores suaves e uso da perspectiva para criar profundidade em suas composições. <br> <br></br>Fra Angelico é celebrado por sua devoção à religião, bem como por sua contribuição para o desenvolvimento da pintura renascentista, incorporando elementos da espiritualidade cristã em suas obras. Ele foi um dos primeiros a adotar o uso de perspectiva em suas pinturas, influenciando muitos artistas renascentistas posteriores.";
}
function mudarCaracteristica6() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Donatello, cujo nome real era Donato di Niccolò di Betto Bardi, foi um escultor italiano do Renascimento e é considerado um dos mais influentes escultores do período. Ele viveu de 1386 a 1466 e é conhecido por sua habilidade excepcional na criação de esculturas de bronze e mármore que capturavam a profundidade psicológica e o realismo nas figuras. <br> <br>Algumas de suas esculturas mais famosas incluem 'Davi' e 'O Profeta Habacuque', ambas notáveis por sua inovação na representação da anatomia humana e da expressão emocional. 'Davi' é especialmente reconhecido por sua representação da juventude e confiança de Davi antes de enfrentar Golias. <br><br></br>Donatello desempenhou um papel fundamental na transição da escultura gótica para o Renascimento, introduzindo técnicas escultóricas avançadas e um foco na observação direta da natureza e da anatomia humana. Suas obras representam um marco no desenvolvimento da escultura renascentista.";
}
function mudarCaracteristica7() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Rafael Sanzio, mais conhecido simplesmente como Rafael, foi um dos mais renomados pintores e arquitetos italianos do Renascimento. Ele viveu de 1483 a 1520 e é amplamente considerado um dos artistas mais talentosos de sua época. Rafael era conhecido por sua harmonia, equilíbrio, beleza e habilidade em criar obras de arte que evocavam uma sensação de perfeição e serenidade. <br> <br>Algumas de suas pinturas mais famosas incluem 'A Escola de Atenas', que é parte dos afrescos da Capela Sistina, e 'A Madona do Prado'. 'A Escola de Atenas' é uma das obras-primas do Renascimento, retratando uma reunião de filósofos clássicos em um ambiente arquitetônico grandioso. 'A Madona do Prado' é uma representação icônica da Virgem Maria com o Menino Jesus e São João Batista. <br> <br></br>Além de suas pinturas, Rafael também foi um arquiteto talentoso e influente. Ele trabalhou na reconstrução da Basílica de São Pedro em Roma, um projeto que teve um impacto duradouro na arquitetura renascentista.";
}
function mudarCaracteristica8() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Michelangelo Merisi da Caravaggio, conhecido como Caravaggio, foi um influente pintor italiano do final do período renascentista e início do período barroco. Ele viveu de 1571 a 1610 e é amplamente considerado um dos mestres da pintura barroca. Caravaggio é conhecido por seu estilo revolucionário, uso dramático de luz e sombra (chiaroscuro) e realismo vivido em suas obras. <br> <br>Algumas de suas pinturas mais famosas incluem 'Judite Degolando Holofernes', 'O Rapto de São Sebastião' e 'O Bom Samaritano'. Caravaggio era mestre em representar cenas religiosas e mitológicas com uma intensidade emocional impressionante, muitas vezes incorporando elementos do cotidiano em suas obras.";
}
function mudarCaracteristica9() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Sandro Botticelli, cujo nome verdadeiro era Alessandro di Mariano di Vanni Filipepi, foi um renomado pintor italiano do Renascimento. Ele viveu entre 1445 e 1510 em Florença, Itália, e é amplamente considerado um dos artistas mais importantes de sua época. Botticelli é conhecido por suas obras-primas que combinam uma sensibilidade artística requintada com temas mitológicos e religiosos.";
}
function mudarCaracteristica10() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Giovanni Bellini foi um proeminente pintor italiano do Renascimento que viveu entre aproximadamente 1430 e 1516. Ele era um membro da renomada escola de pintura veneziana e é frequentemente considerado um dos mestres da Renascença veneziana. Giovanni Bellini era conhecido por suas paisagens vívidas, uso inovador de cores e sua habilidade em criar composições equilibradas e emotivas.";
}
function mudarCaracteristica11() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Antonello da Messina foi um pintor italiano do Renascimento que viveu no século XV (c. 1430-1479). Ele é conhecido por ser um dos primeiros artistas a introduzir a técnica da pintura a óleo na Itália, influenciando profundamente a evolução da arte na Península Itálica. Sua contribuição com a pintura a óleo permitiu maior precisão e riqueza de cores nas obras de arte da época.";
}
function mudarCaracteristica12() {
    var caracteristicas = document.getElementById("caracteristicas");
    caracteristicas.innerHTML = "Albrecht Dürer foi um renomado artista alemão do Renascimento que viveu entre 1471 e 1528. Ele é amplamente considerado um dos artistas mais influentes de sua época, conhecido por sua maestria em gravura, pintura e ilustração. <br> <br>Dürer é especialmente celebrado por suas contribuições para a arte da gravura em metal e madeira, sendo um dos primeiros a elevar essa técnica a uma forma de arte refinada. Suas gravuras, como 'Melancolia I' e 'Adão e Eva', são famosas por sua complexidade e detalhes intrincados. <br> <br></br>Além de suas habilidades como gravurista, Dürer também era um pintor talentoso, produzindo retratos notáveis e pinturas religiosas. Uma de suas obras mais famosas é 'Autorretrato aos 28 anos', que demonstra sua capacidade de representar-se com grande precisão.";
}
// Adicione mais funções de mudança de características conforme necessário