var React = require('react/addons'),
    RouterMixin = require('react-mini-router').RouterMixin,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,Configuration = require('./configuration.js');
    require('../styles/main.css');

var Home = require('./components/home.jsx');
// DO NOT REMOVE new route require

module.exports = React.createClass({
    mixins: [RouterMixin, ],
    routes: {
        '/': 'home',


        // DO NOT REMOVE new route route
    },
    render: function () {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionLeave={false}>
                { this.renderCurrentRoute() }
            </ReactCSSTransitionGroup>
        );
    },
    home: function () {
        return <Home key={ this.state.path }></Home>;
    },


    // DO NOT REMOVE new route callback
    notFound: function (path) {
        return <div key={ this.state.path } className="not-found">Page Not Found: {path}</div>;
    }
});
