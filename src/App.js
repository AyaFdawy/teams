import React from 'react';
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';
import Teams from './components/teams';
import TeamDetails from './components/team-details';
import Add from './components/add_team';
import Error from './components/error';
import './App.css';

const App=()=>{
  return(
    <Router>
     <h1 className="text-center bg-light"  > 
                 <NavLink to='/' > Teams </NavLink>
            </h1>
      <div className="container">
        <div className="row">

        <Switch>
        <Route path="/teams/teams/form" component={Add} />
          <Route path="/teams/:id" component={TeamDetails} />
          <Route path="/teams" component={Teams} />
          <Route exact path="/" component={Teams} />
          <Route path="*" component={Error} />
        </Switch>
        </div>
      </div>
    </Router>
  )
}
export default App;