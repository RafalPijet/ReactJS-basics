var movies = [
    {
        id: 1,
        title: "Harry Potter",
        desc: "film o czarodzieju",
        poster: "../images/harry_poter.jpg"
    },
    {
        id: 2,
        title: "Król Lew",
        desc: "film o królu sawanny",
        poster: "../images/lion_king.jpg"
    },
    {
        id: 3,
        title: "Obcy",
        desc: "film o zwierzaczku domowym",
        poster: "../images/alien.jpg"
    },
    {
        id: 4,
        title: "Obcy vs Predator",
        desc: "film o skłóconych kumplach z innej galaktyki",
        poster: "../images/alienvspredator.jpg"
    },
    {
        id: 5,
        title: "Predator",
        desc: "film o austriaku, który załatwił kosmitę",
        poster: "../images/predator.jpg"
    },
    {
        id: 6,
        title: "Gatunek",
        desc: "film o tym, że nie z każdą kobietą warto uprawiać sex",
        poster: "../images/gatunek.jpg"
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement("li", {key: movie.id,
                                      style: {display: "inline-block",
                                      padding: "0 10px 20px"}},
        React.createElement("h2", {}, movie.title),
        React.createElement("p", {}, movie.desc),
        React.createElement("img", {src: movie.poster,
                                    style: {width: "236px",
                                            height: "345px"}})
    );
});

var element = React.createElement("div", {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement("ul", {}, moviesElements)
);

ReactDOM.render(element, document.getElementById("app"));