import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

export default function User() {
  const userContext = useContext(UserContext);

  let handleDelete = (index) => {
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      userContext.userList.splice(index - 1, 1);
      userContext.setUserList([...userContext.userList]);
    }
  };

  return (
    <>
      <h1 class="h3 mb-2 text-gray-800 my-4">Users</h1>
      
      <Link
        to="/create-user"
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm my-2"
      >
        <i class="fas fa-download fa-sm text-primary-50"></i> Create User
      </Link>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Table</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Password</th>
                 
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Password</th>
                   <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {userContext.userList.map((obj, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{obj.username}</td>
                      <td>{obj.password}</td>
                     

                      <td>
                        <Link
                          to={`/user/edit/${index + 1}`}
                          className=" btn-sm btn-primary mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            handleDelete(index + 1);
                          }}
                          className=" btn-sm btn-danger mx-1"
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
