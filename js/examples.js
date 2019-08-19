/*
var element = React.createElement("div", {}, "Hello world!");
ReactDOM.render(element, document.getElementById("app"));
//it was first example

var listElement =
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
//it was second example
*/
/*
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
//it was third example
*/
/*
var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement("div", {},
                React.createElement("h2", {}, this.props.image.name),
                React.createElement("img", {src: this.props.image.src})
            )
        )
    }
});

var image = {
    name: "Kotek",
    src: "http://imgur.com/n8OYCzR.png"
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById("app"));
//it was fourth example
*/

//------------- Task 18.4:

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

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement("h2", {}, this.props.title)
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement("p", {}, this.props.description)
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement("img", {src: this.props.poster,
            style: {width: "236px",
                height: "345px"}})
    }
});

var Movie = React.createClass({
    propTypes: {
        movieItem: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement("li", {style: {display: "inline-block",
                        padding: "0 10px 20px"}},
                React.createElement(MovieTitle, {title: this.props.movieItem.title}),
                React.createElement(MovieDescription, {description: this.props.movieItem.desc}),
                React.createElement(MoviePoster, {poster: this.props.movieItem.poster})
            )
        )
    }
});

var MoviesList = React.createClass({
    propTypes: {
        moviesList: React.PropTypes.array.isRequired
    },
    render: function () {
        var list = this.props.moviesList.map(function (movie) {
            return React.createElement(Movie, {key: movie.id, movieItem: movie})
        });
        return (
            React.createElement("ul", {}, list)
        )
    }
});

var element = React.createElement("div", {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement(MoviesList, {moviesList: movies}));

ReactDOM.render(element, document.getElementById("app"));