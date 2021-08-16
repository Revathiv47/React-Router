import logo from './logo.svg';
import './App.css';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Users from './Users';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import { UserProvider } from "./userContext";

function App() {
  return (
    <UserProvider>
      <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Switch>
              <Route path="/" component={Dashboard} exact={true} />
              <Route path="/user" component={Users} exact={true} />
              <Route path="/user-create" component={CreateUser} exact={true} />
              <Route path="/user-edit/:id" component={EditUser} exact={true} />
              
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;