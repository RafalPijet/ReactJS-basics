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

const Title = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement("h2", {}, this.props.title)
        )
    }
});

const Description = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement("p", {}, this.props.description)
        )
    }
});

const Poster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement("img", {src: this.props.poster, style: {width: "236px",
                    height: "345px"}})
        )
    }
});

const Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement("li", {style: {display: "inline-block",
                        padding: "0 10px 20px"}},
                React.createElement(Title, {title: this.props.movie.title}),
                React.createElement(Description, {description: this.props.movie.desc}),
                React.createElement(Poster, {poster: this.props.movie.poster})
            )
        )
    }
});

const MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function () {
        let movieList = this.props.movies.map(function (movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie})
        });
        return React.createElement("ul", {}, movieList)
    }
});

const element = React.createElement("div", {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement(MovieList, {movies: movies}));


ReactDOM.render(element, document.getElementById("app"));

