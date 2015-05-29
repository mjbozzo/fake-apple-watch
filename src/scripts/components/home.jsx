var React = require('react/addons'),
    ReactClock = require('rs-react-clock');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <ReactClock />
            </div>
        );
    }
});

