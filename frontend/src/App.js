import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from 'axios'
import AuthService from "./services/auth.service";
import Login from "./pages/login";
import Register from "./components/signup";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Home from './pages/home'
import PlayVideo from './components/playvideo'
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      credit: '',
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    const credit_id = localStorage.getItem("credit_id")
    axios.get("http://localhost:8080/credit/"+credit_id)
    .then(response => {
      this.setState({
        credit: response.data.credit
      });
     

    });
  }
  logOut() {
    AuthService.logout();
  }


  
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            LOGO
          </Link>
        

          {currentUser ? (
            <div className="navbar-nav ml-auto">
               <li className="nav-item">
                <Link to={"/"} className="nav-link">
{this.state.credit} SB
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
             
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                <button type="button" className="btn btn-primary">Log In</button>
                </Link>
              </li>

             
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/playvideo" component={PlayVideo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
