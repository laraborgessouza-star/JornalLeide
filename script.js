/* =====================================================
   SABOR & AFETO
   SISTEMA DE RECEITAS
===================================================== */


/* =====================================================
   BANCO DE RECEITAS
===================================================== */

const receitas = [

    {
        id: 1,

        nome: "Lasanha de Carne",

        categoria: "Massas",

        imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367a5?auto=format&fit=crop&w=900&q=80",

        descricao: "Lasanha cremosa com carne moída, molho de tomate e muito queijo.",

        tempo: "55 minutos",

        dificuldade: "Médio",

        porcoes: "6 porções",

        ingredientes: [
            "500 g de massa para lasanha",
            "500 g de carne moída",
            "2 xícaras de molho de tomate",
            "300 g de muçarela",
            "200 g de presunto",
            "1 cebola picada",
            "2 dentes de alho",
            "1 colher de sopa de óleo",
            "Sal a gosto",
            "Pimenta-do-reino a gosto",
            "Orégano a gosto"
        ],

        materiais: [
            "Panela",
            "Colher de pau",
            "Travessa ou assadeira",
            "Faca",
            "Tábua de corte",
            "Papel-alumínio"
        ],

        preparo: [
            "Pique a cebola e o alho.",
            "Aqueça o óleo em uma panela e refogue a cebola e o alho.",
            "Adicione a carne moída e cozinhe até perder a cor rosada.",
            "Acrescente o molho de tomate, sal, pimenta e orégano. Cozinhe por aproximadamente 10 minutos.",
            "Em uma travessa, coloque uma camada de molho.",
            "Adicione uma camada de massa, presunto, queijo e carne.",
            "Repita as camadas até acabar os ingredientes.",
            "Finalize com bastante muçarela.",
            "Cubra com papel-alumínio e leve ao forno preaquecido a 200 °C por aproximadamente 30 minutos.",
            "Retire o papel-alumínio e deixe gratinar por mais alguns minutos.",
            "Espere alguns minutos antes de servir."
        ]
    },


    {
        id: 2,

        nome: "Bolo de Cenoura",

        categoria: "Doces",

        imagem: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80",

        descricao: "Bolo fofinho de cenoura coberto com uma deliciosa calda de chocolate.",

        tempo: "45 minutos",

        dificuldade: "Fácil",

        porcoes: "10 fatias",

        ingredientes: [
            "3 cenouras médias",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 e 1/2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó",
            "4 colheres de sopa de chocolate em pó",
            "1 colher de sopa de manteiga",
            "1/2 xícara de leite"
        ],

        materiais: [
            "Liquidificador",
            "Tigela",
            "Colher ou fouet",
            "Forma para bolo",
            "Panela pequena",
            "Espátula"
        ],

        preparo: [
            "Descasque e corte as cenouras em pedaços pequenos.",
            "Coloque no liquidificador as cenouras, os ovos e o óleo.",
            "Bata até formar uma mistura homogênea.",
            "Transfira a mistura para uma tigela.",
            "Acrescente o açúcar e a farinha de trigo aos poucos.",
            "Misture delicadamente.",
            "Adicione o fermento e misture.",
            "Coloque a massa em uma forma untada.",
            "Asse em forno preaquecido a 180 °C por aproximadamente 35 minutos.",
            "Para a cobertura, coloque chocolate, manteiga e leite em uma panela.",
            "Mexa em fogo baixo até engrossar levemente.",
            "Despeje a cobertura sobre o bolo depois que ele estiver pronto."
        ]
    },


    {
        id: 3,

        nome: "Panqueca de Banana",

        categoria: "Saudáveis",

        imagem: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80",

        descricao: "Panquecas simples e saborosas para um café da manhã especial.",

        tempo: "20 minutos",

        dificuldade: "Fácil",

        porcoes: "4 porções",

        ingredientes: [
            "1 banana madura",
            "2 ovos",
            "1/2 xícara de aveia",
            "1 colher de chá de canela",
            "Frutas para acompanhar",
            "Mel a gosto"
        ],

        materiais: [
            "Tigela",
            "Garfo",
            "Frigideira antiaderente",
            "Espátula",
            "Colher"
        ],

        preparo: [
            "Amasse a banana em uma tigela usando um garfo.",
            "Adicione os ovos e misture bem.",
            "Acrescente a aveia e a canela.",
            "Misture até obter uma massa uniforme.",
            "Aqueça uma frigideira antiaderente em fogo baixo.",
            "Coloque pequenas porções da massa.",
            "Cozinhe até aparecerem pequenas bolhas na superfície.",
            "Vire a panqueca com uma espátula.",
            "Doure o outro lado.",
            "Repita até acabar a massa.",
            "Sirva com frutas e mel, se desejar."
        ]
    },


    {
        id: 4,

        nome: "Brownie de Chocolate",

        categoria: "Doces",

        imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",

        descricao: "Brownie de chocolate com textura macia e sabor intenso.",

        tempo: "35 minutos",

        dificuldade: "Fácil",

        porcoes: "12 pedaços",

        ingredientes: [
            "200 g de chocolate meio amargo",
            "120 g de manteiga",
            "3 ovos",
            "1 xícara de açúcar",
            "3/4 de xícara de farinha de trigo",
            "3 colheres de sopa de chocolate em pó",
            "1 pitada de sal"
        ],

        materiais: [
            "Tigela",
            "Panela para banho-maria",
            "Colher",
            "Forma quadrada",
            "Papel-manteiga",
            "Espátula"
        ],

        preparo: [
            "Derreta o chocolate junto com a manteiga em banho-maria.",
            "Em uma tigela, misture os ovos com o açúcar.",
            "Acrescente o chocolate derretido e misture.",
            "Adicione a farinha, o chocolate em pó e o sal.",
            "Misture apenas até incorporar os ingredientes.",
            "Forre uma forma com papel-manteiga.",
            "Despeje a massa na forma.",
            "Asse em forno preaquecido a 180 °C por aproximadamente 25 minutos.",
            "Retire do forno e espere esfriar.",
            "Corte em pedaços e sirva."
        ]
    },


    {
        id: 5,

        nome: "Sanduíche Natural de Frango",

        categoria: "Lanches",

        imagem: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",

        descricao: "Sanduíche natural de frango cremoso, fresco e fácil de preparar.",

        tempo: "20 minutos",

        dificuldade: "Muito fácil",

        porcoes: "4 sanduíches",

        ingredientes: [
            "2 xícaras de frango cozido e desfiado",
            "4 colheres de sopa de maionese",
            "1 cenoura pequena ralada",
            "1/2 lata de milho",
            "Folhas de alface",
            "8 fatias de pão de forma",
            "Sal a gosto",
            "Pimenta a gosto"
        ],

        materiais: [
            "Tigela",
            "Colher",
            "Ralador",
            "Faca",
            "Tábua de corte"
        ],

        preparo: [
            "Coloque o frango desfiado em uma tigela.",
            "Adicione a maionese e misture.",
            "Acrescente a cenoura ralada e o milho.",
            "Tempere com sal e pimenta.",
            "Passe o recheio sobre uma fatia de pão.",
            "Adicione uma folha de alface.",
            "Cubra com outra fatia de pão.",
            "Repita o processo com os outros sanduíches.",
            "Sirva imediatamente ou mantenha refrigerado até o momento de servir."
        ]
    },


    {
        id: 6,

        nome: "Arroz de Forno",

        categoria: "Almoço",

        imagem: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",

        descricao: "Arroz de forno cremoso, gratinado e perfeito para aproveitar ingredientes.",

        tempo: "40 minutos",

        dificuldade: "Fácil",

        porcoes: "6 porções",

        ingredientes: [
            "3 xícaras de arroz cozido",
            "200 g de presunto picado",
            "200 g de muçarela",
            "1 lata de milho",
            "1 tomate picado",
            "1/2 xícara de molho de tomate",
            "1/2 caixa de creme de leite",
            "Orégano a gosto",
            "Sal a gosto"
        ],

        materiais: [
            "Tigela grande",
            "Colher",
            "Travessa refratária",
            "Faca",
            "Tábua de corte",
            "Forno"
        ],

        preparo: [
            "Coloque o arroz cozido em uma tigela grande.",
            "Adicione o presunto, o milho e o tomate.",
            "Acrescente o molho de tomate e o creme de leite.",
            "Misture todos os ingredientes.",
            "Ajuste o sal, se necessário.",
            "Transfira a mistura para uma travessa.",
            "Cubra com a muçarela.",
            "Salpique orégano.",
            "Leve ao forno preaquecido a 200 °C.",
            "Asse por aproximadamente 20 minutos ou até o queijo gratinar.",
            "Retire com cuidado e sirva."
        ]
    },


    {
        id: 7,

        nome: "Macarrão à Bolonhesa",

        categoria: "Massas",

        imagem: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=900&q=80",

        descricao: "Clássico macarrão com molho de carne moída e tomate.",

        tempo: "35 minutos",

        dificuldade: "Fácil",

        porcoes: "4 porções",

        ingredientes: [
            "500 g de macarrão",
            "500 g de carne moída",
            "1 sachê de molho de tomate",
            "1 cebola",
            "2 dentes de alho",
            "1 colher de sopa de óleo",
            "Sal a gosto",
            "Pimenta-do-reino a gosto",
            "Queijo parmesão a gosto"
        ],

        materiais: [
            "Panela grande",
            "Panela média",
            "Escorredor",
            "Colher de pau",
            "Faca",
            "Tábua de corte"
        ],

        preparo: [
            "Coloque água em uma panela grande e leve ao fogo.",
            "Quando ferver, adicione o macarrão e cozinhe conforme a embalagem.",
            "Enquanto isso, aqueça o óleo em outra panela.",
            "Refogue a cebola e o alho.",
            "Adicione a carne moída e cozinhe bem.",
            "Acrescente o molho de tomate.",
            "Tempere com sal e pimenta.",
            "Deixe o molho cozinhar por aproximadamente 10 minutos.",
            "Escorra o macarrão.",
            "Misture o macarrão ao molho ou sirva o molho por cima.",
            "Finalize com queijo parmesão."
        ]
    },


    {
        id: 8,

        nome: "Brigadeiro",

        categoria: "Doces",

        imagem: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=80",

        descricao: "Brigadeiro tradicional, cremoso e perfeito para festas.",

        tempo: "25 minutos",

        dificuldade: "Fácil",

        porcoes: "20 unidades",

        ingredientes: [
            "1 lata de leite condensado",
            "1 colher de sopa de manteiga",
            "3 colheres de sopa de chocolate em pó",
            "Chocolate granulado para decorar"
        ],

        materiais: [
            "Panela",
            "Colher de pau",
            "Prato",
            "Colher pequena",
            "Forminhas de brigadeiro"
        ],

        preparo: [
            "Coloque o leite condensado em uma panela.",
            "Adicione a manteiga e o chocolate em pó.",
            "Misture bem antes de levar ao fogo.",
            "Cozinhe em fogo baixo, mexendo sem parar.",
            "Continue mexendo até a mistura começar a desgrudar do fundo da panela.",
            "Desligue o fogo.",
            "Transfira para um prato untado com manteiga.",
            "Espere esfriar.",
            "Faça pequenas bolinhas com as mãos untadas.",
            "Passe as bolinhas no chocolate granulado.",
            "Coloque nas forminhas."
        ]
    }

];


/* =====================================================
   ELEMENTOS HTML
===================================================== */

const listaReceitas = document.getElementById("listaReceitas");

const campoBusca = document.getElementById("campoBusca");

const mensagemVazia = document.getElementById("mensagemVazia");

const modal = document.getElementById("modal");

const fecharModal = document.getElementById("fecharModal");

const contadorFavoritos =
    document.getElementById("contadorFavoritos");

const btnFavoritos =
    document.getElementById("btnFavoritos");

const btnSurpresa =
    document.getElementById("btnSurpresa");

const formComentario =
    document.getElementById("formComentario");


/* =====================================================
   DADOS SALVOS
===================================================== */

let dadosSalvos;

try {

    dadosSalvos =
        JSON.parse(
            localStorage.getItem("saborAfeto")
        );

} catch (erro) {

    dadosSalvos = null;

}


if (!dadosSalvos) {

    dadosSalvos = {
        favoritos: [],
        avaliacoes: {},
        comentarios: {}
    };

}


let receitaAtual = null;

let categoriaAtual = "Todas";


/* =====================================================
   SALVAR
===================================================== */

function salvarDados() {

    localStorage.setItem(
        "saborAfeto",
        JSON.stringify(dadosSalvos)
    );

}


/* =====================================================
   ESCAPAR TEXTO
===================================================== */

function escaparTexto(texto) {

    const div =
        document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;

}


/* =====================================================
   MÉDIA DAS AVALIAÇÕES
===================================================== */

function calcularMedia(id) {

    const notas =
        dadosSalvos.avaliacoes[id] || [];

    if (notas.length === 0) {

        return 0;

    }

    const soma =
        notas.reduce(
            (total, nota) => total + nota,
            0
        );

    return soma / notas.length;

}


/* =====================================================
   DESENHAR ESTRELAS
===================================================== */

function desenharEstrelas(media) {

    let estrelas = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= Math.round(media)) {

            estrelas += "★";

        } else {

            estrelas += "☆";

        }

    }

    return estrelas;

}


/* =====================================================
   MOSTRAR RECEITAS
===================================================== */

function mostrarReceitas(lista) {

    listaReceitas.innerHTML = "";

    if (lista.length === 0) {

        mensagemVazia.style.display = "block";

        return;

    }

    mensagemVazia.style.display = "none";


    lista.forEach(receita => {

        const media =
            calcularMedia(receita.id);

        const numeroAvaliacoes =
            (dadosSalvos.avaliacoes[receita.id] || []).length;

        const favorito =
            dadosSalvos.favoritos.includes(receita.id);


        const card =
            document.createElement("article");

        card.className = "recipe-card";


        card.innerHTML = `

            <div class="card-image-container">

                <img
                    class="card-image"
                    src="${receita.imagem}"
                    alt="${escaparTexto(receita.nome)}"
                    loading="lazy"
                >

                <span class="tag card-tag">
                    ${escaparTexto(receita.categoria)}
                </span>


                <button
                    class="favorite-card ${favorito ? "favorite" : ""}"
                    data-id="${receita.id}"
                    aria-label="Adicionar aos favoritos">

                    ${favorito ? "♥" : "♡"}

                </button>

            </div>


            <div class="card-content">

                <h3>
                    ${escaparTexto(receita.nome)}
                </h3>

                <p>
                    ${escaparTexto(receita.descricao)}
                </p>


                <div class="card-footer">

                    <span class="rating">

                        ${desenharEstrelas(media)}

                        <span>
                            ${
                                media
                                    ? media.toFixed(1)
                                    : "Sem nota"
                            }

                            ${
                                numeroAvaliacoes
                                    ? ` (${numeroAvaliacoes})`
                                    : ""
                            }
                        </span>

                    </span>


                    <span class="time">
                        ⏱️ ${receita.tempo}
                    </span>

                </div>


                <button
                    class="recipe-button"
                    data-id="${receita.id}">

                    Ver receita completa →

                </button>

            </div>

        `;


        listaReceitas.appendChild(card);

    });


    adicionarEventosDosCards();

}


/* =====================================================
   EVENTOS DOS CARDS
===================================================== */

function adicionarEventosDosCards() {

    document
        .querySelectorAll(".favorite-card")
        .forEach(botao => {

            botao.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const id =
                        Number(
                            botao.dataset.id
                        );

                    alternarFavorito(id);

                }
            );

        });


    document
        .querySelectorAll(".recipe-button")
        .forEach(botao => {

            botao.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            botao.dataset.id
                        );

                    abrirReceita(id);

                }
            );

        });

}


/* =====================================================
   PESQUISA
===================================================== */

function pesquisar() {

    const texto =
        campoBusca.value
            .trim()
            .toLowerCase();


    const resultados =
        receitas.filter(receita => {

            const categoriaCorreta =
                categoriaAtual === "Todas" ||
                receita.categoria === categoriaAtual;


            const textoCorreto =
                receita.nome
                    .toLowerCase()
                    .includes(texto) ||

                receita.descricao
                    .toLowerCase()
                    .includes(texto) ||

                receita.ingredientes.some(
                    ingrediente =>
                        ingrediente
                            .toLowerCase()
                            .includes(texto)
                );


            return (
                categoriaCorreta &&
                textoCorreto
            );

        });


    mostrarReceitas(resultados);

}


campoBusca.addEventListener(
    "input",
    pesquisar
);


/* =====================================================
   CATEGORIAS
===================================================== */

document
    .querySelectorAll(".category")
    .forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category")
                    .forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                botao.classList.add("active");


                categoriaAtual =
                    botao.dataset.category;


                pesquisar();

            }
        );

    });


/* =====================================================
   FAVORITOS
===================================================== */

function alternarFavorito(id) {

    const posicao =
        dadosSalvos.favoritos.indexOf(id);


    if (posicao === -1) {

        dadosSalvos.favoritos.push(id);

    } else {

        dadosSalvos.favoritos.splice(
            posicao,
            1
        );

    }


    salvarDados();

    atualizarContador();

    pesquisar();

}


function atualizarContador() {

    contadorFavoritos.textContent =
        dadosSalvos.favoritos.length;

}


/* =====================================================
   BOTÃO FAVORITOS
===================================================== */

btnFavoritos.addEventListener(
    "click",
    () => {

        const favoritos =
            receitas.filter(
                receita =>
                    dadosSalvos.favoritos
                        .includes(receita.id)
            );


        if (favoritos.length === 0) {

            alert(
                "Você ainda não possui receitas favoritas. ❤️"
            );

            return;

        }


        categoriaAtual = "Todas";

        document
            .querySelectorAll(".category")
            .forEach(botao =>
                botao.classList.remove("active")
            );


        document
            .querySelector(
                '[data-category="Todas"]'
            )
            .classList.add("active");


        campoBusca.value = "";


        mostrarReceitas(favoritos);


        document
            .getElementById("receitas")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================================
   ABRIR RECEITA
===================================================== */

function abrirReceita(id) {

    const receita =
        receitas.find(
            item => item.id === id
        );


    if (!receita) {

        return;

    }


    receitaAtual = id;


    document.getElementById(
        "modalImagem"
    ).src = receita.imagem;


    document.getElementById(
        "modalImagem"
    ).alt = receita.nome;


    document.getElementById(
        "modalTitulo"
    ).textContent = receita.nome;


    document.getElementById(
        "modalCategoria"
    ).textContent = receita.categoria;


    document.getElementById(
        "modalDescricao"
    ).textContent = receita.descricao;


    document.getElementById(
        "modalInformacoes"
    ).innerHTML = `

        <span>⏱️ ${receita.tempo}</span>

        <span>🍽️ ${receita.porcoes}</span>

        <span>📊 ${receita.dificuldade}</span>

    `;


    /* INGREDIENTES */

    document.getElementById(
        "modalIngredientes"
    ).innerHTML = receita.ingredientes
        .map(
            ingrediente =>
                `<li>${escaparTexto(ingrediente)}</li>`
        )
        .join("");


    /* MATERIAIS */

    document.getElementById(
        "modalMateriais"
    ).innerHTML = receita.materiais
        .map(
            material =>
                `<li>${escaparTexto(material)}</li>`
        )
        .join("");


    /* PREPARO */

    document.getElementById(
        "modalPassos"
    ).innerHTML = receita.preparo
        .map(
            passo =>
                `<li>${escaparTexto(passo)}</li>`
        )
        .join("");


    mostrarAvaliacao();

    mostrarComentarios();


    modal.classList.add("open");

    document.body.style.overflow = "hidden";

}


/* =====================================================
   FECHAR MODAL
===================================================== */

function fecharReceita() {

    modal.classList.remove("open");

    document.body.style.overflow = "auto";

    receitaAtual = null;

}


fecharModal.addEventListener(
    "click",
    fecharReceita
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            fecharReceita();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            fecharReceita();

        }

    }
);


/* =====================================================
   AVALIAÇÕES
===================================================== */

document
    .querySelectorAll("#estrelas button")
    .forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                if (!receitaAtual) {

                    return;

                }


                const nota =
                    Number(
                        botao.dataset.star
                    );


                if (
                    !dadosSalvos.avaliacoes[
                        receitaAtual
                    ]
                ) {

                    dadosSalvos.avaliacoes[
                        receitaAtual
                    ] = [];

                }


                dadosSalvos.avaliacoes[
                    receitaAtual
                ].push(nota);


                salvarDados();

                mostrarAvaliacao();

                pesquisar();

            }
        );

    });


/* =====================================================
   MOSTRAR AVALIAÇÃO
===================================================== */

function mostrarAvaliacao() {

    if (!receitaAtual) {

        return;

    }


    const notas =
        dadosSalvos.avaliacoes[
            receitaAtual
        ] || [];


    const media =
        calcularMedia(receitaAtual);


    document
        .querySelectorAll("#estrelas button")
        .forEach(botao => {

            const numero =
                Number(
                    botao.dataset.star
                );


            botao.classList.toggle(
                "selected",
                numero <= Math.round(media)
            );

        });


    const texto =
        document.getElementById(
            "textoAvaliacao"
        );


    if (notas.length === 0) {

        texto.textContent =
            "Essa receita ainda não foi avaliada.";

    } else {

        texto.textContent =
            `Nota média: ${media.toFixed(1)} de 5 — ${notas.length} avaliação(ões).`;

    }

}


/* =====================================================
   COMENTÁRIOS
===================================================== */

formComentario.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (!receitaAtual) {

            return;

        }


        const nome =
            document.getElementById(
                "nomeComentario"
            ).value.trim();


        const texto =
            document.getElementById(
                "textoComentario"
            ).value.trim();


        if (!nome || !texto) {

            return;

        }


        if (
            !dadosSalvos.comentarios[
                receitaAtual
            ]
        ) {

            dadosSalvos.comentarios[
                receitaAtual
            ] = [];

        }


        dadosSalvos.comentarios[
            receitaAtual
        ].push({

            nome: nome,

            texto: texto,

            data: new Date()
                .toLocaleDateString(
                    "pt-BR"
                )

        });


        salvarDados();


        document.getElementById(
            "nomeComentario"
        ).value = "";


        document.getElementById(
            "textoComentario"
        ).value = "";


        mostrarComentarios();

    }
);


/* =====================================================
   MOSTRAR COMENTÁRIOS
===================================================== */

function mostrarComentarios() {

    if (!receitaAtual) {

        return;

    }


    const comentarios =
        dadosSalvos.comentarios[
            receitaAtual
        ] || [];


    const container =
        document.getElementById(
            "listaComentarios"
        );


    if (comentarios.length === 0) {

        container.innerHTML = `
            <p style="color: #777;">
                Ainda não existem comentários.
                Seja o primeiro! 😊
            </p>
        `;

        return;

    }


    container.innerHTML =
        comentarios
            .slice()
            .reverse()
            .map(comentario => `

                <div class="comment">

                    <strong>
                        ${escaparTexto(
                            comentario.nome
                        )}
                    </strong>

                    <p>
                        ${escaparTexto(
                            comentario.texto
                        )}
                    </p>

                </div>

            `)
            .join("");

}


/* =====================================================
   RECEITA SURPRESA
===================================================== */

btnSurpresa.addEventListener(
    "click",
    () => {

        const indice =
            Math.floor(
                Math.random() *
                receitas.length
            );


        abrirReceita(
            receitas[indice].id
        );

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

mostrarReceitas(receitas);

atualizarContador();
