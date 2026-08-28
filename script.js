/* ==========================================
   SABOR & AFETO
   JAVASCRIPT

   Este arquivo controla:
   - Receitas
   - Busca
   - Categorias
   - Favoritos
   - Avaliações
   - Comentários
   - Modal
   - Receita surpresa

   Os dados são salvos no navegador
   usando localStorage.
========================================== */


/* ==========================================
   RECEITAS
========================================== */

const receitas = [

    {
        id: 1,
        nome: "Lasanha de Forno",
        categoria: "Massas",

        imagem:
            "https://images.unsplash.com/photo-1574894709920-11b28e7367a5?auto=format&fit=crop&w=900&q=80",

        descricao:
            "Camadas cremosas, molho bem temperado e muito queijo.",

        tempo: "55 min",
        dificuldade: "Médio",
        porcoes: "6 porções",

        ingredientes: [
            "500 g de massa para lasanha",
            "500 g de carne moída",
            "2 xícaras de molho de tomate",
            "300 g de muçarela",
            "200 g de presunto",
            "1 cebola picada",
            "Sal e temperos a gosto"
        ],

        preparo: [
            "Refogue a cebola e acrescente a carne moída.",
            "Adicione o molho de tomate e deixe cozinhar.",
            "Monte camadas de molho, massa, carne, presunto e queijo.",
            "Finalize com muçarela.",
            "Asse a 200 °C por aproximadamente 30 minutos."
        ]
    },


    {
        id: 2,
        nome: "Bolo de Cenoura",
        categoria: "Doces",

        imagem:
            "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80",

        descricao:
            "Bolo fofinho de cenoura com uma deliciosa cobertura de chocolate.",

        tempo: "45 min",
        dificuldade: "Fácil",
        porcoes: "10 fatias",

        ingredientes: [
            "3 cenouras médias",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2½ xícaras de farinha",
            "1 colher de fermento",
            "4 colheres de chocolate em pó"
        ],

        preparo: [
            "Bata as cenouras, os ovos e o óleo.",
            "Misture com açúcar e farinha.",
            "Acrescente o fermento.",
            "Coloque em uma forma untada.",
            "Asse a 180 °C por aproximadamente 35 minutos.",
            "Finalize com cobertura de chocolate."
        ]
    },


    {
        id: 3,
        nome: "Panqueca de Banana",
        categoria: "Saudáveis",

        imagem:
            "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80",

        descricao:
            "Panquecas leves e deliciosas para um café da manhã especial.",

        tempo: "20 min",
        dificuldade: "Fácil",
        porcoes: "4 porções",

        ingredientes: [
            "1 banana madura",
            "2 ovos",
            "½ xícara de aveia",
            "Canela a gosto",
            "Frutas para servir",
            "Mel a gosto"
        ],

        preparo: [
            "Amasse a banana.",
            "Misture os ovos e a aveia.",
            "Adicione canela.",
            "Aqueça uma frigideira.",
            "Doure as panquecas dos dois lados.",
            "Sirva com frutas e mel."
        ]
    },


    {
        id: 4,
        nome: "Brownie de Chocolate",
        categoria: "Doces",

        imagem:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",

        descricao:
            "Brownie de chocolate macio por dentro e delicioso.",

        tempo: "35 min",
        dificuldade: "Fácil",
        porcoes: "12 pedaços",

        ingredientes: [
            "200 g de chocolate meio amargo",
            "120 g de manteiga",
            "3 ovos",
            "1 xícara de açúcar",
            "¾ xícara de farinha",
            "3 colheres de chocolate em pó",
            "1 pitada de sal"
        ],

        preparo: [
            "Derreta o chocolate com a manteiga.",
            "Misture os ovos e o açúcar.",
            "Acrescente o chocolate derretido.",
            "Adicione a farinha e o chocolate em pó.",
            "Asse a 180 °C por aproximadamente 25 minutos."
        ]
    },


    {
        id: 5,
        nome: "Sanduíche Caprese",
        categoria: "Lanches",

        imagem:
            "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",

        descricao:
            "Sanduíche fresco com tomate, queijo e manjericão.",

        tempo: "10 min",
        dificuldade: "Muito fácil",
        porcoes: "2 porções",

        ingredientes: [
            "2 pães",
            "1 tomate grande",
            "150 g de muçarela",
            "Folhas de manjericão",
            "Azeite",
            "Sal e pimenta"
        ],

        preparo: [
            "Corte os pães ao meio.",
            "Fatie o tomate e a muçarela.",
            "Monte o sanduíche.",
            "Adicione manjericão.",
            "Tempere com azeite, sal e pimenta.",
            "Sirva imediatamente."
        ]
    },


    {
        id: 6,
        nome: "Risoto Cremoso",
        categoria: "Massas",

        imagem:
            "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",

        descricao:
            "Risoto cremoso e saboroso para um jantar especial.",

        tempo: "40 min",
        dificuldade: "Médio",
        porcoes: "4 porções",

        ingredientes: [
            "1½ xícara de arroz arbóreo",
            "1 litro de caldo de legumes",
            "1 cebola pequena",
            "½ xícara de vinho branco",
            "2 colheres de manteiga",
            "½ xícara de parmesão",
            "Sal e pimenta"
        ],

        preparo: [
            "Aqueça o caldo de legumes.",
            "Refogue a cebola na manteiga.",
            "Acrescente o arroz.",
            "Adicione o caldo aos poucos.",
            "Mexa até o arroz ficar cremoso.",
            "Finalize com manteiga e parmesão."
        ]
    }

];


/* ==========================================
   DADOS DO SITE
========================================== */

let dados = JSON.parse(
    localStorage.getItem("saborAfeto")
) || {

    favoritos: [],

    avaliacoes: {},

    comentarios: {}

};


let receitaAtual = null;

let categoriaAtual = "Todas";


/* ==========================================
   SALVAR DADOS
========================================== */

function salvarDados() {

    localStorage.setItem(
        "saborAfeto",
        JSON.stringify(dados)
    );

}


/* ==========================================
   CALCULAR MÉDIA
========================================== */

function calcularMedia(id) {

    const avaliacoes =
        dados.avaliacoes[id] || [];

    if (avaliacoes.length === 0) {
        return 0;
    }

    const soma =
        avaliacoes.reduce(
            (total, nota) => total + nota,
            0
        );

    return soma / avaliacoes.length;

}


/* ==========================================
   DESENHAR ESTRELAS
========================================== */

function mostrarEstrelas(media) {

    let resultado = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= Math.round(media)) {
            resultado += "★";
        } else {
            resultado += "☆";
        }

    }

    return resultado;

}


/* ==========================================
   MOSTRAR RECEITAS
========================================== */

function mostrarReceitas(lista = receitas) {

    const container =
        document.getElementById(
            "listaReceitas"
        );

    const mensagem =
        document.getElementById(
            "mensagemVazia"
        );


    if (lista.length === 0) {

        container.innerHTML = "";

        mensagem.style.display = "block";

        return;

    }


    mensagem.style.display = "none";


    container.innerHTML =
        lista.map(receita => {

            const media =
                calcularMedia(receita.id);

            const quantidade =
                (dados.avaliacoes[receita.id] || [])
                    .length;

            const favorito =
                dados.favoritos.includes(
                    receita.id
                );


            return `

                <article class="recipe-card">

                    <div class="card-image-container">

                        <img
                            class="card-image"
                            src="${receita.imagem}"
                            alt="${receita.nome}"
                        >

                        <span class="tag card-tag">
                            ${receita.categoria}
                        </span>


                        <button
                            class="favorite-card ${favorito ? "favorite" : ""}"
                            onclick="alternarFavorito(${receita.id})">

                            ${favorito ? "♥" : "♡"}

                        </button>

                    </div>


                    <div class="card-content">

                        <h3>
                            ${receita.nome}
                        </h3>

                        <p>
                            ${receita.descricao}
                        </p>


                        <div class="card-footer">

                            <span class="rating">

                                ${mostrarEstrelas(media)}

                                <span>
                                    ${
                                        media
                                            ? media.toFixed(1)
                                            : "Sem nota"
                                    }
                                    ${
                                        quantidade
                                            ? `(${quantidade})`
                                            : ""
                                    }
                                </span>

                            </span>


                            <span class="time">
                                ⏱ ${receita.tempo}
                            </span>

                        </div>


                        <button
                            class="recipe-button"
                            onclick="abrirReceita(${receita.id})">

                            Ver receita →

                        </button>

                    </div>

                </article>

            `;

        }).join("");

}


/* ==========================================
   FILTRAR RECEITAS
========================================== */

function filtrarReceitas() {

    const texto =
        document
            .getElementById("campoBusca")
            .value
            .toLowerCase();


    const filtradas =
        receitas.filter(receita => {

            const categoriaOK =
                categoriaAtual === "Todas" ||
                receita.categoria === categoriaAtual;


            const buscaOK =
                receita.nome
                    .toLowerCase()
                    .includes(texto) ||

                receita.descricao
                    .toLowerCase()
                    .includes(texto);


            return categoriaOK && buscaOK;

        });


    mostrarReceitas(filtradas);

}


/* ==========================================
   BUSCA
========================================== */

document
    .getElementById("campoBusca")
    .addEventListener(
        "input",
        filtrarReceitas
    );


/* ==========================================
   CATEGORIAS
========================================== */

document
    .querySelectorAll(".category")
    .forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category"
                    )
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );


                botao.classList.add("active");


                categoriaAtual =
                    botao.dataset.category;


                filtrarReceitas();

            }
        );

    });


/* ==========================================
   FAVORITOS
========================================== */

function alternarFavorito(id) {

    const posicao =
        dados.favoritos.indexOf(id);


    if (posicao === -1) {

        dados.favoritos.push(id);

    } else {

        dados.favoritos.splice(
            posicao,
            1
        );

    }


    salvarDados();

    atualizarContador();

    filtrarReceitas();


    if (receitaAtual === id) {

        atualizarFavoritoModal();

    }

}


/* ==========================================
   CONTADOR DE FAVORITOS
========================================== */

function atualizarContador() {

    document.getElementById(
        "contadorFavoritos"
    ).textContent =
        dados.favoritos.length;

}


/* ==========================================
   ABRIR RECEITA
========================================== */

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
    ).textContent =
        receita.nome;


    document.getElementById(
        "modalCategoria"
    ).textContent =
        receita.categoria;


    document.getElementById(
        "modalDescricao"
    ).textContent =
        receita.descricao;


    document.getElementById(
        "modalInformacoes"
    ).innerHTML = `

        <span>⏱ ${receita.tempo}</span>

        <span>🍽️ ${receita.porcoes}</span>

        <span>📊 ${receita.dificuldade}</span>

    `;


    document.getElementById(
        "modalIngredientes"
    ).innerHTML =
        receita.ingredientes
            .map(
                item => `<li>${item}</li>`
            )
            .join("");


    document.getElementById(
        "modalPassos"
    ).innerHTML =
        receita.preparo
            .map(
                item => `<li>${item}</li>`
            )
            .join("");


    document.getElementById(
        "modal"
    ).style.display = "flex";


    document.body.style.overflow =
        "hidden";


    atualizarFavoritoModal();

    mostrarAvaliacoes();

}


/* ==========================================
   FECHAR MODAL
========================================== */

function fecharReceita() {

    document.getElementById(
        "modal"
    ).style.display = "none";


    document.body.style.overflow =
        "auto";


    receitaAtual = null;

}


document
    .getElementById("fecharModal")
    .addEventListener(
        "click",
        fecharReceita
    );


/* FECHAR CLICANDO FORA */

document
    .getElementById("modal")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "modal"
            ) {

                fecharReceita();

            }

        }
    );


/* FECHAR COM ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            fecharReceita();
        }

    }
);


/* ==========================================
   FAVORITO DO MODAL
========================================== */

function atualizarFavoritoModal() {

    /*
       Não precisamos de outro botão no modal.
       O favorito é controlado diretamente
       pelos cards.
    */

}


/* ==========================================
   AVALIAÇÕES
========================================== */

document
    .querySelectorAll(
        "#estrelas button"
    )
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
                    !dados.avaliacoes[
                        receitaAtual
                    ]
                ) {

                    dados.avaliacoes[
                        receitaAtual
                    ] = [];

                }


                dados.avaliacoes[
                    receitaAtual
                ].push(nota);


                salvarDados();

                mostrarAvaliacoes();

                filtrarReceitas();

            }
        );

    });


/* ==========================================
   MOSTRAR AVALIAÇÕES
========================================== */

function mostrarAvaliacoes() {

    const avaliacoes =
        dados.avaliacoes[
            receitaAtual
        ] || [];


    const media =
        calcularMedia(receitaAtual);


    document
        .querySelectorAll(
            "#estrelas button"
        )
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


    if (avaliacoes.length === 0) {

        texto.textContent =
            "Clique nas estrelas para avaliar.";

    } else {

        texto.textContent =
            `Nota média: ${media.toFixed(1)} de 5 — ${avaliacoes.length} avaliação(ões).`;

    }


    mostrarComentarios();

}


/* ==========================================
   COMENTÁRIOS
========================================== */

document
    .getElementById("formComentario")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (!receitaAtual) {
                return;
            }


            const nome =
                document
                    .getElementById(
                        "nomeComentario"
                    )
                    .value
                    .trim();


            const texto =
                document
                    .getElementById(
                        "textoComentario"
                    )
                    .value
                    .trim();


            if (!nome || !texto) {
                return;
            }


            if (
                !dados.comentarios[
                    receitaAtual
                ]
            ) {

                dados.comentarios[
                    receitaAtual
                ] = [];

            }


            dados.comentarios[
                receitaAtual
            ].push({

                nome: nome,

                texto: texto

            });


            salvarDados();


            document
                .getElementById(
                    "nomeComentario"
                )
                .value = "";


            document
                .getElementById(
                    "textoComentario"
                )
                .value = "";


            mostrarComentarios();

        }
    );


/* ==========================================
   MOSTRAR COMENTÁRIOS
========================================== */

function mostrarComentarios() {

    const comentarios =
        dados.comentarios[
            receitaAtual
        ] || [];


    const container =
        document.getElementById(
            "listaComentarios"
        );


    if (comentarios.length === 0) {

        container.innerHTML = `

            <p style="color:#777;">
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
            .map(
                comentario => `

                    <div class="comment">

                        <strong>
                            ${escapar(
                                comentario.nome
                            )}
                        </strong>

                        <p>
                            ${escapar(
                                comentario.texto
                            )}
                        </p>

                    </div>

                `
            )
            .join("");

}


/* ==========================================
   PROTEGER COMENTÁRIOS
========================================== */

function escapar(texto) {

    const div =
        document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;

}


/* ==========================================
   RECEITA SURPRESA
========================================== */

document
    .getElementById("btnSurpresa")
    .addEventListener(
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


/* ==========================================
   BOTÃO FAVORITOS
========================================== */

document
    .getElementById("btnFavoritos")
    .addEventListener(
        "click",
        () => {

            if (
                dados.favoritos.length === 0
            ) {

                alert(
                    "Você ainda não possui receitas favoritas. ❤️"
                );

                return;

            }


            const favoritas =
                receitas.filter(
                    receita =>
                        dados.favoritos
                            .includes(
                                receita.id
                            )
                );


            mostrarReceitas(favoritas);


            document
                .getElementById(
                    "receitas"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* ==========================================
   INICIALIZAÇÃO
========================================== */

mostrarReceitas();

atualizarContador();
