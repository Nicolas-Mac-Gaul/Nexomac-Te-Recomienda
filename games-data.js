// =====================================
// DATOS DE JUEGOS
// =====================================
// Cada juego vive acá en vez de estar escrito a mano en el HTML.
// "cat" tiene que coincidir con el id de su <section class="category-section">.

const juegos = [
    {
        cat: "aventura",
        id: "shadow-colossus",
        name: "Shadow of the Colossus",
        img: "img/shadow-of-the-colossus.jpg",
        alt: "Shadow of the Colossus",
        title: "Shadow of the Colossus",
        genre: "Acción / Aventura",
        platform: "PS2, PS3, PS4",
        rating: "Insuperable",
        review: "Sin duda una obra maestra. Es mi favorito y lo recomiendo en especial si te gusta explorar y andar a caballo. Tiene una historia y ambientación muy única y mística, hasta su propio idioma. Cada coloso se siente como un jefe inolvidable."
    },
    {
        cat: "aventura",
        id: "last-guardian",
        name: "The Last Guardian",
        img: "img/the-last-guardian.png",
        alt: "The Last Guardian",
        title: "The Last Guardian",
        genre: "Acción / Aventura",
        platform: "PS4",
        rating: "Muy Bueno",
        review: "Una aventura emocional donde el vínculo con Trico es el verdadero protagonista. No es perfecto, pero logra momentos muy especiales."
    },
    {
        cat: "aventura",
        id: "fallen-order",
        name: "Jedi Fallen Order",
        img: "img/jedi-fallen-order.jpg",
        alt: "Jedi Fallen Order",
        title: "Star Wars Jedi: Fallen Order",
        genre: "Acción / Aventura",
        platform: "PS4, PS5, Xbox, PC",
        rating: "Muy Bueno",
        review: "Una excelente combinación de exploración, combate y narrativa. Como fan de Star Wars, es uno de los juegos que más disfruté."
    },
    {
        cat: "aventura",
        id: "jedi-survivor",
        name: "Jedi Survivor",
        img: "img/jedi-survivor.png",
        alt: "Jedi Survivor",
        title: "Star Wars Jedi: Survivor",
        genre: "Acción / Aventura",
        platform: "PS5, Xbox Series, PC",
        rating: "Extraordinario",
        review: "Amplía todo lo bueno de Fallen Order con más libertad, mejores combates, con más variedad de armas y escenarios mucho más grandes."
    },
    {
        cat: "aventura",
        id: "sifu",
        name: "Sifu",
        img: "img/sifu.png",
        alt: "Sifu",
        title: "Sifu",
        genre: "Acción / Artes Marciales",
        platform: "PS4, PS5, PC",
        rating: "Excelente",
        review: "Si te gustan las artes marciales te va a fascinar, tiene un sistema de combate brillante, desafiante y muy satisfactorio cuando dominás sus mecánicas. Sin mencionar con la filosofía que hay detrás."
    },
    {
        cat: "aventura",
        id: "spiderman",
        name: "Spider-Man",
        img: "img/spider-man.png",
        alt: "Marvel's Spider-Man",
        title: "Marvel's Spider-Man",
        genre: "Acción / Mundo Abierto",
        platform: "PS4, PS5, PC",
        rating: "Muy Bueno",
        review: "Balancea perfectamente acción, exploración y narrativa. Moverse por Nueva York sigue siendo tan divertido como las propias misiones."
    },
    {
        cat: "aventura",
        id: "uncharted4",
        name: "Uncharted 4",
        img: "img/uncharted4.png",
        alt: "Uncharted 4",
        title: "Uncharted 4",
        genre: "Acción / Aventura",
        platform: "PS4, PS5, PC",
        rating: "Muy Bueno",
        review: "Una despedida excelente para Nathan Drake. Grandes escenarios, personajes memorables y una producción espectacular. Además de los flashbacks clave que exploran el pasado de Nathan Drake y su hermano Sam"
    },
    /*{
        cat: "aventura",
        id: "mafia2",
        name: "Mafia 2",
        img: "img/mafia2.png",
        alt: "Mafia II",
        title: "Mafia II",
        genre: "Acción / Mundo Abierto",
        platform: "PS3, Xbox 360, PC",
        rating: "⭐ 9/10",
        review: "Una historia mafiosa excelente, con personajes muy bien escritos y una ambientación que sigue siendo increíble."
    },*/
    {
        cat: "aventura",
        id: "gta5",
        name: "GTA V",
        img: "img/gtav.jpg",
        alt: "Grand Theft Auto V",
        title: "Grand Theft Auto V",
        genre: "Acción / Mundo Abierto",
        platform: "PS3, PS4, PS5, Xbox, PC",
        rating: "Icónico",
        review: "Un mundo enorme lleno de actividades, personajes memorables y una campaña que sigue siendo muy divertida. Además, su Online es nostalgia pura y una joya para jugar con amigos. Por cierto la imágen es una selfie que saqué con mi PJ, justo antes de ser atropellado."
    },
    /*{
        cat: "aventura",
        id: "bully",
        name: "Bully",
        img: "img/bully.jpg",
        alt: "Bully",
        title: "Bully",
        genre: "Acción / Aventura",
        platform: "PS2, Xbox 360, PC",
        rating: "⭐ 9/10",
        review: "Uno de los juegos más originales de Rockstar. Su ambientación escolar y su humor lo hacen único incluso hoy."
    },*/
    {
        cat: "aventura",
        id: "re4",
        name: "Resident Evil 4",
        img: "img/re4.png",
        alt: "Resident Evil 4",
        title: "Resident Evil 4",
        genre: "Terror / Acción",
        platform: "Multiplataforma",
        rating: "Joya",
        review: "Uno de los videojuegos más importantes de todos los tiempos. Su ritmo, combate y rejugabilidad siguen siendo increíbles. En lo personal, mezcla muy bien la acción con el terror."
    },
    {
        cat: "cooperativo",
        name: "It Takes Two",
        img: "img/it-takes-two.png",
        alt: "It Takes Two",
        title: "It Takes Two",
        genre: "Cooperativo",
        platform: "PS4, PS5, Xbox, PC",
        rating: "Muy Bueno",
        review: "Una de las mejores experiencias cooperativas jamás creada con buena historia y divertido. Recominedo jugarlo en pareja, eso sí.. con paciencia."
    },
    {
        cat: "cooperativo",
        name: "Streets of Rage 4",
        img: "img/streets-of-rage-4.png",
        alt: "Streets of Rage 4",
        title: "Streets of Rage 4",
        genre: "Beat 'em Up",
        platform: "PS4, Xbox, Switch, PC",
        rating: "Bueno",
        review: "Acción cooperativa pura. Fácil de jugar, difícil de dominar y muy divertido con amigos. Además de tener esa escencia de los juegos del SEGA."
    },
    {
        cat: "cooperativo",
        name: "Resident Evil 5",
        img: "img/re5.jpg",
        alt: "Resident Evil 5",
        title: "Resident Evil 5",
        genre: "Acción / Survival Horror",
        platform: "PS3, PS4, Xbox, PC",
        rating: "Muy Bueno",
        review: 'Aunque se aleja del terror, sigue siendo uno de los mejores Resident Evil para jugar en cooperativo. Muy buena la historia además de Wesker y su frase icónica "seven minutes". Agrego que lo "tosco" del juego refiriendome a sus mecánicas, lo hace más desafiante.'
    },
    {
        cat: "cooperativo",
        name: "Resident Evil 6",
        img: "img/re6.jpg",
        alt: "Resident Evil 6",
        title: "Resident Evil 6",
        genre: "Acción / Cooperativo",
        platform: "PS3, PS4, Xbox, PC",
        rating: "Bueno",
        review: "Tiene defectos, pero ofrece una enorme cantidad de contenido y resulta muy entretenido con otra persona. La mejor historia es la de Sherry Brikin y Jake Muller (hijo de Wesker)."
    },
    {
        cat: "cooperativo",
        name: "Trine 2",
        img: "img/trine2.jpeg",
        alt: "Trine 2",
        title: "Trine 2",
        genre: "Plataformas / Cooperativo",
        platform: "PS3, PS4, PC",
        rating: "Magnífico",
        review: "Hermoso visualmente y muy divertido para resolver puzles en equipo."
    },
    {
        cat: "cooperativo",
        name: "LEGO Star Wars",
        img: "img/lego-star-wars.png",
        alt: "LEGO Star Wars",
        title: "LEGO Star Wars",
        genre: "Aventura / Cooperativo",
        platform: "PS2, PS3, PS4, Xbox, PC",
        rating: "Joya",
        review: "Este juego es un ícono de los LEGO la verdad además de ser nostálgico, es gracioso y cuenta con muchísimo contenido. Uno de los mejores juegos cooperativos para jugar en pareja o con amigos."
    },
    {
        cat: "cooperativo",
        name: "LEGO Batman",
        img: "img/lego-batman.png",
        alt: "LEGO Batman",
        title: "LEGO Batman",
        genre: "Aventura / Cooperativo",
        platform: "PS2, PS3, Xbox, PC",
        rating: "Bueno",
        review: "Mantiene todo el encanto clásico de los LEGO y suma una gran ambientación inspirada en Gotham. Yo lo jugaba con mi hermano y también el juego de Indiana Jones entra en estos clásicos de LEGO en PS2."
    },
    {
        cat: "cooperativo",
        id: "lotr",
        name: "The Lord of the Rings: War in the North",
        img: "img/LOTR.jpg",
        alt: "The Lord of the Rings: War in the North",
        title: "The Lord of the Rings: War in the North",
        genre: "Aventura / Cooperativo",
        platform: "PS3, Xbox 360, PC",
        rating: "Magníficamente Magnífico",
        review: "Una aventura cooperativa sólida ambientada en la Tierra Media. El combate es contundente y la posibilidad de jugarlo de a tres personas le suma, además de que podés personalizar a los personajes. De hecho en la imágen estoy jugando con mi pareja."
    },
    {
        cat: "cooperativo",
        id: "MK-SM",
        name: "Mortal Kombat Shaolin Monks",
        img: "img/MK-SM.jpg",
        alt: "Mortal Kombat Shaolin Monks",
        title: "Mortal Kombat Shaolin Monks",
        genre: "Aventura / Cooperativo",
        platform: "PS3, Xbox 360, PC",
        rating: "Mortal",
        review: "Liu Kang y Kung Lao en una frenética cruzada por los distintos reinos para detener los planes del hechicero Shang Tsung. Destaca por su combate fluido, sus fatalities clásicos y su genial modo cooperativo. Es muy bueno, un MK distinto que vale la pena probar, definitivamente es otro Klásico."
    },
    {
        cat: "lucha",
        id: "mk11",
        name: "Mortal Kombat 11",
        img: "img/mk11.png",
        alt: "Mortal Kombat 11",
        title: "Mortal Kombat 11",
        genre: "Lucha",
        platform: "PS4, PS5, Xbox, Switch, PC",
        rating: "Mortal",
        review: "Mi Mortal Kombat favorito. Muchísimo contenido para un jugador, gran plantel, una jugabilidad muy sólida y buen Online. Me gusta también que todos tengan su arma"
    },
    {
        cat: "lucha",
        name: "Mortal Kombat X",
        img: "img/mkx.png",
        alt: "Mortal Kombat X",
        title: "Mortal Kombat X",
        genre: "Lucha",
        platform: "PS4, Xbox One, PC",
        rating: "Bueno",
        review: "Este MK tiene un tono un poco más oscuro, la historia de los Kombat Kids no es la mejor, pero es divertido tanto por su versus local y en especial con sú desafío de fuerza."
    },
    {
        cat: "lucha",
        name: "Mortal Kombat 9",
        img: "img/mk9.png",
        alt: "Mortal Kombat 9",
        title: "Mortal Kombat 9",
        genre: "Lucha",
        platform: "PS3, Xbox 360, PC",
        rating: "Klásico",
        review: "El juego que revitalizó la saga. Excelente historia y combates muy entretenidos. Otro detalle muy bueno es que las torres de personaje se pueden jugar en cooperativo, lo cual no veíamos desde el MK Shaolin Monks."
    },
    {
        cat: "lucha",
        name: "Dragon Ball FighterZ",
        img: "img/fighterz.png",
        alt: "Dragon Ball FighterZ",
        title: "Dragon Ball FighterZ",
        genre: "Lucha",
        platform: "PS4, PS5, Xbox, Switch, PC",
        rating: "Bueno",
        review: "Visualmente parece el anime en movimiento. Uno de los mejores juegos de Dragon Ball."
    },
    {
        cat: "lucha",
        name: "Dragon Ball BT3",
        img: "img/bt3.png",
        alt: "Dragon Ball Budokai Tenkaichi 3",
        title: "Dragon Ball Budokai Tenkaichi 3",
        genre: "Lucha Arena",
        platform: "PS2, Wii",
        rating: "Icónico",
        review: "Para muchos, el mejor juego de Dragon Ball jamás realizado. Plantel enorme y combates épicos."
    },
    {
        cat: "lucha",
        name: "Tekken Tag Tournament 2",
        img: "img/tekken.png",
        alt: "Tekken Tag Tournament 2",
        title: "Tekken Tag Tournament 2",
        genre: "Lucha",
        platform: "PS3, Xbox 360, Wii U",
        rating: "Muy Bueno",
        review: "Gran variedad de personajes y un sistema de relevos que hace cada combate más dinámico. Además de que tiene un modo cooperativo."
    },
    {
        cat: "shooters",
        id: "battlefront2",
        name: "Battlefront 2",
        img: "img/battlefront2.png",
        alt: "Star Wars Battlefront II",
        title: "Star Wars Battlefront II",
        genre: "Shooter",
        platform: "PS4, Xbox One, PC",
        rating: "Infravalorado",
        review: "Juego cual sigo por varios años desde que lo empecé. Tiene héroes icónicos, mapas espectaculares y partidas que siguen siendo muy divertidas. Lo único malo es que ya no hay tanta gente jugandolo."
    },
    {
        cat: "shooters",
        name: "Rogue Company",
        img: "img/rogue-company.png",
        alt: "Rogue Company",
        title: "Rogue Company",
        genre: "Shooter Táctico",
        platform: "PS4, Xbox, Switch, PC",
        rating: "Bueno",
        review: "Muy accesible y entretenido. Ideal para jugar con amigos sin necesidad de aprender mecánicas demasiado complejas. No es conocido pero está bueno, pero con amigos obvio."
    },
    {
        cat: "shooters",
        name: "Fortnite",
        img: "img/fortnite.png",
        alt: "Fortnite",
        title: "Fortnite",
        genre: "Battle Royale",
        platform: "Multiplataforma",
        rating: "Bueno",
        review: "Se mantiene vigente gracias a sus eventos, colaboraciones y la enorme cantidad de contenido disponible. Solo que ya no es el mismo Fortnite que fue hace varios años por sus nuevas mecánicas entre otras cosas."
    },
    {
        cat: "carreras",
        name: "FlatOut 2",
        img: "img/flatOut2.png",
        alt: "FlatOut 2",
        title: "FlatOut 2",
        genre: "Carreras Arcade",
        platform: "PS2, Xbox, PC",
        rating: "Muy Bueno",
        review: "Caos, destrucción y diversión. Un clásico que todavía resulta extremadamente entretenido."
    },
    {
        cat: "carreras",
        name: "Gran Turismo 6",
        img: "img/gt6.png",
        alt: "Gran Turismo 6",
        title: "Gran Turismo 6",
        genre: "Simulación",
        platform: "PS3",
        rating: "Excelente",
        review: "Uno de los simuladores más completos de PlayStation. Ideal para quienes disfrutan los autos y la conducción realista."
    }
];