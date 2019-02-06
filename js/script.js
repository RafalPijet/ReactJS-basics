// var element = React.createElement("div", {}, "Hello world!");
// ReactDOM.render(element, document.getElementById("app"));

/*var listElement =
    React.createElement("div", {},
        React.createElement("h1", {}, "Lista filmów"),
        React.createElement("ul", {},
            React.createElement("li", {},
                React.createElement("h2", {}, "Harry Potter"),
                React.createElement("p", {}, "film o czrodzieju")
            ),
            React.createElement("li", {},
                React.createElement("h2", {}, "Król lew"),
                React.createElement("p", {}, "film o królu savanny")
            )
        )
    );

ReactDOM.render(listElement, document.getElementById("app"));
*/

var movies = [
    {
        id: 1,
        title: "Harry Potter",
        desc: "film o czarodzieju"
    },
    {
        id: 2,
        title: "Król Lew",
        desc: "film o królu sawanny"
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement("li", {key: movie.id},
        React.createElement("h2", {}, movie.title),
        React.createElement("p", {}, movie.desc))
});

var element = React.createElement("div", {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement("ul", {}, moviesElements)
);

ReactDOM.render(element, document.getElementById("app"));