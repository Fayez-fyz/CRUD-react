import "./App.css";
import DashBoard from "./DashBoard";


import User from "./User";
import Product from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import CreateProfile from "./CreateProfile";
import EditProfile from "./EditProfile";
import UserContext, { UserProvider } from "./UserContext";
import ProfileContext, { ProfileProvider } from "./ProfileContext";
import TopBar from "./TopBar";

function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopBar/>
              <div class="container-fluid">
                <Switch>
                  <UserProvider>
                    <Route path="/" component={DashBoard} exact={true} />
                    <Route path="/user" component={User} exact={true} />
                    <Route
                      path="/create-user"
                      component={CreateUser}
                      exact={true}
                    />
                    <Route
                      path="/user/edit/:id"
                      component={EditUser}
                      exact={true}
                    />

                    <ProfileProvider>
                      <Route path="/profile" component={Product} exact={true} />
                      <Route
                        path="/create-profile"
                        component={CreateProfile}
                        exact={true}
                      />
                      <Route
                        path="/profile/edit/:id"
                        component={EditProfile}
                        exact={true}
                      />
                    </ProfileProvider>
                  </UserProvider>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
