import React from 'react';
import ReactDOM from 'react-dom';
import{
     HashRouter as Router,
     Switch,
     Route,
     Link
} from "react-router-dom";
import './styles/main.scss';
import Home from './Home.jsx';

const App = () => {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));

