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
        movieItem: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement("h2", {}, this.props.movieItem.title)
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        movieItem: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement("p", {}, this.props.movieItem.desc)
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        movieItem: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement("img", {src: this.props.movieItem.poster,
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
                React.createElement(MovieTitle, {movieItem: this.props.movieItem}),
                React.createElement(MovieDescription, {movieItem: this.props.movieItem}),
                React.createElement(MoviePoster, {movieItem: this.props.movieItem})
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