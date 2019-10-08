var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var ScreenNameContainer = require('../containers/ScreenNameContainer');
var ShowUserDetailsContainer = require('../containers/ShowUserDetailsContainer');
var ResultsContainer = require('../containers/ResultsContainer');



var routes = (
    <Router history={browserHistory}>
     <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='twitterHandleOne' header='Twitter User One' component={ScreenNameContainer} />
        <Route path='twitterHandleTwo/:twitterHandleOne' header='Twitter User Two' component={ScreenNameContainer} />
        <Route path='showUserDetails' component={ShowUserDetailsContainer} />
        <Route path='results' component={ResultsContainer} />
     </Route>
    </Router>
);
module.exports = routes;
