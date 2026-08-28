/* ==========================================
   SABOR & AFETO
   JAVASCRIPT DO SITE

   Este arquivo controla:
   - Receitas
   - Busca
   - Categorias
   - Favoritos
   - Avaliações
   - Comentários
   - Modal
   - Receita surpresa

   Os dados ficam salvos no navegador
   através do localStorage.
========================================== */


/* ==========================================
   BANCO DE RECEITAS
========================================== */

const recipes = [

    {
        id: "lasanha",

        name: "Lasanha de forno",

        category: "Massas",

        image:
            "https://images.unsplash.com/photo-1574894709920-11b28e7367a5?auto=format&fit=crop&w=900&q=85",

        description:
            "Camadas cremosas, molho bem temperado e muito queijo para um almoço especial.",

        time: "55 min",

        difficulty: "Médio",

        servings: "6 porções",

        ingredients: [

            "500 g de massa para lasanha",

            "500 g de carne moída",

            "2 xícaras de molho de tomate",

            "300 g de muçarela",

            "200 g de presunto",

            "1 cebola picada",

            "Sal, alho e orégano a gosto"

        ],

        steps: [

            "Refogue a cebola e o alho, acrescente a carne e tempere.",

            "Junte o molho de tomate e cozinhe por 10 minutos.",

            "Monte camadas de molho, massa, carne, presunto e queijo.",

            "Finalize com muçarela e orégano.",

            "Asse a 200 °C por cerca de 30 minutos e sirva quente."

        ]
    },


    {
        id: "bolo-cenoura",

        name: "Bolo de cenoura",

        category: "Doces",

        image:
            "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=85",

        description:
            "Clássico fofinho com cobertura de chocolate brilhante e irresistível.",

        time: "45 min",

        difficulty: "Fácil",

        servings: "10 fatias",

        ingredients: [

            "3 cenouras médias",

            "3 ovos",

            "1 xícara de óleo",

            "2 xícaras de açúcar",

            "2½ xícaras de farinha de trigo",

            "1 colher de sopa de fermento",

            "4 colheres de chocolate em pó",

            "1 colher de manteiga"

        ],

        steps: [

            "Bata cenoura, ovos e óleo no liquidificador.",

            "Misture com açúcar e farinha em uma tigela.",

            "Acrescente o fermento delicadamente.",

            "Asse em forma untada a 180 °C por aproximadamente 35 minutos.",

            "Prepare a cobertura de chocolate e espalhe sobre o bolo."

        ]
    },


    {
        id: "panqueca",

        name: "Panqueca colorida",

        category: "Saudáveis",

        image:
            "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=85",

        description:
            "Panquecas leves e bonitas para começar o dia com energia e sabor.",

        time: "20 min",

        difficulty: "Fácil",

        servings: "4 porções",

        ingredients: [

            "1 banana madura",

            "2 ovos",

            "½ xícara de aveia",

            "1 colher de chá de canela",

            "Frutas para servir",

            "Iogurte natural a gosto",

            "Mel a gosto"

        ],

        steps: [

            "Amasse a banana e misture com os ovos.",

            "Adicione a aveia e a canela.",

            "Aqueça uma frigideira antiaderente.",

            "Coloque pequenas porções da massa e doure dos dois lados.",

            "Sirva com frutas, iogurte e um fio de mel."

        ]
    },


    {
        id: "brownie",

        name: "Brownie de chocolate",

        category: "Doces",

        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",

        description:
            "Brownie intenso, macio por dentro e com aquela casquinha delicada por cima.",

        time: "35 min",

        difficulty: "Fácil",

        servings: "12 pedaços",

        ingredients: [

            "200 g de chocolate meio amargo",

            "120 g de manteiga",

            "3 ovos",

            "1 xícara de açúcar",

            "¾ xícara de farinha",

            "3 colheres de chocolate em pó",

            "1 pitada de sal"

        ],

        steps: [

            "Derreta o chocolate com a manteiga.",

            "Misture os ovos e o açúcar.",

            "Junte o chocolate derretido.",

            "Adicione farinha, chocolate em pó e sal.",

            "Asse a 180 °C por aproximadamente 20 a 25 minutos."

        ]
    },


    {
        id: "sanduiche",

        name: "Sanduíche caprese",

        category: "Lanches",

        image:
            "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",

        description:
            "Uma combinação fresca de tomate, queijo e manjericão em pão crocante.",

        time: "10 min",

        difficulty: "Muito fácil",

        servings: "2 porções",

        ingredients: [

            "2 pães ciabatta ou franceses",

            "1 tomate grande",

            "150 g de muçarela",

            "Folhas de manjericão",

            "Azeite",

            "Sal e pimenta",

            "Creme balsâmico opcional"

        ],

        steps: [

            "Corte os pães ao meio e aqueça levemente.",

            "Fatie o tomate e a muçarela.",

            "Monte alternando tomate, queijo e manjericão.",

            "Tempere com sal, pimenta e azeite.",

            "Finalize com creme balsâmico e sirva."

        ]
    },


    {
        id: "risoto",

        name: "Risoto cremoso",

        category: "Massas",

        image:
            "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85",

        description:
            "Risoto cremoso e reconfortante, perfeito para um jantar caprichado.",

        time: "40 min",

        difficulty: "Médio",

        servings: "4 porções",

        ingredients: [

            "1½ xícara de arroz arbóreo",

            "1 litro de caldo de legumes",

            "1 cebola pequena",

            "½ xícara de vinho branco opcional",

            "2 colheres de manteiga",

            "½ xícara de parmesão ralado",

            "Sal e pimenta"

        ],

        steps: [

            "Mantenha o caldo aquecido em uma panela.",

            "Refogue a cebola em metade da manteiga.",

            "Adicione o arroz e mexa por 2 minutos.",

            "Acrescente o caldo aos poucos.",

            "Mexa até o arroz ficar cremoso e al dente.",

            "Finalize com manteiga e parmesão."

        ]
    }

];


/* ==========================================
   VARIÁVEIS
========================================== */

const storageKey = "saborAfetoData";

let activeRecipeId = null;

let activeCategory = "Todas";


/* ==========================================
   CARREGAR DADOS
========================================== */

function loadData() {

    try {

        return JSON.parse(
            localStorage.getItem(storageKey)
        ) || {

            ratings: {},

            comments: {},

            favorites: []

        };

    } catch {

        return {

            ratings: {},

            comments: {},

            favorites: []

        };

    }
}


/* ==========================================
   SALVAR DADOS
========================================== */

function saveData(data) {

    localStorage.setItem(
        storageKey,
        JSON.stringify(data)
    );

}


/* ==========================================
   CALCULAR NOTA
========================================== */

function averageRating(recipeId) {

    const data = loadData();

    const ratings =
        data.ratings[recipeId] || [];

    if (!ratings.length) {

        return 0;

    }

    return (
        ratings.reduce(
            (total, rating) =>
                total + rating,
            0
        ) / ratings.length
    );
}


/* ==========================================
   DESENHAR ESTRELAS
========================================== */

function stars(value) {

    const rounded =
        Math.round(value);

    return "★★★★★"
        .split("")
        .map(
            (star, index) =>
                index < rounded
                    ? "★"
                    : "☆"
        )
        .join("");

}


/* ==========================================
   MOSTRAR RECEITAS
========================================== */

function renderRecipes() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const data = loadData();

    const grid =
        document.getElementById("recipeGrid");

    const empty =
        document.getElementById("emptyState");


    const filtered =
        recipes.filter(recipe => {

            const matchesCategory =
                activeCategory === "Todas" ||
                recipe.category === activeCategory;


            const matchesSearch =
                `${recipe.name}
                ${recipe.category}
                ${recipe.description}`
                    .toLowerCase()
                    .includes(search);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    grid.innerHTML =
        filtered
            .map(recipe => {

                const average =
                    averageRating(recipe.id);

                const favorite =
                    data.favorites
                        .includes(recipe.id);


                const ratings =
                    data.ratings[recipe.id] || [];


                const ratingText =
                    average
                        ? `${average.toFixed(1)} (${ratings.length})`
                        : "Sem avaliações";


                return `

                    <article class="recipe-card">

                        <div class="card-image-wrap">

                            <img
                                class="card-image"
                                src="${recipe.image}"
                                alt="${recipe.name}"
                                loading="lazy"
                            >

                            <span class="pill card-pill">
                                ${recipe.category}
                            </span>


                            <button
                                class="favorite-card ${favorite ? "is-favorite" : ""}"
                                data-favorite="${recipe.id}"
                                aria-label="Favoritar">

                                ${favorite ? "♥" : "♡"}

                            </button>

                        </div>


                        <div class="card-body">

                            <h3>
                                ${recipe.name}
                            </h3>

                            <p>
                                ${recipe.description}
                            </p>


                            <div class="card-footer">

                                <span class="rating">

                                    ${stars(average)}

                                    <small>
                                        ${ratingText}
                                    </small>

                                </span>


                                <span class="time">

                                    ⏱ ${recipe.time}

                                </span>

                            </div>


                            <button
                                class="view-recipe"
                                data-open="${recipe.id}">

                                Ver receita →

                            </button>

                        </div>

                    </article>

                `;

            })
            .join("");


    empty.hidden =
        filtered.length !== 0;


    /* Botões para abrir receita */

    document
        .querySelectorAll("[data-open]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () =>
                    openModal(
                        button.dataset.open
                    )
            );

        });


    /* Botões favoritos */

    document
        .querySelectorAll("[data-favorite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () =>
                    toggleFavorite(
                        button.dataset.favorite
                    )
            );

        });


    document
        .getElementById("favoriteCount")
        .textContent =
        data.favorites.length;

}


/* ==========================================
   FAVORITOS
========================================== */

function toggleFavorite(id) {

    const data = loadData();


    if (
        data.favorites.includes(id)
    ) {

        data.favorites =
            data.favorites.filter(
                item => item !== id
            );

    } else {

        data.favorites.push(id);

    }


    saveData(data);

    renderRecipes();


    if (
        activeRecipeId === id
    ) {

        updateModalFavorite();

    }

}


/* ==========================================
   ATUALIZAR FAVORITO DO MODAL
========================================== */

function updateModalFavorite() {

    const data = loadData();

    const button =
        document.getElementById(
            "modalFavorite"
        );


    const favorite =
        data.favorites.includes(
            activeRecipeId
        );


    button.classList.toggle(
        "is-favorite",
        favorite
    );


    button.textContent =
        favorite
            ? "♥"
            : "♡";

}


/* ==========================================
   ABRIR MODAL
========================================== */

function openModal(id) {

    const recipe =
        recipes.find(
            item => item.id === id
        );


    if (!recipe) return;


    activeRecipeId = id;


    document.getElementById(
        "modalImage"
    ).src = recipe.image;


    document.getElementById(
        "modalImage"
    ).alt = recipe.name;


    document.getElementById(
        "modalTitle"
    ).textContent = recipe.name;


    document.getElementById(
        "modalCategory"
    ).textContent =
        recipe.category;


    document.getElementById(
        "modalDescription"
    ).textContent =
        recipe.description;


    document.getElementById(
        "modalMeta"
    ).innerHTML = `

        <span>
            ⏱ ${recipe.time}
        </span>

        <span>
            🍴 ${recipe.servings}
        </span>

        <span>
            📈 ${recipe.difficulty}
        </span>

    `;


    document.getElementById(
        "modalIngredients"
    ).innerHTML =
        recipe.ingredients
            .map(
                ingredient =>
                    `<li>${ingredient}</li>`
            )
            .join("");


    document.getElementById(
        "modalSteps"
    ).innerHTML =
        recipe.steps
            .map(
                step =>
                    `<li>${step}</li>`
            )
            .join("");


    document.getElementById(
        "modalBackdrop"
    ).hidden = false;


    document.body.style.overflow =
        "hidden";


    updateModalFavorite();

    renderReviews();

}


/* ==========================================
   FECHAR MODAL
========================================== */

function closeModal() {

    document.getElementById(
        "modalBackdrop"
    ).hidden = true;


    document.body.style.overflow =
        "";


    activeRecipeId = null;

}


/* ==========================================
   MOSTRAR AVALIAÇÕES E COMENTÁRIOS
========================================== */

function renderReviews() {

    const data = loadData();


    const ratings =
        data.ratings[activeRecipeId] || [];


    const comments =
        data.comments[activeRecipeId] || [];


    const average =
        ratings.length
            ? ratings.reduce(
                (a, b) => a + b,
                0
            ) / ratings.length
            : 0;


    /* Atualiza estrelas */

    document
        .querySelectorAll(
            "#starPicker button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",

                Number(button.dataset.star)
                    <= Math.round(average)
            );

        });


    /* Texto da avaliação */

    document.getElementById(
        "ratingHint"
    ).textContent =

        ratings.length

            ? `Nota média: ${average.toFixed(1)} de 5 (${ratings.length} avaliação${ratings.length === 1 ? "" : "ões"}).`

            : "Clique nas estrelas para avaliar.";


    /* Comentários */

    const list =
        document.getElementById(
            "commentsList"
        );


    if (!comments.length) {

        list.innerHTML = `

            <p class="rating-hint">

                Ainda não há comentários.
                Seja a primeira pessoa a comentar! 😊

            </p>

        `;

        return;

    }


    list.innerHTML =

        comments
            .slice()
            .reverse()
            .map(comment => `

                <div class="comment">

                    <strong>

                        ${escapeHtml(
                            comment.name
                        )}

                    </strong>

                    <p>

                        ${escapeHtml(
                            comment.text
                        )}

                    </p>

                </div>

            `)
            .join("");

}


/* ==========================================
   SEGURANÇA DOS COMENTÁRIOS
========================================== */

function escapeHtml(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* ==========================================
   BUSCA
========================================== */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        renderRecipes
    );


/* ==========================================
   CATEGORIAS
========================================== */

document
    .getElementById("categoryList")
    .addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-category]"
                );


            if (!button) return;


            activeCategory =
                button.dataset.category;


            document
                .querySelectorAll(
                    ".category"
                )
                .forEach(item => {

                    item.classList.toggle(
                        "active",
                        item === button
                    );

                });


            renderRecipes();

        }
    );


/* ==========================================
   FECHAR MODAL
========================================== */

document
    .getElementById("modalClose")
    .addEventListener(
        "click",
        closeModal
    );


document
    .getElementById("modalBackdrop")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "modalBackdrop"
            ) {

                closeModal();

            }

        }
    );


/* ESC FECHA MODAL */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !document
                .getElementById(
                    "modalBackdrop"
                )
                .hidden
        ) {

            closeModal();

        }

    }
);


/* ==========================================
   FAVORITO DENTRO DA RECEITA
========================================== */

document
    .getElementById("modalFavorite")
    .addEventListener(
        "click",
        () => {

            if (activeRecipeId) {

                toggleFavorite(
                    activeRecipeId
                );

            }

        }
    );


/* ==========================================
   SISTEMA DE ESTRELAS
========================================== */

document
    .getElementById("starPicker")
    .addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-star]"
                );


            if (
                !button ||
                !activeRecipeId
            ) return;


            const rating =
                Number(
                    button.dataset.star
                );


            const data =
                loadData();


            if (
                !data.ratings[
                    activeRecipeId
                ]
            ) {

                data.ratings[
                    activeRecipeId
                ] = [];

            }


            data.ratings[
                activeRecipeId
            ].push(rating);


            saveData(data);


            renderReviews();

            renderRecipes();

        }
    );


/* ==========================================
   SISTEMA DE COMENTÁRIOS
========================================== */

document
    .getElementById("commentForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (!activeRecipeId)
                return;


            const nameInput =
                document.getElementById(
                    "commentName"
                );


            const textInput =
                document.getElementById(
                    "commentText"
                );


            const name =
                nameInput.value.trim();


            const text =
                textInput.value.trim();


            if (
                !name ||
                !text
            ) return;


            const data =
                loadData();


            if (
                !data.comments[
                    activeRecipeId
                ]
            ) {

                data.comments[
                    activeRecipeId
                ] = [];

            }


            data.comments[
                activeRecipeId
            ].push({

                name: name,

                text: text,

                date:
                    new Date()
                        .toISOString()

            });


            saveData(data);


            nameInput.value = "";

            textInput.value = "";


            renderReviews();

        }
    );


/* ==========================================
   RECEITA SURPRESA
========================================== */

document
    .getElementById("randomBtn")
    .addEventListener(
        "click",
        () => {

            const recipe =
                recipes[
                    Math.floor(
                        Math.random() *
                        recipes.length
                    )
                ];


            openModal(recipe.id);

        }
    );


/* ==========================================
   BOTÃO DE FAVORITOS
========================================== */

document
    .getElementById("favoritesBtn")
    .addEventListener(
        "click",
        () => {

            const data =
                loadData();


            if (
                !data.favorites.length
            ) {

                alert(
                    "Você ainda não favoritou nenhuma receita! ❤️"
                );

                return;

            }


            const favoriteRecipes =
                recipes.filter(
                    recipe =>
                        data.favorites
                            .includes(
                                recipe.id
                            )
                );


            document.getElementById(
                "searchInput"
            ).value = "";


            activeCategory =
                "Todas";


            document
                .querySelectorAll(
                    ".category"
                )
                .forEach(button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.category ===
                            "Todas"
                    );

                });


            const grid =
                document.getElementById(
                    "recipeGrid"
                );


            grid.innerHTML =
                favoriteRecipes
                    .map(recipe => {

                        const average =
                            averageRating(
                                recipe.id
                            );


                        return `

                            <article
                                class="recipe-card">

                                <div
                                    class="card-image-wrap">

                                    <img
                                        class="card-image"
                                        src="${recipe.image}"
                                        alt="${recipe.name}"
                                    >

                                    <span
                                        class="pill card-pill">

                                        ${recipe.category}

                                    </span>


                                    <button
                                        class="favorite-card is-favorite"
                                        data-favorite="${recipe.id}">

                                        ♥
                                        
                                    </button>

                                </div>


                                <div
                                    class="card-body">

                                    <h3>
                                        ${recipe.name}
                                    </h3>

                                    <p>
                                        ${recipe.description}
                                    </p>


                                    <div
                                        class="card-footer">

                                        <span
                                            class="rating">

                                            ${stars(average)}

                                            <small>
                                                ${average
                                                    ? average.toFixed(1)
                                                    : "Sem nota"}
                                            </small>

                                        </span>


                                        <span
                                            class="time">

                                            ⏱ ${recipe.time}

                                        </span>

                                    </div>


                                    <button
                                        class="view-recipe"
                                        data-open="${recipe.id}">

                                        Ver receita →

                                    </button>

                                </div>

                            </article>

                        `;

                    })
                    .join("");


            document
                .querySelectorAll(
                    "[data-open]"
                )
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () =>
                            openModal(
                                button.dataset.open
                            )
                    );

                });


            document
                .querySelectorAll(
                    "[data-favorite]"
                )
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () =>
                            toggleFavorite(
                                button.dataset.favorite
                            )
                    );

                });


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
   INICIAR SITE
========================================== */

renderRecipes();
