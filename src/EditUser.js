import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

export default function EditUser(props) {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
 

  const userContext = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    console.log(props);
    let userData = userContext.userList[props.match.params.id - 1];

    SetUsername(userData.username);
    SetPassword(userData.password);
    
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = { username, password, };
    userContext.userList[props.match.params.id - 1] = userData;
    userContext.setUserList([...userContext.userList]);
    history.push("/user");
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 my-4">
        <h1 class="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          
            <div className="col-lg-6">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => {
                  SetUsername(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
              />
            </div>
            
            <div className="col-lg-12 my-2">
              <input
                type="submit"
                value="Update"
                className="btn-primary"
              />
            </div>
          
        </form>
      </div>
    </div>
  );
}
